module.exports = {
    TOKEN: "MTA2NDYxNzU4MDI0Mjk0NDE0MA.GccolZ.qqNiUH-AfZpu6zWfkGnSNMuOHxCs37cELUhiXA",
    ownerID: ["362764774376734720"], //write your discord user id. example: ["id"] or ["id1","id2"]
    botInvite: "", //Invitacion del bot, mas adelante
    supportServer: "", //Crear canal de soporte para el bot cuando falle (Más adelante)
    mongodbURL: "mongodb+srv://Detfo:R.sanchez03xd@cluster0.elt5dqm.mongodb.net/?retryWrites=true&w=majority", //URL de mongoDB
    status: 'Futibola',
    commandsDir: './commands', //Porfavor no tocar
    language: "en", //es, en, tr, nl, pt, fr, ar, zh_TW, it
    embedColor: "ff0000", //codigo de color en hex
    errorLog: "1070414194354159676", //id de canal de registro de errores de discord
    
    //Colocar mas adelante para que el bot sea votado
    sponsor: {
    status: false, //true or false
    url: "https://awmbilisim.com", //write your discord sponsor url.
    },
    
    //Colocar mas adelante para que el bot sea votado
    voteManager: { //opcional
    status: false, //true o false
    api_key: "", //escribir mi clave de api
    vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //escribir comandos de voto.
    vote_url: "", //escribir su voto en top.gg
    },
    
    shardManager:{
    shardStatus: false //Si el bot existe en más de 1000 servidores, cambiar esto a true.
    },
    
    playlistSettings:{
    maxPlaylist: 10, //max contador de playlist
    maxMusic: 75, //maximo contador de musica
    },
    
    opt: {
    DJ: {
    commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Porfavor no tocar
    },
    
    voiceConfig: {
    leaveOnFinish: true, //Si esta variable es "true", el bot abandonará el canal al terminar la música.
    leaveOnStop: true, //Si esta variable es "true", el bot abandonará el canal cuando se detenga la música.
    
    leaveOnEmpty: { //La variable leaveOnEnd debe ser "false" para utilizar este sistema.
    status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
    cooldown: 10000000, //1000 = 1 segundo
    },
    
    },
    
    maxVol: 150, //Puedes especificar el nivel máximo de volumen.
    
    }
    }
    