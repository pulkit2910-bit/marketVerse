import React, { useEffect, useState } from "react";

import millify from "millify";
import { Avatar, Grid, Box, Typography, Card, CardActionArea, CardContent, CardMedia, Divider, TextField } from '@material-ui/core';

import { useGetCryptosQuery } from "../services/cryptoAPI";

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 50;
    const { data, isFetching } = useGetCryptosQuery(count);
    const [coins, setCoins] = useState(data?.data?.coins);
    const [searchTerm, setSearch] = useState("");

    useEffect(() => {
        const filteredCoinsData = data?.data?.coins?.filter(coin => coin?.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCoins(filteredCoinsData);
    }, [data, searchTerm]);

    if (isFetching) return "Loading....";

    return (
        <div>
            {!simplified ?
                <div className="search-crypto">
                    <TextField id="filled-basic" label="Search Cryptocurrency" variant="filled" onChange={(e) => setSearch(e.target.value)} />
                </div>
                : <></>
            }
            <Box sx={{ flexGrow: 1 }}>

                <Grid container className="coins-container" spacing={4}>
                    {
                        coins?.map((coin) =>
                            <Grid item xs={12} md={3} sm={6} key={coin?.rank}>
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