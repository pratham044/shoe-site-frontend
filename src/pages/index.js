import 'tailwindcss/tailwind.css'
import Slider from '../../components/Slider'
import Wrapper from '../../components/Wrapper'
import ProductCard from '../../components/ProductCard'
import { fetchDataFromApi } from '../../utils/api'
import Link from 'next/link'
import TextSlider from '../../components/TextSlider'
// import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home({ products }) {
  
 
  return (

    <main >
            <Slider />
            <TextSlider />
            <Wrapper>
                {/* heading and paragaph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
                </div>
                {/* heading and paragaph end */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-14 px-5 md:px-20">
                 
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                    
                    </div>
            </Wrapper>
             <Link className=" fixed right-2 bottom-14 items-center justify-center z-[999]" href="https://wa.me/917223933542" target="_blank" > 
            <img  src='/whtapp.gif' className='p-2' alt="whatspp" />
            </Link>
            
    </main>
  )
}


export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
      props: { products },
  };
}