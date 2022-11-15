import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { SEND_MESSAGE } from '../../utils/mutations';
import { QUERY_MESSAGES } from '../../utils/queries';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const MessageForm = () => {
    const [formState, setFormState] = useState({
        messageText: '',
        messageAuthor: '',
    });
    const [characterCount, setCharacterCount] = useState(0);

    const [sendMessage, { error }] = useMutation(SEND_MESSAGE, {
        update(cache, { data: { sendMssage } }) {
            try {
                const { messages } = cache.readQuery({ query: QUERY_MESSAGES });

                cache.writeQuery({
                    query: QUERY_MESSAGES,
                    data: { messages: [sendMessage, ...messages] },
                });
            } catch (e) {
                console.error(e);
            }
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await sendMessage({
                variables: { ...formState },
            });

            setFormState({
                messageText: '',
                messageAuthor: '',
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'messageText' && value.length <= 280) {
            setFormState({ ...formState, [name]: value });
            setCharacterCount(value.length);
        } else if (name !== 'messageText') {
            setFormState({ ...formState, [name]: value });
        }
    };

    return (
        <div>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        What do you want to say?
                    </Typography>
                    <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="messageAuthor"
                            id=""
                            label="Username"
                            autoFocus
                            value={formState.messageAuthor}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            name="messageText"
                            id="outlined-multiline-flexible"
                            fullWidth
                            label="Message"
                            multiline
                            rows={4}
                            value={formState.messageText}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Send
                        </Button>

                    </Box>
                </Box>
            </Container>


            {error && (
                <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                </div>
            )}
        </div>
    );
};

export default MessageForm;