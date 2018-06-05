var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const newNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = newNode;
  }
  return prev;
};
