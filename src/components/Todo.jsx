import React from "react";
import { useState, useRef,useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";


const Todo = () => {
  const inputRef = useRef(null);
  const [list, setList] = useState([]);
  const [inputData,setInputData]=useState("")
  
   // Load todos from local storage on mount
   useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setList(JSON.parse(storedTodos));
    }
  }, []);
//storing the todos
const handleSave=(data)=>{
        data && localStorage.setItem("todos",JSON.stringify(data))
    }
    
       //adding todo
  const handleAdd = () => {
    setInputData(inputRef.current.value)
    if (inputData.trim()) {
      const updatedData=[...list,inputData]
      setList(updatedData);
      handleSave(updatedData)
      setInputData("")
    }
    inputRef.current.value=""
  };
  
  // Deleting the todos
   const handleDelete = (index) => {
    const filtered = list.filter((_, i) => i !== index);
    setList(filtered);
    handleSave(filtered);
  };

  return (
    <main className="h-screen flex-col w-full flex items-center justify-center">
      <h1 className="text-2xl p-3 text-purple-600 md:text-green-400 sm:text-red-600">TODO APP</h1>
      <div
        className="h-auto flex  flex-wrap p-4 
      rounded-md shadow-lg shadow-slate-400 w-[80%]
       bg-gray-200 items-center justify-between
       sm:w-[50%]
       md:w-[60%]
       lg:w-[40%]
       "
      >
        <input
          type="text"
          ref={inputRef}
          value={inputData}
          onChange={(e)=> setInputData(e.target.value)} 
          className="border-2 w-[80%] rounded-sm h-[45px]
          pl-3 focus:outline-none
          "
        />
        <button
          className="text-xl text-white rounded-full bg-green-600 p-2"
          onClick={handleAdd}
        >
<IoAddSharp />
        </button>
        <ul className="list-decimal px-3 w-full">
          {list ? (
            list.map((l, index) => {
              return(
                <div key={index} className="py-2 rounded-sm flex w-full bg-white my-2 items-center justify-around">
                <li className="w-[70%]">{l}</li>
                <MdDelete className="text-red-600 lg:text-xl" onClick={()=> handleDelete(index)} />
                </div>
              )
            })
          ) : (
            <p>NO lists</p>
          )}
        </ul>
      </div>
    </main>
  );
};

export default Todo;
