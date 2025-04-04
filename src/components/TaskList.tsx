import buttonDelete from "../assets/delete.png";

interface TaskProps {
  newTaskList: string; 
  onDelete: () => void; 
}

const TaskList: React.FC<TaskProps> = ({ newTaskList, onDelete }) => {
  return (
    <li className="w-[504px] h-12 rounded-md bg-neutral-500 text-[20px] flex justify-between items-center py-3 pl-3 text-start mb-4 text-white">
      {newTaskList}
      <img
        src={buttonDelete}
        alt="trash"
        className="h-7 w-7 rounded-r-md mr-2 hover:cursor-pointer"
        onClick={onDelete} // quando clicar, chama a função delete
      />
    </li>
  );
};

export default TaskList;
