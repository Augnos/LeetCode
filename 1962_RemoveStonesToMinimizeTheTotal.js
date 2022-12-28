// You are given a 0-indexed integer array piles, where piles[i] represents the number of stones in the ith pile, and an integer k.
// You should apply the following operation exactly k times:

// Choose any piles[i] and remove floor(piles[i] / 2) stones from it.
// Notice that you can apply the operation on the same pile more than once.

// Return the maximum possible total number of stones remaining after applying the k operations.

// floor(x) is the greatest integer that is smaller than or equal to x (i.e., rounds x down).

/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */

class MaxHeap {
    constructor() {
        this.heap = [null];
        this.count = 0;
    }

    extract() {
        // returns null if heap empty
        if (this.heap.length == 1) return null;

        let maxValue = this.heap[1];    // saves first node to return later
        this.count -= maxValue;         // updates count

        // pops and returns top if only value in heap
        if (this.heap.length == 2) return this.heap.pop();

        this.heap[1] = this.heap.pop(); // moves last node to top of heap

        // declaring variables to shift top node to correct spot
        // iterable
        let i = 1;
        // variables to make logic a lot easier to read.
        let parentVal = this.heap[i];
        let leftVal = this.heap[this.idxOfLeftChild(i)];
        let rightVal = this.heap[this.idxOfRightChild(i)];

        // while both children are not undefined
        while (leftVal && rightVal) {
            // if parent is less than either child
            if (parentVal < Math.max(leftVal, rightVal)) {
                // swaps parent with the greater of either child, then iterates
                if (leftVal > rightVal) {
                    this.swap(i, this.idxOfLeftChild(i));
                    i = this.idxOfLeftChild(i);
                } else {
                    this.swap(i, this.idxOfRightChild(i));
                    i = this.idxOfRightChild(i);
                }
                // updates variables with new iterable
                parentVal = this.heap[i];
                leftVal = this.heap[this.idxOfLeftChild(i)];
                rightVal = this.heap[this.idxOfRightChild(i)];
            }
            // if both children are greater than or equal to parent, return the saved node
            else return maxValue;
        }

        // edge case where at least one of last 2 children is undefined
        // if statement checks if tree large enough for children to exist
        if (i < Math.ceil(this.heap.length / 2)) {
            // if parent is greater than either existing child, swap
            if (parentVal < leftVal) this.swap(i, this.idxOfLeftChild(i));
            if (parentVal < rightVal) this.swap(i, this.idxOfLeftChild(i));
        }

        // returns saved node after heap is ordered
        return maxValue;
    }

    /**
     * Retrieves the top (maximum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        return this.heap.length > 1 ? this.heap[1] : null;
    }

    insert(num) {
        this.heap.push(num);
        this.shiftUp();

        return this.count += num;
    }

    // AKA: siftUp, heapifyUp, bubbleUp to restore order after insert
    shiftUp() {
        let idxOfNodeToShiftUp = this.heap.length - 1;

        while (idxOfNodeToShiftUp > 1) {
            const idxOfParent = this.idxOfParent(idxOfNodeToShiftUp);

            if (this.heap[idxOfParent] >= this.heap[idxOfNodeToShiftUp]) {
                break;
            }

            this.swap(idxOfNodeToShiftUp, idxOfParent);
            // after swapping the node is at idxOfParent now.
            idxOfNodeToShiftUp = idxOfParent;
        }
    }

    idxOfParent(i) {
        return Math.floor(i / 2);
    }

    idxOfLeftChild(i) {
        return i * 2;
    }

    idxOfRightChild(i) {
        return i * 2 + 1;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }

        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );

        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }

}



var minStoneSum = function (piles, k) {
    let stoneHeap = new MaxHeap();
    piles.forEach(element => stoneHeap.insert(element));

    while (k > 0) {
        // extracts the largest pile, then re-inserts half, rounded up
        stoneHeap.insert(Math.ceil(stoneHeap.extract() / 2));
        k--;
    }

    return stoneHeap.count;
};



console.log(minStoneSum([4095, 8029, 4573, 8161, 8206, 8445, 5799, 7450, 7554], 10));