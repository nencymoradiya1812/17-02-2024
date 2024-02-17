import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { blog } from '../data/blog'
import "../css/CardAbout.css"


const CardAbout = () => {

  return (
    <>
         <h1>Products</h1>
         <Container>
            <Row>
            {blog.map((v,i)=>{
             return(<ProductItem pitem={v}/>)
          })}
            </Row>
         </Container>
    
    </>
  )
}

export default CardAbout

function ProductItem({pitem}){
  return(
    <>
          
            <Col lg="3" md="6">
                <div className='main'>
                <div className='img'>
                  <img src={pitem.image} alt="" />
                </div>
               <h4>{pitem.title}</h4>
               <h4><span>Price:</span> {pitem.price}</h4>
               <p>{pitem.description}</p>
               <p><span>Category:</span> {pitem.category}</p>
               <p><span>Rate:</span> {pitem.rating.rate}</p>
                </div>
                
            </Col>

   </>
  )
}