import React from'react'

import {Link} from "react-router-dom"
import {logout, authorizedUser} from "../../helpers/AuthUserHelper.js"

class Navigation extends React.Component{

    constructor(props) {
        super(props)
        this.state ={
            user: authorizedUser()
        }
    }



    auth_item_menu(){
      if (authorizedUser()){
          return <Link to='/login' onClick={logout}><i className="sign out alternate icon"></i>{this.state.user}</Link>
      }
      return <Link to='/login'><i className="sign in alternate icon"></i>Log In</Link>
    }

    render() {
        return (
            <div className="ui inverted vertical masthead center aligned segment">
                <div className="ui container">
                    <div className="ui large secondary inverted pointing menu">
                        <button className="active item">Orders Manager</button>
                        <div className="right menu">
                            {this.auth_item_menu()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Navigation