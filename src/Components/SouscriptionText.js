import React from 'react'; 
import './SouscriptionText.css'


class SouscriptionText extends React.Component {
    render(){
        return (
            <div className='souscription-text-block'>
                <h1 className='souscription-title'>Films, séries TV et bien plus en illimité.</h1>
                <h4 className='souscription-slogan'>Où que vous soyez. Annulez à tout moment.</h4>
                <p className='souscription-text'>Prêt à regarder netflix ? Saisisez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
            </div>
        )
    }
}

export default SouscriptionText;