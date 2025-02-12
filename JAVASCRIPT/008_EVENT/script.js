
// ! Bad approach. There is some problem in onclick event.. Who gives you less features.
// document.getElementById('owl').onclick=function(){
//     alert("owl arrived bad")
// }

// ? attachEvent():- It the  old method  of addEventListener which work on internat explore
// ? J Query frame work method onEvent.It is the best method to attach event.
// document.getElementById('owl').addEventListener('click',function(e) {
//      alert('owl are arrived')
//     console.log(e);
// });

// when the value is false the event is called bubble 
/* document.getElementById('images').addEventListener('click', function () {
    console.log("images are clicked");
},false)
// when the values is true we is called capturing
document.getElementById('owl').addEventListener('click',function(e) {
    console.log('owl');    
    e.stopPropagation()
},false)

document.getElementById('google').addEventListener('click',function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('google clicked');
},false) */

document.getElementById('images').addEventListener('click', function (e) {

    // in this approach we face a problem that if we click on list then all images are removed
    /*     console.log(e.target.parentNode);
        let removeIt=e.target.parentNode;
        // removeIt.remove();
        removeIt.parentNode.removeChild(removeIt) */
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})