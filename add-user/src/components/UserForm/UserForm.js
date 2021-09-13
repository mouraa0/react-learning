import { useState, useRef } from 'react';
import classes from './UserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const UserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    
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
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return ;
        }

        if (+enteredUserAge < 1) {
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
        <>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form onSubmit={formSubmitHandler}>
                    <div className="new-user">
                        <div className="new-user__control">
                            <label>Username</label>
                            <input id="username" type="text" value={enteredUsername} onChange={addUsernameHandler} ref={nameInputRef} />
                        </div>
                        <div className="new-user__control">
                            <label>Age</label>
                            <input id="age" type="number" value={enteredAge} onChange={addAgeHandler} ref={ageInputRef} />
                        </div>      
                    </div>
                    <div className="new-user__actions">
                        <Button type="submit">Add User</Button>
                    </div>
                </form>
            </Card>
        </>
    );
};

export default UserForm;
