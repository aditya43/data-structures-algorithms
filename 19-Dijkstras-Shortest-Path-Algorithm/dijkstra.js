class Node {
    constructor (vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class WeightedGraph {
    constructor () {
        this.adjacencyList = {};
    }

    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge (vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push(new Node(vertex2, weight));
        this.adjacencyList[vertex2].push(new Node(vertex1, weight));
    }
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(JSON.stringify(graph, null, 4));
