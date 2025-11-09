import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {

    const { id } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const product = products.find(p => p?._id === id)

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500 text-lg font-semibold">Loading product details...</p>
            </div>
        )
    }

    return (
        <div className='bg-gray-100 py-10'>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6">
                <div className="flex flex-col md:flex-row gap-6">

                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src={product.product_image}
                            alt={product.product_name}
                            className="rounded-xl w-full max-w-sm object-cover shadow-md"
                        />
                    </div>

                    <div className="flex-1 space-y-4">
                        <h1 className="text-3xl font-bold text-gray-800">{product.product_name}</h1>
                        <p className="text-gray-600">{product.description}</p>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <p className="text-gray-500">Price:</p>
                                <p className="text-xl font-semibold text-blue-600">{product.price}৳</p>
                            </div>

                            <div>
                                <p className="text-gray-500">Origin:</p>
                                <p className="font-semibold">{product.origin_country}</p>
                            </div>

                            <div>
                                <p className="text-gray-500">Rating:</p>
                                <p className="font-semibold">{product.rating} ⭐</p>
                            </div>

                            <div>
                                <p className="text-gray-500">Available Quantity:</p>
                                <p className="font-semibold">{product.available_quantity}</p>
                            </div>
                        </div>

                        <button className="mt-6 btn btn-accent">
                            Import Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails