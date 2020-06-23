import { useEffect, useState } from 'react'

const IS_BROWSER = typeof window !== 'undefined'

const useIntersectionObserver = ({ ref }) => {
    const [inView, setInView] = useState(false)

    const handleIntersect = (entries) => {
        if (!observer) return
        
        const isIntersecting = entries[entries.length - 1].isIntersecting

        if (isIntersecting) {
            observer.disconnect()
        }

        setInView(isIntersecting)
    }

    const [observer] = useState(() => IS_BROWSER ?
        new IntersectionObserver(handleIntersect) :
        undefined
    )

    useEffect(() => {
        if (!observer) return
        
        if (ref) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [ref, observer])

    return inView
}

export default useIntersectionObserver
