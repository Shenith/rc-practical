import { Button } from "@material-ui/core";
import React, { useState } from "react";

const Filter = (props) => {
    const[selectedSize, setSelectedSize] = useState('all')

    const sizes = [
        {'size': 'xs', 'name': 'xsmall'},
        {'size': 's', 'name': 'small'},
        {'size': 'm', 'name': 'medium'},
        {'size': 'ml', 'name': 'mlarge'},
        {'size': 'l', 'name': 'large'},
        {'size': 'xl', 'name': 'xlarge'},
        {'size': 'xxl', 'name': 'xxlarge'},
        {'size': 'all', 'name': 'all'},
    ]

    const onClickHandler = (s) => {
        setSelectedSize(s.size);
        props.filterHandler(s);
    }

    return(
        <div>
        <div>
            <h3>Sizes</h3>
        </div>
        <div>
            {
                sizes.map(s => {
                    if(s.size === selectedSize) {
                        return(<Button key={s.size} variant="contained" color="primary" onClick={() =>onClickHandler(s)}>{s.size}</Button>)
                    } else {
                        return(<Button key={s.size} color="primary" onClick={() =>onClickHandler(s)}>{s.size}</Button>)
                    }
                })
            }
        </div>
        </div>
    )
}

export default Filter;