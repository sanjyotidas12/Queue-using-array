// QUEUE USING ARRAY 

// Maximum capacity of the queue
const MAX_SIZE = 5;

// Create an array of fixed size
let queue = new Array(MAX_SIZE);

// Queue pointers
let front = -1;
let rear = -1;



// DOM ELEMENTS


const valueInput = document.getElementById("valueInput");

const insertBtn = document.getElementById("insertBtn");
const deleteBtn = document.getElementById("deleteBtn");
const searchBtn = document.getElementById("searchBtn");
const displayBtn = document.getElementById("displayBtn");

const queueContainer = document.getElementById("queueContainer");

const message = document.getElementById("message");

const frontValue = document.getElementById("frontValue");
const rearValue = document.getElementById("rearValue");

const sizeValue = document.getElementById("sizeValue");
const statusValue = document.getElementById("statusValue");


// INSERT OPERATION

function insert(value) {

    // Check whether the queue is full
    if (rear === MAX_SIZE - 1) {

        showMessage("Queue Overflow! Queue is full.");

        return;
    }

