import ImageEditor from "./Components/ImageEditor"

const initiate2dCanvas = (elemId) => {
    return document.getElementById(elemId)
}

const get2dContext = canvas => {
    return canvas.getContext("2d")
}

const initiateImageByUrl = url => {
    const image = new Image()
    image.src = url
    return image
}

const clearCanvas = canvas => {
    get2dContext(canvas).clearRect(0, 0, canvas.width, canvas.height)
}

const loadImageToCanvas = (image, canvas) => {
    image.onload = function () {
        const ratio = image.naturalWidth / image.naturalHeight
        const width = canvas.width
        const height = width / ratio
        fitImageToCanvas(image, canvas)
    }
}

const fitImageToCanvas = (image, canvas) => {
    var imageAspectRatio = image.width / image.height;
    var canvasAspectRatio = canvas.width / canvas.height;

    var drawWidth, drawHeight, offsetX, offsetY;

    if (imageAspectRatio > canvasAspectRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imageAspectRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
    } else {
        drawWidth = canvas.height * imageAspectRatio;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
    }

    clearCanvas(canvas)

    setBackgroundColor('#e2e8f0', canvas)

    get2dContext(canvas).drawImage(image, 0, 0, image.width, image.height, offsetX, offsetY, drawWidth, drawHeight);
}

const setBackgroundColor = (color, canvas) => {
    var ctx = get2dContext(canvas)
    ctx.fillStyle = color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

const rotate = (canvas, image) => {
    const ctx = get2dContext(canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(90 * Math.PI / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    fitImageToCanvas(image, canvas)
}

export { initiate2dCanvas, initiateImageByUrl, loadImageToCanvas, rotate, ImageEditor }