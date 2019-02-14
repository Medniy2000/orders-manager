import React from'react'

import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {SemanticToastContainer} from "react-semantic-toasts"
import {find} from 'lodash/collection'

import Container from "./layout/Container.jsx"
import Content from "./layout/Content.jsx"

import {setCookie} from "../helpers/CookiesHelper"


class Register extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            username: '',
            email: '',
            password: ''
        }
        this.typedUser = this.typedUser.bind(this)
        this.typedPassword = this.typedPassword.bind(this)
        this.typedEmail = this.typedEmail.bind(this)
        this.createNewAccount = this.createNewAccount.bind(this)
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

    typedEmail(e){
        let email = e.target.value
        this.setState({email: email})
    }

    createNewAccount(){

      if (this.isValid()){
          let user = this.state
          this.props.onCreate(user)
          setCookie('currentUser', this.state.username, {expires: 60 * 15})
          this.props.showNotification(
              {
                  "type": "success",
                  "title": "REGISTER STATUS",
                  "message": "Register Success!",
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
                  "title": "REGISTER STATUS",
                  "message": "Register Failed! Please check typed data",
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
        let users_local = this.props.users

        if (typed_user.password.length <=3){
            return false
        }
        let user_with_same_email = find(users_local, function (o) {
            return typed_user.email === o.email
        })
        return user_with_same_email === undefined
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
        )
    }

}

export default Register