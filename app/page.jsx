"use client";
import { useEffect,useRef, useState } from "react";
import { useCanvas } from "../hooks/useCanvas/useCanvas";
import Canvas from "../components/canvas/canvas";

export default function Page() {
    const ref = useRef()
    const image = useRef()
    const [readFile, setFile] = useState(null)
    const [canvasWidth, setCanvasWidth] = useState(150)
    const [canvasHeight, setCanvasHeight] = useState(150)

    useEffect(() => {
        console.log(ref.current)
        console.log(image.current)
        if (ref.current && image.current) {
            const canvas = ref.current.getContext('2d')
            const imageElement = image.current
            // do something here with the canvas

            if (canvas && imageElement && readFile) {

                uploadImage(readFile, imageElement, canvas)

                
            }
        }
    }, [ref, image, readFile, setFile])

    function uploadImage(file, imageElement, canvas) {
                // Set the source of the image from the uploaded file
                imageElement.src = URL.createObjectURL(file);

                imageElement.onload = function () {
                canvas.crossOrigin = "anonymous";

                try {
                    
                    canvas.drawImage(imageElement, 0, 0);
                    
                } catch (error) {
                    console.log(error)
                }
                
                    };
                }
    function saveImage() {
    // Select the temporary element we have created for
    // helping to save the image
    let linkElement = document.getElementById('link');
    linkElement.setAttribute(
    'download', 'edited_image.png'
    );

    // Convert the canvas data to a image data URL
    let canvasData = canvas.toDataURL("image/png")

    // Replace it with a stream so that
    // it starts downloading
    canvasData.replace(
    "image/png", "image/octet-stream"
    )

    // Set the location href to the canvas data
    linkElement.setAttribute('href', canvasData);

    // Click on the link to start the download 
    linkElement.click();
}
    return (
        <main className="main">
            <h1>Sprite Splicer</h1>
            <p>Sprite Splicer is a tool for creating custom sprite collections for any game development program.</p>

            <div className="">
                <label htmlFor="imageFile" className="block">Upload Image</label>
                <input type="file" name="imageFile" id="imageFile" onChange={(e)=> setFile(e.target.files[0])} />
            </div>
{readFile &&
            <img src={readFile} alt="" id="imageSource" style={{width:"10%",position:"absolute", top:0,right:0}} ref={image}/>
}
            <Canvas id="editor" />
    </main>
    )
}
