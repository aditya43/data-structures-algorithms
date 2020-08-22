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
