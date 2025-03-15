import MusicCard from "../components/MusicCard.tsx";
import {useEffect, useState} from "react";

import TextEditor from "../components/TextEditor.tsx";
import Terminal from "../components/Terminal.tsx";
import NoteApp from "../components/NoteApp.tsx";
import PomodoroTimer from "../components/PomodoroTimer.tsx";
const Home =()=>{
    const[col,setCol] =useState("black")
    console.log(col)
    const HomeStyles ={
        backgroundColor:col,
    }
    const[showTextEditor,setShowTextEditor]=useState(false)
    const[showSettings,setShowSettings]=useState(false)
    const[showNotesApp,setShowNoteApp]=useState(false)
    const[showSpotify,setShowSpotify]=useState(false)
    const[showTerminal,setShowTerminal]=useState(false)
    const[showPomodoro,setShowPomodoro]=useState(false)
    return(
        <div className={` home h-full absolute flex flex-col  w-full bg-amber-50`} style={HomeStyles}>
            <div className={"absolute right-0 rounded-full flex items-center border-2 cursor-pointer bg-yellow-500 mr-4 top-1.5"}>
                <input type={"color"}
                       onChange={(e)=>setCol(e.target.value)}
                       className={"rounded-full outline-none cursor-pointer"}
                />
            </div>
            <PomodoroTimer show={showPomodoro}/>
            <MusicCard show={showSpotify}/>
            <NoteApp show={showNotesApp}/>
            {/*<DraggableComponent/>*/}
            <TextEditor show={showTextEditor}/>
            <Terminal show={showTerminal}/>
            <div className={"dock rounded-full bg-[rgb(0,0,0,0.7)] absolute bottom-0 p-2 gap-4 [&>*]:gap-2 [&>div>p]:font-bold [&>*]:p-1 w-full m-[0 auto] flex " +
                    "justify-center items-center [&>*]:hover:-translate-y-2 [&>*]:transition-all"}
            >
                <div className={"flex flex-col items-center"} onClick={()=>{
                    if(showSpotify){setShowSpotify(false)}else{setShowSpotify(true)}
                }}>
                    <img
                        src={"https://i.pinimg.com/236x/93/46/53/934653214719cf630e0f5cf9c746b364.jpg"}
                        alt={"spotify"}
                        className={"rounded-full bg-transparent h-15 w-15 object-fill cursor-pointer"}
                    />
                    <p>Spotify</p>
                </div>
                <div className={"flex flex-col items-center"} onClick={()=>{
                    if(showPomodoro){setShowPomodoro(false)}else{setShowPomodoro(true)}
                }}>
                    <img
                        src={"https://i.pinimg.com/736x/2f/48/51/2f48514a7531828e29daa64e49580952.jpg"}
                        alt={"pomodoro"}
                        className={"rounded-full bg-transparent h-15 w-15 object-cover cursor-pointer"}
                    />
                    <p>Pomodoro</p>
                </div>
                <div className={"flex flex-col items-center"} onClick={()=>{
                    if(showSettings){setShowSettings(false)}else{setShowSettings(true)}
                }}>
                    <img
                        src={"https://i.pinimg.com/736x/c3/72/3d/c3723d11a99345ddf9ba7ae1a38d111d.jpg"}
                        alt={"settings"}
                        className={"rounded-full bg-transparent h-15 w-15 object-cover cursor-pointer"}
                    />
                    <p>Settings</p>
                </div>
                <div className={"flex flex-col items-center"} onClick={()=>{
                    if(showTerminal){setShowTerminal(false)}else{setShowTerminal(true)}
                }}>
                    <img
                        src={"https://i.pinimg.com/236x/25/bf/a8/25bfa82c85485609dc64307f1828a664.jpg"}
                        alt={"Terminal"}
                        className={"rounded-full bg-transparent h-15 w-15 object-fill cursor-pointer"}
                    />
                    <p>Terminal</p>
                </div>
                <div className={"flex flex-col items-center"} onClick={()=>{
                    if(showNotesApp){setShowNoteApp(false)}else{setShowNoteApp(true)}
                }}>
                    <img
                        src={"https://i.pinimg.com/736x/3e/d8/fc/3ed8fc5f95d96fa06a5407f402efb015.jpg"}
                        alt={"Notes app"}
                        className={"rounded-full bg-transparent h-15 w-15 object-fill cursor-pointer"}
                    />
                    <p>Notes App</p>
                </div>
                <div className={"flex flex-col items-center"} onClick={()=>{
                    if(showTextEditor){setShowTextEditor(false)}else{setShowTextEditor(true)}
                }}>
                    <img
                        src={" https://i.pinimg.com/736x/63/ca/1b/63ca1b6bc187591d97579f6561d701d4.jpg"}
                        alt={"Word"}
                        className={"rounded-full bg-transparent h-15 w-15 object-fill cursor-pointer"}
                    />
                    <p>Word</p>
                </div>

            </div>
        </div>
    )
}
export default Home