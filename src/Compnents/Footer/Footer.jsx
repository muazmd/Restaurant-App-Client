import React from 'react'
import './footer.scss'
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import TextScroller from 'Compnents/Footer/TextScroller/TextScroller';
export const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-body" >
                <div className="Footer-body-contact">
                    <span className="Footer-body-contact-header"> Contact Us</span>
                    <ul className="Footer-body-list">
                        <li className="Footer-body-items"> <PhoneIcon/> <span>+96178821499 </span> </li>
                        <li className="Footer-body-items"><LocationOnIcon/> <span>Beirut</span>  </li>
                        <li className="Footer-body-items"><LocationOnIcon/> <span>Saida</span> </li>
                        <li className="Footer-body-items"><LocationOnIcon/><span> Tripoli</span> </li>
                        <li className="Footer-body-items"> <EmailIcon/> <span>Maps@maps.com</span> </li>

                    </ul>

                </div>
                <div className="Footer-body-contact">
                    <span className="Footer-body-contact-header"> Menu</span>
                    <ul className="Footer-body-list">
                        <li className="Footer-body-items"> <PhoneIcon/> <span> Sandwiches </span></li>
                        <li className="Footer-body-items"><LocationOnIcon/> <span> Plates  </span></li>
                        <li className="Footer-body-items"><LocationOnIcon/> <span> Family Meals </span></li>
                        <li className="Footer-body-items"><LocationOnIcon/> <span> Speacial Meals </span></li>
                        <li className="Footer-body-items"> <EmailIcon/> <span> Kids Meals</span></li>

                    </ul>

                </div>
                <div className="Footer-body-contact">
                    <span className="Footer-body-contact-header"> Contact Us</span>
                    <ul className="Footer-body-list">
                        <li className="Footer-body-items"> <PhoneIcon/> <span> +96178821499 </span></li>
                        <li className="Footer-body-items"><LocationOnIcon/> <span> Beirut  </span></li>
                        <li className="Footer-body-items"><LocationOnIcon/> <span> Saida </span></li>
                        <li className="Footer-body-items"><LocationOnIcon/> <span> Tripoli </span></li>
                        <li className="Footer-body-items"> <EmailIcon/> <span> Maps@maps.com </span></li>

                    </ul>

                </div>
            </div>
            <TextScroller text={'Saida 78821499 - Beirut 03678421 - Tripoli 76843692'}/>


            
        </div>
    )
}
