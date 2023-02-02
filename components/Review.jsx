import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const Reviews = () => {
  return (
      <Link href={`/product/$test`}>
        <div className='product-card'>
          <img src={'/assets/'}
            width={250}
            height={250}
            className="product-image"
          />
          <p className='product-name'></p>
          <p className='product-price'></p>
        </div>
      </Link>
  )
}

export default Reviews