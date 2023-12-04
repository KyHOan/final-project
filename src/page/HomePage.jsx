import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'

function HomePage() {
  return (
    <MainLayout>
          <div className= 'bg-light p-5 nt'>
            <h1>Welcome to the simple POS for small business</h1>
            <p>sjgdajkgsdjkasgkdjasgdkjasgjkdahskjdhaaskjhdjkashdkjash</p>
            <p>If you have an issue, call 423-524-3980 anytimes</p>
            <Link to='/pos' className= 'btn btn-primary'>Click here to sell product</Link>
          </div>
    </MainLayout>
  )
}

export default HomePage
