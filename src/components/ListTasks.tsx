import { RootState } from "../redux/store.ts";
import { useSelector } from "react-redux";
import { TaskItem } from "../redux/tasksSlice";

function ListTasks() {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div className="flex flex-col mx-2">
      <ul>
        {tasks.map((task: TaskItem) => (
          <li
            className="border border-solid border-black py-2 pl-2"
            key={task.id}
          >
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTasks;
