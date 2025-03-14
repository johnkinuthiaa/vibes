import MusicCard from "../components/MusicCard.tsx";
import {useState} from "react";

import TextEditor from "../components/TextEditor.tsx";
import Terminal from "../components/Terminal.tsx";
const Home =()=>{
    const[col,setCol] =useState("black")
    console.log(col)
    const HomeStyles ={
        backgroundColor:col,
        // color:col=="white"?"black":col=="black"?"black":col=="blue"&&"black"
    }
    const[show,setShow]=useState(false)
    const[showTerminal,setShowTerminal]=useState(false)
    return(
        <div className={` home h-full absolute flex flex-col  w-full bg-amber-50`} style={HomeStyles}>
            <div className={"absolute right-0 p-2 rounded-xl bg-yellow-500 mr-4 top-1.5border-black border-2"}>
                <input type={"color"} onChange={(e)=>setCol(e.target.value)}/>

            </div>
            {/*<PomodoroTimer/>*/}
            <MusicCard show={show}/>
            {/*<NoteApp/>*/}
            {/*<DraggableComponent/>*/}
            <TextEditor/>
            <Terminal show={showTerminal}/>
            <div className={"absolute bottom-0 p-2 gap-2 w-full flex justify-center content-center"}>
                <div className={"flex flex-col items-center"} onClick={()=>{
                    if(show){setShow(false)}else{setShow(true)}
                }}>
                    <img
                        src={"https://i.pinimg.com/236x/93/46/53/934653214719cf630e0f5cf9c746b364.jpg"}
                        alt={"spotify"}
                        className={"rounded-full bg-transparent h-15 w-15 object-fill cursor-pointer"}
                    />
                    <p>Spotify</p>
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

            </div>
        </div>
    )
}
export default Home