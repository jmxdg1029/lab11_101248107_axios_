import React, {Component} from 'react'
import {Row,Col,Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export default class PersonList extends Component {
   constructor(props){
       super(props)

        this.state = {
            persons: []
        }
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }

    render(){
        return(
            <div>
                {
                   this.state.persons.map(u => (
                       <div>
                        <div className="m-3 p-3" style={{backgroundColor: '#48D1CC', borderRadius:'5px'}}>
                            <p className="pt-3" style={{fontWeight:'bold'}}>{u.name.title} {u.name.first} {u.name.last} - {u.login.uuid}</p>
                            <hr/>
                            <div>
                                <Container>
                                    <Row>
                                        <Col  className="mt-5">
                                            <Row><img style={{ borderRadius:'50%', width:'200px'}} src={u.picture.large}/></Row>
                                        </Col>
                                        <Col >
                                            <Row className="mb-2">User Name: {u.login.username}</Row>
                                            <Row className="mb-2">Gneder: {u.gender}</Row>
                                            <Row className="mb-2">Time Zone Description: {u.location.timezone.description}</Row>
                                            <Row className="mb-2">Address: {u.location.street.number} {u.location.street.name}, {u.location.city}, {u.location.state}, {u.location.country} - {u.location.postcode}</Row>
                                            <Row className="mb-2">Email: {u.email}</Row>
                                            <Row className="mb-2">Birth Date and Age: {u.dob.date} ({u.dob.age}) </Row>
                                            <Row className="mb-2">Register Date: {u.registered.date}</Row>
                                            <Row className="mb-2">Phone#: {u.phone}</Row>
                                            <Row className="mb-2">Cell#: {u.cell}</Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <hr/>
                       </div>
                   ))
                }
            </div>
        )
    }
}