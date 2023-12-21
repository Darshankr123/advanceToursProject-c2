import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Explore from './pages/Explore'
import Packages from './pages/userPage/Packages'
import SignUp from './pages/SignUp'
import UserPannel from './pages/UserPannel'
import AdminPannel from './pages/AdminPannel'
import HotelAdminPannel from './pages/HotelAdminPannel'
import AdminGreet from './pages/AdminSubPage/AdminGreet'
import AddTour from './pages/AdminSubPage/AddTour'
import UserHome from './pages/userPage/UserHome'
import HotelHomePage from './pages/HotelPage/HotelHomePage'
import Booking from './pages/userPage/Booking'
import Feedback from './pages/userPage/Feedback'
import EmergencyContact from './pages/EmergencyContact'
import AddDistrict from './pages/AdminSubPage/AddDistrict'
import { loader as ExploreLoader } from './pages/Explore'
import AddCabs from './pages/AdminSubPage/AddCabs'
import Cabs from './pages/Fecilites/Cabs'
import Guides from './pages/Fecilites/Guides'
import Activites from './pages/Fecilites/Activites'
import Hotels from './pages/Fecilites/Hotels'
import Rooms from './pages/Fecilites/Rooms'
import AddGuides from './pages/AdminSubPage/AddGuides'

import { loader as hotelLoader } from './pages/Fecilites/Hotels'
import {loader as districtLoader} from './pages/SignUp'
import { loader as roomsLoader } from './pages/Fecilites/Rooms'
import AddRooms from './pages/HotelPage/AddRooms'
import UserFeselites from './pages/userPage/UserFecialites'
import AddFood from './pages/HotelPage/AddFood'
import { loader as hotelLoaderFood } from './pages/HotelPage/AddFood'
import UserBookingPage from './pages/UserBookingsPage/UserBookingPage'
import { loader as userHotelBookings } from './pages/UserBookingsPage/UserBookingPage'
import UserRoomBooking from './pages/UserBookingsPage/UserRoomBooking'
import { loader as roombookings } from './pages/UserBookingsPage/UserRoomBooking'
import {loader as bookRoom} from './pages/Fecilites/BookRoom'
import BookRoom from './pages/Fecilites/BookRoom'
import { loader as roomBookings } from './pages/Fecilites/ProvidingUserInfo'
import ProvidingUserInfo from './pages/Fecilites/ProvidingUserInfo'
import Foods from './pages/Fecilites/Foods'
import { loader as foodLoader } from './pages/Fecilites/Foods'
import BookCab from './pages/Fecilites/BookCab'
import { loader as cabLoader } from './pages/Fecilites/BookCab'



const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'signup',
        element:<SignUp/>,
        loader:districtLoader,
      },
      {
        path:"explore",
        element:<Explore/>,
        loader:ExploreLoader,
      },
      
      {
        path:"feedback",
        element:<Feedback/>
      },
      {
        path:"emergency-contact",
        element:<EmergencyContact/>
      },
      {
        path:`userbookings/:id`,
        element:<UserBookingPage/>,
        loader:userHotelBookings,
      },
      {
        path:"userpannel",
        element:<UserPannel/>,
        children:[
          {
            index:true,
            element:<UserHome/>
          },
          {
            path:"feselites",
            element:<UserFeselites/>,
            children:[
               {
            index:true,
            element:<Cabs/>
          },
          {
            path:"guides",
            element:<Guides/>
          },
          {
            path:"activites",
            element:<Activites/>
          },
          {
            path:"hotels",
            element:<Hotels/>,
            loader:hotelLoader,
          
          },
          {
            path:"foods",
            element:<Foods/>,
            loader:foodLoader,
          },
          {
            path:"rooms",
            element:<Rooms/>,
            loader:roomsLoader
          },
          {
            path:"feedback",
            element:<Feedback/>
          },
          
            ]
          },
          {
            path:"packegs",
            element:<Packages/>
          },
          
          {
             path:"bokings",
             element:<Booking/>
          },
          {
            path:"feedback",
            element:<Feedback/>
          }
        ]
      },
      {
        path:"adminpannel",
        element:<AdminPannel/>,
        children:[
          {
            index:true,
            element:<AdminGreet/>
          },
          {
            path:"addtour",
            element:<AddTour/>
          },
          {
            path:"addhotel",
            element:<AddCabs/>
          },
          {
            path:"addDistrict",
            element:<AddDistrict/>
          },
          {
            path:"addGuides",
            element:<AddGuides/>
          },
        ]
      },
      {
        path:"hotelpannel",
        element:<HotelAdminPannel/>,
        children:[
          {
             index:true,
             element:<HotelHomePage/>
          },
          {
            path:'addrooms',
            element:<AddRooms/>
          },
          {
            path:"addfoods",
            element:<AddFood/>,
            loader:hotelLoaderFood,
          }
          
        ]
      },
      {
        path:"roombookings/:id",
        element:<UserRoomBooking/>,
        loader:roombookings
      },
      {
        path:"bookroom/:id",
        element:<BookRoom/>,
        loader:bookRoom,
      },
      {
        path:"userinfo/:id",
        element:<ProvidingUserInfo/>,
        loader:roomBookings,
      },
      {
        path:"bookCab/:id",
        element:<BookCab/>,
        loader:cabLoader
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App