import React from 'react'
import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

  return (
    <nav className={ styles['menu-container'] }>
      { menuItems.map((item, index)=> {
        return(<ActiveLink key={ index } href={ item.href } text={ item.text } />)
      })}
    </nav>
  )
}
