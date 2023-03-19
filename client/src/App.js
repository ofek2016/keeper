import React, { useState ,useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CareateArea";
import axios from "axios"

const client = axios.create({
  baseURL: "http://localhost:4000/Notes"
})

const App = () => {

  const [notes, setNotes] = useState([]);


  const getNotes=()=>{
    fetch('http://localhost:4000/Notes')
         .then(respons => respons.json())
         .then((data) => setNotes(data))
         .catch(err =>console.log(err))
  }

  useEffect(()=>getNotes(),[notes])

  const addNote = (newnote) => {
    try {
      client.post('', newnote)
    } catch(e) {
      console.log(e)
    }
  }

  const deleteNote=(id)=>{
    client.delete(`/${id}`)
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes?.map((note, index) => {
        return <Note key={index} id={note._id} title={note.title} content={note.content} onDelete={deleteNote} />
      })}

      <Footer />
    </div>

  )

}

export default App;
