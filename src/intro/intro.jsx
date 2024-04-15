import React from 'react'
import { Link } from 'react-scroll'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import './intro.css'
import me from '../assets/me-modified.png'

function SectionTag() {
  const sections = [
    { name: 'Projects', id: 'projects' },
    { name: 'Work Experience', id: 'education' },
  ]

  return sections.map((section, index) => {
    return (
      <Link activeClass="active" spy={true} smooth={true} to={section.id}>
        <div className="sectionTag">
          0{index + 1}
          <div className="line"></div>
          {section.name}
        </div>
      </Link>
    )
  })
}

function Intro() {
  return (
    <div className="introSection">
      <div className="heading">Hello, I’m Harshit Kumar.</div>
      <div className="aboutMe">
        I’m a Software Engineer working on building scalable enterprise
        solutions at{'  '}
        <span>
          <a
            className="companyLink"
            href="https://www.scaler.com/"
            target="_blank"
            rel="noreferrer"
          >
            Scaler
          </a>
        </span>
        . My Front-End experiences include working on HTML, CSS, JS and React JS, Redux, Mobx, TypeSript, Webpack.
      </div>
      <div className="sections">
        <SectionTag />
      </div>
      <div className="contact">
        <img src={me} alt="mridulkumar" height="60" width="60" />
        <a
          href="https://drive.google.com/file/d/1VJlVAmU6WGk0SOMIwKVzZHIBI1-B4BaM/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          download="HarshitKumar.pdf"
        >
          <button className="resume">
            <span className="resumeText"> Resume ↓ </span>
          </button>
        </a>
        <a
          className="insta"
          href="https://www.linkedin.com/in/harshit-kumar-1ba95b189/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="icon" />
          LinkedIn
        </a>
        <a
          className="github"
          href="https://github.com/harshitkr23"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="icon" />
          Github
        </a>
      </div>
    </div>
  )
}

export default Intro
