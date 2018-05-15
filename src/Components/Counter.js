import React from 'react'
import {connect} from 'react-redux'

const Counter = (props) => (

    <div>
        <h1>Counter</h1>
        <p>{props.count}</p>
        <button onClick={props.onInc}>Increment</button>
        <button onClick={props.onDec}>Decrement</button>
    </div>
);

function mapStateToProps(state) {
console.log(mapStateToProps)
    return {

        count: state.count
    }
}
function mapDispatchToProps(dispatch) {
console.log(mapDispatchToProps)
    return {

        onInc: () => {
            const action = {type: 'INCREMENT'}
            dispatch(action)
        },
        onDec: () => {
            const action = {type: 'DECREMENT'}
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)