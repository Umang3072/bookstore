import './App.css'
import React from 'react'

// import Greet from './component/Title'
// import Welcome from './pages/Home'
// import Message from './pages/Home'
// import Counter from './pages/Counter'
// import FunctionClick from './component/FunctionClick'
// import ClassClick from './pages/ClassClick'
// import EventBind from './pages/EventBind'
// import ParentComponent from './pages/ParentComponent'
// import UserGreeting from './pages/UserGreeting'
// import NameList from './component/NameList'
// import About from './pages/About'
// import Title from './component/Title'
// import List from './component/List'
// import Stylesheet from './component/Stylesheet'
// import Inline from './component/Inline'
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './pages/Form';
// import LoginForm from './pages/LoginForm'
import LifeCycleA from './pages/LifeCycleA'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      isAbout : false,
  //      isTitle : false
  //   }
  // }

  // clickAbout(){
  //     this.setState({
  //       isAbout : true,
  //       isTitle : false
  //     })
  // }

  // clickTitle(){
  //   this.setState({
  //     isTitle : true,
  //     isAbout : false
  //   })
  // }
  
  render(){
    // let page
    // if (this.state.isAbout){
    //   page = <About/>
    // } else {
    //   page = <Title/>
    // }
  return (
    <div className="App">
      {/* <Greet name='Umang'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Dhruv'>
        <button>Action</button>
      </Greet>
      <Greet name='Sajan'/> */}

      {/* <Welcome name='Tirth'/>
      <Welcome name='Dhaval'/>
      <Welcome name='Niraj'/>  */}

      {/* <Message/> */}

      {/* <Counter/> */}

      {/* <FunctionClick/> */}

      {/* <ClassClick/> */}

      {/* <EventBind/> */}

      {/* <ParentComponent/> */}

      {/* <UserGreeting/> */}

      {/* <NameList/> */}

      {/* <button onClick={() => this.clickAbout()}>About</button>
      <button onClick={() => this.clickTitle()}>Title</button>
      {page} */}

      {/* <List/> */}

      {/* <Stylesheet/> */}

      {/* <Stylesheet primary={true}/> */}

      {/* <Inline/> */}

      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Form/> */}

      {/* <List/> */}

      {/* <LoginForm/> */}

      <LifeCycleA/>
    </div>
  );
  }
}

export default App
