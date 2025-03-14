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
import Footer from "@/components/footer/footer";
import Restaurant from "@/components/restaurant";

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
              <Image width={1920} height={1080} quality={50} src={'/img/header.jpg'} className=" h-screen w-full object-cover" alt="restaurant dazaytouna" title="restaurant dazaytouna"/>
              <div className=" absolute inset-0 bg-black opacity-70 z-0"></div>
              <div className=" absolute z-50 inset-0 flex flex-col gap-10 items-center justify-center container">
                <Image width={500} height={500} src={'/img/logo.png'} className=" w-56 " alt="restaurant dazaytouna" title="restaurant dazaytouna" quality={50}/>
                <h1 className=" text-white text-2xl md:text-5xl font-serif font-bold uppercase text-center">{'Domaine Zaytouna – L’Élégance et la Saveur au Cœur de Marrakech'}</h1>
                  <Link href={'#Réserver'} className="w-fit border-4 border-white bg-white hover:bg-primary hover:text-white duration-700 font-serif text-primary  font-medium text-2xl px-6 py-2">Réserver en ligne</Link>
              </div>
          </div>
          <div className=" flex flex-col-reverse py-20 lg:py-0 lg:flex-row items-center justify-center gap-10 bg-primary bg-[url(/img/bg.svg)] bg-contain   ">
              <div className="lg:w-1/2 bg-primary items-center flex justify-center">
                <Image width={1920} height={1080} src={'/img/restaurant/restaurant_6.jpg'} className=" w-full object-cover   " alt="restaurant dazaytouna" title="restaurant dazaytouna"/>
              </div>
              <div className=" lg:w-1/2 flex flex-col gap-4 px-10 container " >
                  <h1 className=" uppercase text-2xl lg:text-4xl font-serif font-bold text-white">Bienvenue au restaurant Zaytouna</h1>
                  <p className={` ${montserratAlternates.className} text-sm lg:text-base`}>
                    {'Découvrez restaurant Zaytouna, un restaurant où authenticité et raffinement se rencontrent pour offrir une expérience gastronomique inoubliable. Niché dans un cadre enchanteur à Marrakech, notre établissement vous invite à savourer des mets d’exception préparés avec passion.'}
                    {'Que ce soit pour un dîner en amoureux, un repas entre amis ou une occasion spéciale, nous vous accueillons avec une cuisine riche en saveurs et un service impeccable.'}      
                  </p>
                  <Link href={'#Réserver'} className="w-fit border-4 border-white bg-white hover:bg-primary hover:text-white duration-700 font-serif text-primary  font-medium text-2xl px-6 py-2">Réserver en ligne</Link>
              </div>
          </div>
          <Restaurant/>
          <div id="Réserver" className="flex items-center justify-center  bg-white py-20">
            <ReservationForm />
          </div>
         
          <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.5620663698955!2d-7.9810365999999995!3d31.6294962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef60a21a0745%3A0x646a14ebf78b519f!2sDomaine%20zaytouna!5e1!3m2!1sen!2sma!4v1741818217924!5m2!1sen!2sma" frameBorder="0" className=" h-[70vh] w-full"/>
          </div>
          <Footer/>
      </div>
  );
}
