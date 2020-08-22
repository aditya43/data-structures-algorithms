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

    depthFirstIterative (start) {
        const results = [];
        const visited = {};
        const stack = [start];

        visited[start] = true;

        while (stack.length) {
            const currentVertex = stack.pop();

            results.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }

        return results;
    }

    depthFirstRecursive (start) {
        const results = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs (vertex) {
            if (!vertex) {
                return null;
            }

            visited[vertex] = true;
            results.push(vertex);

            adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    return dfs(neighbour);
                }
            });
        })(start);

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
console.log(graph.depthFirstIterative('Pune'));
