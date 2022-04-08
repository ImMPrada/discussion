import { ProfileBox, TimeLabel } from '../../atoms';
import { profileData } from '../../../../mocks'
import './styles.scss'

const MessageHeader = () => {

  return(
    <div className="message-header">
      <div className="message-header-info">
        <ProfileBox 
          isYou
          profileData={profileData}
        />
        <TimeLabel label="2 months ago"/>
      </div>
      <div className="message-header-message-actions">
        <h2>Holi</h2>
      </div>
    </div>
  )
}

export default MessageHeader;
