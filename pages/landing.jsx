"use client";

import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Landing = () => {
  const [state, handleSubmit] = useForm("xyyqqkzb");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    // Set the initial width on client-side
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="">
      {/* menu  */}

      <div
        className="h-32 w-full bg-white"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        {/* Desktop Menu */}
        <div className="hidden sm:flex justify-around items-center h-full">
          <div className="flex items-center">
            <Link href="/">
              <img
                className="w-16 cursor-pointer"
                src="Assets/images/muji_logo.png"
                alt="Logo Muji Lab - Création de Site web et logos"
              />
            </Link>
            <div className="border-l-4 border-black mx-10 h-10"></div>
            <a
              href="https://www.instagram.com/muji.lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-12 cursor-pointer"
                src="Assets/images/insta.png"
                alt="logo instagram Muji Lab Création de Site web et logos"
              />
            </a>
          </div>
          <div className="font-lato flex text-xl font-light">
            <Link href="/services">
              <p className="text-black mr-10 cursor-pointer">Nos Services</p>
            </Link>
            <a href="#contact-section" className="text-black cursor-pointer">
              Nous Contacter
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex justify-between items-center px-4 h-full">
          <div className="flex items-center">
            <Link href="/">
              <img
                className="w-12 cursor-pointer"
                src="Assets/images/muji_logo.png"
                alt="Logo Muji Lab - Création de Site web et logos"
              />
            </Link>
            <div className="border-l-2 border-black mx-3 h-5"></div>
            <a
              href="https://www.instagram.com/muji.lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 cursor-pointer"
                src="Assets/images/insta.png"
                alt="logo instagram muji lab - Création de Site web et logos"
              />
            </a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <div className="w-6 h-1 bg-black mb-1"></div>
            <div className="w-6 h-1 bg-black mb-1"></div>
            <div className="w-6 h-1 bg-black"></div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-black shadow-md absolute w-full z-30 top-32">
            <Link href="/services">
              <p className="font-lato text-white font-light text-xl p-4 m-0 cursor-pointer">
                Nos Services
              </p>
            </Link>
            <a
              href="#contact-section"
              className="block font-lato font-light text-xl text-white p-4 m-0 cursor-pointer"
            >
              Nous Contacter
            </a>
          </div>
        )}
      </div>

      {/* menu */}

      {/* 1ere section */}

      <div
        className="relative"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        }}
      >
        <img
          src="Assets/images/bg1.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-start items-center pt-6 sm:pt-32">
          <h1 className="text-white text-3xl sm:text-6xl font-lato font-normal sm:font-thin mb-6 sm:mb-12">
            Web - Design - Print
          </h1>
          <img
            className=" w-1/2 sm:w-5/12 mb-6 sm:mb-32"
            src="Assets/images/muji_font_blanc.png"
            alt="Logo Muji Lab - Création de Site web et logos"
          />
          <h2 className="text-white text-2xl sm:text-6xl font-lato font-light sm:font-thin">
            Libérons votre imagination
          </h2>
        </div>
      </div>

      {/* fin 1ere section */}

      {/* 2e section */}

      <div className="h-auto bg-white font-lato text-black p-20 flex flex-col items-center justify-between">
        <img className="sm:w-24 w-20" src="Assets/images/muji_logo.png" />
        <p className="font-lato text-black font-normal sm:font-thin text-2xl mt-4 mb-24">
          Que proposons-nous ?
        </p>
        <div className="flex sm:flex-row flex-col w-full items-start justify-between">
          <div className="mb-12 sm:mb-0">
            <img className="w-12 mb-4" src="Assets/images/website.png" />
            <h1 className="font-regular text-xl mb-4">Création de Sites Web</h1>
            <p className="font-light text-lg max-w-xs">
              Grace à Muji Lab boostez votre présence en ligne avec un site web
              clair et efficace.
            </p>
          </div>
          <div className="mb-12 sm:mb-0">
            <img
              className="w-12 mb-4"
              src="Assets/images/visual_identity.png"
            />
            <h1 className="font-regular text-xl mb-4">Identité Visuelle</h1>
            <p className="font-light text-lg max-w-xs">
              Démarquez-vous ! Avec Muji Lab, donnez une vraie âme à votre
              société grâce à un logo unique.
            </p>
          </div>
          <div className="mb-12 sm:mb-0">
            <img className="w-12 mb-4" src="Assets/images/print.png" />
            <h1 className="font-regular text-xl mb-4">Design Supports Print</h1>
            <p className="font-light text-lg max-w-xs">
              Une bonne communication est essentielle. Chez Muji Lab nous
              pouvons concevoir des supports visuels (menus, flyers ...)
              efficaces.
            </p>
          </div>
        </div>
      </div>

      {/* fin 2e section */}

      {/* 3e section */}

      <div className="relative">
      {windowWidth < 640 ? (
    <img
      src="Assets/images/bg2_mobile.png"
      className="w-full h-96 object-cover"
    />
  ) : (
    <img
      src="Assets/images/bg2.png"
      className="w-full h-1/5 object-cover"
    />
  )}
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center pt-4 sm:pt-18">
  <div className="flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-40">
    <p className="text-white text-5xl sm:text-7xl font-lato font-light mb-5 sm:mb-0 sm:mr-4 text-center">
      Web by
    </p>
    <img className="w-36 sm:w-72" src="Assets/images/muji_font_blanc.png" />
  </div>
  <p className="text-white text-2xl sm:text-4xl font-lato font-light mb-2 text-center">
    Ne faites pas de compromis
  </p>
  <p className="text-white text-2xl sm:text-4xl font-lato font-light text-center">
    Entre un design efficace et la flexibilité
  </p>
  <p className="text-white text-2xl sm:text-4xl font-lato font-light sm:font-thin mt-8 text-center">
    Un site web à votre image, beau et accessible sur tous supports
  </p>
</div>

      </div>

      {/* fin 3e section */}

      {/* 4e section  */}

      <div className="relative">
      {windowWidth < 640 ? (
    <img
      src="Assets/images/bg3_mobile.png"
      className="w-full h-auto object-cover"
    />
  ) : (
    <img
      src="Assets/images/bg3.png"
      className="w-full h-1/5 object-cover"
    />
  )}
        <div className="absolute top-0 left-0 w-full h-full  flex justify-end items-center ">
          <div className="w-2/4 mr-4 sm:mr-12">
            <div className="sm:mb-40">
              <p className="text-black mb-2 sm:mb-0 text-2xl sm:text-6xl font-lato font-light">
                Pourquoi un site vitrine ?
              </p>
            </div>
            <p className="text-black text-sm sm:text-2xl font-lato font-light mb-2">
              Un site vitrine est essentiel pour dynamiser votre entreprise. Il
              présente vos services ou produits de manière professionnelle,
              améliorant votre visibilité et crédibilité en ligne.
              <br /> Cette plateforme est un investissement stratégique,
              attirant de nouveaux clients et renforçant votre image de marque
              <br />
              <br />
              Muji Lab sera votre partenaire idéal dans ce projet.
            </p>
          </div>
        </div>
      </div>

      {/* fin 4e section  */}

      {/* section contact  */}

      <div
        className="bg-black h-auto p-12 flex flex-col items-center justify-center"
        id="contact-section"
      >
        <p className="font-lato text-white text-center text-4xl sm:text-5xl font-thin">
          Créeons de la magie ensemble
        </p>

        {state.succeeded ? (
          <div className="flex m-48 items-center justify-center">
            <p className="font-lato  text-white text-2xl font-thin">
              Merci pour votre message ! Nous reviendrons vers vous dès que
              possible.
            </p>
          </div>
        ) : (
          <form
            className="w-full sm:w-1/2 mt-10 mb-10 font-lato font-thin text-white"
            name="contact"
            onSubmit={handleSubmit}
            id="contact-form"
          >
            <label className="block mb-2">
              Nom
              <input
                type="text"
                name="Nom"
                placeholder="Votre Nom"
                className="w-full bg-black border-b border-white p-2 mt-4 mb-4"
                required
              />
            </label>
            <label className="block mb-2">
              Email
              <input
                type="email"
                name="Email"
                placeholder="Votre Email"
                className="w-full bg-black border-b border-white p-2 mt-4 mb-4"
                required
              />
            </label>
            <label className="block mb-4">
              Message
              <textarea
                name="Message"
                placeholder="Votre Message"
                className="w-full h-32 bg-black border border-white p-2 mt-4 mb-4"
                required
              ></textarea>
            </label>

            <div className="flex items-center justify-between">
              <button
                className="g-recaptcha w-18 bg-white font-normal text-black p-2"
                disabled={state.submitting}
                type="submit"
              >
                Envoyer
              </button>

              <div className="flex items-center">
                <p className="font-lato text-white text-xs sm:text-xl font-normal sm:font-thin ml-4 sm:ml-0 sm:mr-4">
                  Ou envoyez-nous un message sur Instagram !
                </p>
                <a
                  href="https://www.instagram.com/muji.lab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-10 cursor-pointer"
                    src="Assets/images/insta_white.png"
                    alt="logo instagram"
                  />
                </a>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* fin section contact  */}

      {/* footer */}

      <div className="font-lato bg-white shadow-custom">
  {/* Main container */}
  <div className="flex flex-col items-center p-8 sm:p-4 sm:h-32 sm:flex-row sm:justify-around">

    {/* Logo, Line, and Instagram Section */}
    <div className="flex items-center mb-8 sm:mb-0">
      <Link href="/">
        <img className="w-24" src="Assets/images/muji_font.png" alt="Logo Muji" />
      </Link>
      <div className="block border-l-4 border-black mx-3 h-8 sm:h-10"></div>
      <a href="https://www.instagram.com/muji.lab" target="_blank" rel="noopener noreferrer">
        <img className="w-8 sm:w-10" src="Assets/images/insta.png" alt="logo instagram" />
      </a>
    </div>

    {/* Email Section */}
    <div className="flex items-center mb-8 sm:mb-0">
      <EmailIcon className="text-black mr-4" />
      <a href="mailto:contact@mujilab.com" target="_blank" className="text-black text-lg sm:text-xl font-light">
        contact@mujilab.com
      </a>
    </div>

    {/* Solo Logo */}
    <img className="w-12 sm:w-16" src="Assets/images/muji_solo.png" alt="Logo Muji" />
  </div>
</div>


      {/* mobile footer */}


      {/* fin mobile footer */}

      {/* fin footer */}
    </main>
  );
};

export default Landing;
