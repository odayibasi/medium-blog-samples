function isCyclic_SolveWithStore(head) {
  let itr = head;
  const store = new Set(); //Solving Store we need to store Nodes
  while (itr != null) {
    if (store.has(itr)) return true;
    store.add(itr);
    itr = itr.next;
  }
  return false;
}

function isCyclic_SolveWithExtraFlag(head) {
  let itr = head;
  while (itr != null) {
    if (itr.flag) return true;
    itr.flag = true;
    itr = itr.next;
  }
  return false;
}

function isCyclic_SolveWithFloydMethod(head) {
  let slowItr = head;
  let fastItr = head;
  while (slowItr && fastItr && fastItr.next) {
    slowItr = slowItr.next;
    fastItr = fastItr.next.next;
    if (slowItr === fastItr) return true;
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
console.log('LinkedList cyclic with store:' + isCyclic_SolveWithStore(head));
console.log('LinkedList cyclic with flag:' + isCyclic_SolveWithExtraFlag(head));
console.log(
  'LinkedList cyclic with fast itr:' + isCyclic_SolveWithFloydMethod(head)
);

head2 = createNode(6);
head2.next = createNode(3);
head2.next.next = createNode(2);
head2.next.next.next = createNode(1);
head2.next.next.next.next = head2.next;
console.log('LinkedList cyclic with store:' + isCyclic_SolveWithStore(head2));
console.log(
  'LinkedList cyclic with flag:' + isCyclic_SolveWithExtraFlag(head2)
);
console.log(
  'LinkedList cyclic with fast itr:' + isCyclic_SolveWithFloydMethod(head2)
);
