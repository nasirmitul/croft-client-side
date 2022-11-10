import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - croft`;
    }, [title])
}

export default useTitle;