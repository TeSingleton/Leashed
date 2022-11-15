import { Box } from '@mui/system';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const CommentList = ({ comments = [] }) => {
  console.log(comments);
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }
  console.log(comments)
  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Comments
      </h3>
      {comments &&
        comments.map((comment) => (
          <Card sx={{ minWidth: 275 }}key={comment._id} >
            <CardContent>
              <Typography variant="h5" component="div">
                {comment.commentAuthor}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {comment.createdAt}
              </Typography>
              <Typography variant="body2">
                {comment.commentText}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </>
  );
};

export default CommentList;
