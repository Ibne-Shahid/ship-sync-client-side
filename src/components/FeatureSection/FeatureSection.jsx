import React from 'react'
import { FaShippingFast, FaShieldAlt, FaGlobeAmericas, FaHeadset } from 'react-icons/fa'

const FeaturesSection = () => {
    const features = [
        {
            icon: <FaShippingFast className="text-3xl text-info" />,
            title: "Global Shipping",
            description: "Door-to-door international shipping with real-time tracking"
        },
        {
            icon: <FaShieldAlt className="text-3xl text-success" />,
            title: "Secure Payments",
            description: "Escrow-protected transactions for buyer and seller safety"
        },
        {
            icon: <FaGlobeAmericas className="text-3xl text-accent" />,
            title: "50+ Countries",
            description: "Connect with exporters and importers worldwide"
        },
        {
            icon: <FaHeadset className="text-3xl text-warning" />,
            title: "24/7 Support",
            description: "Dedicated customer support for all your trading needs"
        }
    ]

    return (
        <section className="py-12 md:py-16 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-info via-accent to-success bg-clip-text text-transparent">Why Choose ShipSync?</h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        We make international trade simple, secure, and profitable for everyone
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="card bg-base-200 hover:bg-base-300 transition-all duration-300">
                            <div className="card-body items-center text-center p-6">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="card-title text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="text-base-content/70">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection