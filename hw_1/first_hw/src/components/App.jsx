import './App.css'
import Header from './Header'
import Button from './Button'
import Input from './Input'
import Form from './Form'

function App() {


  return (
      <div className="container">
        <Header>PIZZA DAY</Header>
        <Form comp_input={<Input/>} comp_button={<Button>Start Order</Button>}></Form>
      </div>
  )
}

export default App
