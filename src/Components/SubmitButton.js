import React from 'react'; 
import './SubmitButton.css'

class SubmitButton extends React.Component {
    render(){
        return (
            <div className='submit-button-container'>
                <button id='submit-button'>COMMENCER k</button>
            </div>
        )
    }
}

export default SubmitButton;