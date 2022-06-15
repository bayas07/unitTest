import { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [data, setData] = useState([]);
  const fetchHandler = () => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data, "data");
      setData(data);
    };
    fetchData();
  };
  return (
    <div>
      <button onClick={fetchHandler}>Fetch data</button>
      {data.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
};

export default UsersList;
