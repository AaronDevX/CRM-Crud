import { descargarClientes, eliminarClienteDB} from "./API.js";

(function(){
    const lista = document.querySelector("#listado-clientes");

    document.addEventListener("DOMContentLoaded", imprimirLista)

    async function imprimirLista(){
        const listaClientes = await descargarClientes();

        listaClientes.forEach(cliente => {
            const {id, nombre, email, telefono, empresa} = cliente;

            const row = document.createElement("TR");

            const tdInfo = document.createElement("TD");
            tdInfo.classList.add("px-6", "py-4", "whitespace-no-wrap", "border-b", "border-gray-200");
            const nombreP = document.createElement("P");
            nombreP.classList.add("text-sm", "leading-5", "font-medium", "text-gray-700", "text-lg", "font-bold");
            nombreP.textContent = nombre;
            const emailP = document.createElement("P");
            emailP.classList.add("text-sm", "leading-10", "text-gray-700");
            emailP.textContent = email;
            tdInfo.appendChild(nombreP);
            tdInfo.appendChild(emailP);

            const tdTelefono = document.createElement("TD");
            tdTelefono.classList.add("px-6", "py-4", "whitespace-no-wrap", "border-b", "border-gray-200");
            const telefonoP = document.createElement("P");
            telefonoP.classList.add("text-gray-700");
            telefonoP.textContent = telefono;
            tdTelefono.appendChild(telefonoP);

            const tdEmpresa = document.createElement("TD");
            tdEmpresa.classList.add("px-6", "py-4", "whitespace-no-wrap", "border-b", "border-gray-200", "leading-5", "text-gray-700");
            const empresaP = document.createElement("P");
            empresaP.classList.add("text-gray-600");
            empresaP.textContent = empresa;
            tdEmpresa.appendChild(empresaP);

            const tdButtons = document.createElement("TD");
            tdButtons.classList.add("px-6", "py-4", "whitespace-no-wrap", "border-b", "border-gray-200", "leading-5", "text-sm");
            const editBtn = document.createElement("A");
            editBtn.href = `editar-cliente.html?id=${id}`
            editBtn.classList.add("text-teal-600", "hover:text-teal-900", "mr-5")
            editBtn.textContent = "Editar"

            const deleteBtn = document.createElement("A");
            deleteBtn.href = "#"
            deleteBtn.dataset.cliente = `${id}`
            deleteBtn.classList.add("text-red-600", "hover:text-red-900", "eliminar");
            deleteBtn.textContent = "Eliminar";
            deleteBtn.onclick = ()=>{
                deleteCLient(id)
            }

            tdButtons.appendChild(editBtn);
            tdButtons.appendChild(deleteBtn);

            row.appendChild(tdInfo);
            row.appendChild(tdTelefono);
            row.appendChild(tdEmpresa);
            row.appendChild(tdButtons);

            lista.appendChild(row);
        });
    }

    function deleteCLient(id){
        const confirmar = confirm("Desea Eliminar este Cliente?");

        if(confirmar){
            eliminarClienteDB(id)
        }
    }
})()

