import "./Wrapper2.css";


function Wrapper2(props){
    const classes = props.className + " wrapper2";
    return <div className={classes}>{props.children}</div>
}

export default Wrapper2;