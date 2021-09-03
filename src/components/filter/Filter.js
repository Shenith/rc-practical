import { Button } from "@material-ui/core";
import React from "react";

const Filter = (props) => {

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

    return(
        <div>
        <div>
            <h3>Sizes</h3>
        </div>
        <div>
            {
                sizes.map(s => {
                    return(
                        <Button key={s.size} color="primary" onClick={() =>props.filterHandler(s)}>{s.size}</Button>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Filter;