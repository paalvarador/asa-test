import { Link } from "react-router-dom";
import AddTaskButton from "../components/AddTask";
import ListTasks from "../components/ListTasks";

function Tasks() {
  return (
    <>
      <AddTaskButton />
      <ListTasks />
      <div className="mt-2 text-center">
        <Link to="/">Volver al Inicio</Link>
      </div>
    </>
  );
}

export default Tasks;
