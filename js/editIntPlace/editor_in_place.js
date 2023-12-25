/**
 * @func 就地编辑
 * @params {id:string,parent:string,defaultVal:string}
 */
function EditInPlace(id,parent,value){
    this.id=id;
    this.parent=parent;
    this.value=value||"这个家伙很懒，什么都没有留下";
    this.createElements();//动态装载html节点
    this.attatchEvents();
    //createElement在挂载的实例变量上声明
}
EditInPlace.prototype ={
    createElements:function(){
        //创建标签
        this.containerElement=document.createElement('div');
        //加入组件进行挂载
        this.containerElement.id=this.id;
        //签名文字部分
        this.staticElement = document.createElement('span');
        this.staticElement.innerText=this.value
        this.containerElement.appendChild(this.staticElement);
        //输入框
        this.filedElement =document.createElement('input');
        this.filedElement.type ='text';
        this.filedElement.value=this.value;
        this.containerElement.appendChild(this.filedElement);

        //save 确认
        this.saveButton = document.createElement('button');
        this.saveButton.type='button';
        this.saveButton.value='保存';
        this.containerElement.appendChild(this.saveButton);

        //取消按钮
        this.cancelButton = document.createElement('button');
        this.cancelButton.type='button';
        this.cancelButton.value='取消';
        this.containerElement.appendChild(this.cancelButton);

        this.parent.appendChild(this.containerElement);
        this.convertToText()
    },
    convertToText:function(){
        this.staticElement.style.display='inline';
        this.fieldElement.style.display='none';
        this.saveButton.style.display='none';
        this.cancelButton.style.display='none';
    },
    convertToEdit:function(){
        this.staticElement.style.display='none';
        this.fieldElement.style.display='inline';
        this.saveButton.style.display='inline';
        this.cancelButton.style.display='inline';
    },
    attatchEvents:function(){
        this.staticElement.addEventListener('click',function(){
            //什么问题 this 丢失
        })
    }
}