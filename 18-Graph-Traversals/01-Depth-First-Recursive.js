/**
 * DFS Recursive
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * PSUDOCODE
 * -----------------------------------
 * DFS-iterative(start):
 *   let S be a stack
 *   S.push(start)
 *   while S is not empty
 *       vertex = S.pop()
 *       if vertex is not labeled as discovered:
 *           visit vertex (add to result list)
 *           label vertex as discovered
 *           for each of vertex's neighbors, N do
 *               S.push(N)
 *
 * Algorithm
 * -----------------------------------
 * 1. The function should accept a starting node
 * 2. Create a list to store the end result, to be returned at the very end
 * 3. Create an object to store visited vertices
 * 4. Create a helper function which accepts a vertex
 *      - The helper function should return early if the vertex is empty
 *      - The helper function should place the vertex it accepts
 *        into the visited object and push that vertex into the result array
 *      - Loop over all of the values in the adjacencyList for that vertex
 *      - If any of those values have not been visited, recursively
 *        invoke the helper function with that vertex
 * 5. Invoke the helper function with the starting vertex
 * 6. Return the result array
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
console.log(graph.depthFirstRecursive('Pune'));
