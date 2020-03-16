import React, { Component } from 'react';
class TODO extends Component {
    state = {
        input: "",
        List: [],
        Change: false,
        
        
        
    }
    addItem = () => {
        this.setState({
            List: [...this.state.List, {value:this.state.input,id:Math.random(),complete:this.state.Change}]
        })
    }
    remove=(id)=> {
        this.setState({
            List : this.state.List.filter(el=>el.id!==id)
        })        
    }
    Changeetat=(id)=> {
      this.setState({
         List : this.state.List.map(el=> el.id===id ? {...el,complete:!el.complete}:el)
      })  
    }
    
    render() {
        console.log(this.state.List)
        console.log("input:", this.state.input)
        return (<div>
            <div id="back">
            <p class="To"><b>To-Do App!</b></p>
        <p id="addnew"><b>Add new To-Do</b></p>
                <input id="searchbar" type="text" onChange={(event) => this.setState({
                    input: event.target.value
                })} />
                <button id="add" onClick={this.addItem}>ADD</button>
            </div>
            <div id="font">
        <p id="let"><b>Let's get some work done!</b></p>
    </div>
            <ul>
                {
                    this.state.List.map((el,i) => <div  key={i}>
                    <li className={!el.complete ? "s1":"s2"}>
                        {el.value}
                    </li>
                    <button  onClick={()=>this.remove(el.id)}>DELETE</button>
                <button onClick={()=>this.Changeetat(el.id)}>{!el.complete? "complete":"undo"}</button>
                    
                    
                    </div>
                    )}
            </ul>
        </div>);
    }
}
export default TODO;