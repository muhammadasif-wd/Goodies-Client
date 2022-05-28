import React from "react";
import { useQuery } from "react-query";
import AdminRow from "./AdminRow";
function Users() {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch(`https://evening-brook-77039.herokuapp.com/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return;
  }
  return (
    <div>
      <div>
        <h1 className="xl:text-5xl  text-center pt-10 mt-16 text-xl">
          MY ALL <span className="text-primary">USERS: </span>
          {user.length}
        </h1>
      </div>

      <table className="table xl:w-full mt-5 lg:w-full md:w-full w-48 ">
        <thead>
          <tr className="text-natural">
            <th>User email</th>
            <th>Make admin</th>
            <th>remove user</th>
          </tr>
        </thead>
        <tbody>
          {user.map((u) => (
            <AdminRow user={u} key={u._id} refetch={refetch}></AdminRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
