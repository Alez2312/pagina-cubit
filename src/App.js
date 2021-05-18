import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [jsonUsed, setJsonUsed] = useState({})
  const [currentId, setCurrentId] = useState(1)
  const jsonFunction = () => {
    getJson()
  }
  const getJson = () => {

    var xhr = new XMLHttpRequest();
    xhr.open("get", "https://reqres.in/api/users?page=" + currentId, true);
    xhr.setRequestHeader('cubit-test', 'Alejandro Perez')
    let json;
    xhr.onload = function () {
      json = JSON.parse(xhr.responseText);
      currentId === 1 ? setCurrentId(2) : setCurrentId(1)
      setJsonUsed(json.data)
    }
    xhr.send();
  }

  useEffect(() => {
    jsonFunction()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        Página {currentId === 2 ? 1 : 2}
        {jsonUsed.length > 0
          ? <div className="card_grand_father">
            <div className="card_father">
              {jsonUsed.map((ele, index) => {
                return (
                  <div key={index} className="card" style={{ backgroundImage: `url(${ele.avatar})` }}>
                    <div className="card_text">
                      {ele.first_name}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          : <span></span>}
        <button onClick={() => { jsonFunction() }}>{currentId === 2 ? "Siguiente" : "Anterior"}</button>
      </header>
    </div>
  );
}
export default App;