import "./Wrapper1.css";

function Wrapper1(props){
    const classes = props.className + " wrapper1";
    return <div className={classes}>{props.children}</div>
}

export default Wrapper1;