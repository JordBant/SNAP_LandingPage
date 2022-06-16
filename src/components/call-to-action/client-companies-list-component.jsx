import AudiophileLogo from '../icon-components/audiophile-client'
import DatabizLogo from '../icon-components/databiz-client-component-icon'
import MakerLogo from '../icon-components/maker-client-component'
import MeetLogo from '../icon-components/meet-client-component'
import './client-companies-styles/client-companies.css'

const ClientList = () => {
  return (
    <ul className='client-list'>
        <li className="client-item"> <DatabizLogo/> </li>
        <li className="client-item"> <AudiophileLogo/> </li>
        <li className="client-item"> <MeetLogo/> </li>
        <li className="client-item"> <MakerLogo/> </li>
    </ul>
  )
}

export default ClientList