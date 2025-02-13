//  输入 1 -> 2 -> 4 , 1 -> 3 -> 4;
//  输出 1->1->2->3->4->4
 
 function mergeTwoList(l1,l2){
    let curr = new ListNode();
    let dummy = curr;
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next;
        }else{
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next
    }

    if(l1 !== null){
        curr.next = l1;
    }
    if(l2 !== null){
        curr.next = l2;
    }

    return dummy.next
 }






// 状态值记录


// 如果 管理员启用 MFA EnableMfa=1 MfaSecret="" 跳转到MFANoBind

// EnableMfa=1 MfaSecret="有值" 跳转到MFAReadyBind


//写个 action

// 第一个页面   portal密码
// 第二个  下个谷歌认证
// 第三页  先调用接口获取Secret， 通过返回的url生成二维码


// MFAReadyBind 也需要认证的action




