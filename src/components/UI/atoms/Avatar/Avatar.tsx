import './styles.scss';
import { AvatarProps } from './types';

const Avatar = ({ profileImg }: AvatarProps) => (
  <div className="avatar">
    <img
      className="avatar-img"
      src={profileImg}
      alt="User profile"
    />
  </div>
)

export default Avatar;
