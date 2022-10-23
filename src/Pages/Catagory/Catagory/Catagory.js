import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../../NewsSummary/NewsSummary';

const Catagory = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>This is catagory: {allNews.length}</h2>
            <div>
                {
                    allNews.map(news => <NewsSummary
                    key={news._id}
                    news={news}
                    ></NewsSummary>)
                }
            </div>
        </div>
    );
};

export default Catagory;