import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import Wrapper from '../../components/Wrapper'
import CartItem from '../../components/CartItem'
import { useSelector } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import { makePaymentRequest } from '../../utils/api';
import GooglePayButton from "@google-pay/button-react";
import { redirect } from 'next/dist/server/api-utils'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const cart = () => {

    //loading after checkout
    const[loading , setLoading] = useState(false);
    const {cartItems} = useSelector((state => state.cart));

    //getting subtotal calculated
    const subTotal = useMemo(() =>{
        return cartItems.reduce((total , val) => total + val.attributes.price , 0 )
    } , [cartItems]);


    // const handlePayment = async () => {
        
    //     try {
    //         setLoading(true);
    //         const stripe = await stripePromise;
    //         console.log("checkout loading")
    //         const res = await makePaymentRequest("/api/orders", {
    //             products: cartItems,
    //         });
    //         await stripe.redirectToCheckout({
    //             sessionId: res.stripeSession.id,
    //         });
    //     } catch (error) {
    //         setLoading(false);
    //         console.error(error);
    //     }
    // };

    return (
    <div className="w-full md:py-20">
    
        <Wrapper>
        { cartItems.length > 0 && (
            <>
        {/* heading */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                <div className="text-[20px] md:text-[34px] mb:5 font-semibold leading-tight">
                    Your Shopping Cart
                </div>
            </div>
        
        {/* cart content  */}
        <div className="flex flex-col lg:flex-row gap-10 py-10 ">
            {/* items */}
            <div className="flex-[2]">
                <div className="text-lg font-bold ">Cart items</div>
                { cartItems.map((item) => (
                    
                     <CartItem key={item.id} data={item} />
                ))}
            </div>
            {/* Summary */}
            <div className="flex-[1]">
                <div className="text-lg font-bold">Summary </div>
                <div className="p-5 my-5 bg-zinc-100 rounded-xl">
                    <div className="flex justify-between px-1">
                        <span className="capitalize text-md md:text-lg font-bold text-black">
                            Subtotal : 
                        </span>
                        <span className="text-md md:text-lg font-semibold text-black/[0.9]">
                        &#8377; {subTotal} </span>
                    </div>
                    <div className="text-sm md:text-md p-4 border-t mt-4 font-medium">The subtotal reflects the total price of your order, including duties and taxes,
                    before any applicable discounts. It does not include delivery costs and international transaction fees.</div>
                </div>

                {/* checkout button  */}
                {/* <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                   onClick={handlePayment}
                >
                Checkout {loading && <img src="/spinner.svg" />}  
                </button> */}
                <div className="w-full py-4 rounded-full text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                <GooglePayButton
                
                environment="TEST"
                paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                {
                    type: 'CARD',
                    parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                 },
            tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
        merchantInfo: {
        merchantId: '12345678901234567890',
        merchantName: 'Demo Merchant',
    },
        transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice:  `1.00`,
        currencyCode: 'INR',
        countryCode: 'IN',
    },
    shippingAddressRequired: true,
    callbackIntents: ['SHIPPING_ADDRESS' ,'PAYMENT_AUTHORIZATION']
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
  onPaymentAuthorized={paymentData => {
    console.log('Payment Authorised success ', paymentData)
    return ({transactionState : 'SUCCESS'})
  }}
  onPaymentDataChanged={paymentData => {
    console.log('on payment data change', paymentData)
    return {}
  }}
  existingPaymentMethodRequired = 'false'
/>
</div>          
            </div>
        </div>
        </>
        )}
                {/* for empty Cart */}
                { 
                    cartItems.length < 1 && (
                       <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            Your cart is empty
                        </span>
                        <span className="text-center mt-4 font-medium   ">
                            Looks like you haven&apos;t added anything in your cart.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black/[0.8] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:bg-black/[0.9] mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                    )
                }
                    
        </Wrapper>
    </div>
  )
}

export default cart;