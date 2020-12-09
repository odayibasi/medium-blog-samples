export const FunctionComponentA = () => (<div>I am a Function Component A</div>)


export function FunctionComponentB() {
    return (
        <div>I am a Function Component B</div>
    )
}


export function FunctionComponentC(props) {

    const {name,surname}=props;
    return (
        <div>{`My name is ${name} ${surname}`}</div>
    )
}



