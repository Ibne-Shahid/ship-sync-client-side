import React from 'react'
import { Link } from 'react-router'
import { FaRocket, FaChartLine } from 'react-icons/fa'

const CTASection = () => {
    return (
        <section className="py-12 md:py-16 bg-gradient-to-r from-info/20 via-accent/20 to-success/20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-info via-accent to-success bg-clip-text text-transparent">Ready to Expand Your Business Globally?</h2>
                    <p className="text-lg text-base-content/70">
                        Join thousands of successful exporters and importers who trust ShipSync for their international trade
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body items-center text-center">
                            <FaRocket className="text-4xl text-info mb-4" />
                            <h3 className="card-title text-xl font-bold mb-2">Start Exporting</h3>
                            <p className="mb-4">List your products and reach international buyers</p>
                            <Link to="/dashboard/exportProducts" className="btn btn-info w-full">
                                Export Products
                            </Link>
                        </div>
                    </div>
                    
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body items-center text-center">
                            <FaChartLine className="text-4xl text-success mb-4" />
                            <h3 className="card-title text-xl font-bold mb-2">Start Importing</h3>
                            <p className="mb-4">Source quality products from global suppliers</p>
                            <Link to="/allProducts" className="btn btn-success w-full">
                                Browse Products
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="stats shadow bg-base-100 max-w-md mx-auto">
                    <div className="stat">
                        <div className="stat-title">Average Growth</div>
                        <div className="stat-value text-info">45%</div>
                        <div className="stat-desc">For ShipSync users</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection