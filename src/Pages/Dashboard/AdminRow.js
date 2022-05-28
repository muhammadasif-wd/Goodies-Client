import React from "react";
import { toast } from "react-toastify";
const AdminRow = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://evening-brook-77039.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  const removeUser = () => {
    const url = `https://evening-brook-77039.herokuapp.com/user/${email}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          refetch();
          toast.success("Delete Your User");
        }
      });
  };
  return (
    <tr>
      <td className="text-natural font-bold text-xl">{email}</td>
      <td>
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn btn-xs bg-secondary border-0 text-base-100 font-bold"
          >
            make admin
          </button>
        )}
      </td>
      <td>
        <button
          onClick={removeUser}
          className="btn btn-xs bg-secondary border-0 text-base-100 font-bold"
        >
          remove user
        </button>
      </td>
    </tr>
  );
};

export default AdminRow;
