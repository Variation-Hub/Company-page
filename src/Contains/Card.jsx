import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import Style from './style.module.css';

export default function CardComponent({ item }) {

    const { img = "", alt = "", title = "", content = "" } = item;

    return (
        <Card className={Style.card_width}elevation={5}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    alt={alt}
                />
                <CardContent className={Style.card_content}>
                    <artical className={`${Style.title}`}>
                        {title}
                    </artical>
                    <artical className={Style.content}>
                        {content}
                    </artical>
                </CardContent>
                <CardActions className={Style.actions}>
                    <a href="https://api.whatsapp.com/send?phone=9773203735" target='_blank'>Send Requirement</a>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}