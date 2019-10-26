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
        <p>Below is a simple class implementation of stack with method pop(), push(), peek() & getLength() methods.
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
]

export default data;