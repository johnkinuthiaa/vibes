import {useState} from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CloseIcon from '@mui/icons-material/Close';

const PomodoroTimer =()=>{
    const[xPosition,setXPosition] =useState<number>(50)
    const[yPosition,setYPosition] =useState<number>(800)
    const[start,setStart] =useState(false)
    const[mins,setMins] =useState(25)
    const[secs,setSecs] =useState(0)


    const pomodoroStyles ={
        top:xPosition,
        left:yPosition
    }
    const startPomodoro =()=>{
        if(!start){
            setStart(true)
        }
        if(start){
            const totalTimeInSecs =25*60
            let minutes =totalTimeInSecs/60
            let seconds =totalTimeInSecs%60

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
                setSecs(seconds--)
                setMins(minutes)


            },1000)
        }

    }
    const stopTimer =()=>{
        setStart(false)
        setSecs(0)
        setMins(25)
    }

    return(
        <div className={`fixed z-[999] w-96 flex flex-col h-[200px] bg-amber-50 rounded-2xl p-2`}
             style={pomodoroStyles}
             draggable={true}
        >
            <div className={"flex justify-between "}>
                <h1>Timer</h1>
                <div className={"flex gap-2"}>
                    <button><RemoveIcon/></button>
                    <button><AspectRatioIcon/></button>
                    <button><CloseIcon/></button>
                </div>
            </div>
            <div className={"flex flex-col justify-center items-center"}>
                <h2 className={"font-bold text-3xl"}>{mins}:{secs}</h2>
                <div className={"flex gap-2"}>
                    <button className={"bg-blue-600 text-white rounded-2xl pt-2 pb-2 pl-4 pe-4 cursor-pointer"} onClick={()=>startPomodoro()}>Start</button>
                    <button className={"bg-red-600 text-white rounded-2xl pt-2 pb-2 pl-4 pe-4 cursor-pointer"} onClick={()=>{
                        stopTimer()
                    }}>Stop</button>
                </div>
            </div>

        </div>
    )
}
export default PomodoroTimer