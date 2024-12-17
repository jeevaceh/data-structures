class Node {
    constructor(key) {

        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function delNode(root, x) {

if (root === null) {
   return root; 
}

if (root.key > x) {
    root.left = delNode(root.left,x);
}

if(root.key < x) {
    root.right = delNode(root.right,x);
}

if(root.key ===x){
    if (root.left ===null) {
        return root.right
    }

    if (root.right === null) {
        return root.left;
    }

  let suc = getSuc(curr)

  root.key = suc.key;

  root.right = delNode(root.right,suc.key);
 
}



}


function getSuc(curr){
     curr = curr.right;
     while (curr !==NULL && curr.left !==null) {
       curr= curr.left
     }
     return curr;
}


let root = new Node(50);
root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 80);
root = insert(root, 65);
