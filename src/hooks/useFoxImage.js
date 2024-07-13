import { useState } from "react";
import { useEffect } from "react";


function useFoxImage(){
    const [data, setData] = useState(null)

    const getRandomImages = () => {
        fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(res => setData(res))
    }

    useEffect(() => {
        getRandomImages();
    }, [])

    return {foxImage: data, getRandomImages}
}

export default useFoxImage
