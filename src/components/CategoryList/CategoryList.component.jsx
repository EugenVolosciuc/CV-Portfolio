import React from 'react';

import Category from './Category/Category.component';

function CategoryList(props) {
    return (
        Object.entries(props.categories).map((category, index) => {
            return <Category key={index} categoryName={category[0]} projects={category[1]} />
        })
    )
}

export default CategoryList;