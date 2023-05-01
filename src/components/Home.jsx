import React from 'react';
import { useNavigate } from "react-router-dom";

import {
  Box,
  Row,
  Container,
  Column,
  Heading
} from "./HomeElements";
  
const Home = () => {

  let navigate = useNavigate(); 

const routeChange = () =>{ 
  let path = `/contact`; 
  navigate(path);
}

 return(
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
  <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "20px"}}>
  <button onClick={routeChange} style={{ color: "blue", 
        textAlign: "center",
         }}>Get in Touch</button>  
  </div> 
  <Box>
    <Container>
      <Row>
          <Column>
            <Heading>Experience</Heading>
            <p>We possess considerable 
              experience of delivering secure web applications for international companies and organizations.</p>
          </Column>
          <Column>
            <Heading>Flexibility</Heading>
            <p>Our solutions can be tailored to your needs. 
              At Walfen we make bespoke software which meets your unique requirements.</p>
          </Column>
          <Column>
            <Heading>Fast work turnaround</Heading>
            <p>We follow agile methodologies and offer increased visibility into the progress on your project.
               We are transparent, reliable, and always meet the deadlines.</p>
          </Column>
      </Row>
    </Container>
  </Box>

  <Box>
    <Container>
          <Column>
            <Heading>Web Applications</Heading>
            <p>We cover the design, implementation, testing, deployment and maintenance of each project, including frontend and backend. 
              Our applications meet very high security standards. 
              We have developed complete financial applications for Swiss banks.</p>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "20px"}}>
                <button style={{ color: "blue", 
                      textAlign: "center",
                      }}>Get in Touch</button>  
              </div> 
          </Column>
    </Container>
  </Box>

  <Box>
    <Container>
          <Column>
            <Heading>APIs</Heading>
            <p>We build APIs that are robust, resilient, secure and easy to maintain. 
              Our offer covers infrastructure and CI/CD setup. 
              We also provide complete API documentation online.</p>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "20px"}}>
              <button style={{ color: "blue", 
                    textAlign: "center",
                    }}>Get in Touch</button>  
              </div> 
          </Column>
    </Container>
  </Box>

  <Box>
    <Container>
          <Column>
            <Heading>Websites</Heading>
            <p>We develop frontend applications using the latest frameworks and technologies. 
              Our services include UI/UX design, infrastructure and CI/CD setup.</p>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "20px"}}>
              <button style={{ color: "blue", 
                    textAlign: "center",
                    }}>Get in Touch</button>  
              </div> 
          </Column>
    </Container>
  </Box>

  <Box>
    <Container>
          <Column>
            <Heading>Mobile Applications</Heading>
            <p>We build custom mobile applications for Android and iOS. 
              Our service range includes application design, development, testing, publication and support.</p>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "20px"}}>
              <button style={{ color: "blue", 
                    textAlign: "center",
                    }}>Get in Touch</button>  
              </div> 
          </Column>
    </Container>
  </Box>

  </div>
 );
};
  
export default Home;