import React from 'react'

// const Greet = props => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             {props.children}
//         </div>
//     )
// }

// const Greet = ({name,children}) => {
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//             {children}
//         </div>
//     )
// }

// const Greet = props => {
//     const {name,children} = props
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//             {children}
//         </div>
//     )
// }

// export default Greet

function Title(props) {
    console.log(props)
    
    return (
        <div>
          <p>This is {props.ti.title}, {props.ti.description}</p>
        </div>
    )
}

export default Title

