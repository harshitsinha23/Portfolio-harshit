import Intro from './intro/intro'
import Description from './description/description'
import './styles.css'

function Me() {
  return (
    <div className="main">
      <div className="intro">
        <Intro />
      </div>
      <div className="description">
        <Description />
      </div>
    </div>
  )
}

export default Me
