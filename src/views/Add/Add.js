import React, { useState } from "react";
import "./Add.css";
import HomeButton from "../../components/HomeButton/HomeButton";
import EmojiPicker from "emoji-picker-react";
import toast from "react-hot-toast";

function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [emoji, setEmoji] = useState("");
  const [openEmojiDialogue, setOpenEmojiDialogue] = useState(false);

  const addNote = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteObject = {
      title,
      description,
      category,
      emoji,
    };

    notes.push(noteObject);

    localStorage.setItem("notes", JSON.stringify(notes));

    toast.success("Note added successfully!");

    setTitle("");
    setDescription("");
    setCategory("");
    setEmoji("");
  };

  return (
    <div>
      <h1 className="text-center text-primary">✍️ Add Note</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="user-input"
      />

      <input
        type="text"
        className="user-input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="user-input user-input-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="shopping">Shopping</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="learning">Learning</option>
        <option value="health">Health</option>
      </select>

      {openEmojiDialogue && (
        <EmojiPicker
          height={"400px"}
          width={"400px"}
          onEmojiClick={(emojiObject) => {
            setEmoji(emojiObject.emoji);
            setOpenEmojiDialogue(false);
          }}
          className="emoji-picker"
        />
      )}

      <div
        className="user-input user-input-emoji"
        onClick={() => setOpenEmojiDialogue(true)}
        style={{ cursor: "pointer" }}
      >
        {emoji ? emoji : "Select Emoji"}
      </div>

      <button
        type="button"
        className="btn btn-primary add-note-button"
        onClick={addNote} 
      >
        + Add Note
      </button>

      <HomeButton />
    </div>
  );
}

export default Add;
