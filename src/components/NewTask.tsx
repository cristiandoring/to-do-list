import { useState } from "react";
import TaskList from "./TaskList";

const NewTask = () => {
  const [newTask, setNewTask] = useState(""); // Armazena a nova tarefa digitada
  const [tasks, setTasks] = useState<string[]>([]); // Lista de tarefas

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === "") return; // não permite adicionar tarefas em branco

    setTasks([...tasks, newTask]);
    setNewTask(""); // Limpa o campo de input após adicionar tarefa
  };

  // Remove uma tarefa específica da lista
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={addTask} className="w-full flex items-center gap-4 justify-center mb-4">
        <label>
          <input
            type="text"
            placeholder="Add your new task"
            className="border-2 border-neutral-400 rounded-md w-110 px-4 py-2 text-black h-12 outline-neutral-500 text-[20px]"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="h-12 w-12 flex justify-center items-center font-bold text-white text-3xl bg-cyan-700 rounded-md hover:cursor-pointer"
        >
          +
        </button>
      </form>

      <ul className="flex flex-col items-center">
        {tasks.map((task, index) => (
          <TaskList key={index} newTaskList={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
};

export default NewTask;
