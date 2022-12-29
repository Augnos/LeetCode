// You are given n​​​​​​ tasks labeled from 0 to n - 1 represented by a 2D integer array tasks, where tasks[i] = [enqueueTimei, processingTimei] means that the i​​​​​​th​​​​ task will be available to process at enqueueTimei and will take processingTimei to finish processing.

// You have a single-threaded CPU that can process at most one task at a time and will act in the following way:

// If the CPU is idle and there are no available tasks to process, the CPU remains idle.
// If the CPU is idle and there are available tasks, the CPU will choose the one with the shortest processing time. If multiple tasks have the same shortest processing time, it will choose the task with the smallest index.
// Once a task is started, the CPU will process the entire task without stopping.
// The CPU can finish a task then start a new one instantly.
// Return the order in which the CPU will process the tasks.

import {MinPriorityQueue} from 'datastructures-js'

// class MinHeap {
//     constructor() {
//         this.heap = [null];
//     }

//     extract() {
//         // returns null if heap empty
//         if (this.heap.length == 1) return null;
//         // pops and returns top if only value in heap
//         if (this.heap.length == 2) return this.heap.pop();

//         let minValue = this.heap[1];    // saves first node to return later
//         this.heap[1] = this.heap.pop(); // moves last node to top of heap

//         // declaring variables to shift top node to correct spot
//         // iterable
//         let i = 1;
//         // variables to make logic a lot easier to read.
//         let parentVal = this.heap[i];
//         let leftVal = this.heap[this.idxOfLeftChild(i)];
//         let rightVal = this.heap[this.idxOfRightChild(i)];

//         // while both children are not undefined
//         while (leftVal && rightVal) {

//             // if parent PT is greater than either child PT
//             if (parentVal[2] > Math.min(leftVal[2], rightVal[2])) {
//                 // swaps parent with the lesser of either child, then iterates
//                 if (leftVal[2] < rightVal[2]) {
//                     this.swap(i, this.idxOfLeftChild(i));
//                     i = this.idxOfLeftChild(i);
//                 } else if (leftVal[2] > rightVal[2]) {
//                     this.swap(i, this.idxOfRightChild(i));
//                     i = this.idxOfRightChild(i);
//                 } else if (leftVal[0] < rightVal[0]) {
//                     this.swap(i, this.idxOfLeftChild(i));
//                     i = this.idxOfLeftChild(i);
//                 } else if (leftVal[0] > rightVal[0]) {
//                     this.swap(i, this.idxOfRightChild(i));
//                     i = this.idxOfRightChild(i);
//                 }
//             }

//             // if parent PT is less than both children, return the saved node
//             else if (parentVal[2] < leftVal[2] && parentVal[2] < rightVal[2]) {
//                 return minValue;
//             }

//             // if children PT are both equal to parent
//             else if (leftVal[2] == rightVal[2]) {
//                 // swap if left has the smallest index
//                 if (leftVal[0] < parentVal[0] && leftVal[0] < rightVal[0]) {
//                     this.swap(i, this.idxOfLeftChild(i));
//                     i = this.idxOfLeftChild(i);
//                 }
//                 // swap if right has the smallest index 
//                 else if (rightVal[0] < parentVal[0] && rightVal[0] < leftVal[0]) {
//                     this.swap(i, this.idxOfRightChild(i));
//                     i = this.idxOfRightChild(i);
//                 }
//                 // return if parent has smallest index
//                 else return minValue;
//             }

//             // if only left PT matches parent PT
//             else if (parentVal[2] == leftVal[2]) {
//                 // swap if index is smaller, else return
//                 if (leftVal[0] < parentVal[0]) {
//                     this.swap(i, this.idxOfLeftChild(i));
//                     i = this.idxOfLeftChild(i);
//                 } else return minValue;
//             }

//             // if only right PT matches parent PT
//             else if (parentVal[2] == rightVal[2]) {
//                 // swap if index is smaller, else return
//                 if (rightVal[0] < parentVal[0]) {
//                     this.swap(i, this.idxOfLeftChild(i));
//                     i = this.idxOfLeftChild(i);
//                 } else return minValue;
//             }

//             // updates variables with new iterable
//             parentVal = this.heap[i];
//             leftVal = this.heap[this.idxOfLeftChild(i)];
//             rightVal = this.heap[this.idxOfRightChild(i)];
//         }

//         // edge case where only one child is defined
//         // if statement checks if tree large enough for children to exist
//         if (i < Math.ceil(this.heap.length / 2)) {
//             // if parent PT is greater than child PT, or if PT is equal and parent index is greater, swap.
//             if (parentVal[2] > leftVal[2] || (parentVal[2] == leftVal[2] && parentVal[0] > leftVal[0])) {
//                 this.swap(i, this.idxOfLeftChild(i));
//             }
//         }

//         // returns saved node after heap is ordered
//         return minValue;
//     }


//     top() {
//         return this.heap.length > 1 ? this.heap[1] : null;
//     }

//     insert(arr) {
//         this.heap.push(arr);
//         this.shiftUp();
//         // .push on array returns the new length
//         return this.heap.length - 1;
//     }

//     // AKA: siftUp, heapifyUp, bubbleUp to restore order after insert
//     shiftUp() {
//         let idxOfNodeToShiftUp = this.heap.length - 1;

//         while (idxOfNodeToShiftUp > 1) {
//             const idxOfParent = this.idxOfParent(idxOfNodeToShiftUp);

//             // compares parent's processingTime to child
//             const isProcessingSmaller =
//                 this.heap[idxOfParent][2] < this.heap[idxOfNodeToShiftUp][2];

//             // compares index when processingTime is the same
//             const isIndexSmaller =
//                 this.heap[idxOfParent][2] == this.heap[idxOfNodeToShiftUp][2] &&
//                 this.heap[idxOfParent][0] < this.heap[idxOfNodeToShiftUp][0];

//             // Parent is supposed to be smaller so ordering is complete.
//             if (isProcessingSmaller || isIndexSmaller) {
//                 break;
//             }

//             this.swap(idxOfNodeToShiftUp, idxOfParent);
//             // after swapping the node is at idxOfParent now.
//             idxOfNodeToShiftUp = idxOfParent;
//         }
//     }

//     idxOfParent(i) {
//         return Math.floor(i / 2);
//     }

//     idxOfLeftChild(i) {
//         return i * 2;
//     }

//     idxOfRightChild(i) {
//         return i * 2 + 1;
//     }

//     swap(i, j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }

//     printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
//         if (parentIdx > this.heap.length - 1) {
//             return;
//         }

//         spaceCnt += spaceIncr;
//         this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

//         console.log(
//             " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
//             `${this.heap[parentIdx]} (${parentIdx})`
//         );

//         this.printHorizontalTree(parentIdx * 2, spaceCnt);
//     }
// }


var getOrder = function (tasks) {

    // declare the current time, and set to 0
    let currentTime = 0;

    // declare queue as a new MinHeap
    // let queue = new MinHeap();
    let mpq = MinPriorityQueue();

    // declare output array of processes by index
    let output = [];

    // an array from tasks, sorted by enqueueTime
    let sortedTasks = [];
    for (let i = 0; i < tasks.length; i++) {
        // pushing [index, enqueueTime, processingTime]
        sortedTasks.push([i, tasks[i][0], tasks[i][1]])
        // console.log(sortedTasks);
    }
    // tasks are all sorted by enqueueTime, with smallest value at end of array
    sortedTasks.sort((a, b) => (b[1] - a[1]))

    // while tasks are in the queue or sortedTask array...
    while (sortedTasks.length > 0 || mpq.front()) {

        // If queue is empty, and next task's enqueueTime is greater than currentTime,
        // update currentTime to be next task's enqueueTime
        if (!mpq.front() && sortedTasks[sortedTasks.length - 1][1] > currentTime) {
            currentTime = sortedTasks[sortedTasks.length - 1][1]
            // console.log("updating currentTime: " + currentTime)
        }
        // if (!queue.top() && sortedTasks[sortedTasks.length - 1][1] > currentTime) {
        //     currentTime = sortedTasks[sortedTasks.length - 1][1]
        //     // console.log("updating currentTime: " + currentTime)
        // }

        // insert all tasks to queue, where enqueueTime <= currentTime,
        while (sortedTasks[0] && sortedTasks[sortedTasks.length - 1][1] <= currentTime) {
            // console.log("adding task to queue: " + sortedTasks[sortedTasks.length - 1])
            let popped = sortedTasks.pop()
            mpq.enqueue([popped[2], popped[0]]);
            // queue.printHorizontalTree();
        }

        // process next task in queue
        // console.log("Processing task")
        let processed = queue.extract();    // removes next task in queue
        // queue.printHorizontalTree();
        currentTime += processed[2];        // adds processingTime to currrentTime
        // console.log("current time: " + currentTime)
        output.push(processed[0])          // adds task index to output
    }

    // return output when finished
    return output;
};

// console.log(getOrder([[1, 2], [2, 4], [3, 2], [4, 1]]))
// console.log(getOrder([[7, 10], [7, 12], [7, 5], [7, 4], [7, 2]]))
// console.log(getOrder([[46, 9], [46, 42], [30, 46], [30, 13], [30, 24], [30, 5], [30, 21], [29, 46], [29, 41], [29, 18], [29, 16], [29, 17], [29, 5], [22, 15], [22, 13], [22, 25], [22, 49], [22, 44]]))
console.log(getOrder([[35,36],[11,7],[15,47],[34,2],[47,19],[16,14],[19,8],[7,34],[38,15],[16,18],[27,22],[7,15],[43,2],[10,5],[5,4],[3,11]]))
