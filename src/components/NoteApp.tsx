import RemoveIcon from '@mui/icons-material/Remove';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
type NoteAppProps ={
    show:boolean
}
const NoteApp =({show}:NoteAppProps)=>{
    const[notes,setNotes]=useState<string[]>([])
    const [input,setInput]=useState<string>("")
    const[text,setText]=useState("")
    const[width,setWidth]=useState<number>(500)
    const[height,setHeight]=useState<number>(450)
    const[display,setDisplay]=useState("")
    useEffect(() => {
        if(!show){
            setDisplay("none")
        }else{
            setDisplay("")
        }
    }, [show]);
    const notesAppStyles ={
        display:display
    }

    return(
        <div className={`absolute min-w-[500px] w-[${width}px] h-[450px] rounded-2xl flex flex-col top-15 border right-1.5 min-h-[450px] bg-blue-200`}
             style={notesAppStyles}
             draggable={true}
        >
            <div className={"shadow-2xl flex justify-between w-full p-2 items-center "}>
                <div>
                    <h3 className={"text-2xl font-bold text-blue-400 "}>Notes</h3>
                </div>
                <div className={"rounded-2xl [&>*]:text-black"}>
                    <button><RemoveIcon/></button>
                    <button><AspectRatioIcon/></button>
                    <button><CloseIcon/></button>
                </div>
            </div>
            <div className={"overflow-scroll  p-2 scroll-smooth mb-10"}>
                {notes?.map((note)=>(
                    <div className={"bg-white text-black font-medium h-15 rounded-xl mb-2 pl-2 items-center flex"} onClick={(e)=>console.log(e) }>{note}</div>
                ))}
            </div>
            <div className={"absolute bottom-0 rounded-2xl p-3 w-full bg-white"}>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    setNotes([...notes,input.trim()])
                    setText("")

                }}
                      className={"flex justify-between w-full"}
                >
                    <input type={"text"}
                           placeholder={"Add a note"}
                           className={"w-full border-gray-600 border-2 rounded-xl p-2 text-black "}
                           value={text}
                           required={true}
                           onChange={(e)=> {
                               setText(e.target.value)
                               setInput(e.target.value)
                           }}/>
                    <button type={"submit"} className={"bg-orange-400 text-white rounded-xl font-bold pt-2 pb-2 pl-4 pe-4 ml-2 cursor-pointer"}>Add</button>
                </form>
            </div>

        </div>
    )
}
export default NoteApp