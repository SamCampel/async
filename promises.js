function pegarID() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        resolve(5)
        },2000)
    })
};

function buscarNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("samuel@guia.com.br")
        },2000)
    })
}


function enviarEmail(corpo, para) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        var deuErro = false

        if(!deuErro){
            resolve({time: 6, to: "samuel@email.com"})
        }
        else{
            reject("erro");
        }
        }, 2000);
    })
};

function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "samuel", lang: "JS"},
                {name: "matheus", lang: "CS"},
                {name: "yasmim", lang: "Python"}
            ])
        },2000)
    })
}

async function principal() {
    var id = await pegarID();
    var email = await buscarNoBanco(id);
    try{
        await enviarEmail("olá", email);
        console.log("email enviado") ;
    }catch(erro){
        console.log(erro);
    }
};

principal();

/*
pegarID().then((id) => {
    buscarNoBanco(id).then(() => {
        enviarEmail("Olá", email).then(() => {
            console.lolg("Email enviado com o id: " + id)
        }).catch(err => {

        })
    })
})
*/