import React, { Component } from "react";
import Contact from "../Contact";
import {contacts} from "../ContactsList";
import Iphone from "../Image/iphone.png";

import "../Contacts/style.css";


class Contacts extends Component {
  state = {
    contacts,
    search: "",
    male: true,
    female: true,
    unknown: true
  };

  filterByGender = () => {};

  handleSearchChange = e => {
    e.persist();
    this.setState(state => ({
      search: e.target.value
    }));
  };

  handleGender = e => {
    e.persist();
    this.setState(state => ({
      [e.target.name]: e.target.checked
    }));
  };

  render() {
    const { search, female, male, unknown } = this.state;

    return (
      <div className="contacts_container">
       {/* <img src={Iphone}
           className ="background-image"
           alt="background-iphone"
       /> */}
        <div className="device-container">
          <form className="form">
            <input
              type="text"
              value={search}
              onChange={this.handleSearchChange}
              className="input"
            />
            <div className="checkbox-container">
              <label>
                <input
                  type="checkbox"
                  checked={female}
                  name="female"
                  onChange={this.handleGender}
                />
                female
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={male}
                  name="male"
                  onChange={this.handleGender}
                />
                male
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={unknown}
                  name="unknown"
                  onChange={this.handleGender}
                />
                unknown
              </label>
            </div>
          </form>

          {contacts
            .filter(
              contact =>
                (!search ||
                  contact.lastName.toLowerCase().includes(search) ||
                  contact.lastName.includes(search) ||
                  contact.firstName.toLowerCase().includes(search) ||
                  contact.firstName.includes(search) ||
                  contact.phone.includes(search)) &&
                (contact.gender
                  ? (female && contact.gender === "female") ||
                    (male && contact.gender === "male")
                  : unknown)

            )
            .map(contact => (
              <Contact key={contact.lastName} contact={contact} />
            ))}
        </div>
      </div>
    );
  }
}


export default Contacts;