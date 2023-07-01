import './App.css';
import LoadFlowgraph from './client/backend_client';
import GraphControl from './components/graph_control';

function App() {

  const graph = LoadFlowgraph();
  return GraphControl(graph);

  /*return (
    <div className="App">
      <h1>bool node</h1>
      <BooleanNode
        questionText="A boolean?"
        submitCallback={a => console.log(`boolean submitCallback: ${a}`)} />
      <br />
      <h1>number node</h1>
      <IntegerNode
        questionText="an integer?"
        min={5}
        max={10}
        submitCallback={a => console.log(`integer submitCallback: ${a}`)}
      />
    </div>
  );
  */
}

export default App;
