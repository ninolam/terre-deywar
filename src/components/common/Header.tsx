'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { headerLinks } from '@/utils/data/layout';
import { X, Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Set initial scroll state
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`Header ${isScrolled ? 'Header--background' : ''}`}>
      <div className='Header__container'>
        <Link href='/'>
          <Image
            className='Header__logo'
            src='/logo.jpeg'
            alt='Logo'
            width={90}
            height={90}
          />
        </Link>
        <nav className='Header__nav'>
          <ul className='Header__links'>
            {headerLinks.map((link) => (
              <li key={link.label}>
                <Link className='Header__link' href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button text='Réserver' classNameModifier='header' />
        <Menu className='Header__menu' onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      <nav className={`HeaderMenu ${isMenuOpen ? 'HeaderMenu--open' : ''}`}>
        <Link href='/'>
          <Image
            className='HeaderMenu__logo'
            src='/logo.jpeg'
            alt='Logo'
            width={50}
            height={50}
          />
        </Link>

        <X className='HeaderMenu__close' onClick={() => setIsMenuOpen(false)} />
        <ul className='HeaderMenu__links'>
          {headerLinks.map((link) => (
            <li key={link.label}>
              <Link className='HeaderMenu__link' href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button text='Réserver' classNameModifier='header--mobile' />
      </nav>
    </header >
  );
};

export default Header;
