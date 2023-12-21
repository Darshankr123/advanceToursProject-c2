import axios from 'axios'
import React from 'react'
import { coustomFetch } from '../utils'

const loader = async() => {
    const data = await coustomFetch.get("")
}
const ExploreSubComponent = () => {
  return (
    <div>ExploreSubComponent</div>
  )
}

export default ExploreSubComponent