import React from 'react';

const TodoSearchandFilter = ({ searchFilter, setSearchFilter, filterstatus, setFilterStatus }) => {
    return (
        <div className='flex gap-3'>
            <input type="text" className='border-2 border-violet-600 p-2 min-w-[60vw] rounded-md lg:min-w-[40vw] xl:min-w-[30vw] outline-none' placeholder='Search Tasks' value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)}/>
            <select className='bg-violet-600 text-white w-20 p-2 md:w-28 rounded-sm outline-none' value={filterstatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="done">Done</option>
            </select>
        </div>
    );
}

export default TodoSearchandFilter;
