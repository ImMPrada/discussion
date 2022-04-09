import { AvatarGenerator } from "random-avatar-generator"
import { ProfileData } from '../types'

export const currentUser: ProfileData = {
  userId: 6,
  username: 'yeiko',
  userAvatar: new AvatarGenerator().generateRandomAvatar(),
}