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
    insert(val,position){
        let node = new node(val);
        let current = this.head;
        let previous;
        let index = 0;
        if(position===0){
            node.next=current;
            this.head=node;
        }else{
            while(index++<position){
                previous=current;
                current=current.next;
            }
            previous.next=node;
            node.next=current;
        }
        this.length++;
        return true;
    }

    
}