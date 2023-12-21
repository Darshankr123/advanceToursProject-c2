import { nanoid } from 'nanoid'
import image1 from '../src/assets/images/jogfalls.jpg'
import image2 from '../src/assets/images/murdeshwara.jpg'
import image3 from '../src/assets/images/mysorepalace.jpg'
import image4 from '../src/assets/images/hampi.jpg'

export const data = [
    {
        id:nanoid(),
        category:"kidsandfamily",
        name:"jogfalls",
        image:image1,
        discription:"Jog Falls is a waterfall on the Sharavati river located in Siddapura taluk, Uttara Kannada District and it's view point located in Shimoga district of Karnataka, India. It is the second highest plunge"
    },
    {
        id:nanoid(),
        category:"family",
        name:"murdeshwara",
        image:image2,
        discription:"Murdeshwar is a town in Uttara Kannada district in the state of Karnataka, India, It is famous for the world's second tallest Shiva statue, the town lies on the coast of the Laccadive Sea and is also famous for the Murudeshwara Temple"
    },
    {
        id:nanoid(),
        category:"kids",
        name:"mysorepalace",
        image:image3,
        discription:"Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence (house). It is located in Mysore, Karnataka,"
    },
    {
        id:nanoid(),
        category:"kidsandfamily",
        name:"hampi",
        image:image4,
        discription:"Hampi or Hampe, also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in Hampi (City), Ballari district now Vijayanagara district, east-central Karnataka, India."
    }
]