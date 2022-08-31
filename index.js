class Usuario{
    
    constructor(nombre, apellido, libros, mascotas){

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        this.mascotaIndividual=mascotas.length+1;
    }

    getFullName(){
        return `${this.nombre} ${this.apellido} `
    }

    addMascota(mascotas){
        return this.mascotas.push(mascotas)
    }


    addLibro(libros){
        return this.libros.push(libros)
    }

    getNombreLibros(){
        return (this.libros.map(libro=>libro.nombre))
    }

}

const usuario= new Usuario ('Franco', 'Zalazar', [{nombre: 'Harry Potter',autor: 'J. K. Rowling'}, {nombre: 'Rapidos y Furiosos', autor: 'Justin Lin'}], ['perro', 'caballo'] )


console.log(usuario.addMascota("gato"));

console.log(usuario.addLibro({nombre: `Las Cronicas de Narnia`, autor: `C. S. Lewis`}));


console.log(usuario);
