import { User } from './models';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    improved: [];
    PhoneNumber: ''
  }
}

var int = setInterval({
fetch('https://api.hitbtc.com/api/2/public/ticker', {
    method: 'GET',
  })
  .then(data => data.json())
  .then((resp) => {
    console.log(resp);
    User.findOne({PhoneNumber: this.state.PhoneNumber})
    .then((guy)=>{
      //filter guy to only be the stocks someone picked to be interested in
      guy.shift(resp);
      guy.pop();
      for(var i = 0; i < guy[0].length; i++){
        if(guy[0][i].volume * 2 >= guy[60][i].volume && guy[60][i].volume > 1){
          this.setState({
            improved: improved.concat(guy[60][i]);
          })
        }
      }
      var sendBack = 'The following stocks have gone up by over 100% in the past hour: ';
      for(var i = 0; i < improved.length; i++){
        sendBack = sendBack + improved.symbol + ', '
      }
      alert(sendBack)
    })
    .catch(err=>console.log('ERROR:', err))
})
.catch(err=>console.log('ERROR:', err))
}, 60000)

render() {
  return (

  )
}}
