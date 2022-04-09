import { useContext } from 'react'
import { DataContext } from '../../../../contexts/DataContext';
import { AuthContext } from '../../../../contexts/AuthContext';
import { MessageBody } from '../../atoms';
import { MessageHeader } from '../'
import { MessageProps } from './types'
import './styles.scss'



const Message = ({
  profileId,
  content,
}: MessageProps) => {

  console.log(profileId)
  const { currentUser }: any = useContext(AuthContext);
  const { profiles }: any = useContext(DataContext);
  const getProfileData = (id: Number) => {
    return profiles.filter((profile: any) => profile.userId === id).slice(-1)[0]
  }
  console.log(getProfileData(profileId))

  return(
    <div className="message">
      <MessageHeader 
        isYou={currentUser.userId === profileId}
        profileData={getProfileData(profileId)}
      />
      <MessageBody 
        message={content}
      />
    </div>
  )
}

export default Message;
