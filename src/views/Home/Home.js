import React from 'react'
import './Home.css'
import check from './check.png';
import heart from './heart.png';
import brain from './brain.png';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import {Link} from 'react-router-dom'

const FEATURES=[
  {
    featureImg: check,
    featureText: " Notes Will saved saved securly in your browser local storage."
  },
  {
    featureImg: heart,
    featureText: " Use your brain for thinking, not for remembring things."
  },
  {
    featureImg: brain,
    featureText: "Loved by 100+ users. Feedback are always welcome!😍."
  }

]
function Home() {
  return (
    <div>
        <h1 className="text-center text-primary app-title"> 📘 Quick Note</h1>
        <p className="text-center text-gray">
            Your pocket freindly note taking app.{" "} <del>Never forget anything again!</del>
         <span className='highlight text-black tagline-highlight'> Remember everything!🧠</span>
         </p>
        <div>
          <h3 className='text-center'>Why you use Quick Note?</h3>
          
          <div className='features-container'>
            {
            FEATURES.map((feature)=>{
              const {featureImg, featureText}=feature
              return(
                <FeatureCard
                featureImg={featureImg}
                featureText={featureText}
                />

              );
            })
            }
          
          </div>
        </div>

       
        <div className='buttons-container'>
          <Link to='./add'>
          <button className='btn btn-primary'> ✍️Add Notes</button>
          </Link>
          <Link to='./show'>
          <button className='btn btn-secondary'> 🗒️View Notes</button>
          </Link>
        </div>
    </div>
  )
}

export default Home