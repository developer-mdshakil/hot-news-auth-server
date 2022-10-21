import React from 'react';
import Card from 'react-bootstrap/Card';

const NewsSummary = ({news}) => {
    const {author, title, details} = news;
    return (
        <div>
        <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        </div>
    );
};

export default NewsSummary;