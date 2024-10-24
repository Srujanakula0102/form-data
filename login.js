let url="https://script.google.com/macros/s/AKfycbxliOT7o6y7K1Vu9MZQUMPxDCnAvS5jzq7UBywGmNTQuzaKXhwvIBx-5V9ady7CrNrv/exec";
let form= document.getElementById('form');
form.addEventListener("submit",(a)=>{
    a.target.btn="Submitting";
    let one= new FormData(form);
    fetch(url,{
        method:"post",
        body:one
    }).then((res)=>res.text())
    .then((final)=>
{
    a.target.btn="Submit"
    console.log(final)
});
    a.preventDefault();

  
})
function srujan(){
    console.log("ntg error")
}