import React from "react";

/*============================================================================
  COUNTER
============================================================================ */


//https://codesandbox.io/s/useeffect-counter-fcdgp
export function Counter () {
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        console.count('In useEffect, after render')
        document.title = `Count: ${count}`
    })

    console.count('Rendering')

    return (
        <>
            <button onClick={() => setCount((c) => c - 1)}>-</button>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
        </>
    )
}



export function Counter2() {
    console.count('Counter Func Call')
    const [count, setCount] = React.useState(0)


    React.useEffect(count % 2 === 0 ? () => {
        console.count('In useEffect, after render')
        document.title = `Count: ${count}`
    } : () => {
        console.count('In useEffect XXX, after render')
        document.title = `Count XXX: ${count}`
    })

    return (
        <>
            <button onClick={() => setCount((c) => c - 1)}>-</button>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
        </>
    )
}



export function Counter3 () {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.count('In useEffect, after render')
        document.title = `Count: ${count}`
    })

    console.count('Rendering')

    return (
        <>
            <button onClick={() => setCount((c) => c - 1)}>-</button>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
        </>
    )
}


/*============================================================================
  PROFILE
============================================================================ */

//https://codesandbox.io/s/useeffect-infinite-loop-tczzm?file=/src/index.js:62-718
function getGithubProfile (username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
}

export function Profile () {
    const [profile, setProfile] = React.useState(null)

    React.useEffect(() => {
        getGithubProfile('odayibasi')
            .then(setProfile)
    }, [])

    if (profile === null) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>@{profile.login}</h1>
            <img
                src={profile.avatar_url}
                alt={`Avatar for ${profile.login}`}
            />
            <p>{profile.bio}</p>
        </div>
    );
}



export function Profile2() {
    const [profile, setProfile] = React.useState(null)
    const [input, setInput] = React.useState('odayibasi')

    React.useEffect(() => {
        getGithubProfile(input)
            .then(setProfile)
    }, [input])

    if (profile === null) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)}
                   placeholder='Profile'/>
            <h1>@{profile.login}</h1>
            <img
                src={profile.avatar_url}
                alt={`Avatar for ${profile.login}`}
            />
            <p>{profile.bio}</p>
        </div>
    );
}



/*============================================================================
  CHARLIMIT
============================================================================ */
//https://codesandbox.io/s/useeffect-solution-character-limit-hl4f1?file=/src/index.js:525-1046
export function CharLimit() {
    const LIMIT=30;
    const [input, setInput] = React.useState('')

    React.useEffect(() => {
        document.title = `${LIMIT - input.length} characters left.`
    }, [input])

    return (
        <div className="App">
      <textarea
          type='text'
          value={input}
          placeholder='Type'
          onChange={(e) => setInput(e.target.value)}
      />
            <button
                disabled={input.length === 0 || input.length > LIMIT}
                onClick={() => console.log(input)}>
                Submit
            </button>
        </div>
    );
}

/*============================================================================
  WAIT
============================================================================ */

//https://codesandbox.io/s/useeffect-solution-wait-delay-418fz?file=/src/index.js:86-396
export function Wait ({ delay = 1000, placeholder, ui }) {
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        const id = window.setTimeout(() => {
            setShow(true)
        }, delay)

        return () => window.clearTimeout(id)
    }, [delay])

    return show === true ? ui : placeholder
}
