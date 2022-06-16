import React from 'react'
import CTAButton from '../button-cta/button-call-to-action-component'
import ClientList from './client-companies-list-component'
import './cta-styles/cta-styles.css'

const CallToAction = () => {
  return (
    <div className='cta-container'>
        <h1 className="cta-heading"> Make remote work</h1>
        <p className="cta-body">
          Get your team in sync, no matter your location. 
          Streamline processes, create team rituals
          and watch productivity soar.
        </p>
        <CTAButton 
          buttonFunction={console.log('button clicked')}
          buttonBody = 'Learn more'
          altStyle = ''
        />
        <ClientList/>
    </div>
  )
}

export default CallToAction