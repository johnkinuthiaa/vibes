import MusicCard from "../components/MusicCard.tsx";
import PomodoroTimer from "../components/PomodoroTimer.tsx";
import {useState} from "react";
import NoteApp from "../components/NoteApp.tsx";
import DraggableComponent from "../components/Drag.tsx";
import TextEditor from "../components/TextEditor.tsx";

const Home =()=>{
    const[col,setCol] =useState("blue")
    console.log(col)
    const HomeStyles ={
        backgroundColor:col,
        // color:col=="white"?"black":col=="black"?"black":col=="blue"&&"black"

    }
    return(
        <div className={` home h-full absolute flex flex-col  w-full bg-amber-50`} style={HomeStyles}>
            <div className={"absolute right-0 p-2 rounded-xl bg-yellow-500 mr-4 top-1.5border-black border-2"}>
                <input type={"color"} onChange={(e)=>setCol(e.target.value)}/>

            </div>
            {/*<PomodoroTimer/>*/}
            {/*<MusicCard />*/}
            {/*<NoteApp/>*/}
            {/*<DraggableComponent/>*/}
            <TextEditor/>


        </div>
    )
}
export default Home