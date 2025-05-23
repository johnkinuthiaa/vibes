import RemoveIcon from '@mui/icons-material/Remove';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useEffect, useState} from "react";
import {train} from "./animations.ts"

type TerminalProps={
    show:boolean
}
const Terminal =({show}:TerminalProps)=>{
    const height=650
    const [command,setCommand]=useState<string>("")
    const[history,setHistory]=useState<string[]>([])
    const[message,setMessage]=useState("")
    const[display,setDisplay]=useState("")

    const[text,setText]=useState("")

    useEffect(() => {
        if(!show){
            setDisplay("none")
        }else{
            setDisplay("")
        }
    }, [show]);
    const terminalStyles ={
        display:display
    }

    const terminalCommands =()=>{
        setCommand(command.trim())
        switch (command){
            case "-h":
                setHistory([...history,command+`\n    -hello there! this is my terminal press man for manual`])
                break
            case "clear":
                setHistory([])
                break
            case "train":
                setHistory([...history,train])
                break
            case "man":
                setMessage("this is the manual of the program!")

                setHistory([...history,command+ " |->" +
                "this is the manual:" +
                " |->press -h for help" +
                " |->press man for the manual" +
                " |->enter clear to clear terminal" +
                " |->enter npm install <|package name|> to install a package"])
                break
            case (command.slice(0,10)):
                { const packageName =command.substring(10,command.length)
                setHistory([...history,command+` installing package ${packageName}....`])
                setTimeout(()=>{
                    setHistory([...history,command+` installation of ${packageName} completed`])
                },2000) }
                break
            default:
                setHistory([...history,"no such command exists"])
        }
        }

    return(
        <div
            className={` h-[${height}px] bg-black w-[600px]  rounded-2xl flex flex-col gap-4 fixed z-[999] border overflow-scroll scroll-smooth pb-2`}
            style={terminalStyles}
        >
            <div className={"shadow-2xl flex justify-between w-full p-2 items-center border-b border-b-gray-400"}>
                <div>
                    <h3 className={"text-2xl font-bold text-blue-400"}><ArrowForwardIosIcon/>Terminal</h3>
                </div>
                <div className={""}>
                    <button ><RemoveIcon/></button>
                    <button onClick={()=>{

                    }}><AspectRatioIcon/></button>
                    <button><CloseIcon/></button>
                </div>
            </div>
            <div>
                {history.map((item:string,index:number)=>(
                    <div  className={"flex flex-col flex-wrap"} key={index}><span className={"text-green-500"}>slippery@slippery-HP-EliteBook-x360-1030-G2:~$</span>{item}</div>
                ))}
                <div className={"text-green-500 flex flex-wrap"}>slippery@slippery-HP-EliteBook-x360-1030-G2:~$
                    <span>
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                            terminalCommands()
                            setText("")
                            setCommand("")
                            setMessage("")
                        }}>
                            <input
                                type={"text "}
                                autoFocus={true}
                                className={"outline-none ml-1 text-white"}
                                onChange={(e)=> {
                                    setText(e.target.value)
                                    setCommand(e.target.value)
                                }}
                                value={text}
                            />
                        <button type={"submit"}></button>
                        </form>
                    </span>
                </div>

            </div>
        </div>

    )
}
export default Terminal