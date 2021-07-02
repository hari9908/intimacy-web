import React, { Component } from 'react';
import { Button, Card, /*  CardFooter */ CardBody, /* CardGroup, */ Col, Container, Form, Input, InputGroup, /* InputGroupAddon, InputGroupText */ Row } from 'reactstrap';


class Registration extends Component {
 
x
	constructor() {

		super();


		this.state = {

			id: '',
			
			email: ''

		}

		this.id = this.id.bind(this);

		this.email = this.email.bind(this);

		
/* 
		this.EmployeeName = this.EmployeeName.bind(this);

		this.Password = this.Password.bind(this);

		this.Department = this.Department.bind(this);

		this.City = this.City.bind(this);
*/
		this.register = this.register.bind(this); 

	}




	email(event) {

		this.setState({ email: event.target.value })

	}


	id(event) {

		this.setState({ id: event.target.value })

	}
/* 

	Password(event) {

		this.setState({ Password: event.target.value })

	}

	City(event) {

		this.setState({ City: event.target.value })

	}

	EmployeeName(event) {

		this.setState({ EmployeeName: event.target.value })

	}
 */

	register(event) {


		fetch('http://localhost:8080/user/addUser', {

			method: 'post',

			headers: {

				'Accept': 'application/json',

				'Content-Type': 'application/json'

			},

			body: JSON.stringify({


				id: this.state.id,

				email: this.state.email

				

			})

		}).then((Response) => Response.json())

			.then((Result) => {

				if (Result.Status === 'Success')

					this.props.history.push("/Dashboard");

				else

					alert('Sorrrrrry !!!! Un-authenticated User !!!!!')

			})

	}


	render() {


		return (

			<div className="app flex-row align-items-center">

				<Container>

					<Row className="justify-content-center">
						
            <Col md="9" lg="7" xl="6">
							
              <Card className="mx-4">
								
                <CardBody className="p-4">
									
                  <Form>
										
                    <div class="row" className="mb-2 pageheading">
											
                      <div class="col-sm-12 btn btn-primary">
												
												Sign Up
												
                        </div>

                    </div>

                    <InputGroup className="mb-3">
											
                      <Input type="text" onChange={this.id} placeholder="Enter Employee Name" type="hidden" />

                    </InputGroup>

                    <InputGroup className="mb-3">
											
                      <Input type="text" onChange={this.email} placeholder="Enter Email" />

                    </InputGroup>

                  {/*   <InputGroup className="mb-3">
											
                      <Input type="password" onChange={this.Password} placeholder="Enter Password" />

                    </InputGroup>

                    <InputGroup className="mb-4">
											
                      <Input type="text" onChange={this.City} placeholder="Enter City" />

                    </InputGroup>

                    <InputGroup className="mb-4">
											
                      <Input type="text" onChange={this.Department} placeholder="Enter Department" />

                    </InputGroup> */}

                    <Button onClick={this.register} color="success" block>Create Account</Button>

                  </Form>

                </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

			</div>

		);

	}

}


export default Registration;