import React, { useState } from 'react';


function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
    
  function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    if(person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <div className="card auth-card input-field">
           <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="Add new contact" 
                onChange={handleChange} 
                value={person} />
            <button type="submit">Add</button>
            </form>
    </div>
 
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return (
         <div className="card auth-card input-field">
             <ul>{listItems}</ul>
         </div>)

}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div >
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}


// ReactDOM.render(
//   <ContactManager data={contacts} />, 
//   document.getElementById('root')
// );

export default ContactManager