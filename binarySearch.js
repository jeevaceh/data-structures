class Node {
    constructor(key) {

        this.key = key;
        this.left = null;
        this.right = null;
    }
}
//insert a key in binary key 

function insert(root, key) {
if(!root) return new Node(key); //


if(root.key > key) root.left = insert(root.left,key);
if(root.key < key ) root.right = insert(root.right,key);

return root;
}


function insert1(root,x) {
    const node = new Node(x)

    if(!root) return node;

    let current= root;
    let parrent = null;

    while (current!== null) {
        parrent = current;

        if(current.key < x)  curremt = current.right;
        else if (current.key > x) current = current.left;
        else return root;
    }

    if(parent.key > x ) {
       parrent.left = node;
    }else {
        parrent.right = node;
    }
    
    return root;
}


function printTree(node, prefix = '', isLeft = true) {
    if (node != null) {
        console.log(prefix + (isLeft ? '├── ' : '└── ') + node.key);
        printTree(node.left, prefix + (isLeft ? '│   ' : '    '), true);
        printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false);
    }
}



// Creating the following BST
//      50
//     /  \
//    30   70
//   / \   / \
//  20 40 60 80

 
// Print the root node
console.log("Root Node:", root.key);

// Visualize the tree structure
console.log("\nTree Structure:");
printTree(root);
