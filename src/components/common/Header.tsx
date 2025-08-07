'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { headerLinks } from '@/utils/data/home';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      </div>
    </header>
  );
};

export default Header;
