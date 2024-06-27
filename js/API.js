const url = "http://localhost:4000/clientes"

export const nuevoCliente = async cliente => {

    try{
        await fetch(url, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(cliente)
            })

            window.location.href = "index.html"
    }catch(err){
        console.error(err);
    }
}

export const descargarClientes = async () => {
    try{
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        return resultado;
    }catch(err){
        console.error(err)
    }
}

export const eliminarClienteDB = async id =>{
    try{
        await fetch(`${url}/${id}`, {
            method: "DELETE"
        })
    }catch(err){
        console.error(err)
    }
}

export const obtenerCliente = async id =>{
    try{
        const respuesta = await fetch(`${url}/${id}`);
        const resultado = await respuesta.json();
        return resultado
    }catch(err){
        console.error(err);
    }
}

export const editarCliente = async (id, cliente) =>{
    try{
        await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cliente)
        })
        window.location.href = "index.html"
    }catch(err){
        console.error(err)
    }
}