import React from'react'

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { SemanticToastContainer } from 'react-semantic-toasts'
import {find} from 'lodash/collection'
import Container from "./layout/Container.jsx"
import Content from "./layout/Content.jsx"
import {setCookie} from '../helpers/CookiesHelper.js'


class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.typedUser = this.typedUser.bind(this)
        this.typedPassword = this.typedPassword.bind(this)
        this.login = this.login.bind(this)
        this.isValid = this.isValid.bind(this)
    }

    typedUser(e){
        let user = e.target.value
        this.setState({username: user})
    }

    typedPassword(e){
        let password = e.target.value
        this.setState({password: password})
    }

    login(){
        if (this.isValid()){
            setCookie('currentUser', this.state.username, {expires: 60 * 15})
            this.props.showNotification(
                {
                    "type": "success",
                    "title": "LOGIN STATUS",
                    "message": "Login Success!",
                    "icon": "bullhorn",
                    "time": 2000,
                    "timeout": 250,
                    "onClose": this.props.history.push('/')
                }
            )
        }else {
            this.props.showNotification(
                {
                    "type": "warning",
                    "title": "LOGIN STATUS",
                    "message": "Login Failed! Please check typed data",
                    "icon": "bullhorn",
                    "time": 2000,
                    "timeout": 250,
                    "onClose": ''
                }
            )
        }
    }

    isValid(){
        let typed_user = this.state
        let users = this.props.users
        let finded_user = find(users, function (o) {
            return (
                typed_user.username === o.username ||
                typed_user.email === o.email
                ) && typed_user.password === o.password
        })
        return finded_user !== undefined
    }

    render(){
        return (
            <div>
                <Container>
                    <SemanticToastContainer position="top-right" />
                    <Content style={{ height: '100%' }}>
                        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Header as='h2' color='teal' textAlign='center'>
                                    <i className="id badge icon"></i> Log-in to your account
                                </Header>
                                <Form size='large'>
                                    <Segment stacked>
                                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username or Email' onChange={this.typedUser}/>
                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            type='password'
                                            onChange={this.typedPassword}
                                        />
                                        <Button color='teal' fluid size='large' onClick={this.login}>
                                            Login
                                        </Button>
                                    </Segment>
                                </Form>
                                <Message>
                                    New to us? <a href='/register'>Sign Up</a>
                                </Message>
                            </Grid.Column>
                        </Grid>
                    </Content>
                </Container>
            </div>
        )
    }

}

export default Login