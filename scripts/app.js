document.querySelectorAll(`a[href^="#"]`).forEach( anchor => { /*el querySelectorAll busca las anclas con el href que empiece con "#"*/
    anchor.addEventListener(`click`, function (e){
        e.preventDefault(); /*evitara que el ancla recargue la pagina*/
        const target = document.querySelector(this.getAttribute(`href`));
        if (target){
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });/*animacion de desplazamiento suave*/
        }
    });
});
let cambiarColor = true;
document.getElementById("modo-oscuro").addEventListener("click",darkmode)
function darkmode(){
    let h2Info = document.querySelectorAll(".section-info h2")
    if(cambiarColor === true){
        document.documentElement.style.setProperty("--first-color", "#0d1117");
        document.documentElement.style.setProperty("--second-color", "black");
        document.documentElement.style.setProperty("--terciary-color", "#42a5f5");
        document.getElementById("modo-oscuro").textContent = "desactivar modo oscuro";
        h2Info.forEach(h2 => {
            h2.style.color = "#42a5f5";
        });
    } else{
        document.documentElement.style.setProperty("--first-color", "#963be7")
        document.documentElement.style.setProperty("--second-color", "#3b0962");
        document.documentElement.style.setProperty("--terciary-color", "#fd2c9a");
        document.getElementById("modo-oscuro").textContent = "activar modo oscuro";
        h2Info.forEach(h2 => {
            h2.style.color = "#963be7";
        });
    }
    cambiarColor = !cambiarColor
};