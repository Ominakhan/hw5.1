

function CardImgName(props) {
        return(
<div>
    <div className="img"><img src={props.author.avatarUrl} alt="img"/></div>
   
    <div className="name">{props.author.name}</div>
</div>
    )
    
}

export default CardImgName;