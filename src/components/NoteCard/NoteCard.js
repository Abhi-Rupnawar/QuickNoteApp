
import React from 'react';
import './NoteCard.css';
import IconPng from './bin.png'

function titleCase(str){
  return str[0].toUpperCase() + str.slice(1);
}

function deleteNote(index){
  const saveNotes = JSON.parse(localStorage.getItem("notes")) || [];
  saveNotes.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(saveNotes));

  window.location.reload();
}
function NoteCategory({ category }) {
  const CATEGORY_EMOJIS = {
    shopping: '🛍️',
    work: '💻',
    personal: '👨‍💻',
    health: '🏋️‍♂️',
    learning:'🧑‍🏫'
  };

  return (
    <div className={`note-card-category bg-${category}`}>
      <span className="note-category-emoji">{CATEGORY_EMOJIS[category]}</span>
      {titleCase(category)}
    </div>
  );
}

function NoteCard({index, title, description, category, emoji }) {
  return (
    <div className="note-card">
      <div className="note-card-emoji">{emoji}</div>
      <div>
        <h3 className="note-card-title">{title}</h3>
        <p className="note-card-description">{description}</p>
        <NoteCategory category={category} />

        <img 
        src={IconPng}
        className="note-card-delete"
        alt='delete'
        onClick={()=>{deleteNote(index);

        }}
         />
      </div>
    </div>
  );
}

export default NoteCard;

