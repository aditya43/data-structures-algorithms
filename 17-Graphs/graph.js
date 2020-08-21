class Graph {
    constructor () {
        this.adjacencyList = {};
    }

    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge (vertex1, vertex2) {
        if (this.adjacencyList[vertex1].indexOf(vertex2) < 0) {
            this.adjacencyList[vertex1].push(vertex2);
        }
        if (this.adjacencyList[vertex2].indexOf(vertex1) < 0) {
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge (vertex1, vertex2) {
        const v1 = this.adjacencyList[vertex1];
        const v2 = this.adjacencyList[vertex2];

        if (v1.indexOf(vertex2) >= 0) {
            v1.splice(v1.indexOf(vertex2), 1);
        }
        if (v2.indexOf(vertex1) >= 0) {
            v2.splice(v2.indexOf(vertex1), 1);
        }
    }
}

const graph = new Graph();

// Add vertex
graph.addVertex('Pune');
graph.addVertex('Mumbai');
graph.addVertex('Delhi');
graph.addVertex('Goa');

// Add edge
graph.addEdge('Pune', 'Goa');
graph.addEdge('Pune', 'Mumbai');
graph.addEdge('Mumbai', 'Delhi');
graph.addEdge('Mumbai', 'Goa');

console.log(graph);
graph.removeEdge('Mumbai', 'Goa');
graph.removeEdge('Pune', 'Goa');

console.log(graph);
