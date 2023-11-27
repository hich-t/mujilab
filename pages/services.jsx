"use client";

import Link from "next/link";
import "tailwindcss/tailwind.css";
import "../app/globals.css";
import { useState, useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";


const Services = () => {
  const images = [
    "Assets/images/logoLoop/1.png",
    "Assets/images/logoLoop/2.png",
    "Assets/images/logoLoop/3.png",
    "Assets/images/logoLoop/4.png",
    "Assets/images/logoLoop/5.png",
    "Assets/images/logoLoop/6.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    // Set the initial width on client-side
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full bg-white flex flex-col">
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
                alt="Logo Muji Lab"
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
                alt="logo instagram"
              />
            </a>
          </div>
          <div className="font-lato flex text-xl font-light">
            <Link href="/services">
              <p className="text-black mr-10 cursor-pointer">Nos Services</p>
            </Link>
            <a   href="/#contact-form"
                 className="text-black cursor-pointer">
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
                alt="Logo Muji Lab"
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
                alt="logo instagram"
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
                href="/#contact-section"
              className="block font-lato font-light text-xl text-white p-4 m-0 cursor-pointer"
            >
              Nous Contacter
            </a>
          </div>
        )}
      </div>

      {/* menu */}

      {/* banniere */}

      <div className="relative">
        <img
          src="Assets/images/bg1.png"
          className="w-full h-full sm:h-128 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30 ">
          <p className="text-white text-6xl sm:text-9xl font-lato font-light">
            Nos Services
          </p>
        </div>
      </div>

          {/* banniere */}

{/* liste services */}

      <div className="w-full h-auto bg-white flex flex-col p-8 sm:p-32">
        {/* First Row */}
        <div className="flex flex-col sm:flex-row justify-between sm:mb-20 sm:p-12">
          {/* First Service */}
          <div className="flex flex-col items-center sm:w-1/2 sm:px-16">
            <img
              className="w-96 m-10 object-contain"
              src="Assets/images/webcreation.png"
              style={{
                borderRadius: "10px",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
            />
            <h1 className="font-lato text-black font-normal text-2xl mb-4">
              Création de Site WEB
            </h1>
            <p className="font-lato font-light text-black text-lg">
              Plongez dans l'univers digital avec notre expertise en création de
              sites web. <br />
              <br />
              Que ce soit pour une vitrine d'entreprise, une boutique en ligne,
              ou un blog personnel, nous transformons vos idées en réalités
              numériques.
              <br />
              <br />
              Notre approche personnalisée assure un design unique, une
              navigation intuitive, et une performance optimale. Faites le
              premier pas vers votre succès en ligne avec nous !
            </p>
          </div>

          {/* Second Service */}
          <div className="flex flex-col mt-8 sm:mt-0 items-center sm:w-1/2 sm:px-16">
            <img
              className="w-96 m-10"
              src={images[currentImage]}
              style={{
                borderRadius: "10px",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
            />
            <h1 className="font-lato text-black font-normal text-2xl mb-4">
              Identité Visuelle
            </h1>
            <p className="font-lato font-light text-black text-xl">
              Forgez une identité visuelle inoubliable avec notre expertise
              créative.
              <br />
              <br />
              Nous concevons des logos, des palettes de couleurs, et des
              éléments graphiques qui capturent l'essence de votre marque.
              <br />
              <br />
              Chaque détail est pensé pour communiquer votre message et pour se
              démarquer dans l'esprit de votre public. Avec nous, créez une
              identité qui raconte votre histoire et qui marque les esprits.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center">
          {/* Third Service */}
          <div className="flex flex-col mt-8 sm:mt-0 mb-20 sm:mb-0 items-center w-full sm:w-1/2 sm:px-4">
            <img
              className="w-96 m-10"
              src="Assets/images/printimg.png"
              style={{
                borderRadius: "10px",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
            />
            <h1 className="font-lato text-black font-normal text-2xl mb-4">
              Design Supports Print
            </h1>
            <p className="font-lato font-light text-black text-xl">
              Élevez vos communications avec notre design de supports print.
              <br />
              <br />
              De la brochure au dépliant, de l'affiche à la carte de visite,
              nous apportons une touche créative à tous vos supports imprimés.
              <br />
              <br />
              Notre expertise assure une cohérence visuelle impactante qui
              renforce votre message et votre identité de marque.
              <br />
              <br />
              Faites la différence avec des créations print qui captent
              l'attention et perdurent.
            </p>
          </div>
        </div>
      </div>
      {/* fin liste services */}



      {/* footer */}

      <div 
            style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      className="font-lato bg-white shadow-custom">
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
      <a href="mailto:contact@mujilab.com" className="text-black text-lg sm:text-xl font-light">
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

export default Services;
