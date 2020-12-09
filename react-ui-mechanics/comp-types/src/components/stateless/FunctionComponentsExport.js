const FunctionComponentExportA = () => (<div>I am a Function Component Export A</div>)


function FunctionComponentExportB() {
    return (
        <div>I am a Function Component Export B</div>
    )
}


function FunctionComponentExportC(props) {

    const {name,surname}=props;
    return (
        <div>{`Export My name is ${name} ${surname}`}</div>
    )
}

export default FunctionComponentExportA



export {
    FunctionComponentExportB,
    FunctionComponentExportC,
}






