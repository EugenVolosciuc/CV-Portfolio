import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.style.css';

function Menu(props) {

    const categoriesMenuList =
        Object.entries(props.categories).map(
            (category, index) => {
                return (
                    <Link onClick={props.handleCategoryClick} to={`/${category[0].split(" ").join("-")}`} key={index}>
                        <p >{category[0]}</p>
                    </Link>
                )
            }
        )

    return (
        <div className="Menu">
            <Link to='/' onClick={props.handleCategoryClick}>
                <p>Home</p>
            </Link>
            {categoriesMenuList}
        </div>
    )
}

export default React.memo(Menu);