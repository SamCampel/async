function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        var deuErro = false
        if(deuErro){
            callback("deu erro!")
        }
        else{
            callback();
        }
    }, 8000);
};

console.log("Inicio do envio do email");
enviarEmail("Oi", "samuel@email.com", () => {
    if(erro == undefined){ 
        console.log("OK!");
    }else{//erro
        console.log("ocorreu um erro: " + erro);
    }
    
});

