function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Remove on double click
  li.addEventListener("dblclick", () => {
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
