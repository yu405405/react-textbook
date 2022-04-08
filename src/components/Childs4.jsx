import { memo } from "react";
export const Child4 = memo(() => {
    console.log('Child4')

    const style = {
        height: "200px",
        backgroundColor: "wheat",
        padding: "8px"
    }

    return (
        <div style={style}>
            <p>Child4</p>
        </div>
    )
});