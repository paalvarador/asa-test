import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-svh">
      <ul>
        <Link to="/tasks">
          <li className="border border-solid px-32 py-3 rounded-lg bg-blue-300 mb-4">
            Tasks
          </li>
        </Link>

        <Link to="/lists">
          <li className="border border-solid px-32 py-3 rounded-lg bg-blue-300 mb-4">
            Lists
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Home;
