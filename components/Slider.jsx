import React , {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {BiLeftArrowAlt } from "react-icons/bi" ;
import {BiRightArrowAlt } from "react-icons/bi" ;
import Link from 'next/link';

const Slider = () => {
  return (  
            <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto px-0 md:px-12 ">
            <Carousel 
                
                autoPlay={true} 
                infiniteLoop={true} 
                showStatus={false} 
                showThumbs={false}
                showIndicators={false}
                useKeyboardArrows={true}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[40px] bg-zinc-600 z-10 flex items-center justify-center cursor-pointer hover:bg-zinc-400 "
                    >
                        <BiLeftArrowAlt className="text-sm text-white md:text-lg" size={35}/>
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[40px] bg-zinc-600 z-10 flex items-center justify-center cursor-pointer hover:bg-zinc-400"
                    >
                        <BiRightArrowAlt className="text-white first-letter:text-sm md:text-lg" size={35} />
                    </div>
                )} >
                <div>
                    <img src="/slide-2.png" className="aspect-[16/10] md:aspect-auto object-cover" />
                    <Link  href="/cart" className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-zinc-200 ">
                        SHOP NOW</Link>
                    
                </div>
                <div>
                <img src="/slide-3.png" className="aspect-[16/10] md:aspect-auto object-cover" />
                    <Link href="/cart"
                    className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        SHOP NOW</Link>
                </div>
                <div>
                <img src="/slide-1.png" className="aspect-[16/10] md:aspect-auto object-cover" />
                    <Link href="/cart" className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        SHOP NOW</Link>
                </div>
                
            </Carousel>
            </div>
  )
}

export default Slider