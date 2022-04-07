const boxDrop = document.querySelector('.box-drop');
const boxDrag = document.querySelector('.box-drag');
const main = document.querySelector('.main');
const add = document.querySelector('.add');
const lightbox = document.querySelector('.lightbox');
const buttonYes = document.querySelector('.sim');
const buttonNo = document.querySelector('.nao');
let cont = 0;
boxDrop.addEventListener('dragover', (e)=>{
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    
})

boxDrop.addEventListener('drop', (e)=>{
    if(cont >= 10) {
        lightbox.classList.add('lightbox-on')
    }else{
        e.preventDefault();
        const divDrag = document.createElement('div');
        divDrag.classList.add('box-drag');
        divDrag.draggable = 'true';
        boxDrop.appendChild(divDrag);
        cont++;
        add.innerHTML = `${cont}/10`;
    }


})

buttonYes.addEventListener('click', ()=>{
    cont = 0;
    add.innerHTML = `${cont}/10`;
    lightbox.classList.remove('lightbox-on');
    const drags = boxDrop.querySelectorAll('.box-drag')
    drags.forEach(drag =>{
        boxDrop.removeChild(drag);
    })

})

buttonNo.addEventListener('click', ()=>{
    lightbox.classList.remove('lightbox-on');
})