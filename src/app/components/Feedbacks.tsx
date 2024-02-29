import React from 'react'
import Image from 'next/image'
import quotationMarks from '@/public/icons/quotationMarks.svg'
import businessMan2 from '@/public/images/businessMan2.png'

function Feedbacks() {
    const feedback = "Contratar essa agência digital para impulsionar nossa loja de roupas foi uma decisão incrível! Desde o primeiro contato, sua equipe demonstrou profissionalismo e comprometimento em entender nossas necessidades específicas. O trabalho deles superou todas as expectativas - desde a criação de uma identidade visual única até a implementação de estratégias de marketing digital eficazes."
    return (
        <section className='px-[10%] max-2xl:px-[9%] max-xl:px-[8%] max-lg:px-[6%] max-md:px-[4%] max-sm:px-[3%] flex flex-col items-center'>
            <div className='w-[50%] h-[3px] bg-primary mt-[60px] mb-[30px] rounded-full' />
            <p className='font-medium text-[34px] max-2xl:text-[32px] max-xl:text-[30px] max-lg:text-[27px] max-md:text-[24px] max-sm:text-[22px] max-lsm:text-[19px]'>O que nossos <span className='text-primary'>clientes</span> falam?</p>

            <div className='mt-[50px] max-lg:mt-[40px] max-sm:mt-[30px] w-[800px] max-xl:w-[700px] max-lg:w-[550px] max-md:w-[450px] max-sm:w-[400px] max-lsm:w-full shadow-[0_0px_10px_rgba(0,0,0,0.3)] rounded-[10px] sm:pl-[80px] pr-[30px] max-lg:pr-[20px] max-sm:pr-[10px] max-sm:pl-[10px] py-[30px] max-lg:py-[25px] max-md:py-[20px] max-sm:py-[10px] flex max-sm:flex-col items-center h-fit relative'>
                <div className='bg-[#F1F1F1] absolute rounded-[10px] left-[-130px] max-lg:left-[-90px] max-md:left-[-80px] sm:shadow-[0_0px_10px_rgba(0,0,0,0.3)] max-sm:static'>
                    <Image src={businessMan2} alt='Empresário' className='w-[200px] max-lg:w-[180px] max-md:w-[150px]'/>
                </div>

                <p className='text-[20px] max-lsm:text-[18px] sm:hidden'>Lucas Gean</p>


                <div className='flex flex-col'>
                    <p className='bg-[#F1F1F1] w-fit px-[20px] py-[6px] text-[22px] max-lg:text-[20px] rounded-[10px] max-sm:hidden'>Empresário</p>
                    <Image src={quotationMarks} alt='Aspas' width={30} className='sm:mt-[15px] max-sm:w-[25px] max-lsm:w-[20px]'/>
                    <p className='px-[30px] max-lg:px-[20px] max-md:px-[10px] max-sm:px-[5px] font-fira text-[18px] max-lg:text-[16px] max-sm:text-[15px] max-lsm:text-[14px]'>{feedback}</p>
                    <Image src={quotationMarks} alt='Aspas' width={30}className='transform scale-x-[-1] self-end max-sm:w-[25px] max-lsm:w-[20px]'/>
                    <p className='text-[20px] max-sm:hidden'>Lucas Gean</p>
                </div>
            </div>

        </section>
    )
}

export default Feedbacks