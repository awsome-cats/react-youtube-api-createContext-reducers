import React from 'react'
import { Link } from 'react-router-dom'
import Style from './sideListItem.module.scss'



const SideListItem = ({src, title, id }) => {
    return (
        <Link className={Style.item} to={{ pathname: 'watch', search: `?v=${id}`}}>
            <img src={src} alt={title} />
            <div className={Style.info}>
            <span>{title}</span>
            </div>

        </Link>
    )
}

export default SideListItem