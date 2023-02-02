import React from "react";

function A () { 
  const [value, setValue] = React.useState("this is the initial value ...")
  const [another, setAnother] = React.useState(true)

  React.useEffect(() => {
    console.log("The effect .....!")
  })

  React.useEffect(() => {
    console.log("Mounted ...")
    const timerId = setInterval(() => {
      console.log("Interval ...")
    }, 2000)
    return () => {
      //clearInterval(timerId)
    }
  }, [])

  React.useEffect(() => {
    console.log("Hello .....")
  }, [value])

  function handleClick(param) { 
    setValue("Updated!!!")
   }

  return (<div className="HelloWorld">
    {value}

    <button onClick={() => handleClick()}>Click me!</button>
    <button onClick={() => { setAnother(!another) }}>change another</button>

  </div>)
 }

class Hello extends React.Component {
  constructor(props) {
    super(props);

// this.componentDidMount
// this.componentDidUpdate
// this.componentWillUnmount
// this.componentDidCatch

    this.state = {
      value: "this is the initial value ...",
      anotherOne: "another value...",
    }
  }

  componentDidMount() {
   console.log("Mounted ...") 
  }

  componentDidUpdate() {
    console.log("Updated ...")
  }

  componentWillUnmount() {
    console.log("WillUnmount ....")
  }

  handleClick() { 
    console.log("Clicked!")
    this.setState({ value: "should be changed ....", a: "Ha" })
   }

  a = function() {}
  render() {
    console.log("Rendered ....")
    const theState = this.state
    console.log({theState})
    return <div className="HelloWorld">
      Hello {this.state.value}
      another {this.state.anotherOne}
      <button onClick={() => this.handleClick()} >Click m!</button>
      </div>
  }
}

export default A