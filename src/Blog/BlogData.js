const shortid = require('shortid');

const data = [
    {
        blogId: shortid.generate(),
        blogTitle: 'A caveat while implementing routing in Github pages',
        blogDesc: `
        <article>While using github pages for hosting your application, in case you need to route, you might run into a problem of routes working in local but not when hosted in gh pages.<br><br>I am using <strong>reach-router</strong> in my project. Through research, I found out that this is because path = '/' would resolve differently in development environment and deployed environment.
        In case if we use CRA (Create React App) for building our projects, we have process.env.PUBLIC_URL exposed to us which is undefined in development environment and equals to <i>homepage</i> property in package.json file.
        But if not CRA, then a hack is required to figure out whether you are in dev/prod mode.
        </article>
        `,
        code:`
        let url = process.env.PUBLIC_URL || '';

        // No need for this below if condition in CRA app
        if (window.location.pathname.includes('profile')) {
            url = '/profile'
        }

        return (
            <div className="headerContainer">
                <Link to={url + '/'} className="aboutLink">
                    <div>About Me</div>
                </Link>
                <Link to={url + '/blogs'} className="blogsLink">
                    <div>My Blogs</div>
                </Link>
            </div>
            )

        //package.json - homepage attribute exposed in CRA app
        {
            "name": "profile",
            "homepage": "https://karthikah.github.io/profile/",
            ...
        }
        `,
        date: '2019-10-19'
    },
    {
        blogId: shortid.generate(),
        blogTitle: 'Reduce method under the hood!',
        blogDesc: `
        <article> Code to showcase how Reduce would work under the hood:
        </article>
        `,
        code:`
        reduce = (arr, cb, initVal) => {
            var acc;
            if(Array.isArray(arr)){
              acc = initVal || 0;
              for(let i=0; i<arr.length; i++){
                 acc = cb(acc, arr[i], i);
               }
            } else {
              acc = initVal || {};
              const keys = Object.keys(arr);
              keys.forEach((key) => {
                acc = cb(acc, arr[key], key);
              })
            }
            return acc;
          }
          
          var reducedVal = reduce([1,2,3], (acc, currVal, index) => {
            return acc + currVal;
          }, 2);
          
          
          var reducedObj = reduce({"Gary": "Minessota", "Marc": "Minessota", "Ann": "LA"} , (acc, currVal, key) => {
            (acc[currVal] || (acc[currVal] = [])).push(key);
            return acc;
          }, {});
          
          console.log(reducedVal); // 8
          console.log(reducedObj); // {"Minessota":["Gary","Marc"],"LA":["Ann"]} 
        `,
        date: '2019-10-20'
    },
    {
        blogId: shortid.generate(),
        blogTitle: 'How Stack works!',
        blogDesc: `
        <article> In javascript, we hear the word Call Stack all the time. So what is a stack?
        <p>STACK is a data structure that helps you to store data like a 'stack of plates'. 
        It follows Last-in-First-out(LIFO) ordering. Hence, the last added Item will be removed first.</p>
        <p>Below is a simple class implementation of stack with pop(), push(), peek() & getLength() methods. 
        These methods have Time Complexity as O(1).
        </p>
        </article>
        `,
        code:`
        /** Class representing a Stack. */
            class Stack {

                constructor() {
                    this._dataStorage = {};
                    this._length = 0;
                }
                
                /*
                * Returns the length of the stack
                */
                getLength() {
                return this._length;
                }

                /*
                * Adds a new value at the end of the stack
                * @param {*} value the value to push
                */
                push(value) {
                    try{
                    if (!value) {
                        throw "Parameter is not defined";
                    }
                    this._dataStorage[this._length] = value;
                    this._length++;
                    }
                    catch(err){
                    console.err(err);
                    }
                }

                /*
                * Removes the value at the end of the stack and returns it
                * @return {*} the last and newest value in the stack
                */
                pop() {
                    try{
                    if (!this._length) {
                        throw "The Stack is empty";
                    }
                    var lastVal = this._dataStorage[this._length - 1];
                    this._dataStorage[this._length - 1] = undefined; // can use delete keyword
                    this._length--;
                    return lastVal;
                    }
                    catch(err){
                    console.log(err);
                    }
                }
                /*
                * Returns the value at the end of the stack without removing it
                * @return {*} the last and newest value in the stack
                */
                peek() {
                    try{
                    if (!this._length) {
                        throw "The Stack is empty";
                    }
                    return this._dataStorage[this._length - 1];
                    }
                    catch(err){
                    console.log(err);
                    }
                }
            }

            const myStack = new Stack();


            // using stack
            myStack.push(() => {
            return 'I am a function written by karthi';
            });
            myStack.push('hi');
            myStack.push('I am karthi');

            console.log(myStack.getLength());

            console.log(myStack)
        `,
        date: '2019-10-26'
    },
    {
        blogId: shortid.generate(),
        blogTitle: 'How Queue works!',
        blogDesc: `
        <article> In javascript, we hear the word Message Queue all the time. So what is a queue?
        <p>Queue is a data structure that helps you to store data like a 'line or a queue at a ticket stand'. 
        It follows First-in-First-out(FIFO) ordering. Hence, the first added Items will be removed first.</p>
        <p>Below is a simple class implementation of Queue with enqueue(), dequeue(), peek() methods.
        These methods have Time Complexity as O(1).
        </p>
        </article>
        `,
        code:`
        /** Class representing a Queue. 
         * @constructor
        */
        
        class Queue {
        
          constructor() {
            this._dataStorage = {};
            this._length = 0;
            this._headIndex = 0;
          }
          /*
          * Enqueues a new value at the end of the queue
          * @param {*} value the value to enqueue
          */
          enqueue(value) {
            try{
             if(!value){
               throw 'Parameter is not defined'
             }
             this._dataStorage[this._headIndex + this._length] = value;
             this._length++;
            }
            catch(err) {
              console.log(err);
            }
          }
        
          /*
          * Dequeues the value from the beginning of the queue and returns it
          * @return {*} the first and oldest value in the queue
          */
          dequeue() {
            try{
              if (!this._length) {
                throw "The Queue is empty";
              }
              var firstVal = this._dataStorage[this._headIndex];
              this._dataStorage[this._headIndex] = undefined; // can use delete keyword
              this._length--;
              this._headIndex++;
              return firstVal;
            }
            catch(err){
              console.log(err);
            }
          }
          /*
          * Returns the value at the beginning of the queue without removing it from the queue
          * @return {*} the first and oldest value in the queue
          */
          peek() {
            try{
              if (!this._length) {
                throw "The Queue is empty";
              }
              return this._dataStorage[this._headIndex];
            }
            catch(err){
              console.log(err);
            }
          }
        }
        
        var myQueue = new Queue();
        myQueue.dequeue();
        myQueue.enqueue('hi');
        myQueue.enqueue('bye');
        myQueue.enqueue('I am back');
        myQueue.enqueue('I am back2');
        myQueue.enqueue('I am back3');
        myQueue.enqueue('bye');
        myQueue.dequeue();
        myQueue.dequeue();
        myQueue.dequeue();
        
        
        console.log(myQueue.peek());
        `,
        date: '2019-10-26'
    },
    {
      blogId: shortid.generate(),
      blogTitle: 'How Linked List works!',
      blogDesc: `
      <article>
      <p>LINKED LIST is a data structure that store data in a sequence. Each value is a node that points to the next value in the
      linked list. 
      Eg: <pre>{"value":3,"next":null}</pre>
      </p>
      <p>Linked List does NOT have O(1) time complexity for access to perticular node. But it has O(1) time complexity for adding
      or removing elements from beginning.
      </p>
      </article>
      `,
      code:`
      /** Class representing a Linked List */


      class Node {
        constructor(value) {
          this.value = value;
          this.next = null;
        }
      }
      
      class LinkedList {
      
        constructor(value) {
          this.head = new Node(value);
          this.tail = this.head; //pass by reference
        }

        /*
        * Inserts a new value to the end of the linked list
        * @param {*} value - the value to insert
        */
        insert(value) {
          const next = new Node(value);
          this.tail.next = next; // here by reference plays a key role
          this.tail = next;
        }

        /*
        * Deletes a node
        * @param {*} node - the node to remove
        * @return {*} value - the deleted node's value
        */
        remove(node) {
          try{
            if(this.head){
              let currentNode = this.head;
              if(currentNode !== node) { // when node is not head
                while(JSON.stringify(currentNode.next) !== JSON.stringify(node)){
                  currentNode = currentNode.next;
                }
                currentNode.next = node.next;
                if(JSON.stringify(this.tail) === JSON.stringify(node)){
                  this.tail = currentNode;
                }
              } else {
                this.head = this.tail = undefined;
              }
            } else {
              throw "LinkedList is empty. Can't remove any item"
            }
          } 
          catch(err){
            console.log(err);
          }
        }

        /*
        * Removes the value at the end of the linked list
        * @return {*} - the removed value
        */
        removeTail() {
          try{
            if(this.head){
              let currentNode = this.head;
              if(currentNode !== this.tail){
                while(currentNode.next !== this.tail){
                  currentNode = currentNode.next;
                }
                currentNode.next = null;
                this.tail = currentNode;
              } else {
                this.head = this.tail = undefined;
              }
            } else {
              throw "LinkedList is empty. Can't remove any item"
            }
          } 
          catch(err){
            console.log(err);
          }
        }
      
        /*
        * Searches the linked list and returns true if it contains the value passed
        * @param {*} value - the value to search for
        * @return {boolean} - true if value is found, otherwise false
        */
        contains(value) {
          try{
            if(this.head){
              let currentNode = this.head;
              while(currentNode.value !== value){
                currentNode = currentNode.next;
              }
              return currentNode.value !== value
            } else {
              throw "LinkedList is empty. Can't remove any item"
            }
          } 
          catch(err){
            console.log(err);
          }
        }  
        /*
        * Checks if a node is the head of the linked list 
        * @param {{prev:Object|null, next:Object|null}} node - the node to check
        * @return {boolean} - true if node is the head, otherwise false
        */
        isHead(node) {
          return node === this.head;
        }
        /*
        * Checks if a node is the tail of the linked list 
        * @param {{prev:Object|null, next:Object|null}} node - the node to check
        * @return {boolean} - true if node is the tail, otherwise false
        */
        isTail(node) {
          return node === this.tail;
        }
      
        addAtTheBeginning(value) {
          const newList = new Node(value);
          newList.next = this.head;
          this.head = newList;
        }
      
        removeAtTheBeginning(value) {
          const newList = new Node(value);
          newList.next = this.head;
          this.head = newList;
        }
      }
      
      const myList = new LinkedList(1);
      
      myList.insert(2);
      myList.insert(3);
      myList.insert(4);
      myList.removeTail(); 
      const removedOne = new Node(2);
      removedOne.next = new Node(3);
      myList.remove(removedOne);
      console.log(JSON.stringify(myList));
      `,
      date: '2019-11-01'
  },
  {
    blogId: shortid.generate(),
    blogTitle: 'How Hash Table works!',
    blogDesc: `
    <article>
    <p>Hash Table is a data structure that can map keys to values. The hash function used is a pure function that always
    gives the same output for same input. On passing key to hasn function, an index will be outputted.
    The key & the value will be stored at that index. 
    </p>
    <p>Different keys can result in same index based on the size of the hash table. This is known 
    as collision. Whenever the storage size becomes more than 50% of the hash table size, we can double the storage
    size to minimize the collision
    </p>
    <p>Insert(), Retrive() & Remove() - all three gets executed in constant time complexity O(1) for hash table.</p>
    </article>
    `,
    code:`
    /** Class representing a Hash Table */

    // whenever the size of the storage become more than 50% of
    // the table size, double the table size
    // and run the hash function on each input
    // This is called resizing and its done once in a while
    // Hence it averages out the complexity

    class HashTable {
      constructor(n) {
        this._storage = [];
        this._size = n;
      }
      /*
      * Inserts a new key-value pair
      * @param {string} key - the key associated with the value
      * @param {*} value - the value to insert
      */
      insert(key, value) {  // constant time O(1)
      // key should be unique to make this work
      const index = this._myhash(key, this._size);
      if(!this._storage[index]){
        this._storage[index] = [];
      }
      this._storage[index].push([key, value]);
      }
      /*
      * Deletes a key-value pair
      * @param {string} key - the key associated with the value
      * @return {*} value - the deleted value
      */
      remove(key) {  // constant time O(1)
      const index = this._myhash(key, this._size);
      try{
      if(!this._storage[index]){
        throw "Some problem";
      }
      // since all the hash functions normally created would be 
      // so effective in reducing the collisions
      // this for loop cost can be amortized 
      // [here worst case is so rare]ß
      for(let i = 0; i < this._storage[index].length; i++){
          if(this._storage[index][i][0] === key){
            const deletedValue = this._storage[index][i][1];
            this._storage[index][i] = undefined;
            return deletedValue;
          }
      }
      }
      catch(err){
        console.log(err);
      }
      }
      /*
      * Returns the value associated with a key
      * @param {string} key - the key to search for
      * @return {*} - the value associated with the key
      */
      retrieve(key) {  // constant time O(1)
      const index = this._myhash(key, this._size);
      try{
        if(!this._storage[index]){
          throw "Some problem";
        }
        // since all the hash functions normally created would be 
        // so effective in reducing the collisions
        // this for loop cost can be amortized 
        // [here worst case is so rare]
        for(let i = 0; i < this._storage[index].length; i++){
            if(this._storage[index][i][0] === key){
              return this._storage[index][i][1];
            }
        }
      }
      catch(err){
        console.log(err);
      }
      }  
      /*
      * Hashes string value into an integer that can be mapped to an array index
      * @param {string} str - the string to be hashed
      * @param {number} n - the size of the storage array
      * @return {number} - an integer between 0 and n
      */
      _myhash(str, n) {
        let encodeString = "abcdefghijklmnopqrstuvwxyz";
        let sum = 0;
        let index = 0;
        for (let i = 0; i < str.length; i++){
            index = encodeString.indexOf(str.charAt(i));
            sum += str.charCodeAt(i) * index;

        }
        return sum % n;
      }
    }

    myHashTable = new HashTable(5);
    myHashTable.insert("a", 78);
    myHashTable.insert("b", 48);
    myHashTable.insert("x", 65);
    myHashTable.remove("x");
    console.log(JSON.stringify(myHashTable));
    `,
    date: '2019-11-02'
},
{
  blogId: shortid.generate(),
  blogTitle: 'Lets talk about Big O & Recursion',
  blogDesc: `
  <article>
  <h4>Big O</h4>
  <p>These are two things we consider or worry about while writing code -  Time & Space.
  Time complexity & space complexity of a code can be denoted using this Big O. 
  Big O usually considers the largest factor that affects the complexity of the code.</p>
  
  <p>Say n is the size of an array & and some manipulation is taking place on that array. 
  Total there are three for loops - One for loop within another for loop and a separate for loop.</p>
  
  <p>Time complexity  - O(n<sup>2</sup> + n) where  n<sup>2</sup> + n can be ~ n<sup>2</sup>. n can be neglected as we are more concerned about 
  20s & 2s time difference compared to 20s & 200s time difference.</p>
  </article>

  <h4>Recursion</h4>
  <p>A recursive function is a function that calls itself. Sometimes it can improve readability of code to a great extend, 
  but we need to keep track of how many concurrent calls will be made as 
  it can lead to call stack overflow.</p>
  </article>
  `,
  code:`
    /** Big O example **/

    e.g. for (let i = 0; i < n ; i++){
      for (let j= 0; j < n ; j++){
          // manipulation
       }
    }
    for (let k = 0; k < n ; k++){
     }

     // time complexity O(n)

    /** Recursion example **/

    function factorial(n) {
      if(n > 1){
      return n*factorial(n-1);
      }
      else {
      return 1;
      }
    }
    
    const res = factorial(5);
    console.log(res); //120

  `,
  date: '2019-11-02'
},
]

export default data;