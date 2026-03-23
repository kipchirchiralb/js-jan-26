// A simple factory to create an empty graph
const createGraph = () => new Map();

// Pure functions to modify the graph
const addVertex = (graph, vertex) => new Map([...graph, [vertex, []]]);

const addEdge = (graph, v1, v2, weight) => {
  const newGraph = new Map(graph);
  // Store neighbors as objects: { node: "Town", weight: 123 }
  newGraph.set(v1, [...newGraph.get(v1), { node: v2, weight }]);
  newGraph.set(v2, [...newGraph.get(v2), { node: v1, weight }]);
  return newGraph;
};

// 1. Initialize
let kenyaGraph = createGraph();

// 2. Add Vertices (Towns)
const towns = ["Nairobi", "Nakuru", "Eldoret", "Kisumu", "Mombasa"];
kenyaGraph = towns.reduce((g, town) => addVertex(g, town), kenyaGraph);

// 3. Add Weighted Edges (Distances in km)
const connections = [
  ["Nairobi", "Mombasa", 485],
  ["Nairobi", "Nakuru", 157],
  ["Nakuru", "Eldoret", 155],
  ["Eldoret", "Kisumu", 120],
  ["Nakuru", "Kisumu", 180],
];

kenyaGraph = connections.reduce(
  (g, [t1, t2, w]) => addEdge(g, t1, t2, w),
  kenyaGraph,
);

console.log(kenyaGraph);
