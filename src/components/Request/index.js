import React from 'react';
import { connect } from 'react-redux';
import {
  makeRequest as actionsMakeRequest
} from '../../actions/request';

const Request = props => {
  let {
    id,
    data,
    makeRequest
  } = props;

  const makeRequestHandler = () => makeRequest(id);
  const content = id > 0 ? JSON.stringify(data, null, 2) : data;

  return (
    <>
      <button type="button" onClick={makeRequestHandler}>Make request</button>
      <pre>{content}</pre>
    </>
  );
};

const mapStateToProps = state => {
  const {lastId, data} = state.request;
  return {
    id: lastId,
    data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeRequest: id => dispatch(actionsMakeRequest(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Request);
