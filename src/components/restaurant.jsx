import { useRef, useEffect } from "react";
import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import restaurant from "../data/restaurant";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const montserratAlternates = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Customize based on your design
    display: 'swap',
});

gsap.registerPlugin(ScrollTrigger);

export default function Restaurant() {
    const imageRefs = useRef([]);
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps', dragFree: true}, 
    [AutoScroll({ playOnInit: true, speed:1 , stopOnInteraction:false, stopOnMouseEnter: false , stopOnFocusIn : false})])
    
    useEffect(() => {
        imageRefs.current.forEach((image, index) => {
            gsap.fromTo(image,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: image,
                        start: "top 80%", 
                        toggleActions: "play none none none",
                    }
                }
            );
        });
    }, []);

    return (
        <div className="py-20 bg-primary bg-[url(/img/bg.svg)] bg-contain  ">
            <h2 className="text-4xl md:text-7xl text-center font-boska font-semibold mb-10 text-white">Un Voyage Culinaire – Goûtez à l’Essence du Maroc            </h2>
            <div className="lg:columns-3 columns-2 container space-y-5 p-5 bg-cover lg:block hidden">
                {restaurant.map((ele, index) => (
                    <div key={index} ref={el => imageRefs.current[index] = el}>
                        <Image
                            className="rounded-2xl border-4 border-white  object-cover object-bottom"
                            src={`/img/restaurant/${ele}`}
                            width={1920}
                            height={1080}
                            alt="restaurant dazaytouna"
                            title="restaurant dazaytouna"
                        />
                    </div>
                ))}
            </div>
            <div className="w-fit overflow-hidden  select-none cursor-grab active:cursor-grabbing block lg:hidden" ref={emblaRef}>
                <div className="flex  w-fit transition-transform duration-700 ease-linear ">
                    {restaurant.map((ele, index) => (
                        <div key={index} className="relative flex-none w-fit pl-10 ">
                            <Image width={1920} height={1080} quality={50}  src={`/img/restaurant/${ele}`} alt="restaurant dazaytouna" title="restaurant dazaytouna"  className="rounded-2xl border-4 border-white w-full h-[20rem] object-cover "/>
                           
                        </div>
                    ))}
                </div>
            </div>
            <p className={`${montserratAlternates.className} text-sm text-white lg:text-lg container text-center pt-10`}>
                Plongez dans un voyage culinaire au restaurant Dazaytouna, où les saveurs marocaines authentiques rencontrent l’élégance gastronomique. Des tajines parfumés aux délicates pâtisseries, chaque plat est préparé avec des ingrédients frais et locaux. <br />
                Savourez les épices du Maroc, dégustez un thé à la menthe et laissez-vous transporter par une expérience unique, que ce soit sous les étoiles ou dans notre cadre raffiné. Dazaytouna, bien plus qu’un restaurant, une invitation au plaisir des sens.              
            </p>
        </div>
    );
}