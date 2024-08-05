import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';

function UsersList() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector(state => {
        return state.users;
    });

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    
    const handleUserAdd = () => {
        dispatch(addUser());
    }
    if(isLoading) {
        return <div>Loading...</div>
    }

    if(error) {
        console.log('sajid', error.message);
        return <div>Error loading data</div>
    }

    const renderedUsers = data.map((user) => {
        return <div key={user.id} className="mb-2 border rounded">
            <div>
                {user.name}
            </div>
        </div>
    })

    return <div>
        <button onClick={handleUserAdd}>+ Add User</button>
        <h1>Users:</h1>
        <div>{renderedUsers}</div>
    </div>;
}

export default UsersList;