import React from 'react'

const CTAButton = ({buttonName, buttonFunction}) => {
  return (
    <button onClick={buttonFunction}>{ buttonName }</button>
  )
}

export default CTAButton