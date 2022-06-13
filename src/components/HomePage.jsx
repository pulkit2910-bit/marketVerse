import React from "react";
import './css/HomePage.css'

import millify from "millify";
import { Avatar, Grid, Box, Typography, Card, CardActionArea , CardContent, CardMedia, Divider } from '@material-ui/core';

import { useGetCryptosQuery } from "../services/cryptoAPI";

const HomePage = () => {
    const { data, isFetching } = useGetCryptosQuery();

    if (isFetching) return 'Loading....';
    
    const stats = data?.data?.stats;
    const coins = data?.data?.coins;
    console.log(data);

    return (
        <div>
            <Box sx={{flexGrow : 1}}>
                <div className="global-stats">

                    <Typography variant="h4" align="center" className="title">Global Crypto Stats</Typography>
                    <Grid container>
                        <Grid item xs={12} md={4} sm={6} className="stats">
                            <Typography variant="h5" className="stats-title" align="center">Total Coins</Typography>
                            <Typography variant="h6" className="stats-value" align="center">{millify(stats?.totalCoins)}</Typography> 
                        </Grid>
                        <Grid item xs={12} md={4} sm={6} className="stats">
                            <Typography variant="h5" className="stats-title" align="center">Total Exchanges</Typography>
                            <Typography variant="h6" className="stats-value" align="center">{millify(stats?.totalExchanges)}</Typography> 
                        </Grid>
                        <Grid item xs={12} md={4} sm={6} className="stats">
                            <Typography variant="h5" className="stats-title" align="center">24H Volume</Typography>
                            <Typography variant="h6" className="stats-value" align="center">{millify(stats?.total24hVolume)}</Typography> 
                        </Grid>
                        <Grid item xs={12} md={4} sm={6} className="stats">
                            <Typography variant="h5" className="stats-title" align="center">Total Market Cap</Typography>
                            <Typography variant="h6" className="stats-value" align="center">{millify(stats?.totalMarketCap)}</Typography> 
                        </Grid>
                        <Grid item xs={12} md={4} sm={6} className="stats">
                            <Typography variant="h5" className="stats-title" align="center">Total Markets</Typography>
                            <Typography variant="h6" className="stats-value" align="center">{millify(stats?.totalMarkets)}</Typography> 
                        </Grid>
                    </Grid>

                </div>

                <div className="top-crypto-coins">

                    <Typography variant="h4" align="center" className="title">Top 10 CryptoCurrencies</Typography>
                    <Grid container className="coins-container" spacing={4}>
                        {
                            coins?.map((coin) => 
                                <Grid item xs={12} md={4} sm={6} key={coin?.rank}>
                                    <CardActionArea>
                                        <Card className="coins-card">
                                                <CardMedia>
                                                    <div className="card-top">
                                                        <Typography variant="h6" component="span">{coin?.rank}. {coin?.symbol}</Typography>
                                                        <Avatar src={coin?.iconUrl}/>
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

                </div>

            </Box>
            

        </div>
    )
}

export default HomePage