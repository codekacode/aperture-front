import { useState } from 'react';
import styled from 'styled-components'

const SuscribeForm = styled.form`
    min-height: 300px;
    background: yellow;
`

function Suscribe() {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    // const [password, setPassword] = useState("")
    const handleSubmit = event => {
        event.preventDefault();
        let emailValid = false;
        if(email.length == 0){
            setEmailError("Es requerido un email")
        } 
        else if(email.length < 6){
            setEmailError("Email should be minumum 6 characters")
        }
        else if(email.indexOf(' ') >= 0){
            setEmailError("El email no puede tener espacios")
        } 
        else {
            setEmailError("");
            emailValid = true
        }
        if (emailValid){
            alert('Email: '+ email)
            setEmail("");
        }
    }
   return (
    <SuscribeForm onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text"/>
        <label>Email:</label>
        <input type="email" onChange={event=> setEmail(event.target.value)}/>
        <input type="submit" value="Enviar"/>
        Email registrado: {email}
        {emailError.length > 0 &&
        <p>{emailError}</p>}
    </SuscribeForm>
   ) 
}

export default Suscribe