import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Header } from 'semantic-ui-react'
import { setAuthUser } from '../actions/authedUser'

class Login extends Component {

    state = {
        selectedUser: ''
    }

    populateUserDatat = () => {
        console.log('Props ', this.props)
        const { users } = this.props

        return users.map(
            user => ({
                key: user.id,
                text: user.name,
                value: user.id,
            })
        )
    }

    handleSubmit = (e) => {

        e.preventDefault()

        const authedUser = this.state.selectedUser

        console.log('authedUser: ', authedUser)

        new Promise(
            (resolve) => {
                setTimeout(
                    () => resolve(),
                    500
                )
            }
        ).then(
            () => this.props.dispatch(setAuthUser(authedUser))
        )
    }

    onChange = (e, { value }) => {
        this.setState(
            {
                selectedUser: value
            }
        )
    }

    render(){

        const { selectedUser } = this.state

        return (
            <Form className="ui form" onSubmit={this.handleSubmit}>
                <Header>
                    Sign In
                </Header>
                <div>
                <Form.Dropdown
                    placeholder='Select a user to login'
                    options={this.populateUserDatat()}
                    value={selectedUser}
                    onChange={this.onChange}
                    fluid
                    selection
                    scrolling
                    required
                />
                </div>
                <Form.Button content="Login" fluid positive/>
            </Form>
        )
    }
}

function mapStateToProps( {users} ) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)