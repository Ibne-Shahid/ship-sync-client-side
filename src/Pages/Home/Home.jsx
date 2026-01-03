import React, { Suspense, useState, useEffect } from 'react'
import LatestProducts from '../../components/LatestProducts/LatestProducts'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Reviews from '../../components/Reviews/Reviews'
import Hero from '../../components/Hero/Hero'
import FeaturesSection from '../../components/FeatureSection/FeatureSection'
import TopCategories from '../../components/TopCategories/TopCategories'
import SuccessStories from '../../components/SuccessStroires/SuccessStories'
import CTASection from '../../components/CTASection/CTASection'
import GlobalMap from '../../components/GlobalMap/GlobalMap'
import FAQSection from '../../components/FAQSection/FAQSection'

const Home = () => {
    
    const productsPromise = fetch('https://ship-synce-api-server.vercel.app/latestProducts').then(res=>res.json())

    return (
        <div>
            <title>Home || ShipSync</title>
            
            <Hero></Hero>

            <Suspense fallback={
                <div className='flex justify-center items-center py-10'>
                    <span className="loading loading-spinner loading-lg text-info"></span>
                </div>
            }>
                <LatestProducts productsPromise={productsPromise} />
            </Suspense>

            <FeaturesSection></FeaturesSection>

            <HowItWorks />

            <TopCategories></TopCategories>

            <SuccessStories></SuccessStories>

            <CTASection></CTASection>

            <GlobalMap></GlobalMap>

            <Reviews />

            <FAQSection></FAQSection>
        </div>
    )
}

export default Home