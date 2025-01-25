import RemoveIcon from '@mui/icons-material/Remove';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import Data from "../data/Data.tsx";
const MusicCard =()=>{
    const [width,setWidth] =useState("420px")
    const [play,setPlay] =useState(false)
    const[x,setX] =useState<number>(70)
    const[y,setY] =useState<number>(100)
    const[audio,setAudio] =useState<string>("src/assets/free_for_profit_90s_boom_bap_chill_jazz_x_lofi_type_beat_youth_mp3_70136.mp3")
    const player ={
        top:x,
        left:y,
        width:width
    }
    return(
        <div
            className={` h-[650px] bg-[whitesmoke] rounded-2xl flex flex-col gap-4 fixed z-[999] `}
            style={player}
            draggable={true}
             onDragStart={(e)=> {
                 setX(e.clientX-x)
                 setY(e.clientY-y)
             }}
        >
            <div className={"shadow-2xl flex justify-between w-full p-2 items-center"}>
                <div>
                    <h3 className={"text-2xl font-bold text-blue-400"}>Music player</h3>
                </div>
                <div className={""}>
                    <button><RemoveIcon/></button>
                    <button><AspectRatioIcon/></button>
                    <button><CloseIcon/></button>
                </div>

                {/*<button onClick={()=>setPlay(true)}>Play</button>*/}
            </div>
            <div className={"p-2 flex flex-col overflow-scroll scroll-smooth mb-10"}>
                {Data.map(({name,artist,filePath})=>(
                    <div className={"bg-white rounded-2xl mb-2 w-full flex p-2 cursor-pointer h-"} onClick={()=>setAudio(filePath)}>
                        <img src={"src/assets/react.svg"}/>
                        <div className={"flex flex-col"}>
                            <h1>{name}</h1>
                            <h1>{artist}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <audio src={audio} controls={true} className={" absolute bottom-0 w-full "}></audio>
        </div>
    )
}
export default MusicCard