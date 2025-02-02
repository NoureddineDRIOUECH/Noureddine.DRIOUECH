import { useState, useEffect } from "react"

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(query)

        setMatches(mediaQuery.matches)

        const handleChange = () => {
            setMatches(mediaQuery.matches)
        }

        mediaQuery.addEventListener('change', handleChange)

        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [query])

    return matches
}