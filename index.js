
let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
    masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
    ntrandm: {name: 'Juliet', next: null}
  }

function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  return collection[node.next];
}

function nodeAt(index, linkedList, collection) {
  let head = collection[linkedList];
  let next_node = next(head, collection)
  if (index == 0) {
    return head;
  } else if (index == 1) {
    return next_node;
  } else {
    for (let i = 2; i <= index; i++) {
      next_node = next(next_node, collection);
    }
    return next_node;
  }
}

function addressAt(index, linkedList, collection) {
  let head = collection[linkedList];
  let next_address = head.next;
  if (index == 0) {
    return linkedList;
  } else if (index == 1) {
    return next_address;
  } else {
    for (let i = 2; i < index; i++) {
      next_address = collection.next_address.next;
    }
    return next_address;
  }
}

function indexAt(node, collection, linkedList) {
  let index = 0;
  let head = collection.linkedList;

  while (current_node.next != null)
}
