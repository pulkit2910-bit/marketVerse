import React, { useState, useEffect } from "react";
import './css/HomePage.css'

import moment from "moment";
import { Avatar, Grid, Box, Typography, Card, CardActionArea, CardContent, TextField, Divider } from '@material-ui/core';

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ simplified }) => {
    const count = simplified ? 10 : 60;
    const { data, isFetching } = useGetCryptoNewsQuery(count);
    // const [ searchTerm, setNewsSearchTerm ] = useState("");

    if (isFetching) return "Loading...";

    const News = data?.value;
    console.log(News);

    return (
        <div>
            {/* {simplified ?
                <></>
                :
                <div className="search-news">
                    <TextField id="filled-basic" label="Search News" variant="filled" onChange={(e) => setNewsSearchTerm(e.target.value)}/>
                </div>
            } */}
            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={4}>
                    {
                        News?.map((news, i) =>
                            <Grid item xs={12} md={4} sm={6} key={i}>
                                <CardActionArea>
                                    <a href={news?.url} target="blank" style={{ textDecoration: "none" }}>
                                        <Card className="cards">
                                            <CardContent className="card-content">
                                                <div className="news-image-container">
                                                    <img src={news?.image?.thumbnail?.contentUrl} alt="news" />
                                                    <Typography gutterBottom style={{ color: "black" }} variant="h5" component="div">
                                                        {news?.name}
                                                    </Typography>
                                                </div>
                                                <Divider />
                                                <h3 style={{marginTop: '10px'}}>
                                                    {
                                                        news?.description > 10 ?
                                                            `${news?.description}...`
                                                            : news?.description
                                                    }
                                                </h3>
                                            </CardContent>
                                            <div className="provider-container">
                                                <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl} />
                                                <h4>{moment(news?.datePublished).startOf('ss').fromNow()}</h4>
                                            </div>
                                        </Card>
                                    </a>
                                </CardActionArea>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default News