import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../components/Link';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';

export default function About() {
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
          중고 골프 클럽 경매
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
          중고거래<br/>
          금액에 대한 적당한 금액 요청<br/>
          세티즌 처럼 골프클럽 시세 검색 가능하도록 인기있는 골프클럽부터 조금씩 늘리는 방향으로
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
