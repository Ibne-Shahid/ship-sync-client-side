import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            image: "https://themepalace.com/wp-content/uploads/2019/04/import-export-banner.jpg",
            title: "From",
            highlight: "ShipSync",
            subtitle: "Global Trade Simplified"
        },
        {
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Export",
            highlight: "Worldwide",
            subtitle: "Reach International Markets"
        },
        {
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Import",
            highlight: "Quality Goods",
            subtitle: "Source from Trusted Exporters"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [slides.length])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                </div>
            ))}

            <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2">
                            {slides[currentSlide].title}{' '}
                            <span className="bg-gradient-to-r from-info via-accent to-success bg-clip-text text-transparent">
                                {slides[currentSlide].highlight}
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 mb-6">
                            {slides[currentSlide].subtitle}
                        </p>
                        <div className="flex gap-4">
                            <a href="/allProducts" className="btn btn-info btn-lg">Explore Products</a>
                            <a href="/export" className="btn btn-outline btn-lg text-white border-white">Start Exporting</a>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle glass text-white">
                <FaChevronLeft />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle glass text-white">
                <FaChevronRight />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-3 h-3 mx-1 rounded-full ${i === currentSlide ? 'bg-info' : 'bg-white/50'}`}
                    />
                ))}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                <FaArrowDown className="text-white/70" />
            </div>
        </div>
    )
}

export default Hero