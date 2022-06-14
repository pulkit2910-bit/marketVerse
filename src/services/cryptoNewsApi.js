import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const apiHeaders =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4d14269acemsh25772768c61ae02p17dd71jsn433a92d0f8c4',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (endpoint) => ({ url: endpoint, headers: apiHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (count) => createRequest(`/news/search?q=crypto%20cryptocurreny%20investment&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;