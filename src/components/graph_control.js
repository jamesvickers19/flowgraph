import renderNode from './node_renderer.js';
import { useState } from 'react';

const GraphControl = ({ name, objects, edges }) => {
    const [currentNode, setCurrentNode] = useState(objects.filter(x => x["isStart"])[0]);
    const nodeCallback = (answer) => {
        console.log(`nodeCallback: ${answer}`);
        // TODO: change rendered node with setCurrentNode
        // evaluate node rule to get node id (_gvid) to go to
        // find that node in the graph
    }

    return (
        <div>
            <h1>Flowgraph: {name}</h1>
            {renderNode(currentNode, nodeCallback)}
        </div>
    );
}

export default GraphControl;
