import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="Footer">

    <section>

      <div>
        <h3>Liens Utiles</h3>
        <Link href="/home">À Propos</Link>
        <Link href="/home">Nos Circuits</Link>
        <Link href="/home">Témoignages Clients</Link>
      </div>

      <div>
        <h3>À Propos</h3>
        <Link href="/home">Contactez-nous</Link>
        <Link href="/home">Blog Voyage</Link>
        <Link href="/home">FAQ</Link>
      </div>

      <div>
        <h3>Droits d&apos;Auteur</h3>
        <Link href="/home">Mentions légales</Link>
        <Link href="/home">Politique de confidentialité</Link>
        <Link href="/home">condition Générale d&apos;Utilisation</Link>
      </div>

    </section>

    {/* <img src="" alt="" /> */}

    <section>
      <div>
        <p>© 2025 Terre d&apos;Eywar. Tous droits réservés.</p>
      </div>
    </section>

    </footer>
  )
}

export default Footer