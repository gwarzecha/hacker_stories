import * as React from "react";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 3,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    author: "Brendan Eich",
    num_comments: 1,
    points: 10,
    objectID: 2,
  },
  {
    title: "TypeScript",
    url: "https://www.typescriptlang.org/",
    author: "Microsoft",
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
  {
    title: "Node.js",
    url: "https://nodejs.org/",
    author: "Ryan Dahl",
    num_comments: 4,
    points: 5,
    objectID: 4,
  },
  {
    title: "Python",
    url: "https://www.python.org/",
    author: "Guido van Rossum",
    num_comments: 3,
    points: 10,
    objectID: 5,
  },
];

function App() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      {list.map((item) => {
        return (
          <li key={item.objectID}>
            <a href={item.url} target="_blank">
              {item.title}
            </a>{" "}
            <span>{item.author}</span> <span>{item.num_comments}</span>{" "}
            <span>{item.points}</span>
          </li>
        );
      })}
    </div>
  );
}

export default App;
