import './App.css';
import Greeting from './Greeting';
import UserProfile from './UserProfile';
import Counter from './Counter';
import TaskList from './TaskList';
function App() {
  const user = { name: "Alice", email: "alice@example.com" };
    
    const handleEdit = () => {
        console.log('Editing user:', user.name);
    };
  return (
    <div className="App">
      <Greeting />
      <UserProfile user={user} onEdit={handleEdit} />
      <Counter />
      <TaskList />
    </div>
  );
}

export default App;
