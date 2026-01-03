import React, { useEffect, useState } from "react";

const ContactTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const savedRows = JSON.parse(localStorage.getItem("contactRows")) || [];
    setRows(savedRows);
  }, []);

  if (!rows.length) {
    return (
      <p className="mt-3 text-muted">No contact records submitted yet.</p>
    );
  }

  return (
    <div className="container my-5">
      <h3>All Submitted Contacts</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            {/* <th>Contactable Name</th> */}
            <th>User Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              {/* <td>{r.contactableName}</td> */}
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r.message}</td>
              <td>{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
