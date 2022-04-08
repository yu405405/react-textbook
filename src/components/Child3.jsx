import { memo } from "react";
export const Child3 = memo(() => {
    console.log('Child3レンダリング')

    const style = {
        height: "50px",
        backgroundColor: "lightgray"
    }

    return (
        <div style={style}>
            <p>Child3</p>
        </div>
    )
});