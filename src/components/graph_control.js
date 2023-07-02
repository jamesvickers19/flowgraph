import renderNode from './node_renderer.js';
import { useState } from 'react';
import jsonLogic from 'json-logic-js';

const headerStyle = {
    margin: "auto",
    textAlign: "center",
    width: "50%",
};

function nodeLookupByName(nodes) {
    return Object.assign({}, ...nodes.map((x) => ({ [x.name]: x })));
}

function formatGraphName(name) {
    return name.replace(/([A-Z][a-z])/g, ' $1').replace(/(\d)/g, ' $1');
}

const GraphControl = (graph) => {
    const nameToNode = nodeLookupByName(graph.objects);
    return RenderGraphControl({ nameToNode: nameToNode, ...graph });
}

const RenderGraphControl = (graph) => {
    const { name, objects, nameToNode } = graph;
    const [currentNode, setCurrentNode] = useState(objects.filter(x => x["isStart"])[0]);
    const nodeCallback = (answer) => {
        const rule = JSON.parse(currentNode.rule);
        const nextNodeName = jsonLogic.apply(rule, { "answer": answer });
        const nextNode = nameToNode[nextNodeName];
        setCurrentNode(nextNode);
    }

    return (
        <div>
            <h1 style={headerStyle}>{formatGraphName(name)}</h1>
            {renderNode(currentNode, nodeCallback)}
        </div>
    );
}

export default GraphControl;
