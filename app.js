const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode)
let counterName = "One";
root.render(<App />)


function App () {
    const counterOne = <Counter name ={counterName} />
    const counterTwo = <Counter2 name ={counterName} />

    return (
        <>
            <h1>Counters</h1>
            <section>
                {/* template using ternary operator. */}
                { counterName === "One" ? counterOne : counterTwo }
            </section>
        </>

    )
}

function Counter ({ name }) {
    return (
        <>
            <h2>Counter {name}</h2>
            <p>You clicked 1 times</p>
            <button className="button">
                CLick me
            </button>
        </>
    )
}


function Counter2 ({ name }) {
    return (
        <>
            <h2>Counter {name}</h2>
            <p>Times clicked: 1</p>
            <button className="button">
                CLick me
            </button>
        </>
    )
}



function rerender () {
    console.log("Rerendering...");
    counterName = "Two";
    root.render(<App />)

}
