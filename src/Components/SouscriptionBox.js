import React from 'react'; 
import SouscriptionText from './SouscriptionText'; 
import SubmitBar from './SubmitBar'; 
import './SouscriptionBox.css';

class SouscriptionBox extends React.Component {
    render(){
        return (
            <div className='container-fluid souscription-box'>
                <div className='row justify-content-center'>
                    <SouscriptionText/>    
                </div>
                <div className='row justify-content-center'>
                    <SubmitBar/>
                </div>
            </div>
        )
    }
}

export default SouscriptionBox;