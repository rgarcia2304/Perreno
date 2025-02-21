import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import { useStateContext } from '@/context/StateContext'
import { useRouter } from 'next/router'


const Dashboard = () => {

  const { user } = useStateContext()  

  const router = useRouter()


  useEffect(() => {
    if(!user){
      router.push('/')
    }else{

    }
  }, user)




  return (
    <Section>
      {/* <TopHeader>
        Dashboard
      </TopHeader> */}


    </Section>
  )
}


//STYLED COMPONENTS
const Section = styled.section`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
`



const TopHeader = styled.h1`
font-size: 26px;
display: flex;

`



export default Dashboard