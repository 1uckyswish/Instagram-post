import Image1 from "../assets/Pfp/Image1.png"
import Image2 from "../assets/Pfp/Image2.png"
import Image3 from "../assets/Pfp/Image3.png"
import Image4 from "../assets/Pfp/Image4.png"
import Image5 from "../assets/Pfp/Image5.png"
import Image6 from "../assets/Pfp/Image6.png"

// follow imgs 
import abh from '../assets/follow/abh.png'
import im from '../assets/follow/im.png'
import imkir from '../assets/follow/imkir.png'
import org from '../assets/follow/org.png'
import sak from '../assets/follow/sakbrl.png'
import upvox from '../assets/follow/upvox.png'
// stories imgs 
import aur from '../assets/stories/aur.png'
import lowell from '../assets/stories/lowell.png'
import peter from '../assets/stories/peter.png'
import roy from '../assets/stories/roy.png'
import sara from '../assets/stories/sara.png'
import vella from '../assets/stories/vella.png'
// post imgs 
import nPost from '../assets/posts/nancy.png'
import nAvatar from '../assets/posts/nancyAvatar.png'
import gPost from '../assets/posts/gen.png'
import gAvatar from '../assets/posts/genAvatar.png'
import oPost from '../assets/posts/gate.png'
import oAvatar from '../assets/posts/gateAvatar.png'
// suggest imgs 
import fel from '../assets/suggest/fel.png'
import tyler from '../assets/suggest/tyler.png'

const userData = [
  {
    id: 0,
    users: [
        {
           username: "upvox_",
           following: "Upvox",
           src: upvox, 
        },
        {
            username: "imkir",
            following: "Follows you",
            src: imkir, 
        },
        {
            username: "organic__al",
            following: "Followed by chirag_singla17",
            src: org, 
        },
        {
            username: "im_gr",
            following: "Followed by chirag_singla17",
            src: im, 
        },
        {
            username: "abh952",
            following: "Follows you",
            src: abh, 
        },
        {
            username: "sakbrl",
            following: "Follows you",
            src: sak, 
        },
    ]
  },
  {
    id: 1,
    users: [
      {
        username: "aurelio",
        src: aur, 
      },
      {
        username: "saraali",
        src: sara, 
      },
      {
        username: "vella",
        src: vella, 
      },
      {
        username: "peter",
        src: peter, 
      },
      {
        username: "lowell",
        src: lowell, 
      },
      {
        username: "roy",
        src: roy, 
      },
    ]
  },
  {
    id: 2,
    users: [
      {
        username: "Tyler Nix",
        following: "Follows you",
        src: tyler, 
      },
      {
        username: "Fellipe Ditadi",
        following: "Followed by chirag_sin",
        src: fel, 
      },
      {
        username: "R",
        following: "Follow",
        src: '', 
      },
    ]
  },
  {
    id: 3,
    users: [
      {
        username: 'Nancy',
        avatar: nAvatar,
        post: nPost,
      },
      {
        username: 'Genshinimpect',
        avatar: gAvatar,
        post: gPost,
      },
      {
        username: 'oceangate',
        avatar: oAvatar,
        post: oPost,
      },
    ]
  }
]

const data = [
    {
        Id: 1,
        Username: "Rafaelfigini",
        Caption: 'O ano é 2073. Tatuadores e tatuados mudam a cor e aumentam o brilho de suas tatuagens através de dispositivos futuristas.',
        TimeStamp: '3d',
        Like: '1 Like',
        Image: Image3,
        HashTags: '#IA #nftbrazil #AI #DallE',
    },
    {
        Id: 2,
        Username: 'Salvadxrx',
        Caption: 'Server isnt working',
        TimeStamp: '1d',
        Like: '1 Like',
        Image: Image4,
        HashTags: '',
    },
    {
        Id: 3,
        Username: 'Edubarros101',
        Caption: 'Ainda bem que não é 2077, ou essas tattoos iam ficar todas bugadas.',
        TimeStamp: '1d',
        Like: '1 Like',
        Image: Image5,
        HashTags: '',
    },
    {
        Id: 4,
        Username: 'Theactornekhiataylor',
        Caption: 'None of my prompts look a thing like this',
        TimeStamp: '3d',
        Like: '5 Like',
        Image: Image6,
        HashTags: '',
    },
    //  {
    //     Id: 5,
    //     Username: 'Openaidalle',
    //     Caption: 'Hungry Hungry hippos',
    //     TimeStamp: '5d',
    //     Like: '1 Like',
    //     Image: Image1,
    // },
    
];

export { userData, data };