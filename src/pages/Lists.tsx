import { useState } from "react";

interface DataProps {
  id: string;
  name: string;
  avatar: string;
}

function Lists() {
  const [data, setData] = useState([]: DataProps)
  return <div>Lists</div>;
}

export default Lists;
