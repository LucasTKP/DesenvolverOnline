import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
        <section className='bg-[#F1F1F1] px-[10%] max-2xl:px-[9%] max-xl:px-[8%] max-lg:px-[6%] max-md:px-[4%] max-sm:px-[3%] flex max-sm:flex-col items-center justify-between'>
            <div className='max-sm:mt-[20px]'>
                <h1 className='text-[50px] max-2xl:text-[40px] max-xl:text-[34px] max-lg:text-[26px] max-md:text-[23px] max-sm:text-[26px] max-lsm:text-[21px] font-medium max-sm:text-center'>Agencia Digital <br className='max-sm:hidden'/> <span className='text-primary font-semibold'>Especializada</span> no <br /> desenvolvimento do <br className='max-sm:hidden'/> seu <span className='text-primary font-semibold'>negócio</span>.</h1>
                <h2 className='font-fira text-[22px] max-xl:text-[19px] max-lg:text-[17px] max-md:text-[14px] max-sm:text-[16px] max-lsm:text-[15px] mt-[30px] max-lg:mt-[15px] max-sm:mt-[10px] max-lsm:mt-[5px] mb-[80px] max-lg:mb-[0px] max-sm:text-center'>Quem não visto não é  lembrado, deixe-nos fazer parte da historia de sua empresa e tenha ótimos resultados!</h2>
            </div>
            <Image src='/images/businessMan.png' alt='Empresário' quality={100} priority width={815} height={721} className='min-w-[700px] max-2xl:min-w-[600px] max-xl:min-w-[500px] max-lg:min-w-[400px] max-md:min-w-[320px] max-sm:min-w-[250px] max-sm:w-[250px] max-sm:mt-[10px]' />
        </section>
    )
}

export default Hero