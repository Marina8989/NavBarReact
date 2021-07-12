import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import {links, social} from './data';
import {FaBars, FaTwitter} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
          <div>
            <img src={logo} alt="logo image"/>
            <button type="button"><FaBars /></button>
          </div>
          <div>
              {links.map(link => {
                  const {id, url, text} = link;
                  return (
                      <div key={id}>
                        <a src={url}>{text}</a>
                      </div>
                  )
              })}
          </div>
        </div>
    )
}


export default Navbar