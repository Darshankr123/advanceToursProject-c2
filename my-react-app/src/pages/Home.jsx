import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { data } from '../data';
import jogfalls from '../assets/images/jogfalls.jpg'
import { Image } from 'react-bootstrap';
import murdeshwara from '../assets/images/murdeshwara.jpg'
import mysorepalace from '../assets/images/mysorepalace.jpg'
import hampi from '../assets/images/hampi.jpg'
import Explore from './Explore';
import EmergencyContact from './EmergencyContact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <Carousel data-bs-theme="dark" className='hero'>
     
         <Carousel.Item className='carouselitem'>
                <Image
                  className="d-block  image"
                      src={jogfalls}
                    alt="First slide"
                />
              <Carousel.Caption className='carousel-caption'>
                <h5>jogfalls</h5>
                  <p>Jog Falls is a waterfall on the Sharavati river located in Siddapura taluk, Uttara Kannada District and it's view point located in Shimoga district of Karnataka, India. It is the second highest plunge</p>
              </Carousel.Caption>
          </Carousel.Item>
         <Carousel.Item className='carouselitem'>
                <Image
                  className="d-block  image"
                      src={murdeshwara}
                    alt="First slide"
                />
              <Carousel.Caption className='carousel-caption'>
                <h5>murdeshwara</h5>
                  <p>Murdeshwar is a town in Uttara Kannada district in the state of Karnataka, India, It is famous for the world's second tallest Shiva statue, the town lies on the coast of the Laccadive Sea and is also famous for the Murudeshwara Temple</p>
              </Carousel.Caption>
          </Carousel.Item>
         <Carousel.Item className='carouselitem'>
                <Image
                  className="d-block  image"
                  src={mysorepalace}
                  alt="First slide"
                  />
              <Carousel.Caption className='carousel-caption'>
                <h5>mysorepalace</h5>
                  <p>Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence (house). It is located in Mysore, Karnataka, </p>
              </Carousel.Caption>
          </Carousel.Item>
         <Carousel.Item className='carouselitem'>
                <Image
                  className="d-block  image"
                  src={hampi}
                  alt="First slide"
                  />
              <Carousel.Caption className='carousel-caption'>
                <h5>hampi</h5>
                  <p>Hampi or Hampe, also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in Hampi (City), Ballari district now Vijayanagara district, east-central Karnataka, India.</p>
              </Carousel.Caption>
          </Carousel.Item>
     </Carousel>
     
     <EmergencyContact/>
     <Footer/>
    </>
  )
}

export default Home