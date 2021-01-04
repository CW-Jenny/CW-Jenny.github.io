function insRow(){
    var a=document.getElementById('myTable').insertRow(-1)
    var b=a.insertCell(0)
    var c=a.insertCell(1)
    var d=a.insertCell(2)
    var e=a.insertCell(3)
    b.innerHTML="栏目一数据1"
    c.innerHTML="栏目二数据2"
    d.innerHTML="栏目三数据3"
    e.innerHTML='<a href="#" class="remove" onclick="deleteTr(this)">删除</a>'
}

function deleteTr(obj) {
    //通过this找到父级元素节点
    var tr = obj.parentNode.parentNode;
    //找到表格
    var tbody = tr.parentNode;
    //删除行
    tbody.removeChild(tr);
}

function validateForm(){
    var x=document.forms["myForm"]["email"].value;
    if (x==null || x==""){
          alert("邮箱名称不得为空");
          document.forms["myForm"]["email"].value="";
      }
    else if(x.length<6 || x.length>16){
        alert('邮箱名称长度必须在6-16位之间');
        document.forms["myForm"]["email"].value="";
    }
}


function check(){
    with(document.all){
    if(input1.value!=input2.value || (input1.value=="" && input2.value=="")){
        alert("两个密码必须相同且不能为空")
        input1.value = "";
        input2.value = "";
    }
    else document.forms[0].submit();
    }
}


function reset(){
    document.getElementById("myForm").reset();
}