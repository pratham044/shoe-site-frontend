import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getDiscount } from '../utils/helper'
import { Fade } from 'react-awesome-reveal'
import { Zoom } from 'react-awesome-reveal'
const ProductCard = ({data:{ attributes : p,id}}) => {
  
  return (
    
        <Link
        href={`/product/${p.slug}`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
>
    
    <Fade>
    <Image
        width={500}
        height={500}
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
    />
    </Fade>
  
    
    <Fade>
    <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-semibold leading-tight">{p.name}</h2>
        <div className="flex items-center text-black/[0.8]">
            <p className="mr-2 text-lg font-semibold hover:text-black/[0.9]">
                &#8377;{p.price}
            </p>

           
           {p.original_price && (
                <>
                    <p className="text-base  font-medium line-through leading-tight">
                        &#8377;{p.original_price}
                    </p>
                   
                   <p className="ml-auto text-sm font-medium text-green-500 leading-tight hover:text-green-600">
                      
                        {getDiscount(
                            p.original_price,
                            p.price
                        )}
                        %off
                        
                    </p>
                  
                </>
            )}
         
        </div>
    </div>
    </Fade>
</Link>
    
);

}

export default ProductCard
