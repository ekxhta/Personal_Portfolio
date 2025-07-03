import React from 'react'
import Skillcard from './Skillcard'
import '../Styles/Skills.css'


function Skills() {
  return (
    
    <div className="skills-section" id="Skills">
      <Skillcard
        frontTitle="Coffee-Driven"
        subtitle="Coder"
        backIcons={['/assets/python.png', '/assets/cpp.png']}
      />
      <Skillcard
        frontTitle="Frontend"
        subtitle="Developer"
        backIcons={['/assets/html-5.png', '/assets/css-3.png', '/assets/js.png', '/assets/react.png']}
      />
      <Skillcard
        frontTitle="Machine Learning"
        subtitle="Enthusiast"
        backIcons={['/assets/python.png', '/assets/pandas.svg', '/assets/numpy_logo.svg', '/assets/scikit.png']}
      />
    </div>
  )
}

export default Skills
