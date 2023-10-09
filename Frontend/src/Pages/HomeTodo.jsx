import TaskList from "../Components/TaskList";
import useFetch from "../Utils/useFetch";

const HomeTodo = () => {

    const { data: tasks, loading, error } = useFetch("http://localhost:3000/api/v1/tasks");

return (
<div className="TaskList">
 {error && <div className="error"> {error} </div>}
 {loading ? (
    <div className="spinner-container">
          <div className="loading-spinner" />
        </div>
      ) : (
        <TaskList tasks={tasks} title="TASKS TO-DO" />
      )}
</div>

);


};

export default HomeTodo;