const socket = io();

const lblTicket1 = document.querySelector('#lblTicket1')
const lblTicket2 = document.querySelector('#lblTicket2')
const lblTicket3 = document.querySelector('#lblTicket3')
const lblTicket4 = document.querySelector('#lblTicket4')

const lblEscritorio1 = document.querySelector('#lblEscritorio1')
const lblEscritorio2 = document.querySelector('#lblEscritorio2')
const lblEscritorio3 = document.querySelector('#lblEscritorio3')
const lblEscritorio4 = document.querySelector('#lblEscritorio4')

const lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
const lblEscritorios = [lblEscritorio1,lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('estadoActual', (data)=>{
    console.log (data);
    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', (data)=>{

    const audio = new Audio('audio/new-ticket.mp3')
    audio.play();
    actualizaHTML(data.ultimos4);


});

const actualizaHTML = (ultimos4)=>{
    for(let i =0 ; i <=ultimos4.length - 1 ;i++){
        lblTickets[i].textContent = 'Ticket ' + ultimos4[i].numero;
        lblEscritorios[i].textContent = 'Escritorio ' + ultimos4[i].escritorio;
    }
}