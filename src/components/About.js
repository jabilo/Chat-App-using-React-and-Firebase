import React from 'react'

function About() {
  return (
    <div className='container'>
      <div className='card my-3' Style="width:100%; height:100%; overflow:hidden">
        <div className='card-header'>
            Q U I C K     C H A T
        </div>
        <div className='card-body'>
            <p>hello this is quick chat , the best chat app ever</p>
            <img src='https://assets.entrepreneur.com/content/3x2/2000/1638079565-Untitleddesign-2021-11-28T100532825.png' alt='img' className='card-img-top'/> 
            <button className='btn btn-success my-3'>Try Now</button>
        </div>
      </div>
    </div>
  )
}

export default About;