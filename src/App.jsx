import React, { useState, useEffect } from "react"
import axios from "axios"


import './App.css'

export default function App() {
  const [quotes, setQuotes] = useState('');
  const [author, setAuthor] = useState('')


  const quoteApi = async () => {
    let arrayOfQuotes = []
    const data = await axios.get('https://api.quotable.io/random')
    arrayOfQuotes = data.data;
    setQuotes(arrayOfQuotes.content);
    setAuthor(arrayOfQuotes.author);
  }
  useEffect(() => {
    quoteApi();
  }, [])
  return (
    <div>
  
      <button onClick={quoteApi}> Get Quote</button>
      <div className="today"> Today's Qoute: {quotes}</div>
      <div className="auth">  Author:{author}</div>
    </div>
  )
}
