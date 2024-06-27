import { obtenerCliente, editarCliente } from "./API.js";
(function(){
    const parametrosURL = new URLSearchParams(window.location.search);
    const id = parametrosURL.get("id");

    const form = document.querySelector("#formulario");




    document.addEventListener("DOMContentLoaded", edit);
    form.addEventListener("submit", guardarCambios);
    
    async function edit(){
        const cliente = await obtenerCliente(id);

        document.querySelector("#nombre").value = cliente.nombre;
        document.querySelector("#email").value = cliente.email;
        document.querySelector("#telefono").value = cliente.telefono;
        document.querySelector("#empresa").value = cliente.empresa;
    }

    function guardarCambios(e){
        e.preventDefault();

        let nombre = document.querySelector("#nombre").value;
        let email = document.querySelector("#email").value;
        let telefono = document.querySelector("#telefono").value;
        let empresa = document.querySelector("#empresa").value;

        const clienteMod = {
            nombre,
            email,
            telefono,
            empresa,
        }

        editarCliente(id, clienteMod)
    }
})()