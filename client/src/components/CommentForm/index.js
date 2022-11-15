import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { SEND_COMMENT } from '../../utils/mutations';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const CommentForm = ({ messageId }) => {
  const [formState, setFormState] = useState({
    commentText: '',
    commentAuthor: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [sendComment, { error }] = useMutation(SEND_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await sendComment({
        variables: { messageId, ...formState },
      });

      setFormState({
        commentText: '',
        commentAuthor: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'commentText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (

    <Container component="main" maxWidth="xs" id="commentForm">

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
            name="commentAuthor"
            id=""
            label="Username"
            autoFocus
            value={formState.commentAuthor}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            name="commentText"
            id="outlined-multiline-flexible"
            fullWidth
            label="Message"
            multiline
            rows={4}
            value={formState.commentText}
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
        {error && <span className="ml-2">Something went wrong...</span>}
      </Box>
    </Container>

  );
};

export default CommentForm;
