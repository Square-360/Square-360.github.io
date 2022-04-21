import React from 'react'
import img from "./../../../Images/Empty.png"

function EmptySection(){
    return(
        <section className="sm:mt-[50px] lg:mt-[120px] sm:px-[15px] lg:px-0">
            <h1 className='text-[36px] font-bold text-[#b8abab] text-center 
            sm:text-[26px] md:text-[32px] lg:text-[36px]'>Ой, cдесь пока что пусто :(</h1>
            <img src={img} alt="" className='mx-auto sm:mt-[50px] lg:mt-[80px] sm:w-[190px] lg:w-[237px]' />
        </section>
    )
}

export default EmptySection