import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import data from './contacts.json';

const renderContact = {
  renderListOfContacts: function (contacts) {
    return contacts.map(this.createContact);
  },

  createContact: function(contact) {
    return (
      <div className="contact" data-id="id" key={contact.phone} value={contact.phone}>
        <span className="avatar small">&#9787;</span>
        <span className="title">{contact.firstName} {contact.lastName}</span>
      </div>
    )
  },

  renderContactDetails:function(contact) {
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
}

const events = {
  contactDetails: '',

  handleEvent: function (e) {
    if (e.target.className === 'contact') {
      let contact = data.find(x => x.phone === e.target.attributes.value.textContent);
      this.contactDetails = renderContact.renderContactDetails(contact);
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
            {renderContact.renderListOfContacts(data)}
          </div>
        </div>
        <div id="details">
          <h1>Details</h1>
          {events.contactDetails}
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
