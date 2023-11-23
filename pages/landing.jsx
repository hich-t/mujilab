"use client"

import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import emailjs from "emailjs-com"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';


const Landing = () => {

    useEffect(() => {
        // Initialize EmailJS
        emailjs.init("XsLKxGt7C8WnooPP9"); // Use your public key here

        // Dynamically load the reCAPTCHA script
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=6Lc0zBgpAAAAANL3sWhb9HM7cwKz9f9dxvoA_iYW';
        script.addEventListener('load', () => {
            // Script has loaded
            console.log("reCAPTCHA script loaded");
        });
        document.body.appendChild(script);
    }, []);
    const sendEmail = (e) => {
        e.preventDefault();
    
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute('6Lc0zBgpAAAAANL3sWhb9HM7cwKz9f9dxvoA_iYW', { action: 'submit' }).then((token) => {
                if (!token) {
                    console.error("Failed to retrieve reCAPTCHA token");
                    return;
                }
    
                // Attach the token to the form
                const form = document.getElementById('contact-form');
                const tokenInput = document.createElement('input');
                tokenInput.type = 'hidden';
                tokenInput.name = 'g-recaptcha-response';
                tokenInput.value = token;
                form.appendChild(tokenInput);
    
                // Send the email with EmailJS
                emailjs.sendForm('service_z2o67va', 'template_hfnrfjo', form)
                    .then((result) => {
                        console.log('Email successfully sent!', result.text);
                        // You may want to reset the form or give user feedback
                    }, (error) => {
                        console.error('Failed to send email:', error);
                        // Handle errors here
                    });
            });
        });
    };
    

  return (
    <main className="">

        <Head>
        <script src="https://www.google.com/recaptcha/api.js?render=6Lc0zBgpAAAAANL3sWhb9HM7cwKz9f9dxvoA_iYW" async defer></script>
      </Head>

      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        className="h-32 w-full bg-white justify-around font-lato flex items-center"
      >
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
          <a href="#contact-section" className="text-black cursor-pointer">
            Nous Contacter
          </a>
        </div>
      </div>

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
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-start items-center pt-32">
          <p className="text-white text-3xl font-lato font-light mb-12">
            Web - Design - Print
          </p>
          <img
            className="w-5/12 mb-32"
            src="Assets/images/muji_font_blanc.png"
            alt="Logo Muji"
          />
          <p className="text-white text-6xl font-lato font-thin">
            Libérons votre imagination
          </p>
        </div>
      </div>

      <div className="h-auto bg-white font-lato text-black p-20 flex flex-col items-center justify-between">
        <img className="w-24 " src="Assets/images/muji_logo.png" />
        <p className="font-lato text-black font-thin text-2xl mt-4 mb-24">
          Que proposons-nous ?
        </p>
        <div className="flex w-full items-start justify-between">
          <div>
            <img className="w-12 mb-4" src="Assets/images/website.png" />
            <h1 className="font-regular text-xl mb-4">Création de Sites Web</h1>
            <p className="font-light text-lg max-w-xs">
              Grace à Muji Lab boostez votre présence en ligne avec un site web
              clair et efficace.
            </p>
          </div>
          <div>
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
          <div>
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

      <div className="relative">
        <img
          src="Assets/images/bg2.png"
          className="w-full h-1/5 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-start items-center pt-28">
          <div className="flex items-center justify-start mb-40">
            <p className="text-white text-7xl font-lato font-light mb-5 mr-4">
              Web by
            </p>
            <img className="w-72" src="Assets/images/muji_font_blanc.png" />
          </div>
          <p className="text-white text-4xl font-lato font-light mb-2">
            Ne faites pas de compromis
          </p>
          <p className="text-white text-4xl font-lato font-light">
            Entre un design efficace et la flexibilité
          </p>
          <p className="text-white text-2xl font-lato font-thin mt-8">
            Un site web à votre image, beau et acessible sur tous supports
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          src="Assets/images/bg3.png"
          className="w-full h-1/5 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full  flex justify-end items-center ">
          <div className="w-2/4 mr-12">
            <div className="mb-40">
              <p className="text-black text-6xl font-lato font-light">
                Pourquoi un site vitrine ?
              </p>
            </div>
            <p className="text-black text-2xl font-lato font-light mb-2">
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

      <div
        className="bg-black h-auto p-12 flex flex-col items-center justify-center"
        id="contact-section" 
      >
        <p className="font-lato text-white text-5xl font-thin">
          Créeons de la magie ensemble
        </p>

        <form
          className="w-1/2 mt-10 mb-10 font-lato font-thin text-white"
          name="contact"
          onSubmit={sendEmail}
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
              type="submit"
              className="w-18 bg-white font-normal text-black p-2"
            >
              Envoyer
            </button>

            <div className="flex items-center">
              <p className="font-lato text-white font-thin mr-4">
                Ou envoyez-nous un message sur Instagram !
              </p>
              <a
                href="https://www.instagram.com/muji.lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 cursor-pointer"
                  src="Assets/images/insta_white.png"
                  alt="logo instagram"
                />
              </a>
            </div>
          </div>
        </form>
      </div>

      <div className="h-32 p-12 font-lato flex items-center bg-white justify-around shadow-custom">
        <div className="flex items-center">
          <img
            className="w-24"
            src="Assets/images/muji_font.png"
            alt="Logo Muji"
          />

          <div className="border-l-4 border-black mx-10 h-10"></div>

          <a
            href="https://www.instagram.com/muji.lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10    cursor-pointer"
              src="Assets/images/insta.png"
              alt="logo instagram"
            />
          </a>
        </div>

        <div className="flex items-center">
        <EmailIcon className="text-black mr-4" />
        <a href="mailto:contact@mujilab.com" className="text-black text-xl font-lato font-light cursor-pointer">contact@mujilab.com</a>
        </div>

        <img
          className="w-16"
          src="Assets/images/muji_solo.png"
          alt="Logo Muji"
        />
      </div>
    </main>
  );
};

export default Landing;
