'use client'
import React, { useState } from 'react';
import { getFirestore, doc, addDoc, collection, getDocs,updateDoc, Timestamp } from "firebase/firestore"; 
import '../firebase.config';

const Uploadtodb = () => {
  const db = getFirestore();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedOption, setSelectedOption] = useState('blog');



  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    validateForm();
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
    validateForm();
  };

  const handleImageLinkChange = (event) => {
    setImageLink(event.target.value);
    validateForm();
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    validateForm();
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(title && text && imageLink && date && id);
  };

  const handleSubmit = async () => {
    // Perform submission logic with the form data
    console.log('Form submitted:', { title, text, imageLink, date, id, selectedOption });
    const docRef = await addDoc(collection(db, 'blog'), {
        title: title,
        text: text,
        image: imageLink,
        date: date,
        id: id
      });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '4rem 6rem', height: '100vh', background: 'white', color: 'black'}}>
      <h2 style={{color: 'black'}}>Form Component</h2>
      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column'}}>
        <label style={{color: 'black'}}>Title:</label>
        <input style={{color: 'black', padding: '0.5rem', marginBottom: '0.5rem', background: 'lightgray', border: 'none', borderRadius: '0.5rem'}} type="text" value={title} onChange={handleTitleChange} />
      </div>

      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column'}}>
        <label style={{color: 'black'}}>Text:</label>
        <textarea style={{color: 'black', padding: '0.5rem', marginBottom: '0.5rem', background: 'lightgray', border: 'none', borderRadius: '0.5rem'}} value={text} onChange={handleTextChange} />
      </div>

      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column'}}>
        <label style={{color: 'black'}}>Image Link:</label>
        <input style={{color: 'black', padding: '0.5rem', marginBottom: '0.5rem', background: 'lightgray', border: 'none', borderRadius: '0.5rem'}} type="text" value={imageLink} onChange={handleImageLinkChange} />
      </div>

      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column'}}>
        <label style={{color: 'black'}}>Date:</label>
        <input style={{color: 'black', padding: '0.5rem', marginBottom: '0.5rem', background: 'lightgray', border: 'none', borderRadius: '0.5rem'}} type="date" value={date} onChange={handleDateChange} />
      </div>

      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column'}}>
        <label style={{color: 'black'}}>Id:</label>
        <input style={{color: 'black', padding: '0.5rem', marginBottom: '0.5rem', background: 'lightgray', border: 'none', borderRadius: '0.5rem'}} type="text" value={id} onChange={handleIdChange} />
      </div>

      <div>
        <label style={{color: 'black'}}>
          <input
            style={{color: 'black', marginRight: '0.5rem'}}
            type="radio"
            value="blog"
            checked={selectedOption === 'blog'}
            onChange={handleOptionChange}
          />
          Hunza blog
        </label>
        <label style={{color: 'black'}}>
          <input
            style={{color: 'black', marginRight: '0.5rem'}}
            type="radio"
            value="hh"
            checked={selectedOption === 'hh'}
            onChange={handleOptionChange}
          />
          Hunza happenings
        </label>
      </div>

      <button style={{color: 'black', padding: '0.5rem', background: 'lightgray', border: 'none', borderRadius: '0.5rem', marginTop: '1rem'}} onClick={handleSubmit} disabled={false}>
        Submit
      </button>
    </div>
  );
};

export default Uploadtodb;








