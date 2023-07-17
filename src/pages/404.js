import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const errorpage = () => {

    const router = useRouter();

    useEffect(() => {
        router.push("/");
    } , [])
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-6xl font-bold text-red-500 mb-4">Oops 404 Error!</h1>
    <p className="text-2xl text-gray-600">
    Something went wrong. We apologize for the inconvenience.
    <br />
Please try again later or contact our support team for assistance.
    </p>
  </div>
  )
}

export default errorpage