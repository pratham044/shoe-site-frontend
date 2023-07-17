import React , {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const TextSlider = () => {
    return (
        <div className="w-full relative font-semibold p-1">
            <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false} 
            showThumbs={false}
            showIndicators={false}
            transitionTime={3}
            interval={4000}
            showArrows={false}
            stopOnHover={true}
           
            >
                
                <div className="flex items-center justify-center">
                    {/* <img src="/slide-1.png" className='h-10' /> */}
                    <div>FREE AND EASY RETURNS. <Link href="/about" className="underline"> SEE DETAILS </Link></div>
                    
                </div>
                <div className="bg-red flex items-center justify-center" >
                    {/* <img src="/slide-2.png" /> */}
                    <div >FREE SHIPPING ON ORDERS OVER $50. <Link href="/about" className="underline"> LEARN MORE </Link></div>
                </div>
                <div className="bg-red flex items-center justify-center">
                    {/* <img src="/slide-3.png"  /> */}
                    <div >JOIN THE NIKE FAM. EXPLORE CAREERS AT NIKE. <Link href="/contact" className="underline"> JOIN US </Link></div>
                </div>
                <div className="bg-red flex items-center justify-center">
                    {/* <img src="/slide-3.png"  /> */}
                    <div >KNOW MORE ABOUT NIKE. <Link href="/about" className="underline"> ABOUT US</Link></div>
                </div>
            </Carousel>
        </div>
    )
}
export default TextSlider;