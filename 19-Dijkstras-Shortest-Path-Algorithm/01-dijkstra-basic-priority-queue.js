/**
 * Dijkstra's Shortest Path Algorithm
 * Dijkstra's algorithm is greedy! That can cause problems!
 *
 *
 * Time Complexity: Time Complexity of Dijkstra's Algorithm is O ( V 2 )
 * but with min-priority queue it drops down to O ( V + E log V )
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * IMPORTANT POINTS AND PSUDOCODE
 * -----------------------------------
 * 1. This function should accept a starting and ending vertex
 * 2. Create an object (we'll call it distances) and set each key to be every
 * vertex in the adjacency list with a value of infinity, except for the
 * starting vertex which should have a value of 0.
 * 3. After setting a value in the distances object, add each vertex with
 * a priority of Infinity to the priority queue, except the starting vertex,
 * which should have a priority of 0 because that's where we begin.
 * 4. Create another object called previous and set each key to be every
 * vertex in the adjacency list with a value of null
 * 5. Start looping as long as there is anything in the priority queue
 *    - dequeue a vertex from the priority queue
 *    - If that vertex is the same as the ending vertex - we are done!
 *    - Otherwise loop through each value in the adjacency list at that vertex
 *       - Calculate the distance to that vertex from the starting vertex
 *       - if the distance is less than what is currently stored in our
 *         distances object
 *           - update the distances object with new lower distance
 *           - update the previous object to contain that vertex
 *           - enqueue the vertex with the total distance from the start node
 *
 * We can improve this algorithm by adding a heuristics (a best guess)
 */
class Node {
    constructor (vertex, weight) {
        this.node = vertex;
        this.weight = weight;
    }
}

class PriorityQueue {
    constructor () {
        this.values = [];
    }

    enqueue (val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue () {
        return this.values.shift();
    }

    sort () {
        this.values.sort((a, b) => a.priority - b.priority);
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

    Dijkstra (start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = []; // to return at end
        let smallest;
        // build up initial state
        for (const vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // WE ARE DONE
                // BUILD UP PATH TO RETURN AT END
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (const neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    const nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    const candidate = distances[smallest] + nextNode.weight;
                    const nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
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

console.log(graph.Dijkstra('A', 'E'));
