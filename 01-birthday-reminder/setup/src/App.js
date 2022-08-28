import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setPeople] = useState(data)
  const [number, setNumber] = useState(0)
  const [numberSelected, setNumberSelectd] = useState()

  function cleanAll(){

    var receivingData = data
    setNumberSelectd(number)
  
    var  arrayPeople = receivingData.filter(function checkingPerson(person){
      return person.age <= number
      
    });
    
    return arrayPeople

  };

  function refreshPage() {
    window.location.reload(false);
  };


  return (
  
  <main>

      <section className='container'>

        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <input type='number' id="quantity" name="quantity" min={20} max={45} onChange={number => setNumber(number.target.value)}/>
        <button onClick={() => setPeople(cleanAll)}>Checking age</button>
        <button onClick={refreshPage}>Refresh</button>
        <p>Number {numberSelected}</p>
        
      </section>


  </main>

  );
}

export default App;
