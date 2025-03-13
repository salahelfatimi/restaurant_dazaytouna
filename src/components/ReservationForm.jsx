'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Minus, Plus } from "lucide-react";
import { Montserrat_Alternates } from "next/font/google";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const montserratAlternates = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
});

export default function ReservationForm() {
    const [date, setDate] = useState(new Date());
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAdultsChange = (delta) => {
        setAdults(prev => Math.max(1, prev + delta));
    };

    const handleChildrenChange = (delta) => {
        setChildren(prev => Math.max(0, prev + delta));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validation
        if (!name || !tel || !date) {
            toast.warning('Veuillez remplir tous les champs obligatoires.');
            setIsSubmitting(false);
            return;
        }

        const reservationData = {
            date: date.toLocaleDateString(),
            adults,
            children,
            name,
            tel,
        };

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            if (response.ok) {
                toast.success('Réservation soumise avec succès!');
                // Reset form data after successful submission
                setName('');
                setTel('');
                setDate(new Date());
                setAdults(1);
                setChildren(0);
            } else {
                toast.error('Échec de la soumission de la réservation.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Une erreur s\'est produite lors de la soumission de la réservation.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className=''>
            <div className="bg-primary p-10 bg-[url(/img/bg.svg)] bg-cover ">
                <div className="min-h-[10rem] container w-full flex items-center flex-col justify-center">
                    <h2 className="text-2xl lg:text-5xl font-semibold uppercase text-white text-center mb-6 font-serif">Réserver une table</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-4 px-10 shadow-2xl bg-white py-10">
                        {/* Nom and Téléphone at the top */}
                        <div className="flex flex-col md:flex-col gap-6">
                            <div className="flex flex-col items-center justify-center">
                                <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Nom</h4>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="border-primary border-2 rounded text-lg py-2 text-black focus:outline-none w-full text-center"
                                    required
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Téléphone</h4>
                                <input
                                    type="tel"
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                    className="border-primary border-2 rounded text-lg py-2 text-black focus:outline-none w-full text-center"
                                    required
                                />
                            </div>
                        </div>

                        {/* Adultes, Enfants, and Date du livre at the bottom */}
                        <div className="flex flex-col md:flex-col gap-6">
                            <div className="flex flex-col items-center justify-center">
                                <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Adultes</h4>
                                <div className="flex flex-row items-center justify-center gap-6">
                                    <button type="button" onClick={() => handleAdultsChange(-1)}><Minus /></button>
                                    <input type="number" name="Adults" value={adults} onChange={(e) => setAdults(e.target.value)} className="bg-transparent text-2xl lg:text-4xl font-serif text-black focus:outline-none w-full text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                    <button type="button" onClick={() => handleAdultsChange(1)}><Plus /></button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Enfants</h4>
                                <div className="flex flex-row items-center justify-center gap-6">
                                    <button type="button" onClick={() => handleChildrenChange(-1)}><Minus /></button>
                                    <input type="number" name="Children" value={children} onChange={(e) => setChildren(e.target.value)} className="bg-transparent text-2xl lg:text-4xl font-serif text-black focus:outline-none w-full text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                    <button type="button" onClick={() => handleChildrenChange(1)}><Plus /></button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Date du livre</h4>
                                <DatePicker
                                    selected={date}
                                    onChange={(date) => setDate(date)}
                                    className="bg-transparent text-2xl lg:text-4xl font-serif w-full text-black focus:outline-none text-center"
                                    dateFormat="dd MMMM"
                                    required
                                />
                            </div>
                        </div>
                    </form>

                    {/* Book Now Button */}
                    <div className="container w-full flex items-center justify-center mx-auto px-4 mt-6">
                        <button type="submit" onClick={handleSubmit} disabled={isSubmitting} className={`${montserratAlternates.className} bg-white font-bold capitalize text-2xl text-primary py-2 px-6 rounded-full hover:bg-primary hover:text-white border-2 border-white transition duration-300`}>
                            {isSubmitting ? 'Submitting...' : 'Book Now'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}