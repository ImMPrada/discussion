import { Post } from '../types'

// {
//   id,
//   userId,
//   createdAt,
//   updatedAt,
//   content,
//   reactionsScore,
//   receiverId,
//   user: {
//      nickname,
//      avatar,
//    },
//   thread: [
//     {

//     }
//   ]
// }

export const posts: Post[] = [
  {
    id: 1,
    userId: 6,
    createdAt: new Date().toISOString(),
    content: 'Rayos! Cuándo llegaron tantos a la manada!!!!',
    receiverId: null,
    reactionsScore: 5,
    user: {
      nickname: 'yeiko',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NDF03MXu7by8TXDXSsoKyrhizgAhacxJww&usqp=CAU',
    },
    thread:[
      {
        id: 2,
        userId: 4,
        createdAt: new Date().toISOString(),
        content: 'Yo fui el primeriot en llegar grrrrrr!',
        receiverId: 1,
        reactionsScore: 5,
        user: {
          nickname: 'math',
          avatar: 'https://i.pinimg.com/originals/10/2f/56/102f56a89c37c0c37c72e93d0c35a403.jpg',
        },
        thread:[],
      },
      {
        id: 3,
        userId: 5,
        createdAt: new Date().toISOString(),
        content: 'mmmmmmmjm! giuf giuf giii!',
        receiverId: 1,
        reactionsScore: 5,
        user: {
          nickname: 'rocio123',
          avatar: 'https://i.pinimg.com/originals/9f/e0/3b/9fe03bc9f2521e33f6939383add32d8a.jpg',
        },
        thread:[],
      },
      {
        id: 4,
        userId: 7,
        createdAt: new Date().toISOString(),
        content: 'Ahr Ahr Arrrgh ah!',
        receiverId: 1,
        reactionsScore: 5,
        user: {
          nickname: 'math',
          avatar: 'https://i.pinimg.com/originals/10/2f/56/102f56a89c37c0c37c72e93d0c35a403.jpg',
        },
        thread:[],
      },
      {
        id: 5,
        userId: 5,
        createdAt: new Date().toISOString(),
        content: 'soy un perro chicquito y feito aaaaaaajm!',
        receiverId: 1,
        reactionsScore: 5,
        user: {
          nickname: 'mothas',
          avatar: 'https://i.pinimg.com/originals/10/2f/56/102f56a89c37c0c37c72e93d0c35a403.jpg',
        },
        thread:[],
      },
    ],
  },
  {
    id: 6,
    userId: 3,
    createdAt: new Date().toISOString(),
    content: '@immpreada y @mapra99 les gusta séptima puerta?',
    receiverId: null,
    reactionsScore: 5,
    user: {
      nickname: 'yeiko',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NDF03MXu7by8TXDXSsoKyrhizgAhacxJww&usqp=CAU',
    },
    thread:[],
  },
  {
    id: 7,
    userId: 2,
    createdAt: new Date().toISOString(),
    content: 'Cuánto pesa más? un kilogramo de algodón, o un kilogramo de bario 78 enriquecido?',
    receiverId: null,
    reactionsScore: 5,
    user: {
      nickname: 'topper',
      avatar: 'https://previews.123rf.com/images/ysbrandcosijn/ysbrandcosijn1308/ysbrandcosijn130800536/21625532-americano-akita-perro-aislado-contra-el-fondo-gris-retrato-del-estudio-.jpg',
    },
    thread:[],
  },
]