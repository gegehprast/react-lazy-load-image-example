import { useEffect, useState } from 'react'

const IS_BROWSER = typeof window !== 'undefined'

const useIntersectionObserver = ({ ref }) => {
    const [inView, setInView] = useState(false)

    const handleIntersect = (entries) => {
        if (!intersectObs) return
        
        const isIntersecting = entries[entries.length - 1].isIntersecting

        if (isIntersecting) {
            intersectObs.disconnect()
        }

        setInView(isIntersecting)
    }

    const [intersectObs] = useState(() =>
        IS_BROWSER ? new IntersectionObserver(handleIntersect) : undefined
    )

    useEffect(() => {
        if (!intersectObs) return
        
        if (ref) intersectObs.observe(ref.current)

        return () => intersectObs.disconnect()
    }, [ref, intersectObs])

    return inView
}

export default useIntersectionObserver
