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
        const v1 = this.adjacencyList[vertex1];
        const v2 = this.adjacencyList[vertex2];

        if (v1.indexOf(vertex2) < 0) {
            v1.push(vertex2);
        }
        if (v2.indexOf(vertex1) < 0) {
            v2.push(vertex1);
        }
    }

    removeEdge (vertex1, vertex2) {
        // console.log(vertex1, vertex2);

        const v1 = this.adjacencyList[vertex1];
        const v2 = this.adjacencyList[vertex2];

        if (v1.indexOf(vertex2) >= 0) {
            v1.splice(v1.indexOf(vertex2), 1);
        }
        if (v2.indexOf(vertex1) >= 0) {
            v2.splice(v2.indexOf(vertex1), 1);
        }
    }

    removeVertex (vertex) {
        if (this.adjacencyList[vertex]) {
            while (this.adjacencyList[vertex].length) {
                this.removeEdge(this.adjacencyList[vertex].pop(), vertex);
            }
            delete this.adjacencyList[vertex];
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

// Remove edge
// console.log(graph);
// graph.removeEdge('Mumbai', 'Goa');
// graph.removeEdge('Pune', 'Goa');

// Remove vertex
// console.log(graph);
graph.removeVertex('Pune');

console.log(graph);
