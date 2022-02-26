import React from "react";

export function UseLayoutEffectSample() {
  const [counter, setCounter] = React.useState(0)

  React.useEffect(() => {
    console.log('useEffect:', counter)
  }, [counter])


  React.useLayoutEffect(() => {
    console.log('useLayoutEffect:', counter)
  }, [counter])


  console.log('render:', counter)
  return (<div>
    <div>{counter}</div>
    <button onClick={()=>setCounter(counter + 1)}>Inc</button>
  </div>)
}
