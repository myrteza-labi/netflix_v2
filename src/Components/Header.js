import React from 'react'; 
import NetflixLogo from './NetflixLogo'
import LoginButton from './LoginButton'
import './Header.css'

class Header extends React.Component {
    render(){
        return (
            <div className='container-fluid box-header'>
                <div className='row justify-content-between'>
                    <NetflixLogo/>
                    <LoginButton/>
                </div>
            </div>
        )
    }
}

export default Header; 