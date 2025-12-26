const fs = require('fs');
const path = require('path');

// File to store todos
const TODO_FILE = path.join(__dirname, '..', 'todos.json');

// Ensure todos file exists
if (!fs.existsSync(TODO_FILE)) {
  fs.writeFileSync(TODO_FILE, JSON.stringify([]));
}

// Read todos from file
function readTodos() {
  try {
    const data = fs.readFileSync(TODO_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading todos:', error.message);
    return [];
  }
}

// Write todos to file
function writeTodos(todos) {
  try {
    fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error('Error writing todos:', error.message);
  }
}

// Add a new todo
function addTodo(text) {
  const todos = readTodos();
  const newTodo = {
    id: Date.now(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };
  todos.push(newTodo);
  writeTodos(todos);
  console.log(`Added todo: "${text}"`);
}

// List all todos
function listTodos() {
  const todos = readTodos();
  if (todos.length === 0) {
    console.log('No todos found.');
    return;
  }

  console.log('\nYour todos:');
  console.log('='.repeat(40));
  todos.forEach((todo, index) => {
    const status = todo.completed ? '[✓]' : '[ ]';
    const number = (index + 1).toString().padStart(2, ' ');
    console.log(`${number}. ${status} ${todo.text}`);
  });
  console.log('='.repeat(40));
}

// Mark todo as completed
function completeTodo(id) {
  const todos = readTodos();
  const index = todos.findIndex(todo => todo.id === parseInt(id));
  if (index === -1) {
    console.log('Todo not found.');
    return;
  }
  todos[index].completed = true;
  writeTodos(todos);
  console.log(`Completed todo: "${todos[index].text}"`);
}

// Remove a todo
function removeTodo(id) {
  const todos = readTodos();
  const index = todos.findIndex(todo => todo.id === parseInt(id));
  if (index === -1) {
    console.log('Todo not found.');
    return;
  }
  const removed = todos.splice(index, 1)[0];
  writeTodos(todos);
  console.log(`Removed todo: "${removed.text}"`);
}

// Clear all completed todos
function clearCompleted() {
  const todos = readTodos();
  const filtered = todos.filter(todo => !todo.completed);
  const removedCount = todos.length - filtered.length;
  writeTodos(filtered);
  console.log(`Cleared ${removedCount} completed todo(s).`);
}

// Main CLI logic
function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    console.log('Todo List App');
    console.log('Usage:');
    console.log('  node src/index.js add <text>    - Add a new todo');
    console.log('  node src/index.js list          - List all todos');
    console.log('  node src/index.js complete <id> - Mark todo as completed');
    console.log('  node src/index.js remove <id>   - Remove a todo');
    console.log('  node src/index.js clear         - Clear completed todos');
    return;
  }

  switch (command) {
    case 'add':
      if (!args[1]) {
        console.log('Please provide todo text.');
        return;
      }
      addTodo(args.slice(1).join(' '));
      break;

    case 'list':
      listTodos();
      break;

    case 'complete':
      if (!args[1]) {
        console.log('Please provide todo ID.');
        return;
      }
      completeTodo(args[1]);
      break;

    case 'remove':
      if (!args[1]) {
        console.log('Please provide todo ID.');
        return;
      }
      removeTodo(args[1]);
      break;

    case 'clear':
      clearCompleted();
      break;

    default:
      console.log(`Unknown command: ${command}`);
      break;
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  addTodo,
  listTodos,
  completeTodo,
  removeTodo,
  clearCompleted
};