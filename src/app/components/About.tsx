import React from 'react'
import Characteristics from '../Utils/Characteristics'

function About() {
    const characteristics1 = {
        title:'Atendimento Personalizado',
        description: 'Após a análise inicial feita em conjunto, desenvolveremos uma estratégia específica para impulsionar seu negócio.'
    }

    const characteristics2 = {
        title:'Implementação',
        description: 'Nossa equipe de especialistas executará a estratégia planejada para atender às necessidades da sua empresa.'
    }

    const characteristics3 = {
        title:'Métricas',
        description: 'Analisaremos os resultados diariamente e manteremos você informado, priorizando transparência e ajustes.'
    }

    const characteristics4 = {
        title:'Pós-Venda',
        description: 'Nosso serviço de pós-venda de excelência oferecerá suporte contínuo e responderá suas dúvidas após a conclusão do projeto.'
    }



    return (
        <section className='px-[10%] max-2xl:px-[9%] max-xl:px-[8%] max-lg:px-[6%] max-md:px-[4%] max-sm:px-[3%] pt-[50px] max-lg:pt-[40px] max-sm:pt-[30px]'>
            <p className='text-primary font-medium text-[30px] max-2xl:text-[28px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] max-sm:text-[20px] max-lsm:text-[18px]'>Nosso Diferencial:</p>
            <h4 className='font-fira font-semibold text-[34px] max-2xl:text-[32px] max-xl:text-[30px] max-lg:text-[27px] max-md:text-[24px] max-sm:text-[22px] max-lsm:text-[19px]  mt-[30px] max-lg:mt-[20px] max-sm:mt-[10px]'>4 Características que só nós <br className='max-lsm:hidden'/> podemos te oferecer:</h4>
            
            <div className='mt-[50px] max-lg:mt-[30px] grid grid-cols-2 max-md:grid-cols-1 gap-y-[40px] max:md:gap-y-[50px] gap-x-[70px] max-xl:gap-x-[30px] max-lg:gap-x-[10px] mx-[20px] max-xl:mx-[10px]'>
                <Characteristics nameImage='balls01' title={characteristics1.title} description={characteristics1.description}/>
                <Characteristics nameImage='balls02' title={characteristics2.title} description={characteristics2.description}/>
                <Characteristics nameImage='balls03' title={characteristics3.title} description={characteristics3.description}/>
                <Characteristics nameImage='balls04' title={characteristics4.title} description={characteristics4.description}/>
            </div>
        </section>
    )
}

export default About