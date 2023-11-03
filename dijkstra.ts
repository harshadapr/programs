// dijkstra.ts

class Graph {
  private graph: Record<string, Record<string, number>> = {};

  addEdge(from: string, to: string, weight: number): void {
    if (!this.graph[from]) this.graph[from] = {};
    this.graph[from][to] = weight;
  }

  dijkstra(start: string): Record<string, number> {
    const distances: Record<string, number> = {};
    const visited: string[] = [];
    let current = start;

    for (const vertex in this.graph) {
      distances[vertex] = Infinity;
    }
    distances[start] = 0;

    while (current) {
      for (const neighbor in this.graph[current]) {
        const potential = distances[current] + this.graph[current][neighbor];
        if (potential < distances[neighbor]) {
          distances[neighbor] = potential;
        }
      }
      visited.push(current);
      current = this.getClosestVertex(distances, visited);
    }

    return distances;
  }

  private getClosestVertex(distances: Record<string, number>, visited: string[]): string | undefined {
    return Object.keys(distances).filter((vertex) => !visited.includes(vertex)).reduce((a, b) =>
      distances[a] < distances[b] ? a : b
    );
  }
}

const graph = new Graph();
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", 2);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 1);
graph.addEdge("D", "E", 7);

const shortestDistances = graph.dijkstra("A");
console.log(shortestDistances); // { A: 0, B: 1, C: 3, D: 4, E: 11 }
