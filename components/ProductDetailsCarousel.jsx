import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = ({images}) => {
  return ( <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] p-4">
    <Carousel 
    
        autoFocus={true}
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
        showIndicators={false}
        thumbWidth={70}
        className='productCarousel'
        showStatus={false}
    > 
        {images?.map((img) => (
          <img src={img.attributes.url} key={img.id} alt="img.attributes.name" />
        ))}
        {/* <img src="/p1.png"/>
        <img src="/p2.png"/>
        <img src="/p4.png"/>
        <img src="/p5.png"/>
        <img src="/p3.png"/>
        <img src="/p7.png"/>
        <img src="/p6.png"/> */}
    </Carousel>
  </div> 
  )
}

export default ProductDetailsCarousel;