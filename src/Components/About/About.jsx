import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className='about-right'>
       <h3>ABOUT UNIVERSITY</h3>
       <h2>Nurturing Tomorrow's Leaders Today</h2>
      <p>Embark on a transformative equcation journey with our universit's comprehensive equcation progras . Our cutting-edge curriculm is designed to empower studens with the knowledge, skills , and experiences needed to excel in the dynamic field of educatio.</p>
      <p>With a focus on innovation, hand-on learning , and personalized mentorship, our programs aspiring edcators to make a meaningful impact in classroom , schools , and communities.</p>
      <p>Whether you aspire to become a teacher, and communities, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education</p>
      </div>
    </div>
  )
}

export default About
