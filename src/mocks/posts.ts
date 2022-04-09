import { Post } from '../types'

export const posts: Post[] = [
  {
    postId: 1,
    userId: 6,
    date: new Date().toISOString(),
    content: 'Rayos! Cuándo llegaron tantos a la manada!!!!',
    main: true,
    responses:[
      {
        postId: 2,
        userId: 4,
        date: new Date().toISOString(),
        content: 'Yo fui el primeriot en llegar grrrrrr!',
        main: null,
        responses:[],
      },
      {
        postId: 3,
        userId: 5,
        date: new Date().toISOString(),
        content: 'mmmmmmmjm! giuf giuf giii!',
        main: null,
        responses:[],
      },
      {
        postId: 4,
        userId: 7,
        date: new Date().toISOString(),
        content: 'Ahr Ahr Arrrgh ah!',
        main: null,
        responses:[],
      },
      {
        postId: 5,
        userId: 5,
        date: new Date().toISOString(),
        content: 'soy un perro chicquito y feito aaaaaaajm!',
        main: null,
        responses:[],
      },
    ],
  },
  {
    postId: 6,
    userId: 3,
    date: new Date().toISOString(),
    content: '@immpreada y @mapra99 les gusta séptima puerta?',
    main: true,
    responses:[],
  },
  {
    postId: 7,
    userId: 2,
    date: new Date().toISOString(),
    content: 'Cuánto pesa más? un kilogramo de algodón, o un kilogramo de bario 78 enriquecido?',
    main: true,
    responses:[],
  },
]