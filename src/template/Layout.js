import React from 'react';
import {Link} from "react-router-dom";

function Layout(prop) {
    return (
        <div>
            <div>
                <h1>HEADER</h1>
                <Link to={'/about'}>ABOUT</Link> <br/>
                <Link to={'/main'}>MAIN</Link> <br/>
                <Link to={'/todo/'}>TODO</Link>
            </div>
            <div>
                {prop.children}
            </div>
            <div>
                <h1>FOOTER</h1>
            </div>
        </div>
    );
}

export default Layout;