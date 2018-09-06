class mainStack{

    constructor(){
        this.item=[]
    }
    isEmpty(){
        return  !Boolean(this.item.length);
    }
    push(item){
         this.item[this.item.length]=item;
    }
    pop(){
        return this.item.pop();
    }
    peek(){
        return this.item[0];
    }
    size(){
        return this.item.length;
    }

}

// export default mainStack;