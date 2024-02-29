import React from 'react'
import Image from 'next/image'


interface Props {
  nameImage: string
  title: string
  description: string
}

function Characteristics({nameImage, title, description}:Props) {
  return (
    <div className='h-full'>
      <Image src={`./icons/${nameImage}.svg`} alt="icone" width={130} height={50} className='max-xl:w-[110px] max-lg:w-[95px]'/>
      <p className='mt-[15px] max-md:mt-[5px] text-[25px] font-medium max-xl:text-[23px] max-lg:text-[21px] max-lsm:text-[18px]'>{title}</p>
      <p className='mt-[5px] font-fira text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-lsm:text-[14px] px-[10px] relative max-md:w-[500px] max-sm:w-fit
      after:h-[80px] max-sm:after:h-[60px] after:w-[3px] after:absolute after:bg-primary after:left-0 after:top-1/2 after:-translate-y-1/2 after:rounded-full'>{description}</p>

    </div>
  )
}

export default Characteristics