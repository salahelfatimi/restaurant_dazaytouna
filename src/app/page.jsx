'use client'
import Image from "next/image";
import { useEffect } from "react";
import Lenis from 'lenis'
import { Montserrat_Alternates } from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import zaytouna from "@/data/zaytouna";
import ReservationForm from "@/components/ReservationForm";
import Link from "next/link";

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Customize based on your design
  display: 'swap',
})
export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps', dragFree: true}, 
  [AutoScroll({ playOnInit: true, speed:1 , stopOnInteraction:false, stopOnMouseEnter: false , stopOnFocusIn : false})])
    
  useEffect( () => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  return (
      <div>
          <div className=" relative">
              <Image width={1920} height={1080} src={'/img/header.jpg'} className=" h-screen" alt="Domaine Zaytouna" title="Domaine Zaytouna"/>
              <div className=" absolute inset-0 bg-black opacity-70 z-0"></div>
              <div className=" absolute z-50 inset-0 flex flex-col gap-10 items-center justify-center container">
                <Image width={500} height={500} src={'/img/logo.png'} className=" w-56 " alt="Domaine Zaytouna" title="Domaine Zaytouna"/>
                <h1 className=" text-white text-2xl md:text-5xl font-serif font-bold uppercase text-center">{'Domaine Zaytouna – L’Élégance et la Saveur au Cœur de Marrakech'}</h1>
                <Link href={'#Réserver'} className={`bg-primary hover:bg-white hover:text-primary duration-700 font-serif text-white font-medium text-3xl px-6 py-2`}>Réserver en ligne</Link>
              </div>
          </div>
          <div className=" flex flex-col lg:flex-row items-center justify-center gap-10   ">
              <div className="lg:w-1/2 bg-primary items-center flex justify-center px-10">
                <Image width={500} height={500} src={'/img/logo_white.png'} className="  " alt="Domaine Zaytouna" title="Domaine Zaytouna"/>
              </div>
              <div className=" lg:w-1/2 flex flex-col gap-4 px-10 container" >
                  <h1 className=" uppercase text-2xl lg:text-4xl font-serif font-bold text-primary">Bienvenue au Domaine Zaytouna</h1>
                  <p className={` ${montserratAlternates.className} text-sm lg:text-base`}>
                    {'Découvrez Domaine Zaytouna, un restaurant où authenticité et raffinement se rencontrent pour offrir une expérience gastronomique inoubliable. Niché dans un cadre enchanteur à Marrakech, notre établissement vous invite à savourer des mets d’exception préparés avec passion.'}
                    {'Que ce soit pour un dîner en amoureux, un repas entre amis ou une occasion spéciale, nous vous accueillons avec une cuisine riche en saveurs et un service impeccable.'}      
                  </p>
                  <Link href={'#Réserver'} className="w-fit border-4 border-primary bg-primary hover:bg-white hover:text-primary duration-700 font-serif text-white font-medium text-2xl px-6 py-2">Réserver en ligne</Link>
              </div>
          </div>
          <div className="py-20 ">
            <h2 className="text-2xl md:text-5xl text-center font-serif font-semibold mb-10 text-primary container">Découvrez l’Univers du Domaine Zaytouna</h2>
            <div className="w-fit overflow-hidden bg-white select-none cursor-grab active:cursor-grabbing " ref={emblaRef}>
                  <div className="flex  w-fit transition-transform duration-700 ease-linear ">
                      {zaytouna.map((ele, index) => (
                          <div key={index} className="relative flex-none w-fit pl-20 ">
                              <Image width={500} height={500} quality={50} src={`/img/zaytouna/${ele.src}`} alt="Domaine Zaytouna" title="Domaine Zaytouna" className="rounded-2xl border-4 border-primary w-full h-[20rem] object-cover "/>
                            
                          </div>
                      ))}
                  </div>
              </div>
              <p className={`${montserratAlternates.className} text-xs md:text-lg container text-center pt-10`}>
              {"Laissez-vous envoûter par l’élégance et l’authenticité de notre restaurant. Un lieu où chaque détail est pensé pour émerveiller vos sens."}
              </p>
          </div>
          <div id="Réserver" className="flex items-center justify-center  bg-white py-20">
            <ReservationForm />
          </div>
          <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.5620663698955!2d-7.9810365999999995!3d31.6294962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef60a21a0745%3A0x646a14ebf78b519f!2sDomaine%20zaytouna!5e1!3m2!1sen!2sma!4v1741818217924!5m2!1sen!2sma" frameborder="0" className=" h-[70vh] w-full"/>
          </div>
          
      </div>
  );
}
