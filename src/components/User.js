import { useEffect, useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
//  useEffect(()=>{

//  },[])
  return (
    <div className="user-card m-4 p-4 g-gray-50 rounded-lg">
      <h2>{props.name}</h2>
      <button onClick={() => {
        setCount(count+1)
      }}> count increase</button>

      <h2>{count}</h2>
      <h2>{props.location}</h2>
      <h3>Contact:surbhi@gmail.com</h3>
    </div>
  );
};
export default User;
