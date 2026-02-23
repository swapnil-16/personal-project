import { useState } from "react";

export default function UserData() {
    const [users, setUsers] = useState([
        { id: 1, name: "Ram", age: 20 },
        { id: 2, name: "Ajit", age: 25 }
    ]);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    // const [totalAgeValue, setTotalAge] = useState(0);

    // ✅ Add edit state
    const [editId, setEditId] = useState(null); 

    
const totalAgeValue = users.reduce((sum, u) => sum + Number(u.age), 0);
    // ➜ ADD or UPDATE
    function addUser() {
        if (!name || !age) return alert("Enter all data");

        if (editId) {
            // Update existing user
            setUsers(prev =>
                prev.map(u =>
                    u.id === editId ? { ...u, name, age: Number(age) } : u
                )
            );
            setEditId(null); // Clear edit mode
        } else {
            // Add new user
            setUsers(prev => [
                ...prev,
                { id: Date.now(), name, age: Number(age) }
            ]); 

            
        // setTotalAge(totalAgeValue);
        } 



        // Clear form
        setName("");
        setAge("");
    }

    // ➜ EDIT - Populate form with user data
    function editUser(id) {
        const userToEdit = users.find(u => u.id === id);
        if (userToEdit) {
            setName(userToEdit.name);
            setAge(userToEdit.age);
            setEditId(id);
        }
    }

    // ➜ CANCEL EDIT
    function cancelEdit() {
        setEditId(null);
        setName("");
        setAge("");
    }

    // ➜ DELETE by id
    function deleteUser(id) {
        setUsers(prev => prev.filter(u => u.id !== id));
        // If we're editing this user, cancel edit
        if (editId === id) {
            cancelEdit();
        }
    }

    // ➜ REDUCE total age 
    // function handleTotalAge() {
        // const totalAgeValue = users.reduce((sum, u) => sum + Number(u.age), 0);
    //     setTotalAge(totalAgeValue);
    // }

    // ➜ CLEAR all
    function clearUsers() {
        setUsers([]);
        setTotalAge(0);
        cancelEdit();
    }

    return (
        <div className="container mx-auto px-4 mt-5">
            <div className="card">
                <div className="card-body">
                    <div className="container p-4">
                        <h2 className="mb-4 text-primary border-bottom pb-2">Users</h2>

                        {/* Show edit mode indicator */}
                        {editId && (
                            <div className="alert alert-info alert-dismissible fade show" role="alert">
                                <strong>Edit Mode:</strong> Updating user information
                                <button type="button" className="btn-close" onClick={cancelEdit}></button>
                            </div>
                        )}

                        <div className="row mb-3">
                            <div className="col-md-6 mb-2">
                                <label htmlFor="" className="form-label">Enter Name</label>
                                <input
                                    className="form-control"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label htmlFor="" className="form-label">Enter Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={age}
                                    onChange={e => setAge(e.target.value)}
                                    placeholder="Enter age"
                                />
                            </div>
                        </div>

                        <div className="d-flex flex-wrap gap-2 mb-4">
                            <button className="btn btn-primary" onClick={addUser}>
                                {editId ? "Update User" : "Add User"}
                            </button>
                            {editId && (
                                <button className="btn btn-secondary" onClick={cancelEdit}>
                                    Cancel
                                </button>
                            )}
                            <button className="btn btn-info text-white" >Total Age</button>
                            <button className="btn btn-dark" onClick={clearUsers}>Clear All</button>
                        </div>

                        <ul className="list-group mb-4 shadow-sm">
                            {users.map(u => (
                                <li
                                    key={u.id}
                                    className={`list-group-item d-flex justify-content-between align-items-center ${editId === u.id ? 'border-primary border-2' : ''}`}
                                >
                                    <span>
                                        <strong>{u.name}</strong> <small className="text-muted">({u.age})</small>
                                    </span>
                                    <div className="btn-group btn-group-sm">
                                        <button
                                            className="btn btn-outline-primary"
                                            onClick={() => editUser(u.id)}
                                            disabled={editId === u.id}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => deleteUser(u.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="alert alert-secondary">
                            <strong>Total Age:</strong> {totalAgeValue}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}