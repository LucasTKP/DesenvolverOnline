'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/icons/smallLogo.svg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Footer() {
    function handleEmail() {
        const email = 'desenvolveronlinesuporte@gmail.com';
        navigator.clipboard.writeText(email)
            .then(() => {
                toast.success("Email copiado com sucesso!");
            })
            .catch((error) => {
                console.error('Erro ao copiar o endereço de e-mail:', error);
            });
    }
    return (
        <footer className='flex flex-col py-[20px] mt-[100px]'>
            <ToastContainer autoClose={2000} />
            <div className='flex gap-[40px] items-start justify-between px-[10%] max-2xl:px-[9%] max-xl:px-[8%] max-lg:px-[6%] max-md:px-[4%] max-sm:px-[3%]'>
                <Image src={logo} alt="logo" width={70} className='max-sm:hidden'/>
                <div className='flex flex-col text-[18px] max-sm:text-[16px] '>
                    <p className='text-[20px] max-sm:text-[18px] font-medium'>Menu</p>

                    <a href='#home' className='mt-[10px] duration-200 hover:opacity-80'>Home</a>
                    <a href='#about' className='duration-200 hover:opacity-80 whitespace-nowrap'>Sobre nós</a>
                    <a href='#services' className='duration-200 hover:opacity-80'>Serviços</a>
                    <a href='#contact' className='duration-200 hover:opacity-80'>Contato</a>
                </div>

                <div className='flex flex-col text-[18px] max-sm:text-[16px] '>
                    <p className='text-[20px] max-sm:text-[18px]  font-medium'>Contato</p>

                    <a href='https://wa.me/5516994503468?text=Ol%C3%A1+Felipe%2C+tudo+joia%3F' className='mt-[10px] duration-200 hover:opacity-80'>+55 (16) 99450-3468</a>
                    <p onClick={handleEmail} className='duration-200 hover:opacity-80 cursor-pointer overflow-hidden whitespace-nowrap w-full max-lsm:w-[200px] overflow-ellipsis'>desenvolveronlinesuporte@gmail.com</p>
                </div>

            </div>
            <div className='w-full h-[3px] bg-black my-[20px]' />
            <p className='text-center max-sm:text-[14px]'>Desenvolver Online © 2024 <br className='lsm:hidden' />- Todos direitos reservados</p>
        </footer>
    )
}

export default Footer