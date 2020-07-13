import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel, IconButton } from '@material-ui/core'
import Message from './components/Message';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

    useEffect(()=>{
      db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=> {
        setMessages(snapshot.docs.map(doc=> ({id: doc.id , message:doc.data()}) ))
      })
    },[])

  useEffect(()=>{
    setUsername(prompt("Please Enter Your Name"))
  },[])

  const sendMessage = (event) => {
    event.preventDefault()
    db.collection('messages').add({
      message :input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
    
  }
 
  return (
    <div className="App">
      <img src='https://scontent.fbwa3-1.fna.fbcdn.net/v/t39.8562-6/37789948_1959933824027454_666414594595487744_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_oc=AQnx6-KzInQeJxSR8OJDL-QikBWJ9O7qidWKqpqBd65InwlUbNt1Cm7vJwQfBWRhPy0&_nc_ht=scontent.fbwa3-1.fna&oh=aa6c5d7bea4bc7e2e36583a723290942&oe=5F312233'/>
      <h1>Messenger Clone</h1>
      <h1>Welcome {username}</h1>
      
      <form className='app__form'>
      <FormControl className="app__formControl">
        {/* <InputLabel>Enter a Message</InputLabel>  this makes the cool popup*/}
        <Input 
        className='app__input'
        placeholder="Enter a message..."
        value={input} 
        onChange={event => setInput(event.target.value)} 
         />
        <IconButton className="app__iconButton" 
        disabled={!input} variant="contained" color="primary" onClick={sendMessage} type="submit">
          <SendIcon/>
        </IconButton>
      </FormControl>
      </form>
      <FlipMove>
      {
      messages.map(({id, message}) => (
        <Message username= {username} message={message} key={id}/>
        ))}
      </FlipMove>
      

    
    </div>
  
  );
}

export default App;
