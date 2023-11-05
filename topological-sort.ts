// topological-sort.ts

class Graph {
  private adjacencyList: Record<string, string[]> = {};

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(from: string, to: string): void {
    this.adjacencyList[from].push(to);
  }

  topologicalSort(): string[] {
    const visited: Record<string, boolean> = {};
    const result: string[] = [];
    
    const visit = (vertex: string) => {
      if (!visited[vertex]) {
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach((neighbor) => visit(neighbor));
        result.push(vertex);
      }
    };

    for (const vertex in this.adjacencyList) {
      visit(vertex);
    }

    return result.reverse();
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

const topologicalOrder = graph.topologicalSort();
console.log(topologicalOrder); // ["A", "B", "C", "D"]
