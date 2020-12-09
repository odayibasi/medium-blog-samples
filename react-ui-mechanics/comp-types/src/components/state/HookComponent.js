import React, {useState} from 'react';

export function HookComponent() {


    const [age, setAge] = useState(30);

    return (
        <div>
            Hook Component
            <br/>
            <span>Age:{age}</span>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
        </div>
    )

}

