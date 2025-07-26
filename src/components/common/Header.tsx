import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Header = () => {
  const links = [
    {
      label: 'Nos circuits',
      href: '/circuits'
    },
    {
      label: 'Notre histoire',
      href: '/about'
    },
    {
      label: 'Contactez-nous',
      href: '/contact'
    },
  ]

  return (
    <header className="Header">
      <div className="Header__container">
        <Link href="/">
          <Image className="Header__logo" src="/logo.jpeg" alt="Logo" width={90} height={90} />
        </Link>
        <nav className="Header__nav">
          <ul className="Header__links">
            {links.map((link) => (
              <li key={link.label}>
                <Link className="Header__link" href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button text="Réserver" classNameModifier="primary" />
      </div>
    </header>
  )
}

export default Header