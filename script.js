
console.log("Script running...");
document.querySelector('.cross').style.display = 'none';
// document.querySelector('.ham').addEventListener("click", ()=>{
// document.querySelector('.sidebar').classList.toggle('sidebargo');
// if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
// document .querySelector('.ham').style.display = 'none'
// document. querySelector('.cross').style.display = 'inline'
// }
// else {
// document .querySelector('.cross').style.display = 'none'
// setTimeout(()=> {
//     document .querySelector('.ham').style.display = 'inline'
// }, 400);
// }
// })

document.querySelector('.ham').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    document.querySelector('.ham').style.display = 'none';
    setTimeout(()=>{
    document.querySelector('.cross').style.display = 'inline';
},350);

})
document.querySelector('.cross').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    document.querySelector('.cross').style.display = 'none';
    document.querySelector('.ham').style.display = 'inline';

})
// document.querySelector('.ham').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebargo');
// })