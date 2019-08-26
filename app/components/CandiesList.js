import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayCandy from './DisplayCandy';
import { getCandies } from '../reducers/candies';

export class CandiesList extends Component {
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    const candies = this.props.candies;
    return (
      <div>
        {candies.map(candy => (
          <DisplayCandy key={candy.id} {...candy} />
        ))}
      </div>
    );
  }
}

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
)(CandiesList);
