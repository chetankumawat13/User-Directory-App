import React, { useState } from 'react'
import Form from './components/Form'
import './style/base.css'
import Card from './components/Card'

const App = () => {

  const [formData, setFormData] = useState([])

  return (
    <div className='main'>
      <Form formData={formData} setFormData={setFormData} />
      <h1>User directory</h1>
      <div className="cards">
        <Card formData={formData} />
      </div>
    </div>
  )
}

export default App