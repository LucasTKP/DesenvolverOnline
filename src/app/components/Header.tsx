import React from 'react'
import Image from 'next/image'
import logoHeader from '@/public/icons/logoHeader.svg'

function Header() {
    return (
        <section className='bg-[#F1F1F1] px-[10%] max-2xl:px-[9%] max-xl:px-[8%] max-lg:px-[6%] max-md:px-[4%]'>
            <div className='flex items-center justify-between'>
                <Image src={logoHeader} alt='logo' className='z-[1] w-[300px] max-lg:w-[250px] max-md:w-[220px] max-sm:mx-auto' />
                <div className='flex items-center text-[22px] max-lg:text-[19px] max-md:text-[18px] font-medium gap-[50px] max-lg:gap-[30px] max-md:gap-[20px] max-sm:hidden'>
                    <a href='#home' className='group relative after:w-[0px] after:h-[2px] after:bg-primary after:absolute after:rounded-full after:duration-200 hover:after:w-full after:bottom-[2px] after:left-0'>
                        <p className='duration-200 group-hover:opacity-75'>Home</p>
                    </a>

                    <a href='#about' className='group relative after:w-[0px] after:h-[2px] after:bg-primary after:absolute after:rounded-full after:duration-200 hover:after:w-full after:bottom-[2px] after:left-0'>
                        <p className='duration-200 group-hover:opacity-75'>Sobre nós</p>
                    </a>

                    <a href='#services' className='group relative after:w-[0px] after:h-[2px] after:bg-primary after:absolute after:rounded-full after:duration-200 hover:after:w-full after:bottom-[2px] after:left-0'>
                        <p className='duration-200 group-hover:opacity-75'>Serviços</p>
                    </a>

                    <a href='#contact' className='group relative after:w-[0px] after:h-[2px] after:bg-primary after:absolute after:rounded-full after:duration-200 hover:after:w-full after:bottom-[2px] after:left-0'>
                        <p className='duration-200 group-hover:opacity-75'>Contato</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Header