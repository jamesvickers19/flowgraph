import BooleanNode from './graph_nodes/boolean_node.js';
import IntegerNode from './graph_nodes/integer_node.js';
import TerminalNode from './graph_nodes/terminal_node.js';

const divStyle = {
    border: "2px solid rgb(134, 133, 133)",
    margin: "auto",
    padding: "10px",
    width: "50%",
};

const renderNode = (node, callback) => {
    const nodeType = node.type;
    let element = null;
    switch (nodeType) {
        case "boolean":
            element = (<BooleanNode
                questionText={node.questionText}
                submitCallback={callback} />);
            break;
        case "integer":
            element = (<IntegerNode
                questionText={node.questionText}
                min={parseInt(node.min)}
                max={parseInt(node.max)}
                submitCallback={callback} />);
            break;
        case "terminal":
            element = (<TerminalNode
                text={node.text} />);
            break;
        default: element = (<h1>Unknown type: nodeType</h1>);
    }

    return (
        <div style={divStyle}>
            {element}
        </div>
    );
};

export default renderNode;
