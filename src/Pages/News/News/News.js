import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <h2>Here news: {news.length}</h2>
        </div>
    );
};

export default News;