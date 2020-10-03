import React from 'react';
import {Row, Col, Navbar, Button, Alert, Badge, Breadcrumb} from 'react-bootstrap';


function Atas() {
	return(
		<>
			<Row>
			  <Col sm={3}>
			  	<Alert variant='primary'>
				   Website React Bootstrap
				</Alert>
			  </Col>
			  <Col sm={4}>
			  
			  </Col>
			  <Col sm={5}>
			  		<Button variant="primary">
					  Notifikasi <Badge variant="light">9</Badge>
					  <span className="sr-only">unread messages</span>
					</Button>
					<Button variant="primary">
					  Message <Badge variant="light">19</Badge>
					  <span className="sr-only">unread messages</span>
					</Button>
					
					    <Navbar.Brand className= "px-5">
					      <img
					        alt=""
					        src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
					        width="30"
					        height="30"
					      />  
					        Andreas
					    </Navbar.Brand>					
			  </Col>			
			</Row>
			<Row>
			 <Col sm={4}>
			  	
			  </Col>
			  <Col sm={4}>
			  	
			  </Col>
			  <Col sm={4}>
			  	<Breadcrumb>
				  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
				  <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
				  <Breadcrumb.Item active>Bola</Breadcrumb.Item>
				</Breadcrumb>
			  </Col>
			</Row>		
		</>
		)
}
export default Atas;