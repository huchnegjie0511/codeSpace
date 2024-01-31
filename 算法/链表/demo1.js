class node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class linkList{
    constructor(){
        this.head=null;
        this.length = 0;
    }
    append(val){
        let node = new node(val);
        let current;
        if(this.head===null){
            this.head=node;
        }else{
            current=this.head;
            while(current.next){
                current=current.next
            }
        }
        
    }
    
}