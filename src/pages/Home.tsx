import MusicCard from "../components/MusicCard.tsx";
import PomodoroTimer from "../components/PomodoroTimer.tsx";
import {useState} from "react";
import NoteApp from "../components/NoteApp.tsx";

const Home =()=>{
    const[col,setCol] =useState("blue")
    console.log(col)
    const HomeStyles ={
        backgroundColor:col,
        color:col=="white"?"black":col=="black"?"black":col=="blue"&&"black"
    }
    return(
        <div className={`h-full absolute flex flex-col  w-full bg-amber-50`} style={HomeStyles}>
            <div className={"absolute right-0 p-2 rounded-xl bg-yellow-500 mr-4 top-1.5border-black border-2"}>
                <select className={"bg-inherit text-white  font-bold"}>
                    <option value={"black"} onClick={(e)=>setCol(e.target.value)}>black</option>
                    <option value={"blue"} onClick={(e)=>setCol(e.target.value)}>blue</option>
                    <option value={"white"} onClick={(e)=>setCol(e.target.value)}>white</option>
                </select>
            </div>
            <PomodoroTimer/>
            <MusicCard />
            <NoteApp/>

        </div>
    )
}
export default Home