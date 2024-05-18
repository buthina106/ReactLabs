import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Proudct.css"
export function ProductItem(props) {
    const { image, name, description, price } = props;

    return (
        <div className="col-sm-4 col-md-3 mb-3">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                    <Button variant="outline-success">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
