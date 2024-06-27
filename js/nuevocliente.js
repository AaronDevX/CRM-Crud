import {mostrarError} from "./funciones.js"
import { nuevoCliente } from "./API.js";

(function(){
    const form = document.querySelector("#formulario");

    form.addEventListener("submit", validarFormulario);

    function validarFormulario(e){
        e.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const telefono = document.querySelector("#telefono").value;
        const empresa = document.querySelector("#empresa").value;

        const Cliente = {
            nombre,
            email,
            telefono,
            empresa,
        }

        if(!validacionCampos(Cliente)){
            mostrarError("todos los campos deben estar llenos")
            return
        }

        nuevoCliente(Cliente)
    }

    function validacionCampos(obj){
        return Object.values(obj).every(value => value !== "")
    }
})()