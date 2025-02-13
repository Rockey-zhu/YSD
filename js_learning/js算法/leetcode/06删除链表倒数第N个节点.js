// 给定一个链表 1->2->3->4->5   和 n = 2
// 删除第二个节点后  变为 1->2->3->5
// 快慢指针

function removeNthFromEnd(head,n){
    let dummy = new ListNode();
    dummy.next = head;
    let n1 = dummy;
    let n2 = dummy;
    
    // n2快指针提前身为 n
    for(let i = 0;i <= n;i++){
        n2 = n2.next;
    }

    while(n2 !== null){
        n1 = n1.next;
        n2 = n2.next;
    }

    n1.next = n1.next.next;
    return dummy.next;
} 