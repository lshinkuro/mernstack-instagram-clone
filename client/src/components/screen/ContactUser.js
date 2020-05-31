import React, { useState,useEffect } from 'react';
import Faker from 'faker'


function AddPersonForm(props) {
  const [data,setData] = useState([])
  const [ person, setPerson ] = useState('');
  const [name,setName] =useState([])
  const [email,setEmail] = useState([])
  const [avatar ,setAvatar] = useState([])
  
  const listData =()=>{
    for (let i = 0; i < 5; i++) {
        const user = {
          name: Faker.internet.userName(),
          email: Faker.internet.email(),
          avatar: Faker.internet.avatar(),
        }
        setName(user.name)
        setEmail(user.email)
        setAvatar(user.avatar)
    }

  }
    
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
            <button type="text" onClick={listData}>list</button>
            </form>
            <div >
                <img src={avatar} alt={name} style={{width:"200px",height:"200px",borderRadius:"50%"}}/>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
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