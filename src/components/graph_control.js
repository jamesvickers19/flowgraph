import renderNode from './node_renderer.js';
import { useState } from 'react';
import jsonLogic from 'json-logic-js';

function nodeLookupByName(nodes) {
    return Object.assign({}, ...nodes.map((x) => ({ [x.name]: x })));
}

// TODO maybe do preprocessing in an initial function, then a render function that takes those?
const GraphControl = (graph) => {
    const { name, objects, edges } = graph;
    const nameToNode = nodeLookupByName(objects);
    const [currentNode, setCurrentNode] = useState(objects.filter(x => x["isStart"])[0]);
    const nodeCallback = (answer) => {
        console.log(`nodeCallback: ${answer}`);
        console.log(`rule: ${currentNode.rule}`);
        const rule = JSON.parse(currentNode.rule);
        const nextNodeName = jsonLogic.apply(rule, { "answer": answer });
        console.log(`nextNodeName: ${nextNodeName}`);
        const nextNode = nameToNode[nextNodeName];
        console.log(`nextNode: ${JSON.stringify(nextNode)}`);
        setCurrentNode(nextNode);
    }

    return (
        <div>
            <h1>Flowgraph: {name}</h1>
            {renderNode(currentNode, nodeCallback)}
        </div>
    );
}

export default GraphControl;
