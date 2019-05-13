import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { LIKE_FRUITS } from './fruits_ducks';

const Sample = styled.p`
  padding: 5px;
  background-color: #ccc;
`;

const ExampleFruits = ({ fruitsList, likeFruits }) => (
  <>
  {fruitsList.map(item => (
      <Sample
        key={item}
        onClick={() => { likeFruits(item); }}
      >
        {item}
      </Sample>
    ))
  }
  </>
);

class Fruits extends React.Component {
  render() {
    const { fruitsList, likeFruits } = this.props;

    return (
      <ExampleFruits
        fruitsList={fruitsList}
        likeFruits={item => likeFruits(item)}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  likeFruits: (queryStore) => dispatch(LIKE_FRUITS(queryStore)),
});

export default connect(null, mapDispatchToProps)(Fruits);
