class Node {
    constructor(val){
        this.val =val;
        this.left = null;
        this.right= null;
    }
} 
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right =c;
b.left = d;
b.right = e;
c.right= f; 
    
   //depth first search
   

const depthFirstVal = (root) => {
   if (root===null) return [];
   
   const stack = [root];
   const result = [];
   
   while (stack.length > 0){
    let current =  stack.pop();
    
   result.push(current.val);
    
   if(current.right) stack.push(current.right);
   if(current.left)stack.push(current.left);
       
   }
   return result;
}

depthFirstVal(a);

 //Recursive method

const depthFirstRecur = (root) => {
    if(root === null) return [];

let leftVal = depthFirstRecur(root.left);
let rightVal = depthFirstRecur(root.right);

return [root.val,...leftVal,...rightVal]

}

console.log(depthFirstRecur(a))


//Breath First Search
//a,b,c,d,e,f 
//use queue

   //beeah first search
    
   const breathFirst = (root) => {
    if(root === null) return [];
    
    let queue = [root];    
    let values = [];
    while(queue.length>0) {
        let current = queue.shift();
        values.push(current.val)
    if(current.left)queue.push(current.left);
    if(current.right)queue.push(current.right);
    }
   return values     
    }


console.log(breathFirst(a));

// Tree includes Problem

    const  treeIncludes = (root,target ) => {
        if(root===null) return false
        let queue = [root];
        while (queue.length > 0 ) {
           let current = queue.shift();
            if(current.val === target) return true
           if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
        return false
    }
    
    console.log(treeIncludes(a,"e"))
    
//recursive method

const  treeInclude = (root,target ) => {
    if(root===null) return false;
    if(root.val===target) return true;
 return  treeIncludes(root.left, target) ||   treeIncludes(root.right, target) ;
}

console.log(treeInclude(a,"j"))


const five = new Node(5);
const eleven = new Node(11);
const three = new Node(3);
const four = new Node(4);
const two = new Node(2);
const one = new Node(1);

five.left = eleven;
five.right = three;
eleven.left = four;
eleven.right = two;
three.right = one;


const maxSum = (root) =>{

    if(root.val===null) return -Infinity
    if(root.left ===null&&root.right===null) return root.val;

   let maxSums= Math.max (maxSum(root.left),maxSum(root.right))
    return root.val+ maxSums;

}
     
console.log(maxSum(five))

//Count Good Nodes in Binary Tree

var goodNodes = function (root) {
    if (root === null) return 0;

    let count = 0;
    let stack = [[root, -Infinity]]

    while (stack.length > 0) {
        let [current, maxVal] = stack.pop();
        if (current.val >= maxVal) count++;
        maxVal = Math.max(maxVal, current.val)
        if (current.left) stack.push([current.left, maxVal]);
        if (current.right) stack.push([current.right, maxVal]);
    }
    return count
};

var longestZigZag = function(root) {
    let maxLen = 0;

function dfs(node, direction, len) {
    if (!node) return;
    maxLen = Math.max(maxLen, len);
    
    if (direction === 0) {
        dfs(node.left, 1, len + 1);
        dfs(node.right, 0, 1);
    } else {
        dfs(node.left, 1, 1);
        dfs(node.right, 0, len + 1);
    }
}

dfs(root, 0, 0);
dfs(root, 1, 0);

return maxLen;
};