import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Wrapper from '../../../components/Wrapper';
import ProductCard from '../../../components/ProductCard';
import useSWR from 'swr'
import { fetchDataFromApi } from '../../../utils/api';
const maxproducts = 3 ;


const Category = ({category , products , slug }) => {
   
    const [pageIndex, setPageIndex] = useState(1);
    const {query} = useRouter();


    useEffect(()=>{ 
        setPageIndex(1);
    },[query]);

    const {data , error, isLoading } = useSWR( `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxproducts}`, fetchDataFromApi , {
        fallbackData : products
    })
    return (

    <div className="w-full md:py-18 relative">
        <Wrapper>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
                <div className="text-[25px] md:text-[34px] mt-5 mb-5 font-semibold leading-tight ">
                    {category?.data?.[0]?.attributes?.name}
                </div>
            </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-14 px-20 md:px-4">
                      {data?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                    
                    </div>
                    
                    {/* PAGINATION BUTTONS START */}
                  {data?.meta?.pagination?.total > maxproducts && (
                      <div className="flex gap-3 items-center justify-center my-16 md:my-4">
                          <button
                              className={`rounded py-2 px-4 bg-black/[0.8] text-white disabled:bg-gray-200 disabled:text-gray-500`}
                              disabled={pageIndex === 1}
                              onClick={() => setPageIndex(pageIndex - 1)}
                          > Previous
                          </button>

                          <span className="font-bold">{`${pageIndex} of ${
                              data && data.meta.pagination.pageCount
                          }`}</span>

                          <button
                              className={`rounded py-2 px-4 bg-black/[0.8] text-white disabled:bg-gray-200 disabled:text-gray-500`}
                              disabled={
                                  pageIndex ===
                                  (data && data.meta.pagination.pageCount)
                              }
                              onClick={() => setPageIndex(pageIndex + 1)}
                          > Next
                          </button>
                      </div>
                  )}
                  {/* PAGINATION BUTTONS END */}
                  {isLoading && (
                      <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                            <img src="/spinner.svg" width={150} />
                          {/* <span className="text-2xl font-medium">Loading...</span> */}
                      </div>
                  )}

        </Wrapper>
    </div>
  )
}

export default Category;

export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/categories?populate=*");
  const paths = category?.data?.map((c) => ({
      params: {
          slug: c.attributes.slug,
      },
  }));

  return {
      paths,
      fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  
  const category = await fetchDataFromApi(
      `/api/categories?filters[slug][$eq]=${slug}`
  );
      const products = await fetchDataFromApi(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxproducts}`);

  return {
      props: {
          category,
          products,
          slug,
      },
  };
}