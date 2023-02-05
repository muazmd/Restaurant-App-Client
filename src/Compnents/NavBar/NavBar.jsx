import React from 'react'

import { Link } from 'react-router-dom';
import './navbar.scss'

const NavBar = () => {
const dataCollection = [
{
type:'sandwiches',

content:['Tawook','Shawrma','another  sandwich']
}, {
type:'sandwiches',

content:['Tawook','Shawrma','another sandwich']

}, {
type:'sandwiches',

content:['Tawook','Shawrma','another sandwich']

},
{
    type:'sandwiches',
    
    content:['Tawook','Shawrma','another sandwich']
    
    }
];
        return (
        <div className='navBar'>
            <div className='navBar-left'>
                <span> Add to menu</span> 
            {/* for the admin */}
                <Link to='/menu' className='Link'>
                <span className='navBar-menu'> Menu

                    <div className='navBar-menu-options'>

                        {dataCollection.map((item) =>
                        <span className="navBar-menu-Title" key={item.type}>{item.type}
                            <div className='navBar-menu-items'>
                                {item.content.map((content) =>
                                <span key={content}>{content}</span>
                                )}


                            </div>


                        </span>
                        )}

                    </div>

                </span>
                </Link>
                <span> Sales</span> 
                 {/* for the admin */}

            </div>
            <div className='navBar-middle'>
                <Link to='/' className='Link'>
                <span className='navBar-logo' > MAPS</span>
                     </Link>
            </div>
            <div className='navBar-right'>
                <span>Reserve</span>
                <Link to='/register' className='Link'>
                <span>Register</span>
                </Link>
                <span>cart</span>

            </div>
        </div>
        )
}
export default NavBar;