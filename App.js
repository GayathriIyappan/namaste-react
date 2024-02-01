
const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"it is h1 tag"),
        React.createElement("h2",{},"It is h2 tag")]
    )],
    [React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"it is h1 tag"),
        React.createElement("h2",{},"It is h2 tag")]
    )]
);





const root = ReactDOM.createRoot(document.getElementById("top"));

root.render(parent);