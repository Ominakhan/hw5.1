import CardData from "./CardData";
import CardImgName from "./CardImgName";
import CardText from "./CardText";
import Wrapper1 from "./Wrapper1";
import Wrapper2 from "./Wrapper2";
import "./ContainerCard.css";



function ContainerCard(props){
     return(
<div className='container'>
 {props.comment.map((el)=>( <li key={el.id}>
<div>
    <Wrapper1 className="comment-first">
        <CardImgName {...el}/>
    </Wrapper1>
      
    <Wrapper2 className="comment-second" >
      <CardText {...el}/>
      <CardData {...el}/>
    </Wrapper2>
    
    
</div>
</li>
))}
        </div>
    )
}

export default ContainerCard;
