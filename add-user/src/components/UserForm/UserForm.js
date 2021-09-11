import { useState } from 'react';
import classes from './UserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const UserForm = (props) => {
    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState('');
    const [error, setError] = useState('');

    const addUsernameHandler = (event) => {
        setUsername(event.target.value);
    };

    const addAgeHandler = (event) => {
        setAge(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return ;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        const newUserData = {
            username: enteredUsername,
            age: enteredAge,
            id: Math.random().toString(),
        };

        props.onAddUser(newUserData);

        setUsername('');
        setAge('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form onSubmit={formSubmitHandler}>
                    <div className="new-user">
                        <div className="new-user__control">
                            <label>Username</label>
                            <input type="text" value={enteredUsername} onChange={addUsernameHandler} />
                        </div>
                        <div className="new-user__control">
                            <label>Age</label>
                            <input type="number" value={enteredAge} onChange={addAgeHandler} />
                        </div>      
                    </div>
                    <div className="new-user__actions">
                        <Button type="submit">Add User</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default UserForm;
