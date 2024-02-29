import React from 'react'
import Image from 'next/image'
import arrowBottom from '@/public/icons/arrowBottom.svg'

function Hero() {
    return (
        <section id={'house'} className='bg-[#F1F1F1] px-[10%] max-2xl:px-[9%] max-xl:px-[8%] max-lg:px-[6%] max-md:px-[4%] max-sm:px-[3%] flex max-sm:flex-col items-center justify-between relative overflow-x-hidden'>
            <div className='w-[150px] max-2xl:w-[140px] max-xl:w-[120px] max-lg:w-[80px] max-md:w-[50px] max-sm:hidden aspect-square bg-black rounded-full absolute left-0 translate-x-[-60%]  bottom-[20px]' />
            <div className='w-[150px] max-2xl:w-[140px] max-xl:w-[120px] max-lg:w-[80px] max-md:w-[50px] max-sm:hidden aspect-square bg-black rounded-full absolute right-0 translate-x-[60%]  top-[20px]' />
            <button className='p-[8px] max-lg:p-[6px] max-md:p-[4px] bg-primary rounded-full aspect-square absolute left-1/2 -translate-x-1/2 bottom-[20px] animate-bounce hover:brightness-75 duration-200 max-sm:hidden'>
                <Image src={arrowBottom} alt='Flecha' width={20}  className='max-lg:w-[18px] max-md:w-[16px]'/>
            </button>


            <div className='max-sm:mt-[20px]'>
                <h1 className='text-[50px] max-2xl:text-[40px] max-xl:text-[34px] max-lg:text-[26px] max-md:text-[23px] max-sm:text-[26px] max-lsm:text-[21px] font-medium max-sm:text-center'>Agencia Digital <br className='max-sm:hidden' /> <span className='text-primary font-semibold'>Especializada</span> no <br /> desenvolvimento do <br className='max-sm:hidden' /> seu <span className='text-primary font-semibold'>negócio</span>.</h1>
                <h2 className='font-fira text-[22px] max-xl:text-[19px] max-lg:text-[17px] max-md:text-[14px] max-sm:text-[16px] max-lsm:text-[15px] mt-[30px] max-lg:mt-[15px] max-sm:mt-[10px] max-lsm:mt-[5px] mb-[80px] max-lg:mb-[0px] max-sm:text-center'>Quem não visto não é  lembrado, deixe-nos fazer parte da história de sua empresa e tenha ótimos resultados!</h2>
            </div>
            <Image src='/images/businessMan.png' alt='Empresário' quality={100} priority width={815} height={721} className='min-w-[700px] max-2xl:min-w-[600px] max-xl:min-w-[500px] max-lg:min-w-[400px] max-md:min-w-[320px] max-sm:min-w-[250px] max-sm:w-[250px] max-sm:mt-[10px]' />
        </section>
    )
}

export default Hero