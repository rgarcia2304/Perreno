import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home'
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
const Navbar = () => {
  const { setUser } = useStateContext()

  return (
    <Nav>
      <Logo onClick={() => logOut(setUser)} href="/">Perrenal</Logo>

      <Right_Items>
        <Home></Home>
         <About>About</About>
         <Contact> Contact</Contact>
        <Buttons>
        <LoginButton></LoginButton>
        <SignUpButton></SignUpButton>
        
        </Buttons>
      </Right_Items>
    </Nav>
  );
};

const Contact = styled.div`
    display:flex;
    font-size: 16px;
    font-weight: 600;

`;
const About = styled.div`
    display:flex;
    font-size: 16px;
    font-weight: 600;

`;
const Right_Items = styled.div`
      display:flex;
      width: 25%;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      margin-right: 25px;

`;

const Buttons = styled.div`
  display:flex;
  width: 175px;
  justify-content: space-between;
`;
const Nav = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-family: sans-serif;
    height: 100px;
`;

const Logo = styled(Link)`
    font-size: 25px;
    font-weight: 1000;
    color:black;
`;



export default Navbar;
