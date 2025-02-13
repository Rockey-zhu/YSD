// 非空链表 逆序存储 每个节点存储一位


function addTwoNum(l1,l2){
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;//进位

    while(l1 !== null || l2 !== null){
        let sum = 0;
        if(l1 != null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 != null){
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        curr.next = new ListNode(sum % 10 )
        carry = Math.floor(sum/10);
        curr = curr.next;
    }
    if(curry > 0){//如果最后进位还有值（有值情况理论值为1 ）,需要将curr链表下一位指向curry
        curr.next = new ListNode(curry)
    }
    return dummy.next;
}
