


 let names=[];
 let firm= document.getElementById("firm").value;
 let number = document.getElementById("number").value;
 let comment = document.getElementById("comment").value;
 let n=0; 

 /*
document.getElementById("button").onclick = function() {

    names = document.getElementById("name").value;

    document.querySelector('#name').value = '';   

    console.log(names);
}*/
 
if (localStorage.getItem('#name')) {
    localStorage.setItem('#name', value);
}


    

document.addEventListener('DOMContentLoaded',function(){
   
    document.getElementById("button").onclick = function() {
        
        names = document.getElementById("name").value;
        
        document.querySelector('#name').value = '';   
        
        
        

        localStorage.setItem('name',names);
     
        
    names.push(names);
    document.querySelector('#name').reset();
        
    }
    })








