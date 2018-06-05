var hasCycle = function(head) {
  let slow = head && head.next;
  let fast = head && head.next && head.next.next;
  while (slow && fast) {
    if (slow.val === fast.val) return true;
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }
  if (!fast) return false;
};
