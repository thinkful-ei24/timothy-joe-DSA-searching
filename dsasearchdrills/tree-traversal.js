const BST = require('./bst');

function inOrderTraversal(node){
  if(!node) return;
  inOrderTraversal(node.left);
  console.log(`${node.key}: ${node.value}`);
  inOrderTraversal(node.right);
}

function preOrderTraversal(node){
  if(!node) return;

  console.log(`${node.key}: ${node.value}`);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

function postOrderTraversal(node){
  if(!node) return;

  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log(`${node.key}: ${node.value}`);
}

if(require.main === module){
  let input = '25 15 50 10 24 35 70 4 12 18 31 44 66 90 22';
  input = input.split(' ').map(num => parseInt(num, 10));

  bst = new BST();
  input.forEach(num => bst.put(num, num));

  console.log('\nIn order traversal:');
  inOrderTraversal(bst.root);

  console.log('\nPre order traversal:');
  preOrderTraversal(bst.root);

  console.log('\nPost order traversal:');
  postOrderTraversal(bst.root);
}