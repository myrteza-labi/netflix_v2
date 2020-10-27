import React from 'react'; 
import './LoginButton.css'; 


class LoginButton extends React.Component {
    render(){
        return (
            <div className='col-3 d-flex justify-content-end login-button-container'>
                <button className='btn login-button'>S'identifer</button>
            </div>
        )
    }
}

export default LoginButton;