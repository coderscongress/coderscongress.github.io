import React from "react";
import image6 from '../images/image6.jpg';
import ExperienceAccordion from "../components/ExperienceAccordion";

const About = () => {
  return (<div  align="center"><img className='images' src={image6} alt="" width='140' height='140' /><table width="50%"><h2 style={{color:"#DBA514"}}>About Me</h2><br />
  I am Kofi Owusu-Tufuor, a software engineer with 
  a background in Computer Science and Physics. Having
  undertaken a bachelor's degree programme at the University of Ghana-Legon,
  I completed sucessfully as an bachelor of Science undergraduate in December 2002.
  I have subsequently been engaged by a number of organisations and institutions where
  my talent as a software developer has been further enhanced through practice and knowledge 
  acquisition continuously over this period.I welcome new ideas and open to alternate efficient 
  ways of performing my duties with robust precision and efficiency.
  Follow me on the following social media platforms below to know more about me:
  </table><br clear="all" /><ExperienceAccordion /></div>
  
  )
};

export default About;
