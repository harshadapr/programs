// dfs-graph.ts

class Graph {
    private adjacencyList: Map<string, string[]> = new Map();

    addVertex(vertex: string): void {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: string, vertex2: string): void {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1);
    }

    depthFirstSearch(startingNode: string): string[] {
        const visited: Set<string> = new Set();
        const result: string[] = [];

        const dfs = (vertex: string) => {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);
            this.adjacencyList.get(vertex)?.forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            });
        };

        dfs(startingNode);
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

const dfsResult = graph.depthFirstSearch("A");
console.log(dfsResult); // ["A", "B", "C", "D"]
