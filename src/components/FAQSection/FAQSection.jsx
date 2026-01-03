import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "How does ShipSync ensure transaction security?",
            answer: "We use escrow payment protection, verified seller profiles, and secure payment gateways to ensure safe transactions for both buyers and sellers."
        },
        {
            question: "What are the shipping costs?",
            answer: "Shipping costs vary based on destination, product weight, and shipping method. You'll see estimated shipping costs before confirming any purchase."
        },
        {
            question: "How long does international shipping take?",
            answer: "Typically 7-21 business days depending on the destination country and shipping method selected. Express shipping options are available."
        },
        {
            question: "Can I cancel an order after placing it?",
            answer: "Orders can be cancelled within 24 hours of placement if they haven't been shipped yet. After shipping, cancellation may not be possible."
        },
        {
            question: "Do I need a business license to export?",
            answer: "Requirements vary by country. We provide guidance on necessary documentation for different markets. Individual exporters are welcome for certain product categories."
        }
    ]

    return (
        <section className="py-12 md:py-16 bg-base-100">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-info via-accent to-success bg-clip-text text-transparent">Frequently Asked Questions</h2>
                    <p className="text-lg text-base-content/70">
                        Got questions? We've got answers
                    </p>
                </div>
                
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="card bg-base-200">
                            <div 
                                className="card-body p-4 cursor-pointer"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-lg">{faq.question}</h3>
                                    {openIndex === index ? (
                                        <FaChevronUp className="text-info" />
                                    ) : (
                                        <FaChevronDown className="text-base-content/60" />
                                    )}
                                </div>
                                {openIndex === index && (
                                    <div className="mt-4 p-4 bg-base-300 rounded-lg">
                                        <p className="text-base-content/80">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-8">
                    <p className="text-base-content/70 mb-4">
                        Still have questions? We're here to help!
                    </p>
                    <a href="/contact" className="btn btn-outline btn-info">
                        Contact Support
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FAQSection