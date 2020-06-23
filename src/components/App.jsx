import React from 'react'
import '../styles/tailwind.build.css'
import images from '../images'
import Image from './Image'

function App() {
    return (
        <div className="flex flex-row flex-wrap w-full py-8 mx-auto lg:w-6/12">
            {images.map(image => (
                <div key={image.id} className="w-full p-1 md:w-1/4" style={{ minHeight: '320px'}}>
                    <div className="relative w-full h-full overflow-hidden rounded">
                        <Image className="w-full"
                            src={image.src}
                            alt={image.alt}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/id/600/480/720' }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default App
