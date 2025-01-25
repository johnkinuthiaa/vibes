interface MusicHolderProps{
    name :string,
    imageUrl:string
}
const MusicHolder =({name,imageUrl}:MusicHolderProps)=>{
    return(
        <div>
            <img src={imageUrl}/>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    )
}
export default MusicHolder