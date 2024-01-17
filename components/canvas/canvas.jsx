'use client';

import {useRef} from "react";

export default function Canvas(props) {
    const ref = useRef()
    return (
        <div>
            <canvas ref={ref} width={props.width} height={props.height} {...props}/>
        </div>
    )

}