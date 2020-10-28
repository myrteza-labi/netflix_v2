import React from 'react'; 
import EmailInput from './EmailInput'; 
import SubmitButton from './SubmitButton'; 
import './SubmitBar.css'


class SubmitBar extends React.Component {
    render(){
        return (
            <div className='submit-bar'>
                
                    <EmailInput/>
                    <SubmitButton/>
                
            </div>
        )
    }
}

export default SubmitBar;