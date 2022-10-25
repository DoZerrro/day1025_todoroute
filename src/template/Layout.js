import React from 'react';
import {Link} from "react-router-dom";

function Layout(prop) {
    return (
        <div>
            <div>
                <Link to={'/about'}>ABOUT</Link> &nbsp; &nbsp;
                <Link to={'/main'}>MAIN</Link> &nbsp; &nbsp;
                <Link to={'/todo'}>TODO</Link>
            </div>
            <hr/>
            <div>
                {prop.children}
            </div>
        </div>
    );
}

export default Layout;