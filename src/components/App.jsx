import React from 'react'
import '../styles/tailwind.build.css'
import images from '../images'
import Image from './Image'
import Header from './Header'

const App = () => {
    return (
        <div className="w-full mx-auto lg:w-6/12">
            <Header />

            <div className="flex flex-row flex-wrap w-full py-8">
                {images.map(image => (
                    <div key={image.id} className="w-full p-1 md:w-1/4" style={{ minHeight: '320px' }}>
                        <div className="relative w-full h-full overflow-hidden rounded">
                            <Image className="w-full" src={image.src} alt={image.alt} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
