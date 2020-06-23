import React, { useState, useRef, useEffect } from 'react'
import logo from '../logo.svg'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const placeHolder = logo

const Image = ({ src, alt}) => {
    const [imageSrc, setImageSrc] = useState(placeHolder)
    const [imageClass, setImageClass] = useState('bg-gray-700')
    const imageRef = useRef()

    const inView = useIntersectionObserver({ ref: imageRef })

    useEffect(() => {
        if (inView) {
            setImageSrc(src)
        }
    }, [inView, src])

    const handleError = e => {
        e.target.onerror = null
        e.target.src = placeHolder
        setImageClass('bg-red-500')
    }

    return (
        <img className={`absolute w-full h-full object-cover object-center rounded ${imageClass}`}
            ref={imageRef}
            src={imageSrc}
            alt={alt}
            onError={handleError}
        />
    )
}

export default Image
