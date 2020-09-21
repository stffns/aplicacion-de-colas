const {TicketControl} = require ( "../classes/ticket-control" );
const { io } = require('../server');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

   client.on('siguienteTicket', (data, callback) =>{

       let siguiente = ticketControl.siguienteTicket();

       console.log (siguiente);
       callback(siguiente);

   })

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket (),
        ultimos4: ticketControl.getUltimos4()
    });


    client.on('atenderTicket', (data, callback) => {
       if(!data.escritorio){
           return callback({
               err: true,
               message: 'Escritorio es necesario'
           })
       }
       let atenderTicket = ticketControl.atenderTicket(data.escritorio);

       callback(atenderTicket);

        client.broadcast.emit('ultimos4', {
            ultimos4: ticketControl.getUltimos4()
        });

    });




});