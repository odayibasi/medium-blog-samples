const FunctionComponentExportA = () => (<div>I am a Function Component Export Version2 A</div>)


function FunctionComponentExportB() {
    return (
        <div>I am a Function Component Export Version2 B</div>
    )
}


function FunctionComponentExportC(props) {

    const {name, surname} = props;
    return (
        <div>{`Export Version2  My name is ${name} ${surname}`}</div>
    )
}


export {
    FunctionComponentExportA,
    FunctionComponentExportB,
    FunctionComponentExportC,
}






