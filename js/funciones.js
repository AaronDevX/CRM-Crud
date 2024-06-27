export function mostrarError(mensaje){
    const alerta = document.querySelector(".alerta");

    if(!alerta){
        const alerta = document.createElement("P");
        alerta.classList.add("alerta", "bg-red-100", "border-red-400", "text-red-700", "px-4", 
        "py-3", "rounded", "max-w-lg", "mx-auto", "mt-6", "text-center")

        const strong = document.createElement("STRONG");
        strong.classList.add("font-bold");
        strong.textContent = "Error!";
        const span = document.createElement("SPAN");
        span.classList.add("block", "sm:inline");
        span.textContent = mensaje;

        alerta.appendChild(strong);
        alerta.appendChild(span);

        const formulario = document.querySelector("#formulario");
        formulario.appendChild(alerta);

        setTimeout(()=>{
            alerta.remove()
        }, 3000)
    }
}