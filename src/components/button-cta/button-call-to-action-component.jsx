import './button-cta-styles/button-cta.css'

const CTAButton = ({buttonBody, buttonFunction, altStyle}) => {
  return (
    <button className={`cta-button ${altStyle}`} onClick={() => buttonFunction}>{ buttonBody }</button>
  )
}

export default CTAButton