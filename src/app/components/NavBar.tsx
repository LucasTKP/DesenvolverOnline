import React from 'react'
import Image from 'next/image'
import iconEmail from '@/public/icons/email.svg'
import iconHouse from '@/public/icons/house.svg'
import iconClipBoard from '@/public/icons/clipboard.svg'
import iconInfo from '@/public/icons/info.svg'


function NavBar() {
    return (
        <section className='flex items-center justify-center fixed w-[100%] left-0 bottom-[20px] sm:hidden z-50'>
            <div className='w-[100%] max-w-[300px] bg-[#ECECEC] rounded-full  flex items-center justify-between p-[10px] border-[#000] border-[2px]'>
                <a href='#home'>
                    <Image src={iconHouse} alt='casa' width={30} />
                </a>

                <a href='#about'>
                    <Image src={iconClipBoard} alt='prancheta' width={30} />
                </a>

                <a href='#services'>
                    <Image src={iconInfo} alt='informação' width={30} />
                </a>

                <a href='#contact'>
                    <Image src={iconEmail} alt='email' width={30} />
                </a>
            </div>
        </section>
    )
}

export default NavBar