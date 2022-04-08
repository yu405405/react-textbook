import { memo } from "react";
import { Child2 } from "./Child2"
import { Child3 } from "./Child3"

export const Child1 = memo((props) => {
    console.log('Child1レンダリング')
    // console.log(props)

    const { onClickReset } = props;

    const style = {
        height: "200px",
        backgroundColor: "lightblue",
        padding: "8px"
    }

    return (
        <div style={style}>
            <p>Child1</p>
            <button onClick={ onClickReset }>リセット</button>
            <Child2 />
            <Child3 />
        </div>
    )
});