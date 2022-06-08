import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <nav className="bg-black text-center text-md p-3">
            <div className="flex  text-white flex-row ">
                <div className="flex-1 border-red-500 border-r-2">
                    <Link href="/">
                        <a>Calculator</a>
                    </Link>
                </div>
                <div className="flex-1">
                    <Link href="/currency">
                        <a>Currency</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav