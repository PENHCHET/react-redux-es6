import React from 'react'
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const headers = [
            {
                text: 'About',
                link: '/about'
            },
            {
                text: 'Help',
                link: '/help'
            }
        ];
        return (
            <div className='header-container'>
                <ul className='nav'>
                    {headers.map(function(value, index){
                        return(
                            <li>
                            <NavLink to={value.link}>
                                {value.text}
                            </NavLink>
                        </li>
                        )
                    })}

                </ul>
            </div>
        )
    }
}

export default Header;