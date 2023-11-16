import React, {useState, useEffect} from 'react'
import UserServices from './UserServices'

const UserComponent = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {

        UserServices.getUser().then((response) => {
            setUser(response.data)
            console.log(response.data);
        });
    };


  return (
    <div className='container'>

    <h1 className = "text-center"> SignUp</h1>

    <table className = "table table-striped">
        <thead>
            <tr>
                <th> SignUp Id</th>
                <th> firstName</th>
                <th> lastName</th>
                <th> Email</th>
                <th>password</th>
                <th>confirm_Password</th>
            </tr>

        </thead>
        <tbody>
            {
                user.map(
                        user1 =>
                        <tr key = {user1.id}>
                            <td> {user1.id }</td>
                            <td> {user1.firstName }</td>
                            <td> {user1.lastName }</td>    
                            <td> {user1.email }</td>
                            <td> {user1.password }</td>
                            <td> {user1.confirm_Password }</td>

                        </tr>

                )
            }

        </tbody>


    </table>  
          
    
    </div>
  )
}

export default UserComponent