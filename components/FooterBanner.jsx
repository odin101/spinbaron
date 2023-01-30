import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, desc,saleTime, smallText,midText, product, buttonText, image } }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
            {/*<p>{smallText}</p>*/}
            <p>{midText}</p>
            <p>Best Smart watch on market</p>
            <Link href={`/product/${product.toLowerCase()}`}>
                <button type='button'>{buttonText}</button>
            </Link>
        </div>
        <img src={('/assets/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555aa.png')} className="footer-banner-image"/>
      </div>
    </div>
  )
}

export default FooterBanner