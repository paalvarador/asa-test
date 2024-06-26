import { Link } from "react-router-dom";
import AddTaskButton from "../components/AddTask";
import ListTasks from "../components/ListTasks";

function Tasks() {
  return (
    <>
      <AddTaskButton />
      <ListTasks />
      <div className="text-center mt-2">
        <Link to="/">Volver al Inicio</Link>
      </div>
    </>
  );
}

export default Tasks;
