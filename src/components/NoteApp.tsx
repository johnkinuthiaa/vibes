import RemoveIcon from '@mui/icons-material/Remove';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
const NoteApp =()=>{
    const[notes,setNotes]=useState<string[]>([])
    const [input,setInput]=useState<string>("")
    useEffect(()=>{

    },[notes])

    return(
        <div className={"absolute w-96 rounded-2xl flex flex-col top-15 right-1.5 h-96 bg-blue-200"}
             draggable={true}
        >
            <div className={"shadow-2xl flex justify-between w-full p-2 items-center bg-[whitesmoke]"}>
                <div>
                    <h3 className={"text-2xl font-bold text-blue-400 "}>Notes</h3>
                </div>
                <div className={"rounded-2xl"}>
                    <button><RemoveIcon/></button>
                    <button><AspectRatioIcon/></button>
                    <button><CloseIcon/></button>
                </div>
            </div>
            <div className={"overflow-scroll mb-5 p-2 scroll-smooth"}>
                {notes?.map((note)=>(
                    <div className={"bg-white h-15 rounded-xl mb-2 pl-2 items-center flex"} onClick={(e)=>console.log(e) }>{note}</div>
                ))}
            </div>
            <div className={"absolute bottom-0 p-3 w-full bg-white"}>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    notes.push(input)
                    setNotes(notes)

                }}
                      className={"flex justify-between w-full"}
                >
                    <input type={"text"} placeholder={"Add a note"} className={"w-full border-gray-600 border-2 rounded-xl p-2 "} onChange={(e)=>setInput(e.target.value)}/>
                    <button type={"submit"} className={"bg-orange-400 text-white rounded-xl font-bold pt-2 pb-2 pl-4 pe-4 ml-2 cursor-pointer"}>Add</button>
                </form>
            </div>

        </div>
    )
}
export default NoteApp