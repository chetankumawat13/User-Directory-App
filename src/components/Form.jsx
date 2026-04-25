import React, { useState } from 'react'
import '../style/form.css'

const Form = ({formData,setFormData}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [role, setRole] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        const newFormData = [...formData]
        newFormData.push({name,email,imgUrl,role})
        setFormData(newFormData)
        setName("")
        setEmail("")
        setImgUrl("")
        setRole("")

    }

  return (
    <div>
        <form onSubmit={submitHandler} >
            <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" placeholder='Name' />
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='Email' />
            <input value={imgUrl} onChange={(e) => {setImgUrl(e.target.value)}} type="text" placeholder='Enter img Url' />
            <input value={role} onChange={(e) => {setRole(e.target.value)}} type="text" placeholder='Enter Role' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form