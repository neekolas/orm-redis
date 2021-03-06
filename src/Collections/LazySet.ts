
/**
 * Lazy set
 * 
 * @export
 * @class LazySet
 * @template T 
 */
export class LazySet<T> {
    /**
     * Set instance
     * 
     * @private
     */
    private set: Set<T>;

    /**
     * Creates an instance of LazySet.
     * @param [values] 
     */
    public constructor(values?: T[]) {
        this.set = new Set(values);
    }

    /**
     * Add value to the set
     * 
     * @param value 
     * @returns 
     */
    public async add(value: T): Promise<void> {
        this.set.add(value);
    }

    /**
     * Delete value from the set
     * 
     * @param value 
     * @param [deleteEntity=false] Also delete entity if it's entity set
     * @returns 
     */
    public async delete(value: T, deleteEntity: boolean = false): Promise<boolean> {
        return this.set.delete(value);
    }

    /**
     * Check if has value in the set
     * 
     * @param value 
     * @returns 
     */
    public async has(value: T): Promise<boolean> {
        return this.set.has(value);
    }

    /**
     * Get set size
     * 
     * @returns 
     */
    public async size(): Promise<number> {
        return this.set.size;
    }

    /**
     * Clear set
     * 
     * @param [deleteEntities=false] Also delete all entities
     * @returns 
     */
    public async clear(deleteEntities: boolean = false): Promise<void> {
        this.set.clear();
    }

    /**
     * Get all values in array
     * 
     * @returns 
     */
    public async toArray(): Promise<T[]> {
        return [...this.set.values()];
    }

    /**
     * Iterate over values
     * @param scanCount Redis SCAN's COUNT option 
     */
    public async * values(scanCount?: number) {
        for (const val of this.set.values()) {
            yield val;
        }
    }
}