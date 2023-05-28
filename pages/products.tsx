import { More } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import image from "next/image";
import { title } from "process";
import golfClubImg1 from '../assets/img/1.jpg'
import golfClubImg2 from '../assets/img/2.jpg'
import golfClubImg3 from '../assets/img/3.jpg'

interface CardData {
    title: string
    descrption: string
    image: string
}

const data = [
    {
      title: '브리지스톤 V300-8 신형  아이언/6아이언세트 정품. 5~P/6아이언세트',
      description: 'This is a description of card 1.',
      image: golfClubImg1.src,
    },
    {
      title: 'V300 8세대 스틸파이버 8아이언 + 48도 웨지 덤',
      description: 'This is a description of card 2.',
      image: golfClubImg2.src,
    },
    {
      title: '★브리지스톤★ V300 8 아이언 판매합니다.',
      description: 'This is a description of card 3.',
      image: golfClubImg3.src,
    },
    {
      title: '브리지스톤 V300-8 신형  아이언/6아이언세트 정품. 5~P/6아이언세트',
      description: 'This is a description of card 1.',
      image: golfClubImg1.src,
    },
    {
      title: 'V300 8세대 스틸파이버 8아이언 + 48도 웨지 덤',
      description: 'This is a description of card 2.',
      image: golfClubImg2.src,
    },
    {
      title: '★브리지스톤★ V300 8 아이언 판매합니다.',
      description: 'This is a description of card 3.',
      image: golfClubImg3.src,
    },
  ]

export default function () {
  const cards = data.map((card, i) => (
    <Grid item md={3}>
      <Card key={card.title}>
        <CardMedia
          component="img"
          sx={{height: 200}}
          image={card.image}
          title={card.title}
        />
        <CardContent>
          <h2>{card.title}</h2>
          <p>{`Card ${i}`}</p>
        </CardContent>
        <CardActions>
          <Button variant="outlined">Learn More</Button>
        </CardActions>
      </Card> 
    </Grid>
  ));

  return (
    <div>
      <h1>상품 목록</h1>
      <Grid container spacing={12}>
        {cards}
      </Grid>
    </div>
  );
}