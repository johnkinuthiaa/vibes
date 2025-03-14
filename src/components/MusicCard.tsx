import RemoveIcon from '@mui/icons-material/Remove';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";

import * as React from "react";
type MusicCardProps ={
    show:boolean
}
const MusicCard =({show}:MusicCardProps)=>{
    const [width,setWidth] =useState<number>(22)
    const[x,setX] =useState<number>(70)
    const[y,setY] =useState<number>(100)
    const[height,setHeight]=useState<number>(650)
    const[display,setDisplay]=useState("")

    useEffect(()=>{
       if(show){
           setDisplay("")
       } else{
           setDisplay("none")
       }
    }, [show])
    const player ={
        position: 'absolute',
        top: y + "px",
        left: x + "px",
        width:width+"%",
        cursor: 'pointer',
        display:display

    }
    const currentPosition = { x: 0, y: 0 };

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        currentPosition.x = e.clientX;
        currentPosition.y = e.clientY;
        player.cursor="move"
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        const newX = e.clientX;
        const newY = e.clientY;

        // Calculate the new position
        setX(prevX => prevX + (newX - currentPosition.x));
        setY(prevY => prevY + (newY - currentPosition.y));
    };


    return(
        <div
            className={` h-[${height}px]  rounded-2xl flex flex-col gap-4 fixed z-[999] `}
            style={player}
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}

        >
            <div className={"shadow-2xl flex justify-between w-full p-2 items-center"}>
                <div>
                    <h3 className={"text-2xl font-bold text-blue-400"}>Music player</h3>
                </div>
                <div className={""}>
                    <button onClick={()=>setDisplay("none")}><RemoveIcon/></button>
                    <button onClick={()=>{
                        setWidth(100)
                        setHeight(1000)
                        setY(0)
                        setX(0)
                    }}><AspectRatioIcon/></button>
                    <button><CloseIcon/></button>
                </div>
            </div>
            <div className={"-mt-3"}>
                <iframe className={"rounded mb-2"}
                        src="https://open.spotify.com/embed/playlist/6ddftH2hsPzCKdDX83MTwf?utm_source=generator&theme=0"
                        width={"100%"} height={height-10} frameBorder="0" allowFullScreen={true}
                        allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}
                        loading={"lazy"}>

                </iframe>
            </div>

        </div>
    )
}
export default MusicCard