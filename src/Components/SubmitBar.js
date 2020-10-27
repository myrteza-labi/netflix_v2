import React from 'react'; 
import EmailInput from './EmailInput'; 
import SubmitButton from './SubmitButton'; 
import './SubmitBar.css'


class SubmitBar extends React.Component {
    render(){
        return (
            <div className='col-7 submitBar'>
                <div className='row'>
                    <EmailInput/>
                    <SubmitButton/>
                </div>
            </div>
        )
    }
}

export default SubmitBar;