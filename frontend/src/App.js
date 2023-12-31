import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [q, setQ] = useState("");
  const [qAuthor, setQAuthor] = useState("");
  const [qString, setQString] = useState("");
  const [submit, setSubmit] = useState("");

  useEffect(() => {
    axios.get("https://quote-app-9uwj.onrender.com/quote")
      .then((res) => {
        setQ(res.data)
        .then()
      })
      .catch((err) => {
        console.log(err);
      });
  }, [submit]);

  const handleSubmit = async () => {
    if(qAuthor && qString){
      try {
        const res = await axios.post("https://quote-app-9uwj.onrender.com/quote", {
          "author": qAuthor,
          "quote": qString
        })
        setSubmit(res)
        setQAuthor('');
        setQString('');
      }
      catch {
        alert("Something Went Wrong");
      }
    }
    else
      alert("Both quote and author need to be specified.")
  }


  return (
    <div className="App">
      <div id='quote-submit-form'>
        <div className='inner'>
          <h1>Add your quote!</h1>
          <div>
            <label htmlFor="quote">Quote:</label>
            <input type="text" id='quote' name='quote' value={qString} onChange={(e) => { setQString(e.target.value) }} style={{ overflow: "scroll" }} />
          </div>
          <div>
            <label htmlFor="author-name">Author:</label>
            <input type="text" id='author-name' name='author-name' value={qAuthor} onChange={(e) => { setQAuthor(e.target.value) }} />
          </div>
          <button id='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <div id='quote-display'>
        {q && q.map((item) => (<div className='item'><p>{item.quote}</p> <p style={{ textAlign: "end", fontStyle: "italic" }}>~ {item.author}</p></div>))}
      </div>
    </div>
  );
}

export default App;
