import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerBlocs } from '@/utils/data/layout';

const Footer = () => {
  return (
    <footer className='Footer'>
      <section className='Footer__container'>
        <div className='Footer__links'>
          {footerBlocs.map((bloc) => (
            <div className='Footer__links__bloc' key={bloc.title}>
              <h3>{bloc.title}</h3>
              {bloc.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <Link href='/' className='Footer__logo'>
          <Image src='/logo.jpeg' alt='Logo' width={120} height={120} />
        </Link>
        <div className='Footer__copyright'>
          <p>© 2025 Terre d&apos;Eywar. Tous droits réservés.</p>
          {/* <ul className="Footer__socials" role="list">
            <li>
              <Link
                href="https://instagram.com/"
                className="social-icon"
                aria-label="Instagram"
              >
                <Image
                  src="../public/icon/instragram.png"
                  alt="logo__instragram"
                  width={15}
                  height={15}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://tiktok.com/"
                className="social-icon"
                aria-label="TikTok"
              >
                <Image
                  src="../public/icon/tiktok.png"
                  alt="logo__tiktok"
                  width={15}
                  height={15}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com/company/"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Image
                  src="../public/icon/linkedin.png"
                  alt="logo__linkedin"
                  width={15}
                  height={15}
                />
              </Link>
            </li>
          </ul> */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
