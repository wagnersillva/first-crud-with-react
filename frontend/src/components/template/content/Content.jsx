import React from 'react'
import './Content.css'



export default props =>
    <React.Fragment>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

