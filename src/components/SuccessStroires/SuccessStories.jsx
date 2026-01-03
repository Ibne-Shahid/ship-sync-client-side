import React from 'react'

const SuccessStories = () => {
    const stories = [
        {
            name: "Ahmed Traders",
            country: "Bangladesh",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            achievement: "Exported $500K+ in textile products to Europe",
            quote: "ShipSync helped us expand to 5 new countries in just 6 months!"
        },
        {
            name: "TechGear Ltd",
            country: "China",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            achievement: "Imported high-quality electronics for 200+ local retailers",
            quote: "The platform's verification system gave us confidence in new suppliers"
        },
        {
            name: "Global Foods Inc",
            country: "USA",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUnjdPpJo9ZuyH5M-aX_DfZ9nWqaQC1pVCoQ&s",
            achievement: "Source organic products from 15 different countries",
            quote: "Diverse suppliers, one reliable platform - that's ShipSync!"
        }
    ]

    return (
        <section className="py-12 md:py-16 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-info via-accent to-success bg-clip-text text-transparent">Success Stories</h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        See how businesses are growing globally with ShipSync
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <div key={index} className="card bg-base-200 shadow-xl">
                            <div className="card-body p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="avatar">
                                        <div className="w-16 h-16 rounded-full ring ring-info ring-offset-2">
                                            <img src={story.image} alt={story.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{story.name}</h3>
                                        <p className="text-info">{story.country}</p>
                                    </div>
                                </div>
                                <div className="text-info mb-3">
                                    {story.achievement}
                                </div>
                                <p className="italic text-base-content/80 mb-4">"{story.quote}"</p>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button className="btn btn-outline btn-accent">
                        Share Your Success Story
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SuccessStories