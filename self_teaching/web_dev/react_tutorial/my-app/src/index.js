import React from "react"
import ReactDOM from "react-dom"
import './index.css'

function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src="react-logo.png" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}
function Footer() {
    return (
        <footer>
            <small>© 2022 MP development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))


/* Complete

Custom Components Part 2
import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width="60px" alt="logo"></img>
                </nav>
            </header>
            <h1>This is a page outlining my motivations for learning React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>© 2022 MP development. All rights reserved.</footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

const page = (
    <div>
        <img width="40px" src="./react-logo.png"></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))




// import React from 'react'
// import ReactDOM from 'react-dom'

const page = (
    <div>
        <h1>Header 1</h1>
        <h3>Fascinating subtext</h3>
        <ol>
            <li>Writing 1</li>
            <li>Writing 2</li>
            <li>Writing 3</li>
        </ol>
        <footer><i>By Bichael Berreault.</i></footer>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(page))




const navbar = (
    <nav>
        <h1 className="header">Good Website</h1>
        <ul className="pages">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(
    navbar,
    document.getElementById("root")
)




console.log(page):
{
    type: "div", 
    key: null, 
    ref: null, 
    props: {
        children: [
            {
                type: "h1", 
                key: null, 
                ref: null, 
                props: {
                    className: "header", 
                    children: "This is JSX"
                }, 
            }, {
                type: "p", 
                key: null, 
                ref: null, 
                props: {
                    children: "This is a paragraph"
                }, 
            }
        ]
    }
}
Or save a whole collection as a variable and render that. 
const page = (
    <div>
        <h1 className="header">This is JSX.</h1>
        <p>This is a graoshm,teioahnaeton</p>
    </div>
)
ReactDOM.render(page, document.getElementById("root"))

Need one parent element to render.
    <div>
        <h1 className="header">This is JSX.</h1>
        <p>This is a paragraph</p>
    </div>,



const element = <h1 className="header">This is JSX</h1>
console.log(element)
in a jsx h1 element:
{
type: "h1"
key: null
ref: null
props: {className: 'header', children: 'This is JSX'}
_owner: null
_store: {validated: false}
}
JSX


Declarative, React way:
ReactDOM.render(<h1 className="header">Hi, my name is Bichael.</h1>, document.getElementById("root"))

Imperative, JS way: 
const h1 = document.createElement("h1")
h1.textContent = "Hi my name is Bichael."
h1.className = "header"
document.getElementById("root").append(h1)




// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function MainContent() {
//     return (
//         <h1>Hey, this is the main component.</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )
*/