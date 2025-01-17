import { Box, Typography } from '@mui/material';
import React from 'react';

const BlogDetail = async ({ params }) => {
  //params refers to the parameters passed to the BlogDetail component, typically from the URL
  const id = await params.id;
  return (
    <Box>
      <Typography variant="h2">Blog Details of id {params.id}.</Typography>
    </Box>
  );
};

export default BlogDetail;
