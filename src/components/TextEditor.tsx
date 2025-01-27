import {useState} from "react";

const TextEditor =()=>{
    const [bold,setBold] =useState<boolean>(false)
    const [italics,setItalics] =useState<boolean>(false)
    const [cancel,setCancelled] =useState<boolean>(false)
    const [underline,setUnderline] =useState<boolean>(false)
    const [capitalize,setCapitalize] =useState<boolean>(false)
    const [fontColor,setFontColor] =useState<string>("rgb(0,0,0)")
    const textAreaStyles ={
        color:fontColor
    }
    return(
        <div className={"text__editor__container flex flex-col w-[600px] bg-gray-700 mt-12 absolute  ml-4 rounded-2xl  "}>
            <div className={"Header flex gap-5 p-2 items-center justify-center mb-10"}>
                <button onClick={()=>setBold(!bold)}>B</button>
                <button onClick={()=>setItalics(!italics)}>I</button>
                <button className={"underline "} onClick={()=>setUnderline(!underline)}>U</button>
                <button className={"italic"} onClick={()=>setCancelled(!cancel)}>S</button>
                <button onClick={()=>setBold(!bold)}
                        className={"flex flex-col"}>
                    A<span className={"h-[2px]"}>
                    <input type={"color"} className={"h-[8px] w-[50px]"}
                           onChange={(e)=> {
                               setFontColor(e.target.value)
                               console.log(fontColor)
                           }}/></span></button>
                <button onClick={()=>setCapitalize(!capitalize)}>C</button>
                <button onClick={()=>setBold(!bold)}>A</button>
            </div>
            <textarea rows={5} cols={100} className={`p-[2px] h-[600px] border-0 cursor-text bg-white resize-none 
                          ${bold&&"font-extrabold"}
                          ${italics&&"italic"}
                          ${underline &&"underline"}
                          ${cancel&&"line-through"}
                          rounded-b-2xl
                          outline-none
                          border-0
                          focus
                          `}
                      style={textAreaStyles}
            >

            </textarea>


        </div>
    )
}
export default TextEditor