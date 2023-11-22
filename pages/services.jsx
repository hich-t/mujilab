"use client"

import Link from "next/link";
import "tailwindcss/tailwind.css";
import "../app/globals.css";
import { useState, useEffect } from 'react';

const Services = () => {

const images = [
"Assets/images/logoLoop/1.png",
"Assets/images/logoLoop/2.png",
"Assets/images/logoLoop/3.png",
"Assets/images/logoLoop/4.png",
"Assets/images/logoLoop/5.png",
"Assets/images/logoLoop/6.png"
]

const [currentImage, setCurrentImage] = useState(0)

useEffect(() => {

    const interval = setInterval(() => {
        setCurrentImage(currentImage => (currentImage + 1) % images.length)
    }, 1500)
    return () => clearInterval(interval)
},[]);





  return (
    <main className="w-full bg-white flex flex-col">
      <div
        style={{ boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}
        className="h-32 w-full bg-white justify-around font-lato flex items-center"
      >
        <Link href="/">
          <img
            className="w-16 cursor-pointer"
            src="Assets/images/muji_logo.png"
            alt="Logo Muji Lab"
          />
        </Link>

        <div className="font-lato flex text-xl font-light">
          <Link href="/services">
            <p className="text-black mr-10 cursor-pointer">Nos Services</p>
          </Link>
          <p className="text-black">Nous Contacter</p>
        </div>
      </div>

      <div className="relative">
        <img src="Assets/images/bg1.png" className="w-full h-128 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30 ">
          <p className="text-white text-9xl font-lato font-light">
            Nos Services
          </p>
        </div>
      </div>

      <div className="w-full h-auto bg-white flex flex-col p-32">
        {/* First Row */}
        <div className="flex flex-row justify-between mb-20 p-12">
          {/* First Service */}
          <div className="flex flex-col items-center w-1/2 px-16">
            <img className="w-96 m-10 object-contain" src="Assets/images/webcreation.png"
                 style={{
                    borderRadius: "10px", boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"
                    }} />
            <h1 className="font-lato text-black font-normal text-2xl mb-4">
              Création de Site WEB
            </h1>
            <p className="font-lato font-bold text-black text-m mb-4">
              à partir de 500€
            </p>
            <p className="font-lato font-light text-black text-lg">
              Plongez dans l'univers digital avec notre expertise en création de
              sites web. <br /><br />
              Que ce soit pour une vitrine d'entreprise, une boutique en ligne,
              ou un blog personnel, nous transformons vos idées en réalités
              numériques.
              <br /><br />
              Notre approche personnalisée assure un design unique, une
              navigation intuitive, et une performance optimale. Faites le
              premier pas vers votre succès en ligne avec nous !
            </p>
          </div>

          {/* Second Service */}
          <div className="flex flex-col items-center w-1/2 px-16">
            <img className="w-96 m-10"       
                src={images[currentImage]} 
                style={{
                    borderRadius: "10px", boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"
                    }}
                />
            <h1 className="font-lato text-black font-normal text-2xl mb-4">
              Identité Visuelle
            </h1>
            <p className="font-lato font-bold text-black text-m mb-4">
              à partir de 150€
            </p>
            <p className="font-lato font-light text-black text-xl">
              Forgez une identité visuelle inoubliable avec notre expertise
              créative.
              <br /><br />
              Nous concevons des logos, des palettes de couleurs, et des
              éléments graphiques qui capturent l'essence de votre marque.
              <br /><br />
              Chaque détail est pensé pour communiquer votre message et pour se
              démarquer dans l'esprit de votre public. Avec nous, créez une
              identité qui raconte votre histoire et qui marque les esprits.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center">
          {/* Third Service */}
          <div className="flex flex-col items-center w-1/2 px-4">
            <img className="w-96 m-10" src="Assets/images/printimg.png" 
                style={{
                    borderRadius: "10px", boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"
                    }}
            />
            <h1 className="font-lato text-black font-normal text-2xl mb-4">
              Design Supports Print
            </h1>
            <p className="font-lato font-bold text-black text-m mb-4">
              à partir de 150€
            </p>
            <p className="font-lato font-light text-black text-xl">
              Élevez vos communications avec notre design de supports print.
              <br /><br />
              De la brochure au dépliant, de l'affiche à la carte de visite,
              nous apportons une touche créative à tous vos supports imprimés.
              <br /><br />
              Notre expertise assure une cohérence visuelle impactante qui
              renforce votre message et votre identité de marque.
              <br /><br />
              Faites la différence avec des créations print qui captent
              l'attention et perdurent.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
