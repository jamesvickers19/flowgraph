#!/bin/bash

JSON=$(cat example_graph.dot | dot -Tdot_json)

echo $JSON > example_graph.json

FIXED_JSON=$(echo $JSON | sed 's/\\\\N//g')

echo "const g = ${JSON};" > src/client/fake_graph.js
echo "" >> src/client/fake_graph.js
echo "" >> src/client/fake_graph.js
echo "export default g;" >> src/client/fake_graph.js
