import React, {Component} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
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
                       <div style={{backgroundColor: '#48D1CC'}}>
                         <p>{u.name.title} {u.name.first} {u.name.last} - {u.login.uuid}</p>
                         <div>
                             <Container>
                                <Row>
                                    <Col className="mt-5"><img src={u.picture.large}/></Col>
                                    <Col>
                                        <Row>User Name: {u.login.username}</Row>
                                        <Row>Gneder: {u.gender}</Row>
                                        <Row>Time Zone Description: {u.location.timezone.description}</Row>
                                        <Row>Address: {u.location.street.number} {u.location.street.name}, {u.location.city}, {u.location.state}, {u.location.country} - {u.location.postcode}</Row>
                                        <Row>Email: {u.email}</Row>
                                        <Row>Birth Date and Age: {u.dob.date} ({u.dob.age}) </Row>
                                        <Row>Register Date: {u.registered.date}</Row>
                                        <Row>Phone#: {u.phone}</Row>
                                        <Row>Cell#: {u.cell}</Row>
                                    </Col>
                                </Row>
                             </Container>
                         </div>
                       </div>
                   ))
                }
            </div>
        )
    }
}