import React from "react";

import millify from "millify";
import { Avatar, Grid, Box, Typography, Card, CardActionArea, CardContent, CardMedia, Divider } from '@material-ui/core';

import { useGetCryptosQuery } from "../services/cryptoAPI";

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 50;
    const { data, isFetching } = useGetCryptosQuery(count);
    
    if (isFetching) return "Loading....";
    const coins = data?.data?.coins;

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>

                <Grid container className="coins-container" spacing={4}>
                    {
                        coins?.map((coin) =>
                            <Grid item xs={12} md={4} sm={6} key={coin?.rank}>
                                <CardActionArea>
                                    <Card className="coins-card cards">
                                        <CardMedia>
                                            <div className="card-top">
                                                <Typography variant="h6" component="span">{coin?.rank}. {coin?.symbol}</Typography>
                                                <Avatar src={coin?.iconUrl} />
                                            </div>
                                        </CardMedia>

                                        <Divider />

                                        <CardContent className="card-content">
                                            <Typography variant="subtitle1">Name: {coin?.name}</Typography>
                                            <Typography variant="subtitle1">Price: ${millify(coin?.price)}</Typography>
                                            <Typography variant="subtitle1">Market Cap: ${millify(coin?.marketCap)}</Typography>
                                            <Typography variant="subtitle1">Daily Change: {coin?.change}%</Typography>
                                        </CardContent>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default Cryptocurrencies