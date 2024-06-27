import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-svh">
      <ul>
        <Link to="/tasks">
          <li className="px-32 py-5 mb-2 font-bold bg-blue-300 border border-solid rounded-lg">
            Tasks
          </li>
        </Link>

        <Link to="/lists">
          <li className="px-32 py-5 mb-4 font-bold bg-blue-300 border border-solid rounded-lg">
            Lists
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Home;
