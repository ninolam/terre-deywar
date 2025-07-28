import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="Footer__container">
        <div className="Footer__links">
          <div className="Footer__links__bloc">
            <h3>Liens Utiles</h3>
            <Link href="/home">À Propos</Link>
            <Link href="/home">Nos Circuits</Link>
            <Link href="/home">Témoignages Clients</Link>
          </div>
          <div className="Footer__links__bloc">
            <h3>À Propos</h3>
            <Link href="/home">Contactez-nous</Link>
            <Link href="/home">Blog Voyage</Link>
            <Link href="/home">FAQ</Link>
          </div>
          <div className="Footer__links__bloc">
            <h3>Droits d&apos;Auteur</h3>
            <Link href="/home">Mentions légales</Link>
            <Link href="/home">Politique de confidentialité</Link>
            <Link href="/home">condition Générale d&apos;Utilisation</Link>
          </div>
        </div>
        <div className="Footer__logo">
          <Link href="/">
            <Image src="/logo.jpeg" alt="Logo" width={90} height={90} />
          </Link>
        </div>
        <div className="Footer__copyright">
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
