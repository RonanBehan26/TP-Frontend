import React from 'react';
import {
  Box,
  Row,
  Container,
  Column,
  Heading
} from "./HomeElements";
  
const About = () => {
  return (
      <div className='body'>   
        <h1 style={{ color: "black", 
            textAlign: "center"
             }}>
            About Us
          </h1>

      <Box>
        <Container>
          <Row>
              <Column>
                <Heading>Our Services</Heading>
                <p>We are a software company specializing in designing and developing high-quality, secure software applications. Our services cover full life cycle software development, including infrastructure, backend and frontend. 
                  Walfen’s mission is to offer custom software solutions characterized by top quality and excellent performance. </p>
                <p>The development is mostly executed remotely; however, in-house tasks can be executed during the first weeks of the project and 
                  also periodically to facilitate planning, synchronization and evaluation of the process.</p>
                <p>While working on our projects, 
                  we use Agile methodologies and CI/CD offering to ensure increased visibility into their evolution.</p>
                <p>Our objective is to offer high-quality software services.</p>
                <p>We mainly use open source and widely used technologies. This way we can deliver solutions that are easy to maintain and which result in excellent performance. Each project covers unit tests, integration tests, load tests, and code quality controls. 
                  We also provide the creation of production and test environments in AWS and CI/CD infrastructures.</p>
              
              </Column>
          </Row>
        </Container>
      </Box>
    </div>
  );
};
  
export default About;