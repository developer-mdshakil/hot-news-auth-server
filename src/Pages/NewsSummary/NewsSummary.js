import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaEyeSlash, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummary = ({news}) => {
    const {_id ,author, title,image_url, details, rating, total_view} = news;
    return (
        <div>
        <Card className="mb-4">
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
            <div>
                <Image roundedCircle src={author?.img} style={{height: "60px"}}></Image>
            </div>
            <div className='ms-2'>
                <h5>{author?.name}</h5>
                <p>{author?.published_date}</p>
            </div>
            </div>
            <div>
                <FaBookmark className='me-2'/>
                <FaShareAlt />
            </div>
        </Card.Header>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={image_url} />
        <Card.Text>
         {
         details.length > 250 ?
         <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read more</Link></p>
         :
         <p>{details}</p>
         }
        </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
            <span>
                <h5 className='d-flex align-items-center'><span className='rating-icons'>
                <FaStar></FaStar></span><small className='me-2'>{rating.number}</small></h5>
            </span>
            <div>
                <h5><FaEye/> {total_view}</h5>
            </div>
        </Card.Footer>
        </Card>
        </div>
    );
};

export default NewsSummary;