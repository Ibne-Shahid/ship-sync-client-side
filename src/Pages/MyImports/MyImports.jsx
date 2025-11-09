import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import ImportedProductsCard from '../../components/ImportedProductsCard/ImportedProductsCard'

const MyImports = () => {

    const { user } = use(AuthContext)
    const [importProducts, setImportProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (user?.email) {
            setLoading(true)
            Promise.all([
                fetch(`http://localhost:3000/imports?email=${user.email}`).then(res => res.json()),
                fetch('http://localhost:3000/products').then(res => res.json())
            ])
                .then(([imports, products]) => {
                    const merged = imports.map(importItem => {
                        const foundProduct = products.find(product => product?._id === importItem.product)
                        return {
                            ...importItem,
                            importedProduct: foundProduct
                        }
                    })
                    setImportProducts(merged)
                    setLoading(false)
                })
        }
    }, [user])

    return (
        <div className="py-10 px-5 md:px-14">
            <h2 className="text-4xl font-bold text-info mb-4">My Imported Products</h2>

            {loading ?
                <div className="flex justify-center items-center h-40">
                    <p className="text-gray-500 text-lg animate-pulse">Loading my imports...</p>
                </div> :
                importProducts.length === 0 ?
                    <p className="text-gray-500 text-lg">No imports found.</p> :
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {importProducts.map((item) => (
                            <ImportedProductsCard key={item?._id} item={item}></ImportedProductsCard>
                        ))}
                    </div>
            }
        </div>
    )
}

export default MyImports