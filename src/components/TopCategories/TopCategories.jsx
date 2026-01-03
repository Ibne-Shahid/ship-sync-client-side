import React from 'react'
import { Link } from 'react-router'
import { FaMotorcycle, FaTshirt, FaMicrochip, FaUtensils, FaCar, FaGem } from 'react-icons/fa'

const TopCategories = () => {
    const categories = [
        { icon: <FaMotorcycle />, name: "Automotive", count: "120+", color: "text-info" },
        { icon: <FaTshirt />, name: "Fashion", count: "85+", color: "text-success" },
        { icon: <FaMicrochip />, name: "Electronics", count: "95+", color: "text-accent" },
        { icon: <FaUtensils />, name: "Food & Beverage", count: "65+", color: "text-warning" },
        { icon: <FaCar />, name: "Vehicles", count: "45+", color: "text-error" },
        { icon: <FaGem />, name: "Luxury Goods", count: "30+", color: "text-secondary" }
    ]

    return (
        <section className="py-12 md:py-16 bg-base-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-info via-accent to-success bg-clip-text text-transparent">Top Export Categories</h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Discover trending products across popular international markets
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category, index) => (
                        <Link 
                            key={index} 
                            to={`/products?category=${category.name.toLowerCase()}`}
                            className="card bg-base-100 hover:bg-base-300 hover:scale-105 transition-all duration-300"
                        >
                            <div className="card-body items-center text-center p-4">
                                <div className={`text-3xl mb-3 ${category.color}`}>
                                    {category.icon}
                                </div>
                                <h3 className="font-bold">{category.name}</h3>
                                <p className="text-sm text-base-content/60">{category.count} Products</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link to="/allProducts" className="btn btn-accent btn-lg">
                        Browse All Categories
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default TopCategories