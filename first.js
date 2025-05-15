const inputEl = document.getElementById("input");
const addTodoBtn = document.querySelector(".add-todo");
const displayTodosDiv = document.querySelector(".display-todos");

const todos = new Map();

const renderTodos = () => {
  displayTodosDiv.innerHTML = "";

  todos.forEach((value, key) => {
    const li = document.createElement("li");

    li.classList.toggle("complete", value.complete);

    li.innerText = value.todo;

    li.addEventListener("click", () => {
      value.complete = !value.complete;
      renderTodos;
    });

    //delete button

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      todos.delete(key);
      renderTodos();
    });

    li.append(deleteButton);
    displayTodosDiv.append(li);
  });
};

const getTodo = () => {
  const input = inputEl.value.trim();

  if (input !== "") {
    const inputIndex = todos.size + 1;

    todos.set(inputIndex, { todo: input, complete: false });

    inputEl.value = "";

    renderTodos();
  }
};

addTodoBtn.addEventListener("click", getTodo);

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getTodo();
  }
});
