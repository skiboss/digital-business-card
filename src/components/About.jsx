import React from 'react'
import './about.css';

export default function About() {
  return (
    <div className='content'>
        <div className='details'>
            <h4 className='about'>About</h4>
            <p>
                I am a frontend developer with a particular interest in 
                building accessible and pixel perfect web applications. 
                I try to keep up with best practices, and I'm always 
                looking for new things to learn.
            </p>
            <h4 className='interests'>Interests</h4>
            <p>
                Mathematics. Internet fanatic. Cooking. Public Speaking. Travel geek.
                Coffee-maniac. Martial Art. Reading. Technical Writing. Meetups.
                Fitness. Late long walks.
            </p>
        </div>
    </div>
  )
}