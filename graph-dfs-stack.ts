// graph-dfs-stack.ts

class Graph {
  private adjacencyList: Record<string, string[]> = {};

  addVertex(vertex: string): void {
    this.adjacencyList[vertex] = [];
  }

  addEdge(from: string, to: string): void {
    this.adjacencyList[from].push(to);
    this.adjacencyList[to].push(from);
  }

  dfs(startingNode: string): string[] {
    const visited: Record<string, boolean> = {};
    const result: string[] = [];
    const stack: string[] = [startingNode];

    while (stack.length) {
      const current = stack.pop() as string;
      if (!visited[current]) {
        visited[current] = true;
        result.push(current);
        this.adjacencyList[current].forEach((neighbor) => {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        });
      }
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
graph.addEdge("A", "C");
graph.addEdge("B", "D");

const dfsResult = graph.dfs("A");
console.log(dfsResult); // ["A", "C", "B", "D"]
