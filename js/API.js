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