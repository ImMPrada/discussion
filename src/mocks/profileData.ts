import { AvatarGenerator } from "random-avatar-generator"
import { ProfileData } from '../types'

export const profileData: ProfileData = {
  userId: 1,
  username: 'immprada',
  userAvatar: new AvatarGenerator().generateRandomAvatar(),
}