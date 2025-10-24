import axios from 'axios';
import React, { useState } from 'react';

const TodoList = ({ tasks, setTasks }) => {


    const handleCheck = async (task) => {
        const res = await axios.put(`http://127.0.0.1:3000/api/task/${task._id}`, { done: !task.done});
        setTasks(tasks.map(t => t.id === task.id ? res.data : t))
    };

    const deleteHandler = async (task) => {
        try {
            await axios.delete(`http://127.0.0.1:3000/api/task/${task._id}`);
            setTasks(prev => prev.filter(t => t.id !== task.id));
        } catch (error) {
            console.error("Delete Error", error);
        }
    };

    const editHandler = async (task) => {

        const newText = window.prompt("Edit your task: ", task.title);
        if (newText && newText.trim() !== ""){
            await axios.put(`http://127.0.0.1:3000/api/task/${task._id}`, {title:  newText}) 

            setTasks(
                tasks.map(t => t.id === task.id ? {...t, title: newText } : t)
            )
        }
    }

    return (
        <div className='flex flex-col gap-9 w-[90vw] lg:max-w-[40vw]'>
            {tasks.length !== 0 ? (
                <div className='flex flex-col gap-9 w-full'>
                    {tasks.map((task) => {
                        return(
                            <div className='flex gap-10 items-center justify-between' key={task.id} title={task.title}>
                                <input type="checkbox" className='min-w-6 min-h-6 text-violet-600 rounded' checked={task.done} onChange={() => handleCheck(task)}/>
                                <p  className={`cursor-pointer ${task.done ? "line-through text-gray-700" : ""} max-w-xs text-xl truncate`} onClick={() => handleCheck(task)}>{task.title}</p>

                                <div className='flex'>
                                    <button className='h-full' onClick={() => editHandler(task)}>📝</button>
                                    <button onClick={() => deleteHandler(task)}>🗑️</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <p className='text-2xl font-bold'>No Tasks yet.</p>
            )}

        </div>
    )
}


export default TodoList;



// (

//         lists.length !== 0 ? 
//         (lists.map((task, i) => {
//         return (
//         <div className='flex flex-col gap-9 w-[90vw] lg:w-[40vw]' key={i}>
//             <div className='flex gap-10 items-center justify-start'>
//                 <input type="checkbox" className='min-w-6 min-h-6 text-violet-600 rounded' checked={check} onChange={(e) => setCheck(!check)} />
//                 <p className='text-xl text-black'>{task.title}</p>
//             </div>
//             <br />
//         </div>
//     );
//     })): (
//         <p className='text-black'>No tasks</p>
//     )
// )