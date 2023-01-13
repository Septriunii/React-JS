import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <RefsDemo/>
        {/* <ParentComp /> */}
        {/* <Table/> */}
        {/* <FragmentDemo/> */}
        {/* <LifecycleA/> */}
        {/* <Counter /> */}
        {/* <Message /> */}

        {/* <Greet name='Naruto' aka='Hokage'>
          <p>This is a children</p>
        </Greet>
        <Greet name='Sasuke' aka='Shadow'>
          <button>Action</button>
        </Greet>
        <Greet name='Kakashi' aka='Sharingan'/>

    */}
       {/* <Welcome name='Naruto' aka='Hokage'/>
       <Welcome name='Sasuke' aka='Shadow'/>
       <Welcome name='Kakashi' aka='Sharingan'/> */}
       {/* <FunctionClick/> */}
       {/* <ClassClick /> */}
       {/* <EventBind /> */}
       {/* <ParentComponent/> */}
       {/* <UserGreetings /> */}
       {/* <NameList/> */}
       {/* <Stylesheet primary = {true}/> */}
       {/* <Inline/>
       <h1 className='error'>Error</h1>
       <h2 className={styles.success}>Success</h2> */}
       {/* <Form /> */}
      </div>
    )
  }
}

export default App;
