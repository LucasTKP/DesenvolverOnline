import React from 'react'
import CardOurNumbers from '../Utils/CardOurNumbers'



function OurNumbers() {
    return (
        <section className='px-[10%] max-2xl:px-[9%] max-xl:px-[8%] max-lg:px-[6%] max-md:px-[4%] max-sm:px-[3%] bg-[#88DCC0] mt-[50px] py-[50px] max-xl:py-[40px] max-lg:py-[30px] max-md:py-[20px]'>
            <p className='font-semibold text-[34px] max-2xl:text-[32px] max-xl:text-[30px] max-lg:text-[27px] max-md:text-[24px] max-sm:text-[22px] max-lsm:text-[19px] text-center'>Nossos Números falam <br /> por si mesmo</p>
            <div className='flex mt-[15px] justify-between max-sm:overflow-x-auto gap-x-[20px] py-[5px]'>
                <CardOurNumbers nameImage='buildSite' description='+30 sites desenvolvidos' />
                <CardOurNumbers nameImage='getClient' description='+150 clientes atendidos' />
                <CardOurNumbers nameImage='getMoney' description='+2 milhões faturados' />
            </div>
        </section>
    )
}

export default OurNumbers