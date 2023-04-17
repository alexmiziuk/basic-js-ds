const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');



/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/






class BinarySearchTree {

	constructor() {
		this.rootNode = null;
		this.left = null;
		this.right = null;
	}



	// создание бинарного дерева



	root() {
		/* throw new NotImplementedError('Not implemented'); */
		// remove line with error and write your code here
		return this.rootNode;
	}




	add(data) {
		/* throw new NotImplementedError('Not implemented');  */
		// remove line with error and write your code here
		if (this.rootNode == null) {
			return this.rootNode = new Node(data);
		}

		/* if (this.rootNode === null) {
			this.rootNode.add(1);
			return this.rootNode;
		}
		 */

		// }


	}

	has(data) {
		/* throw new NotImplementedError('Not implemented'); */
		// remove line with error and write your code here
		this.rootNode = new Node(data);
		let currentNode = this.rootNode;
		while (currentNode) {
			if (data < currentNode.data) {
				currentNode = currentNode.left;
			} else if (data > currentNode.data) {
				currentNode = currentNode.right;
			} else {
				return true;
			}
		}

	}



	find(data) {
		/* throw new NotImplementedError('Not implemented'); */
		// remove line with error and write your code here
		this.rootNode = new Node(data);
		let currentNode = this.rootNode;
		while (currentNode) {
			if (data < currentNode.data) {
				currentNode = currentNode.left;
			} else if (data > currentNode.data) {
				currentNode = currentNode.right;
			} else {

				return currentNode;
			}
		}
	}

	remove(data) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here



	}

	min() {
		throw new NotImplementedError('Not implemented'); 
		// remove line with error and write your code here
		
	}

	max() {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}
}


module.exports = {
	BinarySearchTree
};