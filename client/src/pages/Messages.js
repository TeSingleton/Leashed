import React from 'react';

import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_MESSAGE } from '../utils/queries';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const SingleMessage = () => {
  const { messageId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_MESSAGE, {
   
    
    variables: { messageId: messageId },
  });

  const message = data?.message || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (

<Container sx={{padding: 10 }} id="big">
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        {message.messageAuthor}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {message.createdAt}
        </Typography>
        <Typography variant="body2">
        {message.messageText}
        </Typography>
      </CardContent>
    </Card>
      <div className="my-5">
        <CommentList comments={message.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm messageId={message._id} />
      </div>
</Container>
  );
};

export default SingleMessage;