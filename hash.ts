// hash-table.ts

class HashTable<K, V> {
    private table: Record<string, V> = {};

    set(key: K, value: V): void {
        const keyString = key.toString();
        this.table[keyString] = value;
    }

    get(key: K): V | undefined {
        const keyString = key.toString();
        return this.table[keyString];
    }

    remove(key: K): void {
        const keyString = key.toString();
        delete this.table[keyString];
    }
}

const hashMap = new HashTable<string, number>();
hashMap.set("one", 1);
hashMap.set("two", 2);
console.log(hashMap.get("one")); // 1
hashMap.remove("two");
