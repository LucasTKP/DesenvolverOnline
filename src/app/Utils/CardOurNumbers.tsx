import React from 'react'
import Image from 'next/image'

interface Props {
    nameImage: string
    description: string
}
function CardOurNumbers({ nameImage, description}:Props) {
  return (
    <div className='bg-white rounded-[10px] border-[2px] border-black p-[5px] w-[30%] max-w-[400px] max-sm:min-w-[220px]'>
        <Image src={`./icons/${nameImage}.svg`} alt='Imagem' width={350} height={400} className='w-[100%]'/>
        <p className='text-center font-fira font-medium text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px]'>{description}</p>
    </div>
  )
}

export default CardOurNumbers