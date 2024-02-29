import React from 'react'
import CardService from '../Utils/CardService'

function Services() {
    return (
        <section id='services' className='px-[10%] max-2xl:px-[9%] max-xl:px-[8%] max-lg:px-[6%] max-md:px-[4%] max-sm:px-[3%] pt-[50px]'>
            <p className='font-medium text-[34px] max-2xl:text-[32px] max-xl:text-[30px] max-lg:text-[27px] max-md:text-[24px] max-sm:text-[22px] max-lsm:text-[19px]'>Serviços prestados</p>
            <div className='grid grid-cols-3 max-sm:grid-cols-2 gap-[30px] max-sm:gap-[20px] mt-[25px] max-md:mt-[20px] max-sm:justify-items-center'>
                <CardService nameImage='light' description='Consultoria' />
                <CardService nameImage='meeting' description='Treinamentos' classname='sm:justify-self-center'/>
                <CardService nameImage='bigFone' description='Tráfego Pago' classname='sm:justify-self-end'/>
                <CardService nameImage='bigInfo' description='Implementação <br /> de metodologias' />
                <CardService nameImage='site' description='Desenvolvimento <br /> de sites' classname='sm:justify-self-center' />
                <CardService nameImage='instagram' description={`Desenvolvimento de <br /> redes sociais`} classname='sm:justify-self-end'/>
            </div>
        </section>
    )
}

export default Services