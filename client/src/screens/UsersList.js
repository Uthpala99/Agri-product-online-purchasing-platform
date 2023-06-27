import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UsersList() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    function getAllUsers() {
      axios
        .get("http://localhost:8000/api/users/getallusers")
        .then((res) => {
          console.log(res);
          setUser(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAllUsers();
  }, []);
  console.log(user);

  function deleteUser(userid) {
    axios
      .post("http://localhost:8000/api/users/deleteuser", { userid })
      .then((response) => {
        alert("User Deleted Successfully");
        window.location.reload(false);
        console.log(response.data);
      });
  }

  return (
    <div>
      <h2 style={{ fontSize: "35px" }}>UsersList</h2>
      <table className="table tavle-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        {user.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.isAdmin ? <h1>Admin</h1> : <h1>Customer</h1>}</td>
              <td>
                <i
                  className="fa fa-trash m-2"
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                ></i>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
