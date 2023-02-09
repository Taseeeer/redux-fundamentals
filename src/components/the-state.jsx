import { connect } from "react-redux";

const TheState = ({ count, increment, reset }) => {

    console.log('hi', count)
    return (
        <h1 onClick={() => reset()}>State</h1>
    )
};

const mapStateToProps = state => {
    return {
        count: state.count
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        reset: () => dispatch({ type: "RESET"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheState);