'use client'
import React from 'react';
import { PhoneMask } from '../Utils/masks';

function Forms() {
    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value = PhoneMask(event.target.value);
    };

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    return (
        <section id='contact' className='px-[10%] max-2xl:px-[9%] max-xl:px-[8%] max-lg:px-[6%] max-md:px-[4%] max-sm:px-[3%] pt-[50px] flex flex-col items-center'>
            <p className='font-medium text-[34px] max-2xl:text-[32px] max-xl:text-[30px] max-lg:text-[27px] max-md:text-[24px] max-sm:text-[22px] max-lsm:text-[19px]'>Formulário para contato</p>
            <form className='flex flex-col items-center max-sm:w-full max-sm:max-w-[350px]' onSubmit={sendEmail}>
                <label className='mt-[20px] flex flex-col w-full'>
                    <p className='text-[18px] max-sm:text-[16px] font-medium text-[#707070] cursor-pointer'>Nome da empresa</p>
                    <input type='name' placeholder='Nome...' className='duration-200 border-[2px] border-[#707070] focus:border-black rounded-[4px] text-[20px] max-sm:text-[18px] w-[500px] max-sm:w-full px-[5px] py-[3px] text-[#707070] placeholder:text-[#707070]' />
                </label>

                <label className='mt-[15px] flex flex-col w-full'>
                    <p className='text-[18px] max-sm:text-[16px] font-medium text-[#707070] cursor-pointer'>Email para contato</p>
                    <input type='email' placeholder='Email...' className='duration-200 border-[2px] border-[#707070] focus:border-black rounded-[4px] text-[20px] max-sm:text-[18px] w-[500px] max-sm:w-full px-[5px] py-[3px] text-[#707070] placeholder:text-[#707070]' />
                </label>

                <label className='mt-[15px] flex flex-col w-full'>
                    <p className='text-[18px] max-sm:text-[16px] font-medium text-[#707070] cursor-pointer'>Telefone para contato</p>
                    <input maxLength={15} onChange={handlePhoneChange} placeholder='Telefone...' className='duration-200 border-[2px] border-[#707070] focus:border-black rounded-[4px] text-[20px] max-sm:text-[18px] w-[500px] max-sm:w-full px-[5px] py-[3px] text-[#707070] placeholder:text-[#707070]' />
                </label>

                <button type="submit" className='mt-[20px] bg-[#707070] px-[15px] py-[5px] text-[20px] max-sm:text-[18px] text-white rounded-[4px] hover:brightness-75 duration-200'>Enviar</button>
            </form>
        </section>
    )
}

export default Forms;
