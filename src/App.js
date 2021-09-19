import { Table } from 'react-bootstrap';
import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <h1>User List </h1>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Address</th>
    </tr>
  </thead>
  </Table>
      <UserList/>
    </div>
  );
}

export default App;
