import React from 'react'; 
import Header from './Header'; 
import SouscriptionBox from './SouscriptionBox';
import './SouscriptionContainer.css'


class SouscriptionContainer extends React.Component {
    render(){
        return (
            <div className='container-fluid souscription-container'>
                <Header/>
                <SouscriptionBox/>
                <div className='shadow-souscription-box'></div>
            </div>
        )
    }
}
export default SouscriptionContainer;
