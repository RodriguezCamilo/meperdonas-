const no = document.getElementById("no")
const yay = document.getElementById("yay")
const meperdonas = document.getElementById("meperdonas")

no.addEventListener("mouseover", () => {
    randNum = Math.round(Math.random() * 70);
    randNum2 = Math.round(Math.random() * 70);
    document.getElementById("no").style.marginTop = randNum + "vh";
    document.getElementById("no").style.marginLeft = randNum2 + "vw";
});

yay.addEventListener("click", () => {
    meperdonas.innerText = "SABIA QUE ME PERDONARIAS TE KIERO MUSHO!!!! SOMOS MEJORES AMIGOS PARA SIEMPRE, DE ESOS QUE DURAN TODA LA VIDA TIPO BBFFFSSS FOREVER ESTOY AGRADECIDO POR TENERTE EN MI VIDA Y SABIA QUE PODIA CONTAR CONTIGO PARA PERDONARME NUESTRA AMISTAD ES TAN ESPECIAL LLENA DE MOMENTOS INCREIBLES QUE ATESORARE POR SIEMPRE GRACIAS POR SER PARTE DE MI VIDA SOMOS AMIGOS POR SIEMPRE Y PARA SIEMPRE YAYYYY!!!!";
    no.innerText = ":D"

})