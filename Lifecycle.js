import React, { Component } from 'react'

export default class Header extends Component {
    constructor(){
      alert('constructor')
        super();
        this.state={
            value:'Welcome', name: 'Guys'
        }
    }

    componentWillMount(){
        alert('learn reactjs');
    }

    componentDidMount(){
      setInterval(()=>{
        this.setState({value:'NISHA DEVI'})
      },1000);
    }

    componentDidUpdate(){
      alert('component did mount')
    }
  render() {
    alert('Rendering');
    return (
      <>
        <h1>
            {this.state.value} {this.state.name}
        </h1>
      </>
    )
  }
}

