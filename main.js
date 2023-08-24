let markup = {
    type: 'article',
    children: [
        {
            type: 'h2',
            children: [
                {
                    type: 'text',
                    value: 'counter'
                }
            ]
        },
        {
            type: 'h3',
            children: [
                {
                    type: 'text',
                    value: 'This works!'
                }
            ]
        },
        {
            type: 'p',
            children: [
                {
                    type: 'text',
                    value: 'counter'
                },
                {
                    type: 'em',
                    children: [
                        {
                            type: 'strong',
                            children: [
                                {
                                    type: 'text',
                                    value: '1'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'text',
                    children: [
                        {
                            type: 'p',
                            value: 'times'
                        }
                    ]
                },
                {
                    type: 'button',
                    children: [
                        {
                            type: 'text',
                            value: 'Click me'
                        }
                    ]
                }

            ]
        }

    ]

}

console.log(markup);

const main = document.getElementById("app");

function addElements (pojoElement, parentDOMNode) {
    let newDOMNode = pojoElement.type === "text" ? document.createTextNode(pojoElement.value)
    : document.createElement(pojoElement.type);
    if (pojoElement.children) {
        pojoElement.children.forEach(child => {
            addElements(child, newDOMNode)
        });
    }
    console.log(parentDOMNode);
    parentDOMNode.appendChild(newDOMNode);
}

addElements(markup, main)