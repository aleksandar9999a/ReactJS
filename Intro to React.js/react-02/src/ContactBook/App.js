import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import data from './contacts.json';

function createContact(contact) {
  return (
    <div className="contact" data-id="id" key={contact.phone} value={contact.phone}>
      <span className="avatar small">&#9787;</span>
      <span className="title">{contact.firstName} {contact.lastName}</span>
    </div>
  )
}

function renderContacts(contacts) {
  return contacts.map(createContact);
}

function renderContactDetails(contact) {
  if (contact !== undefined) {
    return (
      <div className="content">
        <div className="info">
          <div className="col">
            <span className="avatar">&#9787;</span>
          </div>
          <div className="col">
            <span className="name">{contact.firstName}</span>
            <span className="name">{contact.lastName}</span>
          </div>
        </div>
        <div className="info">
          <span className="info-line">&phone; {contact.phone}</span>
          <span className="info-line">&#9993; {contact.email}</span>
        </div>
      </div>
    )
  }
}

let contactDetails = renderContactDetails();

const events = {
  handleEvent: function (e) {
    if (e.target.className === 'contact') {
      let contact = data.find(x => x.phone === e.target.attributes.value.textContent);
      contactDetails = renderContactDetails(contact);
      ReactDOM.render(<App />, document.getElementById('root'));
    }
  }
}

function App() {
  return (
    <div className="container">
      <header>&#9993; Contact Book</header>
      <div id="book">
        <div id="list">
          <h1>Contacts</h1>
          <div className="content">
            {renderContacts(data)}
          </div>
        </div>
        <div id="details">
          <h1>Details</h1>
          {contactDetails}
        </div>
      </div>
      <footer>Contact Book SPA &copy; 2017</footer>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', events);
})
export default App;
