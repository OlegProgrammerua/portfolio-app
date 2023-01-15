import React from 'react'
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { useSelector } from 'react-redux';


export default function Contact() {
    const infoArray = useSelector(state => state.contacts.value)
  return (
    
    <div id='CONTACT' className='contact_block'>
        <div className="container-fluid">
            
            <div className="contact_row row">
                <div className="contact_section col-md-6">
                    <h2 className='text-center'>My contacts</h2>
                    <div className="contact_information">
                        <div className="contact_item">
                            <FaMapMarkedAlt className='contact_icon'/>
                            <div className="contact_item_information">
                                <div>Adrees</div>
                                <div>{infoArray.address}</div>
                            </div>
                        </div>
                        <div className="contact_item">
                            <FaPhoneAlt className='contact_icon'/>
                            <div className="contact_item_information">
                                <div>Phone</div>
                                <div>{infoArray.phone1}</div>
                                <div>{infoArray.phone2}</div>
                            </div>
                        </div>
                        <div className="contact_item">
                            <FaEnvelope className='contact_icon'/>
                            <div className="contact_item_information">
                                <div>Email</div>
                                <div>{infoArray.email1}</div>
                                <div>{infoArray.email2}</div>
                            </div>
                        </div>
                        <div className="contact_item">
                            <FaFacebook className='contact_icon' style={{color:'blue'}}/>
                            <div className="contact_item_information">
                                <div>
                                    <a style={{'text-decoration':'none', color:'#fff'}} href="#">Visit my Facebook</a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="contact_item">
                            <FaInstagram className='contact_icon'/>
                            <div className="contact_item_information">
                                <div>Visit my Instagram</div>
                                <div>{infoArray.instagram}</div>
                            </div>
                        </div>
                        <div className="contact_item">
                            <FaTelegramPlane className='contact_icon' style={{color:'blue'}}/>
                            <div className="contact_item_information">
                                <div>Telegram</div>
                                <div>{infoArray.telegram}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_section col-md-6">
                    <a href = '#' className="contact_map">
                        <img src={"https://OlegProgrammerua.github.io/portfolio-app/assets/images/map/contact_map.png"} alt="" />
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
