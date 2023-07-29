import { useState } from "react";

const AddNote = ({newNote}) => {
  
    const [title,setTitle] = useState('');
    const [description,setDescription] =useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    newNote(title,description);
    setTitle('');
    setDescription('');
   }



    return (
        <form onSubmit={ handleSubmit } >
          <label htmlFor="title">Title</label>
          <input type="text" value={title} onChange={ (e) => setTitle (e.target.value) } placeholder="Başlık"/>
          <input type="text" value={description} onChange={ (e) => setDescription (e.target.value) } placeholder="Açıklama"/>
          <input type="submit" value="Add Note" />
        </form>
    )
}

export default AddNote;