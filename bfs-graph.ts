// bfs-graph.ts

class Graph {
    private adjacencyList: Map<string, string[]> = new Map();

    addVertex(vertex: string): void {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: string, vertex2: string): void {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1);
    }

    breadthFirstSearch(startingNode: string): string[] {
        const visited: Set<string> = new Set();
        const result: string[] = [];
        const queue: string[] = [];

        visited.add(startingNode);
        queue.push(startingNode);

        while (queue.length > 0) {
            const currentVertex = queue.shift() as string;
            result.push(currentVertex);

            this.adjacencyList.get(currentVertex)?.forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");

const bfsResult = graph.breadthFirstSearch("A");
console.log(bfsResult); // ["A", "B", "C", "D"]
