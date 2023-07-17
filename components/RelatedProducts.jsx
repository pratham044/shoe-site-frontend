import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';

const RelatedProducts = ({products}) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1023, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] mb:mb-0 p-4">
        <div className="text-2xl font-bold mb-5 ">
            You Might Also Like
        </div>
        <div className="p-4">
        <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true} 
        containerClass="-mx-[10px]"
        itemClass="px-[12px]"
        keyBoardControl={true} >
          
          {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
          ))}
    </Carousel>
        </div>
        
    </div>
  )
}

export default RelatedProducts