import React, { useState, useEffect } from "react"
import ContactForm from "./ContactForm"
import firebaseDb from "../Firebase"

const Contacts = () => {
  var [currentId, setCurrentId] = useState("")
  var [contactObjects, setContactObjects] = useState({})

  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        })
      } else setContactObjects()
    })
  }, [])

  const addOrEdit = (obj) => {
    if (currentId === "")
      firebaseDb.child("contacts").push(obj, (err) => {
        if (err) console.log(err)
        else setCurrentId("")
      })
    else {
      firebaseDb.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err)
        else setCurrentId("")
      })
    }
  }

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record ?")) {
      firebaseDb.child(`contacts/${id}`).remove((err) => {
        if (err) console.log(err)
        else setCurrentId("")
      })
    }
  }
  if (contactObjects != null)
    return (
      <>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-4 text-center'>Contact Manager</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5'>
            <ContactForm {...{ addOrEdit, currentId, contactObjects }} />
          </div>
          <div className='col-md-7'>
            <table className='table table-borderless table-stripped'>
              <thead className='thead-light'>
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(contactObjects).map((key) => (
                  <tr key={key}>
                    <td>{contactObjects[key].fullName}</td>
                    <td>{contactObjects[key].mobile}</td>
                    <td>{contactObjects[key].email}</td>
                    <td className='bg-light'>
                      <a
                        className='btn text-primary'
                        href='/#'
                        onClick={() => {
                          setCurrentId(key)
                        }}
                      >
                        <i className='fa fa-pencil' aria-hidden='true'></i>
                      </a>
                      <a
                        href='/#'
                        className='btn text-danger'
                        onClick={() => {
                          onDelete(key)
                        }}
                      >
                        <i className='fa fa-trash'></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  else {
    return (
      <>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-4 text-center'>Contact Manager</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5'>
            <ContactForm {...{ addOrEdit, currentId, contactObjects }} />
          </div>
          <div className='col-md-7'>
            <table className='table table-borderless table-stripped'>
              <thead className='thead-light'>
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </>
    )
  }
}

export default Contacts
