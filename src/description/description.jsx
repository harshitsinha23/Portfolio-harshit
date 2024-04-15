import React from 'react'
import { CgExternal } from 'react-icons/cg'
import FadeIn from 'react-fade-in'
import './description.css'

function ProjectCard({ language, title, description, link, live }) {
  return (
    <div>
      <a className="card" href={link} target="_blank" rel="noreferrer">
        <div className="codeLanguage"> {language} </div>
        <div className="projectTitle">{title}</div>
        <div className="projectDescription">{description}</div>
        <div className="bottomLinks">
          {live && (
            <a className="link" href={live} target="_blank" rel="noreferrer">
              Live at
              <CgExternal className="externalLinkIcon" />
            </a>
          )}
        </div>
      </a>
    </div>
  )
}

function SectionCard({ work, time, company }) {
  return (
    <div className="sectionCard">
      <div className="company"> {company}</div>
      <div className="work"> {work}</div>
      <div className="time"> {time}</div>
    </div>
  )
}

function Description() {
  const projectList = [
    {
      language: 'React JS',
      title: 'Crypto Market',
      description: `Thisisacryptocurrencytrackerwebapp.Thishelpsintrackinglatestprice
of crypto coins in INR and USD. You can also see price trend of an crypto coin in last 30 days. Used context api to manage the state of our app.`,
      link: 'https://github.com/mri999/CryptoMarket',
      live: 'https://mk-crypto-market.netlify.app/',
    },
    {
      language: 'React JS',
      title: 'THE COCKTAIL DB',
      description: `This App shows you the list of cocktails based on the searched key and
      we can click on any specific cocktail to see more details about it.`,
      link: 'https://github.com/harshitsinha23/Cocktail-Project',
      live: 'https://the-cocktain-db.netlify.app/',
    },
    {
      language: 'Machine Learning',
      title: 'AUTOMATED SUBJECTIVE ANSWER EVALUATION SYSTEM',
      description: `We present the LSTM network for labelled data comprised of pairs of variable length sequences.
      Our model is applied to automatically evaluate subjective answers by assessing
      semantic similarity between the given and the right answer.`,
      link: 'https://github.com/harshitsinha23/Automated-Subjective-Answer-Evaluation-System',
    },
  ]
  return (
    <FadeIn delay={300} transitionDuration={1000}>
      <div id="projects" className="projectList">
        {projectList.map((project) => (
          <ProjectCard
            language={project.language}
            title={project.title}
            description={project.description}
            link={project.link}
            live={project.live}
          />
        ))}
      </div>
      <div id="education" className="educationList">
        <div className="leftSectionCard">
          <SectionCard
            work="Software Developer Engineer"
            company="SCALER"
            time="Sep 2021 - Present"
          />
          <SectionCard
            work="SDE Intern"
            company="PayU"
            time="April 2021 - August 2021"
          />
        </div>
        <div className="rightSectionCard">
          <SectionCard
            work="Technical Writer and Reviewer Intern"
            company="GeeksForGeeks"
            time="March 2020 - May 2020"
          />
        </div>
      </div>
    </FadeIn>
  )
}

export default Description
