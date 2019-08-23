import React from 'react';
import { connect } from 'react-redux';
import DisplayCandy from './DisplayCandy';
import { getCandies } from '../store';

const Root = props => {
  props.getCandies();
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <div>
          {props.candies.map(candy => (
            <DisplayCandy key={candy.id} {...candy} />
          ))}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    candies: state.candies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCandies: () => dispatch(getCandies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
