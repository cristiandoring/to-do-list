import buttonDelete from '../assets/delete.png'
const TaskList = () => {
  return (
    <ul className="flex justify-center">
        <li className="w-[504px] h-12 rounded-md bg-neutral-300 text-[20px] flex justify-between items-center py-3 pl-3 text-start mb-4 ">Comprar carne<img src={buttonDelete} alt="trash" className='h-12 w-12 bg-red-500 rounded-r-md mr-0 hover:cursor-pointer' /></li>
    </ul>
  )
}

export default TaskList