import React, { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

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
    }
  ];

  const { bucket, search, user, crown } = images;

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
          <div className="item">
            <img src={user} alt="user" />
          </div>
          <div className="bucket item">
            <div>
              <p>13</p>
            </div>
            <img src={bucket} alt="cart" />
          </div>

          <div className="navbar-menu">
            <AiOutlineMenu onClick={() => setToggle(true)} />

            {toggle && (
              <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {navLink.map((item) => (
                    <li key={item}>
                      <Link to={item.to}>
                        <p onClick={() => setToggle(false)}>{item.title}</p>
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
          {navLink.map((item, i) => (
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
