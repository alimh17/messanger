import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserTable from "./table/userTable";

const Users = ({ data }) => {
  const [users, setUsers] = useState([]);
  const state = useSelector((state) => state);

  const handleSetUsers = () => {
    if (data && state) {
      const filter = data.filter((f) => f.email !== state.user.email);
      setUsers(filter);
    }
  };

  useEffect(() => {
    handleSetUsers();
  }, [state]);

  return (
    <div>
      <UserTable data={users} />
    </div>
  );
};

export default Users;
