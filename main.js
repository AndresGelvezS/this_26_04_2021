// this.nombre="Andres Gelvez";
// nombre="uuu";
// console.log(this.nombre);


// function saludar() {
    // var apellido2="GELVEZ SUAREZ";
    // let apellido3="GELVEZ SUAREZ";
    // this.apellido="Gelvez Suárez"
//    console.log(this);
// }
// saludar();
// console.log(this.apellido);
// console.log(this.apellido2);
// console.log(this.apellido3);


// maneras de declarar objetos-------------

// const obj=new Object();
// const obj2={};
// const obj3=Object.prototype.constructor();
// 
// 
// console.log(obj3);

// const lista2= new Object();
// lista2.nombre="Andres";
// lista2.apellido="Gelvez";

const lista = {
    nombre: "Andres",
    apellido: "Gelvez Suarez",
    mostrar: p1 => `Hola ${p1} como estas`,
};
function saludar(Callback,p2){
    // console.log(this.mostrar(this.nombre));
    console.log(Callback(p2));
}
// saludar.call(lista, lista.mostrar, lista.nombre);
// saludar.apply(lista, [lista.mostrar, lista.nombre]);
const ejecutar = saludar.bind(lista, lista.mostrar, lista.nombre);
ejecutar();






// const inner = ( function (){
//     let num = 0;
//     return function () {
//         num++;
//         return num;
//     }
// })();

// console.log(inner());
// console.log(inner());
