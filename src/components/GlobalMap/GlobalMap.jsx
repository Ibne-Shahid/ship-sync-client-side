import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const GlobalMap = () => {
    const countries = [
        { name: "USA", products: 320, color: "bg-info" },
        { name: "China", products: 450, color: "bg-success" },
        { name: "Germany", products: 210, color: "bg-accent" },
        { name: "Japan", products: 180, color: "bg-warning" },
        { name: "India", products: 290, color: "bg-error" },
        { name: "UK", products: 195, color: "bg-secondary" }
    ]

    return (
        <section className="py-12 md:py-16 bg-base-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-info via-accent to-success bg-clip-text text-transparent">Global Reach</h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Connecting businesses across 50+ countries worldwide
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="bg-base-100 rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <FaMapMarkerAlt className="text-2xl text-info" />
                                <h3 className="text-xl font-bold">Active Countries</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {countries.map((country, index) => (
                                    <div key={index} className="card bg-base-200">
                                        <div className="card-body p-4">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className={`w-3 h-3 rounded-full ${country.color}`}></div>
                                                <h4 className="font-bold">{country.name}</h4>
                                            </div>
                                            <p className="text-2xl font-bold">{country.products}+</p>
                                            <p className="text-sm text-base-content/60">Products</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative h-64 md:h-80 bg-base-300 rounded-2xl overflow-hidden">
                        {/* Simple map visualization */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-64 h-64">
                                {/* Asia */}
                                <div className="absolute top-10 left-4 w-16 h-16 bg-success/20 rounded-full border-2 border-success"></div>
                                {/* Europe */}
                                <div className="absolute top-8 right-12 w-14 h-14 bg-info/20 rounded-full border-2 border-info"></div>
                                {/* North America */}
                                <div className="absolute top-20 left-20 w-20 h-20 bg-accent/20 rounded-full border-2 border-accent"></div>
                                {/* Africa */}
                                <div className="absolute bottom-16 left-24 w-18 h-18 bg-warning/20 rounded-full border-2 border-warning"></div>
                                {/* South America */}
                                <div className="absolute bottom-24 left-12 w-12 h-12 bg-error/20 rounded-full border-2 border-error"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <div className="badge badge-info">50+ Countries Active</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GlobalMap