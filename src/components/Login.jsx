import React from'react';

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { SemanticToastContainer, toast } from 'react-semantic-toasts';

import Container from "./layout/Container.jsx";
import Content from "./layout/Content.jsx";
import {setCookie} from '../helpers/CookiesHelper.js'


class Login extends React.Component{
    constructor(props) {
        super(props)
        this.typedUser = this.typedUser.bind(this)
        this.typedPassword = this.typedPassword.bind(this)
        this.login = this.login.bind(this)
    }

    getInitialState(){
        return {
            username: '',
            password: ''
        };
    }

    typedUser(e){
        let user = e.target.value;
        this.setState({username: user})
    }

    typedPassword(e){
        let password = e.target.value;
        this.setState({password: password})
    }

    login(){
        if (this.is_valid()){
            setCookie('currentUser', this.state.username, {expires: 60 * 15});
            setTimeout(() => {
                toast({
                    type: 'success',
                    icon: 'bullhorn',
                    title: 'LOGIN STATUS',
                    description: 'Login Success!',
                    time: 2000,
                    onClose: () => {
                        return this.props.history.push('/')
                    }
                });
            }, 250);
        }else {
            setTimeout(() => {
                toast({
                    type: 'warning',
                    icon: 'bullhorn',
                    title: 'LOGIN STATUS',
                    description: 'Login Failed! Please check typed data',
                    time: 2000,
                });
            }, 250);
        }
    }

    is_valid(){
        let is_valid = false;
        let typed_user = this.state;
        let users = this.props.users;
        if (users){
           users.forEach(user =>{
               if (
                   (typed_user.username === user.username ||
                   typed_user.email === user.email) &&
                   typed_user.password === user.password) {
                   is_valid = true;
                   return is_valid;
               }
           })
        }
        return is_valid;
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
        );
    }

};

export default Login;