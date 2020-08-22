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
}
