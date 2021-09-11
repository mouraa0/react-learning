import classes from './UserList.module.css';
import Card from "../UI/Card";

const UserList = (props) => {
    let content = ''
    
    if (props.users.length > 0) {
        content = (
            <Card className={classes.users}>
                <ul>
                    {props.users.map(user => (
                        <li key={user.id}>
                            {user.username} ({user.age} years old)
                        </li>
                    ))}
                </ul>
            </Card>
        );
    }
    return content;
};

export default UserList;
