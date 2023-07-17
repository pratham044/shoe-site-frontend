import Link from 'next/link'
import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'

const about = () => {
  return (
        <div className='flex justify-center flex-col p-20 bg-gray-100 text-base md:text-lg'>
        <Fade >

       
            <div className='mx-auto  font-bold text-5xl uppercase mb-2 : md:mb-4'>About US</div>
            <div className="flex font-medium my-3 text-lg ">
            Welcome to our shoe store! We are your ultimate destination for stylish and comfortable footwear. At our store, we believe that finding the perfect pair of shoes is more than just a necessity - it's a fashion statement and a way to express your unique style.
            </div>
           
            <h1 className=' uppercase font-bold text-xl md:text-3xl bg-gray-200'>Our Mission</h1>
            <p className="flex font-medium my-3" >Our mission is to provide our customers with a wide range of high-quality shoes that combine style, comfort, and durability. We strive to offer an exceptional shopping experience by curating a collection of trendy footwear for men, women, and children.</p>
            
            
            <h1 className='uppercase font-extrabold text-xl md:text-3xl bg-gray-200'>Our Collection</h1>
            <p className="flex font-medium my-3">
                News and Updates: Stay up-to-date with the latest happenings in the world of sports. From major tournaments and championships to transfer news and player updates, we provide comprehensive coverage to keep you in the know.
            </p>
            
            
            <h1 className='uppercase font-extrabold text-xl md:text-3xl bg-gray-200'>Quality and Comfort</h1>
            <p className="flex font-medium my-3">
            We understand the importance of comfort when it comes to footwear. That's why we prioritize quality craftsmanship and materials to ensure that our shoes are not only fashionable but also comfortable to wear throughout the day. We source our products from reputable brands known for their commitment to quality and comfort.
            </p>
            
            
            <h1 className='uppercase font-extrabold text-xl md:text-3xl bg-gray-200'>Customer Satisfaction</h1>
            <p className="flex font-medium my-3" >
            Your satisfaction is our top priority. We strive to provide excellent customer service and create a welcoming environment for all our shoppers. Our knowledgeable and friendly staff is always ready to assist you in finding the perfect pair of shoes that meet your style and comfort needs.
            </p>
            <h1 className='uppercase font-extrabold text-xl md:text-3xl bg-gray-200'>Online Shopping Convenience</h1>
            <p className="flex font-medium my-3" >
            In addition to our physical store, we also offer the convenience of online shopping. Our user-friendly website allows you to browse our collection, explore detailed product descriptions, and make secure purchases from the comfort of your home. We offer reliable shipping options to ensure that your shoes reach you in a timely manner.
            </p>
            <h1 className='uppercase font-extrabold text-xl md:text-3xl bg-gray-200'>Stay Updated</h1>
            <p className="flex font-medium my-3" >
            Stay connected with us to stay updated on the latest trends, new arrivals, and exclusive promotions. Join our mailing list or follow us on social media to be the first to know about exciting offers and upcoming collections.
            </p>
            <Link className='uppercase font-extrabold text-xl md:text-3xl bg-gray-200' href={"/contact"}>Contact Us</Link>
            <p className="flex font-medium my-3" >
            We value your feedback, suggestions, and inquiries. If you have any questions or need assistance, our dedicated customer support team is ready to help. Feel free to reach out to us via phone, email, or visit our store in person.
            </p>
            <div>
            Thank you for choosing our shoe store as your trusted footwear provider. We look forward to serving you and helping you find the perfect pair of shoes that elevate your style and keep you comfortable all day long. Step into fashion and step with confidence!
            </div>
            </Fade>
        </div>
  )
}

export default about