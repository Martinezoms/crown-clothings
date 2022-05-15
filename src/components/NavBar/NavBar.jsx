import React, { useState, useContext } from 'react';
import CartDropdown from '../CartDropdown/CartDropdown';

import { UserContext } from '../../contexts/userContext';
import { CartContext } from '../../contexts/CartContext';

import { signOutUser } from '../../utils/firebase/firebase';
import { HiX } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const navLink = [
    {
      title: 'home',
      to: '/'
    },
    {
      title: 'shop',
      to: 'shop'
    },
    {
      title: 'contact',
      to: 'contact'
    },
    {
      title: 'sign in',
      to: '/user'
    },
    {
      title: 'sign up',
      to: '/user/signup'
    }
  ];

  const bottomMenu = [
    {
      title: 'home',
      to: '/'
    },
    {
      title: 'shop',
      to: 'shop'
    },
    {
      title: 'contact',
      to: 'contact'
    }
  ];

  const { bucket, search, user, crown } = images;

  const handleSignOut = async () => {
    await signOutUser();
  };

  return (
    <nav className="navbar__container">
      <div className="navbar__container-top">
        <div className="navbar__item-left">
          <Link to="/" className="header">
            <div className="navbar__logo">
              <img src={crown} alt="logo" />
            </div>
          </Link>
          <Link to="/">
            <div className="navbar__title">
              <h2>crown</h2>
            </div>
          </Link>
        </div>
        <div className="navbar__item-right">
          <div className="item">
            <img src={search} alt="search" />
          </div>
          <div className="item user">
            <img src={user} alt="user" />
            <div className="user-nav">
              {currentUser ? (
                <>
                  <p onClick={handleSignOut}>Sign Out</p>
                </>
              ) : (
                <>
                  <Link to="/user">
                    <p>Sign In</p>
                  </Link>
                  <Link to="user/signup">
                    <p>Sign Up</p>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="item bucket">
            <div className="item-count">
              <p>13</p>
            </div>
            <img src={bucket} alt="cart" onClick={() => setIsCartOpen(!isCartOpen)} />
            {isCartOpen && <CartDropdown />}
          </div>

          <div className="item navbar-menu">
            <AiOutlineMenu onClick={() => setToggleMenu(true)} />

            {toggleMenu && (
              <motion.div whileInView={{ x: [200, 0] }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                <HiX onClick={() => setToggleMenu(false)} />
                <ul>
                  {navLink.map((item) => (
                    <li key={item}>
                      <Link to={item.to}>
                        <p onClick={() => setToggleMenu(false)}>{item.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div className="navbar__container-bottom">
        <div className="top-border"></div>
        <ul className="navbar__links">
          {bottomMenu.map((item, i) => (
            <li key={i}>
              <Link to={item.to}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="bottom-border"></div>
      </div>
    </nav>
  );
};

export default NavBar;
