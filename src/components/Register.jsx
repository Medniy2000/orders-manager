import React from'react';

import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {SemanticToastContainer, toast} from "react-semantic-toasts";

import Container from "./layout/Container.jsx";
import Content from "./layout/Content.jsx";
import {setCookie} from "../helpers/CookiesHelper";


class Register extends React.Component{

    getInitialState(){
        return {
            username: '',
            email: '',
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

    typedEmail(e){
        let email = e.target.value;
        this.setState({email: email})
    }

    createNewAccount(){
      if (this.is_valid()){
          let user = this.state;
          this.props.onCreate(user);
          setCookie('currentUser', this.state.username, {expires: 60 * 15});
          setTimeout(() => {
              toast({
                  type: 'success',
                  icon: 'bullhorn',
                  title: 'REGISTER STATUS',
                  description: 'Register Success!',
                  time: 2000,
                  onClose: () => {
                      return this.props.history.push('/');
                  }
              });
          }, 250);
      }else {
          setTimeout(() => {
              toast({
                  type: 'warning',
                  icon: 'bullhorn',
                  title: 'REGISTER STATUS',
                  description: 'Register Failed! Please check typed data',
                  time: 2000,
              });
          }, 250);
      }
    }

    is_valid(){
        let is_valid = true;
        let typed_user = this.state;
        let users_local = this.props.users;

        if (typed_user.password.length <=3){
            is_valid = false;
            return is_valid
        }

        if (users_local){
            users_local.forEach(user =>{
                if (typed_user.email === user.email) {
                    is_valid = false;
                    return is_valid;
                }
            })
        }
        return is_valid;
    }

    render() {
        return (
            <div>
                <Container>
                    <SemanticToastContainer position="top-right" />
                    <Content style={{ height: '100%' }}>
                        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Header as='h2' color='teal' textAlign='center'>
                                    <i className="user plus icon"></i> Create new account
                                </Header>
                                <Form size='large'>
                                    <Segment stacked>
                                        <Form.Input
                                            fluid icon='user'
                                            iconPosition='left'
                                            placeholder='Username'
                                            type='text'
                                            onChange={this.typedUser}
                                        />
                                        <Form.Input
                                            fluid icon='at'
                                            iconPosition='left'
                                            placeholder='Email'
                                            type='email'
                                            onChange={this.typedEmail}
                                        />
                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            type='password'
                                            onChange={this.typedPassword}
                                        />
                                        <Button color='teal' fluid size='large' onClick={this.createNewAccount}>
                                            Create
                                        </Button>
                                    </Segment>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </Content>
                </Container>
            </div>
        );
    }

};

export default Register;