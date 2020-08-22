class Graph {
    constructor () {
        this.adjacencyList = [];
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

    breadthFirstIterative (start) {
        const results = [];
        const visited = {};
        const queue = [start];
        let currentVertex;

        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();

            results.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        }

        return results;
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

// DFS Recursive
console.log(graph.breadthFirstIterative('Pune'));
