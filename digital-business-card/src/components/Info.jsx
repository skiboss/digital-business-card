import React from 'react';
import './info.css'

export default function Info() {
    return (
        <div>
            {/* <img src={image} /> */}
            <div className='image'></div>
            <div className='content'>
                <h3 className='name'>Oghenemeru Avwemoya</h3>
                <p className='title'>Frontend Engineer</p>
                <div className='site'><a href='https://github.com/skiboss'>meru-repo</a></div>
                <div className='contact'>
                    <a href='mailto:aoghenemeru@yahoo.com' className='email' target="_blank"><button ><i className='fa-solid fa-envelope'></i>Email</button></a>
                    <a href='https://linkedin.com/in/oghenemeruavwemoya' className='in' target="_blank"><button ><i className="fa-brands fa-linkedin"></i>LinkedIn</button></a>
                </div>
            </div>
        </div>
    )
}