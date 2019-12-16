import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../actions/counter';
import './styles.scss';

const Counter = props => {
  const incrementHandler = () => {
    props.dispatch(increment());
  };

  const decrementHandler = () => {
    props.dispatch(decrement());
  };

  const resetHandler = () => {
    props.dispatch(reset());
  };

  return (
    <>
      <h1>Count: {props.counter}</h1>
      <div className="buttons-container">
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Counter);
