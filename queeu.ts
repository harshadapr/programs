// queue.ts

class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    front(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const queue = new Queue<string>();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

while (!queue.isEmpty()) {
    console.log(queue.dequeue());
}
