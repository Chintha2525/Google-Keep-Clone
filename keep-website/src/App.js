import React, { useState } from 'react'
import Header from './Components/Header'
import CreateArea from './Components/CreateArea'
import Note from './Components/Note';
import "./App.css"
import Footer from './Components/Footer';

const App = () => {
  const [notes,setNotes] = useState([]);

      function addNote(newNote) {
        setNotes((prevNotes) => {
          return [...prevNotes, newNote]
        })
      }
      function deleteNote(id) {
        setNotes((prevNotes) => {
          return prevNotes.filter((noteItem, index) => {
            return index != id;
          })
        })
      }
  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote}/>
      {
        notes.map((noteItem, index) => {
          return  <Note key={index} title = {noteItem.title} contant = {noteItem.contant} id={index} onDelete={deleteNote}/>
        })
      }
      <Footer />
    </div>
  )
}

export default App
