import { AvatarGenerator } from "random-avatar-generator"
import { ProfileData } from '../types'

export const profiles: ProfileData[] = [
  {
    userId: 1,
    username: 'immprada',
    userAvatar: new AvatarGenerator().generateRandomAvatar(),
  },
  {
    userId: 2,
    username: 'mapra99',
    userAvatar: new AvatarGenerator().generateRandomAvatar(),
  },
  {
    userId: 3,
    username: 'rocio123',
    userAvatar: new AvatarGenerator().generateRandomAvatar(),
  },
  {
    userId: 4,
    username: 'math',
    userAvatar: new AvatarGenerator().generateRandomAvatar(),
  },
  {
    userId: 5,
    username: 'mothas',
    userAvatar: new AvatarGenerator().generateRandomAvatar(),
  },
  {
    userId: 6,
    username: 'yeiko',
    userAvatar: new AvatarGenerator().generateRandomAvatar(),
  },
  {
    userId: 7,
    username: 'topper',
    userAvatar: new AvatarGenerator().generateRandomAvatar(),
  }
]