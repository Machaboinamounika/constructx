import React from 'react'
import APIService from '../Services/APIService';

export default class UserLoginComponent extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: []
        }
    }
    componentDidMount() {
        APIService.getUserLogindata()
            .then((response) => {
                this.setState({user: response.data});
                console.log(this.state.data);
            })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Book Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Username</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.user.map(UserLogin =>
                                    <tr key={UserLogin.id}>
                                        <td>{UserLogin.id}</td>
                                        <td>{UserLogin.username}</td>
                                        <td>{UserLogin.password}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
