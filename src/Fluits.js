import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { LIKE_FLUITS } from './fluits_ducks';

const Sample = styled.p`
  padding: 5px;
  background-color: #ccc;
`;

const ExampleFluits = (props) => (
  <>
  {props.fluitsList.map((item, idx) => (
      <Sample
        key={item}
        onClick={(e)=>{
          console.log(`${e.target.innerText} was cliked`);
          props.likeFluits(props.item);
        }}>
        {item}
      </Sample>
    ))
  }
  </>
);

class Fluits extends React.Component {
  render() {
    return (
      <ExampleFluits
        fluitsList={this.props.fluitsList}
        likeFluits={(e) => this.props.likeFluits(this.props.fluitsList)}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  likeFluits: (queryStore) => dispatch(LIKE_FLUITS(queryStore)),
});

export default connect(null, mapDispatchToProps)(Fluits);
