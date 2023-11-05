// // bfs-graph.ts

// class Graph {
//     private adjacencyList: Map<string, string[]> = new Map();

//     addVertex(vertex: string): void {
//         this.adjacencyList.set(vertex, []);
//     }

//     addEdge(vertex1: string, vertex2: string): void {
//         this.adjacencyList.get(vertex1)?.push(vertex2);
//         this.adjacencyList.get(vertex2)?.push(vertex1);
//     }

//     breadthFirstSearch(startingNode: string): string[] {
//         const visited: Set<string> = new Set();
//         const result: string[] = [];
//         const queue: string[] = [];

//         visited.add(startingNode);
//         queue.push(startingNode);

//         while (queue.length > 0) {
//             const currentVertex = queue.shift() as string;
//             result.push(currentVertex);

//             this.adjacencyList.get(currentVertex)?.forEach((neighbor) => {
//                 if (!visited.has(neighbor)) {
//                     visited.add(neighbor);
//                     queue.push(neighbor);
//                 }
//             });
//         }

//         return result;
//     }
// }

// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addEdge("A", "B");
// graph.addEdge("B", "C");
// graph.addEdge("C", "D");

// const bfsResult = graph.breadthFirstSearch("A");
// console.log(bfsResult); // ["A", "B", "C", "D"]



// binary-search-tree.ts

class TreeNode<T> {
    constructor(public value: T, public left: TreeNode<T> | null = null, public right: TreeNode<T> | null = null) { }
}

class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null;

    insert(value: T): void {
        this.root = this.insertRec(this.root, value);
    }

    private insertRec(node: TreeNode<T> | null, value: T): TreeNode<T> {
        if (!node) {
            return new TreeNode(value);
        }

        if (value < node.value) {
            node.left = this.insertRec(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertRec(node.right, value);
        }

        return node;
    }

    search(value: T): boolean {
        return this.searchRec(this.root, value);
    }

    private searchRec(node: TreeNode<T> | null, value: T): boolean {
        if (!node) {
            return false;
        }

        if (value === node.value) {
            return true;
        }

        if (value < node.value) {
            return this.searchRec(node.left, value);
        }

        return this.searchRec(node.right, value);
    }
}

const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.search(5)); // true
console.log(bst.search(20)); // false
