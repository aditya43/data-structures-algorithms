/**
 * BFS Iterative
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * Algorithm
 * -----------------------------------
 * 1. This function should accept a starting vertex
 * 2. Create a queue (you can use an array) and place the starting
 * vertex in it
 * 3. Create an array to store the nodes visited
 * 4. Create an object to store nodes visited
 * 5. Mark the starting vertex as visited
 * 6. Loop as long as there is anything in the queue
 * 7. Remove the first vertex from the queue and push it into the
 * array that stores nodes visited
 * 8. Loop over each vertex in the adjacency list for the vertex
 * you are visiting.
 * 9. If it is not inside the object that stores nodes visited, mark
 * it as visited and enqueue that vertex
 * 10. Once you have finished looping, return the array of visited nodes
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
