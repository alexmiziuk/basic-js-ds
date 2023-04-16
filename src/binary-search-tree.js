const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');



/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/






class BinarySearchTree {

	constructor() {
		this.rootNode = null;
		/* this.left = null;
		this.right = null; */
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


	}

	has(data) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		
}

	find(/* data */) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	remove(/* data */) {
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