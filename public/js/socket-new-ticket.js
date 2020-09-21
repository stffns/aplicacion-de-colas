
const socket = io();

const label = document.querySelector('#lblNuevoTicket');

socket.on('connect', () => {
    console.log ('Conectado al servidor')
})

socket.on('disconnect', () => {
    console.log ('Desconectado al servidor')
})

socket.on('estadoActual', (resp) => {
    console.log (resp);
    label.textContent = resp.actual;
})

let boton = document.querySelector('button')

boton.addEventListener('click' , function(){
    socket.emit('siguienteTicket',null, function (siguienteTicket) {
        label.textContent = siguienteTicket;
    })
});
