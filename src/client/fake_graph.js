const g = {
  "name": "CanYouVote",
  "directed": true,
  "strict": false,
  "_subgraph_cnt": 0,
  "objects": [
    {
      "_gvid": 0,
      "name": "A",
      "isStart": "true",
      "label": "\\N",
      "max": "150",
      "min": "0",
      "questionText": "How old are you?",
      "rule": "{\"if\": [ {\">=\" : [ { \"var\" : \"answer\" }, 18 ] }, \"B\", \"C\" ] }",
      "type": "integer"
    },
    {
      "_gvid": 1,
      "name": "B",
      "label": "\\N",
      "questionText": "Are you a US citizen?",
      "rule": "{\"if\": [ {\"==\" : [ { \"var\" : \"answer\" }, true ] }, \"D\", \"C\" ] }",
      "type": "boolean"
    },
    {
      "_gvid": 2,
      "name": "C",
      "label": "\\N",
      "text": "You cannot vote",
      "type": "terminal"
    },
    {
      "_gvid": 3,
      "name": "D",
      "label": "\\N",
      "text": "You can vote",
      "type": "terminal"
    }
  ],
  "edges": [
    {
      "_gvid": 0,
      "tail": 0,
      "head": 1
    },
    {
      "_gvid": 1,
      "tail": 0,
      "head": 2
    },
    {
      "_gvid": 2,
      "tail": 1,
      "head": 2
    },
    {
      "_gvid": 3,
      "tail": 2,
      "head": 3
    }
  ]
};


export default g;
