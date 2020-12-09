import React, {useState} from 'react';

function HookComponent() {


    const [age, setAge] = useState(0);

    return (
        <div>
            Hook Component
            <br/>
            <span>Age:{age}</span>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
        </div>
    )

}


export default HookComponent;
