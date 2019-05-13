import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { LIKE_FRUITS } from './fruits_ducks';

const Sample = styled.p`
  padding: 5px;
  background-color: #ccc;
`;

const ExampleFruits = (props) => (
  <>
  {props.fruitsList.map((item, idx) => (
      <Sample
        key={item}
        onClick={(e)=>{
          console.log(`${e.target.innerText} was cliked`);
          props.likeFruits(props.item);
        }}>
        {item}
      </Sample>
    ))
  }
  </>
);

class Fruits extends React.Component {
  render() {
    return (
      <ExampleFruits
        fruitsList={this.props.fruitsList}
        likeFruits={(e) => this.props.likeFruits(this.props.fruitsList)}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  likeFruits: (queryStore) => dispatch(LIKE_FRUITS(queryStore)),
});

export default connect(null, mapDispatchToProps)(Fruits);
