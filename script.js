class libro {
    constructor(isbn, titulo, autor, paginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
}
let arr = [];
function agregar() {

    let numLibro = document.getElementById("isbn").value;
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let paginas = document.getElementById("paginas").value;
    let num = parseInt(numLibro);
    let pag = parseInt(paginas);

    let nuevoLibro = new libro(num, titulo, autor, pag);

   

    arr.push(nuevoLibro);

    arr.forEach(e => {
        console.log(e);
    });

    console.log(arr.length);
}


document.getElementById("agregar").onclick = agregar;

function encontrar(){
   

    let nuevoTitulo = document.getElementById("tituloEncontrado");
    nuevoTitulo.textContent="Resultados";
    let libroEncontrado = document.getElementById("buscarIsbn").value;
    console.log(libroEncontrado);
    let num1 = parseInt(libroEncontrado);
    let esta = arr.find(e=> e.isbn === num1);
    console.log(esta);
    let mostrar = document.getElementById("datos");
    mostrar.textContent=JSON.stringify(esta);
    
    
    
}

document.getElementById("buscar").onclick=encontrar;