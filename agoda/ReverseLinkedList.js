{/* <script> */}

// JavaScript program for reversing the linked list  time compl O(N), space O(1)

var head;

	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

	/* Function to reverse the linked list */
	function reverse(node) {   //85,15,4,20
	var prev = null;
	var current = node;        //C - 85,15,4,20
	var next = null;
		while (current != null) { 
			next = current.next;     //next = 15  // 4
			current.next = prev;     // c- null   // 85
			prev = current;          // p =85     // 4
			current = next;         // c = 15     //20
		}
		node = prev;
		return node;
	}

	// prints content of double linked list
	function printList(node) {
		while (node != null) {
			document.write(node.data + " ");
			node = node.next;
		}
	}

	// Driver Code
	
		head = new Node(85);
		head.next = new Node(15);
		head.next.next = new Node(4);
		head.next.next.next = new Node(20);

		document.write("Given linked list<br/>");
		printList(head);
		head = reverse(head);
		document.write("<br/>");
		document.write("Reversed linked list<br/> ");
		printList(head);

// This code is contributed by todaysgaurav

// </script>
