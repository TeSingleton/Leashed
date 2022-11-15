import { Box, Button, Container } from '@mui/material';
import React from 'react';
// Import `<Link>` component from React Router for internal hyperlinks

const MessageList = ({ messages, title }) => {
  if (!messages.length) {
    return <h3>No Messages Yet</h3>;
  }

  return (
    <Container id='message'>
      <h3>{title}</h3>
      {messages &&
        messages.map((message) => (
          <Box key={message._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {message.messageAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                Sent this Message on {message.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{message.messageText}</p>
            </div>
            {/* Create a link to this thought's page to view its comments using `<Link>` component */}
            <Button href={`/messages/${message._id}`} variant="contained">
	            Respond
            </Button>
            
          </Box>
        ))}
    </Container>

  );
};

export default MessageList;