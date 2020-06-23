import React from 'react'
import logo from '../logo.svg'

const Header = () => {
    return (
        <div className="w-full bg-indigo-700" style={{ backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat' }}>
            <div className="w-full p-4 text-center text-white">
                <h1 className="text-3xl font-bold leading-none md:text-5xl">
                    <a className="hover:text-purple-200" href="https://buatsesuatu.dev/" target="_blank" rel="noopener noreferrer">
                        Buat Sesuatu
                    </a>
                </h1>

                <h2 className="mt-4 text-2xl font-semibold leading-none md:text-3xl">
                    React Lazy Loading Image Example
                </h2>

                <div className="mt-4">
                    Gambar oleh&nbsp;
                    <a className="text-indigo-100 hover:text-purple-200" href="https://picsum.photos/" target="_blank" rel="noopener noreferrer">
                        https://picsum.photos/
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
