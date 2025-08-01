task_input = document.getElementById("task_input");
task_input_btn = document.getElementById("task_input_btn");
display_task = document.getElementById("display_task");

function add_task() {
    const taskText = task_input.value.trim();

    if (taskText !== "") {
        // Create a new task element
        const new_task = document.createElement('div');
        new_task.classList.add('tasks');

        // Create the task content
        const new_task_content = document.createElement('span');
        new_task_content.textContent = taskText;
        new_task.appendChild(new_task_content);

        // Create the delete button
        const new_task_btn = document.createElement("button");
        new_task_btn.classList.add('del_btn');
        new_task_btn.textContent = '🗑️';
        new_task.appendChild(new_task_btn);

        // Add the new task to the display area
        display_task.appendChild(new_task);

        // Clear the input field
        task_input.value = "";

        // Add event listener to the delete button
        new_task_btn.addEventListener('click', function() {
            display_task.removeChild(new_task);
        });
    }
}

// Add event listener to the "Add Task" button
task_input_btn.addEventListener('click', add_task);