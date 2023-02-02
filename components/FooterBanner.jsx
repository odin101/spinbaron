import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = () => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          {/*<p>discount</p>*/}
          <h3>Best </h3>
          <h3>Selling</h3>
          <p>watch</p>
        </div>
        <div className='right'>
            {/*<p>{smallText}</p>*/}
            <p>Winter Sale</p>
            <p>Best Smart watch on market</p>
            <Link href={`/product/X8-Ultra-Smartwatch-49MM`}>
                <button type='button'>Shop</button>
            </Link>
        </div>
        <img src={('/assets/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555aa.png')} className="footer-banner-image"/>
      </div>
    </div>
  )
}

export default FooterBanner