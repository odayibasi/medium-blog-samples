function isCircular(head) {
  if (head == null) return false;
  let tempNode = head.next;
  while (tempNode != null) {
    if (tempNode === head) return true;
    else tempNode = tempNode.next;
  }
  return false;
}

function createNode(val) {
  return { val: val, next: null };
}

head = createNode(6);
head.next = createNode(3);
head.next.next = createNode(2);
head.next.next.next = createNode(1);
head.next.next.next.next = createNode(4);
console.log('LinkedList circular:' + isCircular(head));
//console.log(head);

head1 = createNode(6);
head1.next = createNode(3);
head1.next.next = createNode(2);
head1.next.next.next = createNode(1);
head1.next.next.next.next = head1;
console.log('LinkedList circular:' + isCircular(head1));
//console.log(head1);
