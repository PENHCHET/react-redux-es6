import React from 'react';
import Button from './Button'
import UserItem from './UserItem'

class User extends React.Component {
    constructor(props) {
        super(props);
    }
       
    render() {
        const {data, fetchUsers} = this.props
        console.log(data);
        return(
            <div>
                <Button 
                    onClick = {fetchUsers}
                    text =  {'Fetch Users'}
                    className={'btn btn-blue'}
                />
                <div id={'users'} className='space-list-items'>
                    {data.users.map((user, i) => {
                        return <UserItem
                            key={i}
                            user={user}
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default User;