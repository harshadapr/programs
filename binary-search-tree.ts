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
