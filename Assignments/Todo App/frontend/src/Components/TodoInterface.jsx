import {React, useEffect, useState} from 'react';
import TodoSearchandFilter from './TodoSearchandFilter';
import TodoList from './TodoList';
import axios from 'axios';

const TodoInterface = () => {
    const [searchFilter, setSearchFilter] = useState("");
    const [filterstatus, setFilterStatus] = useState("all")
    const [tasks, setTasks] = useState([]);


    const fetchTasks = async () => {
        const res = await axios.get("http://127.0.0.1:3000/api/tasks");
        setTasks(res.data);
    }

    useEffect(() => {fetchTasks(); }, []);
    
    const handleAddTask = async () => {
        const task = prompt("Enter the task: ");
        if(!task) return;
        const res = await axios.post('http://127.0.0.1:3000/api/task', 
            {
            id: Date.now(),
            title: task,
            done: false
        }
        );
        setTasks([...tasks, res.data]);

        console.log("added......")
    } 

    const filteredTasks = tasks.filter(task => {
        if(filterstatus === "done") return task.done;
        if(filterstatus === "pending") return !task.done;
        return true;
    })
    .filter(task => task.title.toLowerCase().includes(searchFilter.toLowerCase()));


    return (
        <div className='w-screen text-center flex flex-col gap-20 mt-12 justify-center items-center'>
            <h1 className='text-3xl text-black font-sans font-semibold'>TODO LIST</h1>
            <div className='flex flex-col gap-20'>
                <TodoSearchandFilter searchFilter={searchFilter} setSearchFilter={setSearchFilter} filterstatus={filterstatus} setFilterStatus={setFilterStatus} />
                <TodoList tasks={filteredTasks} setTasks={setTasks} />
            </div>
            <button className='fixed text-white bg-violet-600 h-10 w-10 text-2xl flex justify-center items-center right-8 bottom-8 lg:right-36 lg:bottom-36 lg:rounded-full border-none xl:p-8 xl:text-3xl' onClick={handleAddTask}>
                +
            </button>
            
        </div>
    );
}
export default TodoInterface;
