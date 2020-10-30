import React from 'react'; 
import './EmailInput.css'

class EmailInput extends React.Component {
    render(){
        return (
            <div className='email-input'>
                <label for='email'></label>
                <input type='email' id='email-input-id' name='email'></input>
            </div>
        )
    }
}

export default EmailInput; 