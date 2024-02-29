import React from 'react'
import Image from 'next/image'

interface Props {
    nameImage: string
    description: string
    classname?: string
}
function CardService({nameImage, description, classname}:Props) {
  return (
    <div className={`border-[2px] border-primary w-full max-w-[300px] max-xl:max-w-[270px] max-lg:max-w-[210px] max- flex flex-col items-center pt-[20px] pb-[10px] px-[10px] max-lg:px-[6px] max-lsm:px-[4px] rounded-[10px] ${classname}`}>
        <Image src={`./icons/${nameImage}.svg`} alt='Icone' width={100} height={50} className='max-md:w-[80px] max-lsm:w-[60px]'/>
        <p dangerouslySetInnerHTML={{ __html: description }} className='font-fira text-center mt-[20px] font-medium text-[18px] max-lg:text-[17px] max-md:text-[14px] max-lsm:text-[14px]'/>
    </div>
  )
}

export default CardService