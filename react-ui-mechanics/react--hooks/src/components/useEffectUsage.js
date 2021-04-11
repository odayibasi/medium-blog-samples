import React from "react";

/*============================================================================
  COUNTER
============================================================================ */


//https://codesandbox.io/s/useeffect-counter-fcdgp
export function Counter() {
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


export function Counter3() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.count('In useEffect, after render')
        document.title = `Count: ${count}`

        setInterval(() => {
            console.log('HELLO')
        }, 1000);

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


export function Counter4() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.count('In useEffect, after render')
        document.title = `Count: ${count}`

        const intervalID = setInterval(() => {
            console.log('HELLO')
        }, 1000);

        return () => {
            console.count('Clear Interval Called')
            clearInterval(intervalID)
        }
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
function getGithubProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
}

export function Profile() {
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
    const LIMIT = 30;
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

export function Wait({delay = 1000, placeholder, ui}) {
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        const id = window.setTimeout(() => {
            setShow(true)
        }, delay)

        return () => window.clearTimeout(id)
    }, [delay])

    return show === true ? ui : placeholder
}


/*============================================================================
  FETCHING POST
============================================================================ */

//https://codesandbox.io/s/useeffect-solution-fetch-xbgpi?file=/src/index.js:0-2295
const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

function fetchPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
}

export function PostFetching() {
    const [index, setIndex] = React.useState(0)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [post, setPost] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        fetchPost(postIds[index])
            .then((post) => {
                setPost(post)
                setError(null)
                setLoading(false)
            })
            .catch((e) => {
                console.warn(e.message)
                setError('Error fetching data. Try again.')
                setLoading(false)
            })
    }, [index])

    const incrementIndex = () => {
        setIndex((i) => i === postIds.length - 1 ? i : i + 1)
    }
    if (loading === true) {
        return <p>Loading</p>
    }
    if (error) {
        return (<React.Fragment><p>{error}</p>
            <button onClick={incrementIndex}>Next Post</button>
        </React.Fragment>)
    }
    return (<div className="Post Fetching">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            {index === postIds.length - 1 ? <p>No more posts</p> : <button onClick={incrementIndex}>Next Post</button>}
        </div>
    );
}


/*============================================================================
  Window Dimension Calculator
============================================================================ */
//https://codesandbox.io/s/custom-hooks-solution-browser-dimensions-vhzdu?file=/src/index.js:521-1207
function useWindowDimensions() {
    const [width, setWidth] = React.useState(window.innerWidth)
    const [height, setHeight] = React.useState(window.innerHeight)

    React.useEffect(() => {
        const listener = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener("resize", listener)

        return () => {
            window.removeEventListener("resize", listener)
        }
    }, [])

    return {
        width,
        height
    }
}


export function WindowDimensionCalculator() {
    const {width, height} = useWindowDimensions()
    return (
        <div className="App">
            <h2>width: {width}</h2>
            <h2>height: {height}</h2>
            <p>Resize the window.</p>
        </div>
    )
}
