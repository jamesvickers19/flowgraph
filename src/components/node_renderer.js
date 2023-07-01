import BooleanNode from './graph_nodes/boolean_node.js';
import IntegerNode from './graph_nodes/integer_node.js';
import TerminalNode from './graph_nodes/terminal_node.js';

const renderNode = (node, callback) => {
    const nodeType = node.type;
    switch (nodeType) {
        case "boolean":
            return <BooleanNode
                questionText={node.questionText}
                submitCallback={callback} />
        case "integer":
            return <IntegerNode
                questionText={node.questionText}
                min={parseInt(node.min)}
                max={parseInt(node.max)}
                submitCallback={callback} />
        case "terminal":
            return <TerminalNode
                text={node.text} />

        default: return <h1>Unknown type: nodeType</h1>
    }
};

export default renderNode;
