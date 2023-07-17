import React, { useState } from 'react'
import Wrapper from '../../../components/Wrapper'
import ProductDetailsCarousel from '../../../components/ProductDetailsCarousel'
import {IoMdHeartEmpty} from "react-icons/io"
import RelatedProducts from '../../../components/RelatedProducts'
import { fetchDataFromApi } from '../../../utils/api'
import { getDiscount } from '../../../utils/helper'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useDispatch , useSelector } from 'react-redux'
import { addToCart } from '../../../store/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({product , products}) => {

    const p = product?.data?.[0]?.attributes;   

    const dispatch = useDispatch();
    const [selectedSize , setSelectedSize] = useState(null);
    const [showError , setShowError] = useState(false);

    const notify = () => {
        toast.success('Success .Added To Your Cart', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    const sizeReq = () =>{
        toast.error('Size selection is required!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
  return ( 
  <div className='w-full md:py-20'>
    <ToastContainer />
    <Wrapper >
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] ">
            {/* left col */}
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            
        <ProductDetailsCarousel images={p.image.data} />

        </div>
        {/* right col */}
        <div className="flex-[1] py-3 px-2">
            <div className="text-[34px] font-bold mb-3 leading-tight">
                {p.name}
            </div>
            <div className="text-lg font-semibold text-gray-600 mb-6">
                {p.subtitle}
            </div>
                <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : &#8377;{p.price}
                            </p>
                            {p.original_price && (
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#8377;{p.original_price}
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                    {getDiscount(
                                        p.original_price,
                                        p.price
                                    )}
                                        % off
                                    </p>
                                </>
                            )}
            </div>
                <div className="text-md font-medium text-black/[0.7]">
                    incl. of taxes
                </div>
                <div className="text-md font-medium text-black/[0.5] mb-20">
                    {`(Also includes all applicable duties)`}
                </div>
                {/* size section */}
            <div className="mb-10">
                <div className=" mb-2 flex justify-between ">
                <div className=" text-md font-semibold">
                    Select Size
                </div>
                <div className="text-md font-semibold text-sm text-black/[0.5]">
                    Select Guide
                </div>
                </div>

                {/* sizes */}
                <div id="sizesGrid" className="grid grid-cols-3 gap-3">

                    {p?.size?.data?.map((item , i )=>(
                        <div key={i} 
                        className={`border rounded-md text-center py-3 font-semibold 
                        ${item.enabled ? ' hover:bg-zinc-300 cursor-pointer' : 'text-zinc-600 cursor-not-allowed opacity-60 bg-black/[0.1]'} ${selectedSize === item.size? "bg-zinc-300 border-black" : "" }`}
                        onClick={()=>{
                            
                            setSelectedSize(item.size);
                            setShowError(false);
                        }}
                        >
                        {item.size}
                       
                    </div>
                    ))}

                </div>

                { showError && (<div className="text-red-500 mt-1">
                    *Size selection is required
                    
                </div>)}
            </div>

                {/* add to cart */}
                <button className="w-full py-4 rounded-full bg-black/[0.75] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:bg-black/[0.9]"
                onClick={() => {
                    if(!selectedSize){
                        setShowError(true);
                        document.getElementById("sizesGrid").scrollIntoView({
                            block: "center" ,
                            behaviour: "smooth"
                        })
                        {sizeReq()}
                    }
                    else{
                        dispatch(addToCart({
                            ...product?.data?.[0] ,
                            selectedSize,
                            oneQuantityPrice : p.price
                        }))
                        notify();
                    }
                   
                }
                }
                >Add to Cart
                </button>
                    {/* wishlist */}
                <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:bg-gray-200 mb-10">
                    Wishlist
                   <IoMdHeartEmpty size={25} />
                </button>
                <div>
                <div className="text-lg font-bold mb-5">
                        Product Details
                </div>
                    <div className="markdown text-md mb-5">
                    <ReactMarkdown>
                    {p.description}
                    </ReactMarkdown>
                    </div>
                    
                </div>
        </div>
        </div>

            <RelatedProducts  products={products} />
    </Wrapper>
  </div>
  )
}

export default ProductDetails;

export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*");
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));
  
    return {
        paths,
        fallback: false,
    };
  }

export async function getStaticProps({ params: { slug } }) {
  
    const product = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$ne]=${slug}`);
  
    return {
        props: {
            product, products
        },
    };
  }