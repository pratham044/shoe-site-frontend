
import Image from 'next/image';
import React from 'react'
import {MdDelete} from "react-icons/md";
import { removeFromCart, updateCart   } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ data }) => {

    //Using redux 
    // dispatching data to change the state (only way)
    const p = data?.attributes;
    const dispatch = useDispatch();
    // dispatch ( *action* )
    const updateCartItem = (e, key) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            id: data.id,
        };
        dispatch(updateCart(payload));
    };
 
  return (

    <div className="flex py-5 gap-3 md:gap-5 border-b">
    
        <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
           <Image 
            height={120}
            width={120}
            src={p.thumbnail?.data?.attributes?.url}
            alt={p.name}
           />
        </div>

        <div className="w-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between">
        
            <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                {p.name}
            </div>

            <div className="text-sm md:text-md font-medium text-gray-600 block md:hidden">
                {p.subtitle}
            </div>

            <div className="text-sm md:text-md font-bold text-gray-600 mt-3">
                MRP : &#8377;{p.price}
            </div>
        </div>
            {/* for desktop */}
            <div className="text-md font-medium text-gray-600 hidden md:block">
            {p.subtitle}
            </div>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 md:gap-9 text-black/[0.7] text-sm md:text-md">
                    <div className="flex items-center gap-1">
                        <div className="font-semibold"> Size : </div>
                        <select className="hover:text-black hover:bg-black/[0.3] bg-gray-100 font-semibold rounded-sm ">
                            
                            {p.size.data.map((item , i) =>{
                                return (
                                    <option 
                                    key={i} 
                                    value={item.size} 
                                    disabled = { !item.enabled ? true : false}
                                    selected={data.selectedSize === item.size}
                                    className= "bg-black/[0.3] text-white  ">{item.size}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="flex items-center gap-1">
                    <div className="font-semibold"> Quantity : </div>
                        <select
                                className="hover:text-black bg-zinc-100 font-semibold"
                                onChange={(e) => updateCartItem(e, "quantity")}
                            >
                                {Array.from(
                                    { length: 10 },
                                    (_, i) => i + 1
                                ).map((q, i) => {
                                    return (
                                        <option
                                            className= "bg-black/[0.3] text-white"
                                            key={i}
                                            value={q}
                                            selected={data.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    );
                                })}
                            </select>
                    </div>
                </div>
                <MdDelete 
                        onClick={() =>
                            // dispatch(removeFromCart({ id: data.id }))
                            dispatch(removeFromCart({ id: data.id}))
                            }
                className="cursor-pointer  text-red-400 hover:text-red-700  text-[16px] md:text-[24px]"/>
            </div>
        </div>

        
    </div>  
  )
}

export default CartItem