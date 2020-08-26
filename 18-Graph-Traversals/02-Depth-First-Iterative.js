/**
 * DFS Iterative
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * Algorithm
 * -----------------------------------
 * 1. The function should accept a starting node
 * 2. Create a stack to help use keep track of vertices (use a list/array)
 * 3. Create a list to store the end result, to be returned at the very end
 * 4. Create an object to store visited vertices
 * 5. Add the starting vertex to the stack, and mark it visited
 * 6. While the stack has something in it:
 *      - Pop the next vertex from the stack
 *      - If that vertex hasn't been visited yet:
 *          - Mark it as visited
 *          - Add it to the result list
 *          - Push all of its neighbors into the stack
 * 7. Return the result array
 */
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

    depthFirstIterative (start) {
        const results = [];
        const visited = {};
        const stack = [start];
        let currentVertex;

        visited[start] = true;

        while (stack.length) {
            currentVertex = stack.pop();

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
