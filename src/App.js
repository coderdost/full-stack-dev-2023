import './App.css';

function App() {

  let name  = 'react app'
  let className = 'App-header';
  console.log('App')
  return (
    <div className="">
      <div className={className}>
         {name}
         <Demo></Demo>
      </div>
    </div>
  );
}
function Demo() {
  console.log('Demo')
  return (
    <div className="App">
      <div className='App-header'>
         Demo
      </div>
    </div>
  );
}



export default App;
