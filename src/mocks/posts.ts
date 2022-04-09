import { AvatarGenerator } from "random-avatar-generator"
import { Post } from '../types'

export const posts: Post[] = [
  {
    postId: 1,
    userId: 1,
    date: new Date().toString(),
    content: 'Alguna vez se me ocurrió empezar a programar, empecé con VBA excel y AutoCAD. Lueguito lueguito llegó el desarrollo web... y después los videojuegos?',
    responseTo: null,
  },
  {
    postId: 2,
    userId: 6,
    date: new Date().toString(),
    content: 'Por qué será que hay tantos canes en la manada ahora! NOOOOOOO!',
    responseTo: null,
  },
  {
    postId: 3,
    userId: 4,
    date: new Date().toString(),
    content: 'Yo fui el primero que llegó a molestarte guf guf!',
    responseTo: 2,
  },
  {
    postId: 4,
    userId: 7,
    date: new Date().toString(),
    content: 'Gah! Gah! aaaaaaa gah!',
    responseTo: 2,
  },
  {
    postId: 5,
    userId: 5,
    date: new Date().toString(),
    content: 'uuuuuuuuuuujh! ih ih grrrr!',
    responseTo: 3,
  },
  {
    postId: 6,
    userId: 2,
    date: new Date().toString(),
    content: 'Y recuerdas R y Geotube?!',
    responseTo: 1,
  },
  {
    postId: 7,
    userId: 3,
    date: new Date().toString(),
    content: '@mapra99 @immprada no les gusta 7ma puerta?',
    responseTo: null,
  },
  {
    postId: 8,
    userId: 2,
    date: new Date().toString(),
    content: '...',
    responseTo: 7,
  },
  {
    postId: 9,
    userId: 1,
    date: new Date().toString(),
    content: '...',
    responseTo: 7,
  },
]