// A simple factory to create an empty graph
const createGraph = () => new Map();

// Pure functions to modify the graph
const addVertex = (graph, vertex) => new Map([...graph, [vertex, []]]);

const addEdge = (graph, v1, v2) => {
  const newGraph = new Map(graph);
  newGraph.set(v1, [...newGraph.get(v1), v2]);
  newGraph.set(v2, [...newGraph.get(v2), v1]);
  return newGraph;
};

// 1. Initialize
let kenyaGraph = createGraph();

// 2. Add Vertices (Towns)
const towns = ["Nairobi", "Nakuru", "Eldoret", "Kisumu", "Mombasa"];
kenyaGraph = towns.reduce((g, town) => addVertex(g, town), kenyaGraph);

// 3. Add Edges (Road Connections)
// We chain these or use a reduce to keep it functional
const connections = [
  ["Nairobi", "Mombasa"],
  ["Nairobi", "Nakuru"],
  ["Nakuru", "Eldoret"],
  ["Eldoret", "Kisumu"],
  ["Nakuru", "Kisumu"],
];

kenyaGraph = connections.reduce(
  (g, [t1, t2]) => addEdge(g, t1, t2),
  kenyaGraph,
);

console.log(kenyaGraph);
