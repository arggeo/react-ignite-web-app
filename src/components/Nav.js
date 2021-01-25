import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../actions/gamesAction';

// Style & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

// Images
import logo from '../img/logo.svg';

const Nav = () => {
   const dispatch = useDispatch();
   const [textInput, setTextInput] = useState('');

   const inputHandler = (e) => {
      setTextInput(e.target.value);
   };

   const submitHandler = (e) => {
      e.preventDefault();
      dispatch(fetchSearch(textInput));
      setTextInput('');
   };

   const clearSearched = () => {
      dispatch({ type: 'CLEAR_SEARCHED' })
   }

   return (
      <StyledNav variants={fadeIn} initial="hidden" animate="visible">
         <Logo onClick={clearSearched}>
            <img src={logo} alt="logo" />
            <h1>Ignite</h1>
         </Logo>
         <form className="search">
            <input value={textInput} onChange={inputHandler} type="text" />
            <button type="submit" onClick={submitHandler}>Search</button>
         </form>
      </StyledNav>
   );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: #fff;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;