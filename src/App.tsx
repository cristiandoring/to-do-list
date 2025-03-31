import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <section className="bg-gradient-to-t from-cyan-800 to-cyan-500 h-screen w-full flex flex-col items-center ">
      <div className="min-w-150 border border-neutral-400 rounded-md  mt-56 bg-neutral-100">
        <h1 className="text-black font-bold text-3xl w-full text-center p-6">
          To-do List
        </h1>
        <NewTask />
        <TaskList/>
  
      </div>
    </section>
  );
}

export default App;
