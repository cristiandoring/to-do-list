const NewTask = () => {
  return (
    <form className="w-full flex items-center gap-4 justify-center mb-4">
      <label>
        <input type="text" placeholder="Add your new task" className="border-2 border-neutral-400 rounded-md w-110 px-4 py-2 text-black h-12 outline-neutral-500 text-[20px] "/>
      </label>
      <button className="h-12 w-12 flex justify-center items-center font-bold text-white text-3xl bg-purple-500 rounded-md hover:cursor-pointer">+</button>
    </form>
  );
};

export default NewTask;
