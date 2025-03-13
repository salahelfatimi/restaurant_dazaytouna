'use client'
import { Facebook, Instagram, Linkedin, Mail, Map, MapPin, Phone } from "lucide-react";
import Link from "next/link";


export default function Footer(){
    return(
      <footer className="flex flex-col " >
        <div className="bg-[#1E1E1E] py-8">
            <div className=" flex flex-col gap-4 lg:flex-row items-center justify-between  container ">
                <p className={`select-none flex  flex-col lg:flex-row gap-1   items-center font-medium capitalize text-center lg:text-start text-white `}>
                    Copyright &copy; {new Date().getFullYear()} . Touts les droits sont réservés 
                    <span className=" text-primary   ">
                        Restaurant Zaytouna
                    </span>
                </p>
                <div className="flex gap-6">
                    <Instagram size={30} className=" stroke-[#fff]" />
                </div>
            </div>
        </div>
        
      </footer>
      
    )
}