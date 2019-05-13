const ExampleFluits = (props) =>(
  {props.fluitsList.map((item, idx)=>(
      <sample key={item} onClick={(e)=>{{ console.log(`${e.target.innerText}was cliked`)
        props.likeFluits(props.item)}}>  ##ここでは選択したものがe.target.innerTextとして正常に出力できている
      {itemKey}
        </sample>
        ))}


        class Fluits extends React.Component {
        render(){
        <ExampleFluits
        likeFluits={(e) => this.props.likeFluits(this.props.fluitsList)}
        />

        const mapDispatchToProps = (dispatch) => ({
        likeFluits: (queryStore) => dispatch(LIKE_FLUITS(queryStore)),

        })

        export default connect(null, mapDispatchToProps)(Fluits);