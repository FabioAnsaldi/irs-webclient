import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <li>
        <Link to={props.path} className={props.className}>
            { props.icon && <span><i className={`fa fa-${props.icon}`}></i>&nbsp;</span> }
            { props.tree ? props.label : <span className="nav-label">{props.label}</span> }
        </Link>
    </li>
)