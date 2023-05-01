import React from 'react'
import {
  Box,
  Row,
  Container,
  Column,
  Heading
} from "./ContactElements";

const Contact = () => {
  return (
    <div className='body'>   
    <h1 style={{ color: "red", 
        textAlign: "center"
         }}>
        Ronan's Place
      </h1>
  <h2 style={{ color: "red", 
        textAlign: "center",
         }}
  >We transform your ideas into complete and ready-to-use applications.</h2>

  <Box>
    <Container>
      <Row>
          <Column>
            <Heading>Call Us</Heading>
            <p>+44 087564234</p>
          </Column>
          <Column>
            <Heading>Email</Heading>
            <p>ronanbehan@gmail.com</p>
          </Column>
          <Column>
            <Heading>Working Hours</Heading>
            <p>9am - 5pm | Mon - Fri</p>
          </Column>
      </Row>
    </Container>
  </Box>
  </div>
  )
}

export default Contact