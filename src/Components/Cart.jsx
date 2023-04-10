import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { AiFillStar } from 'react-icons/ai';


function Cart(props) {
   console.log(props.api)
   return (
      <div className='pt-5 bg-secondary position-relative'>
         <div className='main-box'>
            {props.api.map((v, i) => {
               return <>
                  <Card className='my-5 box p-0'>
                     <div className="image-box">
                        <Card.Img className='img' variant="top" src={v.thumbnail} />
                     </div>
                     <Card.Body>
                        <Card.Title className='title'>{v.title}</Card.Title>
                        <Card.Text className='text-secondary fw-semibold'>
                           {v.description}
                        </Card.Text>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                        <ListGroup.Item className='fw-bold text-dark'>{v.price}$  <span className='d-inline-block ps-2 text-danger fw-bold'>{v.discountPercentage}% off`</span></ListGroup.Item>
                        <ListGroup.Item className='fw-bold text-dark'>{v.rating}<AiFillStar className='pb-1 fs-5' /></ListGroup.Item>
                     </ListGroup>
                     <Card.Body>
                        <Card.Text className='d-inline-block pe-4 fs-5 fw-semibold'>{v.brand}</Card.Text>
                        <Card.Text className='d-inline-block ps-4 fs-5 fw-semibold'>{v.category}</Card.Text>
                     </Card.Body>
                  </Card>
               </>
            })}
         </div>
         <div className="button">
            <Button className='px-4 py-2 m-3 mt-5 fs-6 fw-semibold text-white' variant="dark" onClick={() => props.setPrev()}>Prev</Button>
            <Button className='px-4 py-2 m-3 mt-5 fs-6 fw-semibold text-white' variant="dark" onClick={() => props.setNext()}>Next</Button>
         </div>
      </div>
   )
}

export default Cart
