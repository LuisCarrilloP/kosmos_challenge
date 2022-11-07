import './App.css'
import data from './data.json'
import { useEffect, useState } from 'react'
import Element from './components/Element'
import {FormContext} from './FormContext'

console.log(data);


function App() {

  const [ info , setInfo ] = useState("")
  
  useEffect(() => {
    setInfo(data[0])
  }, [])

  const { page_title, fields } = info ?? {}

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  const handleChange = (id, event) => {
    const newInfo = {...info}
    newInfo.fields.forEach(field => {
      const {type, f_id} = field
      if (id === f_id){
        switch (type) {
          case "options":
            field["value"] = event.target.checked
            break;
        
          default:
            field["value"] = event.target.value
            break;
        }
      }
      setInfo(newInfo)
    })
    console.log(info);
  }

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <h2>{page_title}</h2>
        <form>
          {
            fields ? 
            fields.map((field, i) => <Element key={i} field={field}/>)
            :
            null
          }
          <button type='submit' className='btn btn-primary' onClick={e => handleSubmit(e)}>Submit</button>
        </form>
        

        
      </div>
    </FormContext.Provider>
  )
}

export default App
