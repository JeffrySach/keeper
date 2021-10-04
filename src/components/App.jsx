import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addNote(note) {
    setItems((prevItems) => {
      return [...prevItems, note];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {items.map((val, i) => (
        <Note
          key={i}
          id={i}
          title={val.title}
          content={val.content}
          onChecked={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
