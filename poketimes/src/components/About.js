import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem libero vitae voluptas excepturi ipsam eaque consequuntur blanditiis deleniti obcaecati esse qui nulla exercitationem nesciunt asperiores, et soluta ratione fugiat!</p>
    </div>
  )
}

export default Rainbow(About)