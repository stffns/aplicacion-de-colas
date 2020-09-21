const socket = io();
let searchParams = new URLSearchParams(window.location.search);
let escritorio = searchParams.get('escritorio');
let esc = document.querySelector('h1');
let button =  document.querySelector('button');
let small = document.querySelector('small');

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario')
}

esc.textContent = `Escritorio ${escritorio}`;

button.addEventListener('click', ()=>{

    socket.emit('atenderTicket', { escritorio }, (resp)=>{
        console.log (resp);
        if(resp === 'No hay mas tickets'){
            small.textContent = resp;
            alert(resp);
            return;
        }
        small.textContent = ` ticket ${ resp.numero}`

    })

})

