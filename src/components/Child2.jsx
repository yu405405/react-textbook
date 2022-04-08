import { memo } from "react";
export const Child2 = memo(() => {
    console.log('Child2レンダリング')

    const style = {
        height: "50px",
        backgroundColor: "lightgray"
    }

    return (
        <div style={style}>
            <p>Child2</p>
        </div>
    )
});