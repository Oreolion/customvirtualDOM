const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(React.createElement(App))
console.log(React);
console.log(root);



function App () {
    return React.createElement("section", null, 
        React.createElement("h1", null, "Counters "),
        React.createElement("section", null,
            // template logic in React
            counterName === "One" ? React.createElement(Counter, {name: counterName}) :
            React.createElement(Counter2, {name: counterName})
        )
    );        
    
}



function Counter (props) {
    return (
        React.createElement("article", null, 
            React.createElement("h2", null, "Counter ", props.name),
            React.createElement("p", null, "You clicked 1 times"),
            React.createElement("button", {className: "button"}, "Click me")
        )   
    )
}


function Counter2 (props) {
    return (
        React.createElement("article", null, 
            React.createElement("h2", null, "Counter ", props.name),
            React.createElement("p", null, "Times clicked: 1"),
            React.createElement("button", {className: "button"}, "Click me")
        )   
    )
}


function update () {
    console.log("Rerender");
    counterName = "Two";
    root.render(React.createElement(App))

}