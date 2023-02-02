import React from 'react'
// import { Link } from 'react-router-dom'
import Link from 'next/link'
import { urlFor } from '../lib/client'
const HeroBanner = ({heroBanner}) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>Ultra Smart watch</p>
                <h3>Winter Sale</h3>
                <h1>{heroBanner.largeText1}</h1>
                <img src={('/assets/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555aa.png')} alt='headphones' className='hero-banner-image'/>

                <div>
                    <Link href={`/product/X8-Ultra-Smartwatch-49MM`}>
                        <button type='button'>Shop now</button>
                    </Link>
                    <div className='desc'>
                        <h5>Best selling smart watch</h5>
                        <p>Best Smart Watches here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner