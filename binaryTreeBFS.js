class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function rightSideView(root) {
  if (!root) return [];
  let result = [];
  const queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let index = 0; index < levelSize; index++) {
      let node = queue.shift();

      if ((index === levelSize - 1)) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}


var maxLevelSum = function(root) {

    if(!root) return 0;

    let queue =[root];
    let presum = 0;
    let result = [];

    while(queue.length > 0 ) {

        let levelSize = queue.length;

    for (let index = 0; index <levelSize; index++) {
       
        let node = queue.shift();
        presum+=node.val;
        if ((index === levelSize - 1)) {
            result.push(presum);
          }

          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right); 
        
    }
    presum = 0;
    }
    return result.indexOf(Math.max(...result))+1;
    
};




const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

console.log(rightSideView(root)); // Output: [1, 3, 4]

console.log(maxLevelSum(root)); 
