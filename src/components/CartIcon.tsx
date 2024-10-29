import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CartIcon = () => {
  return (
    <Link className='flex items-center gap-4' href="/cart">
        <div className='relative w-8 h-8 md:h-5'>
            <Image src="/cart.png" alt="" fill></Image>
        </div>
        <span>Cart (3)</span>
    </Link>
  )
}

export default CartIcon