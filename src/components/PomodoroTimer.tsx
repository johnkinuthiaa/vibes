import {useEffect, useState} from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CloseIcon from '@mui/icons-material/Close';


type PomodoroProps={
    show:boolean
}
const PomodoroTimer =({show}:PomodoroProps)=>{
    const[start,setStart] =useState(false)
    const[stop,setStop] =useState(false)
    const[mins,setMins] =useState(25)
    const[secs,setSecs] =useState(0)
    const[display,setDisplay]=useState("")
    const[message,setMessage]=useState("")

    useEffect(() => {
        if(!show){
            setDisplay("none")
        }else{
            setDisplay("")
        }
    }, [show]);
    const pomodoroStyles ={
        display:display
    }

    const startPomodoro =()=>{
        const totalTimeInSecs =25*60
        let minutes =totalTimeInSecs/60
        let seconds =totalTimeInSecs%60
        if(start && !stop){
            return
        }
        setStart(true)
        setInterval(()=>{
            if(minutes<0){
                minutes=0
            }
            if(seconds ===0 && minutes==0){
                minutes=0
                seconds=0
                setStart(false)
            }
            if(seconds<0 || seconds ===0){
                seconds=59
                minutes =minutes-1
            }
            if(minutes<=0){
                setMins(0)
                setStop(true)
            }
            setSecs(seconds--)
            setMins(minutes)

        },1000)


    }
    const stopTimer =()=>{
        setStop(true)
        setStart(false)
    }
    return(
        <div className={` flex flex-col h-[100%] w-full  rounded-2xl p-2`}
             draggable={true}
             style={pomodoroStyles}
        >
            <div className={"flex justify-between mt-3 "}>
                <div
                    className={"text-2xl font-bold ml-20"}>
                    Pomodoro Timer
                </div>
                <div className={"flex gap-4 mr-24"}>
                    <button><RemoveIcon/></button>
                    <button><AspectRatioIcon/></button>
                    <button><CloseIcon/></button>
                </div>
            </div>
            <div className={"flex flex-col justify-center items-center mt-20"}>
                {message &&<p>{message}</p>}
                <h2 className={"font-bold text-3xl"}>{mins}:{secs}</h2>
                <div className={"flex gap-2 mt-10 [&>*]:font-bold"}>
                    <button className={"bg-blue-600 text-white rounded-2xl pt-4 pb-4 pl-6 pe-6 cursor-pointer"} onClick={()=>startPomodoro()}>Start</button>
                    <button className={"bg-red-600 text-white rounded-2xl pt-4 pb-4 pl-6 pe-6 cursor-pointer"} onClick={()=>{
                        stopTimer()
                    }}>Stop</button>
                </div>
            </div>

        </div>
    )
}
export default PomodoroTimer