import NewTask from "./components/NewTask";

function App() {
  return (
    <section className="bg-gradient-to-t from-cyan-800 to-cyan-400 min-h-screen min-w-full flex flex-col items-center ">
      <div className="min-w-150 border border-neutral-400 rounded-md  mt-56 bg-neutral-100 min-h-46">
        <h1 className="text-black font-bold text-3xl w-full text-center p-6">
          To-do List
        </h1>
        <NewTask />
  
      </div>
    </section>
  );
}

export default App;
