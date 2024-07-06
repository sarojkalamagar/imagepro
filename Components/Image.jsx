import { useEffect } from "react"
import { initiate2dCanvas, initiateImageByUrl, loadImageToCanvas } from ".."

export default Image = ({
    id,
    url,
    width,
    height
}) => {

    useEffect(() => {
        const canvas = initiate2dCanvas(id)
        const image = initiateImageByUrl(url)
        loadImageToCanvas(image, canvas)
    }, [])

    return <canvas id={id} width={width} height={height}></canvas>
}