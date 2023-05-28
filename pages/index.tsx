import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          골프 클럽 거래
        </Typography>
        <Link href="/products" color="secondary">
          Products
        </Link>
        <Link href="/table" color="secondary">
          Table
        </Link>   
        <Link href="/about" color="secondary">
          About
        </Link>        
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
