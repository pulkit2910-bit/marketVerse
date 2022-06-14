import React from "react";
import './css/HomePage.css'

import millify from "millify";
import { Grid, Box, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";

// Using api
import { useGetCryptosQuery } from "../services/cryptoAPI";

//components
import { Cryptocurrencies, News } from '../components'

const HomePage = () => {
    const { data, isFetching } = useGetCryptosQuery(50);

    if (isFetching) return 'Loading....';
    
    const stats = data?.data?.stats;
    console.log(data);

    return (
        <div>
            <Box sx={{flexGrow : 1}}>
                <div className="global-stats">

                    <Typography variant="h4" className="home-title">Global Crypto Stats</Typography>
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

                    <Typography variant="h4" className="home-title">Top 10 CryptoCurrencies</Typography>
                    <Typography variant="h6" className="show-more"><Link to="/cryptocurrencies">Show More</Link></Typography>

                </div>
                <Cryptocurrencies simplified />
                <div className="top-crypto-coins">

                    <Typography variant="h4" className="home-title">Latest Market News</Typography>
                    <Typography variant="h6" className="show-more"><Link to="/news">Show More</Link></Typography>

                </div>
                <News simplified />

            </Box>
        </div>
    )
}

export default HomePage