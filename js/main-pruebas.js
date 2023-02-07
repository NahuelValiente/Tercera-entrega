
/*damos por echo que el cliente ya sabe que productos esta eligiendo */
alert("Armemos nuestra nueva PC Master Race!");

let procesador1 = 10000;
let procesador2 = 20000;
let procesador3 = 30000;
let motherboard1 = 5000;
let motherboard2 = 10000;
let motherboard3 = 15000;
let ram1 = 3000;
let ram2 = 6000;
let ram3 = 9000;
let fuente1 = 4000;
let fuente2 = 8000;
let fuente3 = 12000;
let disco1= 6000;
let disco2= 12000;
let disco3= 18000;
let placaVideo1 = 50000;
let placaVideo2 = 100000;
let placaVideo3 = 150000;
let gabinete1 =2000;
let gabinete2 =4000;
let gabinete3 =6000;


class Componente{
  constructor(id, marca, modelo, categoria, precio) {
      this.id  = id;  
      this.marca  = marca;
      this.modelo = modelo;
      this.categoria  = categoria;
      this.precio = precio;
      
  }
}

  const  componentes= [];
  componentes.push(new Componente(1,"intel","i3","Procesadores", procesador1));
  componentes.push(new Componente(2,"intel","i5","Procesadores", procesador2));
  componentes.push(new Componente(3,"intel","i7","Procesadores", procesador3));
  componentes.push(new Componente(4,"ASUS","H310","Motherboard", motherboard1));
  componentes.push(new Componente(5,"ASUS","H410","Motherboard", motherboard2));
  componentes.push(new Componente(6,"ASUS","H510","Motherboard", motherboard3));
  componentes.push(new Componente(7,"XPG","2600Mhz","Memoria Ram", ram1));
  componentes.push(new Componente(8,"XPG","3000Mhz","Memoria Ram", ram2));
  componentes.push(new Componente(9,"XPG","3200Mhz","Memoria Ram", ram3));
  componentes.push(new Componente(10,"Seasonic","600w","Fuente", fuente1));
  componentes.push(new Componente(11,"Seasonic","700w","Fuente", fuente2));
  componentes.push(new Componente(12,"Seasonic","800w","Fuente", fuente3));
  componentes.push(new Componente(13,"Kingston","240gb","DiscoSSD", disco1));
  componentes.push(new Componente(14,"Kingston","500gb","DiscoSSD", disco2));
  componentes.push(new Componente(15,"Kingston","1tb","DiscoSSD", disco3));
  componentes.push(new Componente(16,"Gigabyte","RTX Geforce 3060","Placa de video", placaVideo1));
  componentes.push(new Componente(17,"Gigabyte","RTX Geforce 3070","Placa de video", placaVideo2));
  componentes.push(new Componente(18,"Gigabyte","RTX Geforce 3080","Placa de video", placaVideo3));
  componentes.push(new Componente(19,"XFX","MiniTower","Gabinete", gabinete1));
  componentes.push(new Componente(20,"XFX","MidTower","Gabinete", gabinete2));
  componentes.push(new Componente(21,"XFX","FullTower","Gabinete", gabinete3));



let n1=0, n2=0, n3=0,n4=0,n5=0 , n6=0,n7=0, total=0, seleccion=0;
let i=0;
function sumar(n1,n2,n3,n4,n5,n6,n7) {
    total=n1+n2+n3+n4+n5+n6+n7;
    return total;
};

const carrito =[]
while(i < 8 ){
 switch (i) {
    case 1:
       alert("Elija su procesador")  ;  
      
     seleccion=Number(prompt("Ingrese 1 para seleccionar Procesador i3 \nIngrese 2 para seleccionar Procesador i5 \nIngrese 3 para seleccionar procesador i7"));
     if(seleccion==1){
       n1=procesador1;
      carrito.push((componentes[0].categoria) ," " + (componentes[0].marca) ," "+ (componentes[0].modelo) ," "+ (componentes[0].precio));
     }
     else if(seleccion==2){
       n1=procesador2;
       carrito.push((componentes[1].categoria) ," " + (componentes[1].marca) ," "+ (componentes[1].modelo) ," "+ (componentes[1].precio));
     }else{
       n1=procesador3;
       carrito.push((componentes[2].categoria) ," " + (componentes[2].marca) ," "+ (componentes[2].modelo) ," "+ (componentes[2].precio));
     }
     break;
    case 2:
        alert("Elija su Motherboar")  ;  
        seleccion=Number(prompt("Ingrese 1 para seleccionar Motherboard H310 \nIngrese 2 para seleccionar Motherboard H410 \nIngrese 3 para seleccionar Motherboard H510"));
        if(seleccion==1){
            n2=motherboard1;
            carrito.push((componentes[3].categoria) ," " + (componentes[3].marca) ," "+ (componentes[3].modelo) ," "+ (componentes[3].precio));
          }
          else if(seleccion==2){
            n2=motherboard2;
            carrito.push((componentes[4].categoria) ," " + (componentes[4].marca) ," "+ (componentes[4].modelo) ," "+ (componentes[4].precio));
          }else{
            n2=motherboard3;
            carrito.push((componentes[5].categoria) ," " + (componentes[5].marca) ," "+ (componentes[5].modelo) ," "+ (componentes[5].precio));
          }
        break;

    case 3:
        alert("Elija su Memoria Ram")  ;  
        seleccion=Number(prompt("Ingrese 1 para seleccionar Ram 2600Mhz \nIngrese 2 para seleccionar Ram 3000Mhz  \nIngrese 3 para seleccionar Ram 3200Mhz"));
        if(seleccion==1){
            n3=ram1;
            carrito.push((componentes[6].categoria) ," " + (componentes[6].marca) ," "+ (componentes[6].modelo) ," "+ (componentes[6].precio));
          }
          else if(seleccion==2){
            n3=ram2;
            carrito.push((componentes[7].categoria) ," " + (componentes[7].marca) ," "+ (componentes[7].modelo) ," "+ (componentes[7].precio));
          }else{
            n3=ram3;
            carrito.push((componentes[8].categoria) ," " + (componentes[8].marca) ," "+ (componentes[8].modelo) ," "+ (componentes[8].precio));
          }
        break ;

    case 4:
        alert("Elija su Fuente")  ;  
        seleccion=Number(prompt("Ingrese 1 para seleccionar Fuente 600W \nIngrese 2 para seleccionar Fuente 700W \nIngrese 3 para seleccionar Fuente 800W"));
        if(seleccion==1){
            n4=fuente1;
            carrito.push((componentes[9].categoria) ," " + (componentes[9].marca) ," "+ (componentes[9].modelo) ," "+ (componentes[9].precio));
          }
          else if(seleccion==2){
            n4=fuente2;
            carrito.push((componentes[10].categoria) ," " + (componentes[10].marca) ," "+ (componentes[10].modelo) ," "+ (componentes[10].precio));
          }else{
            n4=fuente3;
            carrito.push((componentes[11].categoria) ," " + (componentes[11].marca) ," "+ (componentes[11].modelo) ," "+ (componentes[11].precio));
          }
        break;

    case 5:
        alert("Elija su Disco")  ;  
        seleccion=Number(prompt("Ingrese 1 para seleccionar Disco 240Gb \nIngrese 2 para seleccionar Disco 500Gb \nIngrese 3 para seleccionar Disco 1Tb"));
        if(seleccion==1){
            n5=disco1;
            carrito.push((componentes[12].categoria) ," " + (componentes[12].marca) ," "+ (componentes[12].modelo) ," "+ (componentes[12].precio));
          }
          else if(seleccion==2){
            n5=disco2;
            carrito.push((componentes[13].categoria) ," " + (componentes[13].marca) ," "+ (componentes[13].modelo) ," "+ (componentes[13].precio));
          }else{
            n5=disco3;
            carrito.push((componentes[14].categoria) ," " + (componentes[14].marca) ," "+ (componentes[14].modelo) ," "+ (componentes[14].precio));
          }
        break;
    case 6:
        alert("Elija su Placa de Video")  ;  
        seleccion=Number(prompt("Ingrese 1 para seleccionar RTX Geforce 3060 \nIngrese 2 para seleccionar RTX Geforce 3070 \nIngrese 3 para seleccionar RTX Geforce 3080"));
        if(seleccion==1){
            n6=placaVideo1;
            carrito.push((componentes[15].categoria) ," " + (componentes[15].marca) ," "+ (componentes[15].modelo) ," "+ (componentes[15].precio));
          }
          else if(seleccion==2){
            n6=placaVideo2;
            carrito.push((componentes[16].categoria) ," " + (componentes[16].marca) ," "+ (componentes[16].modelo) ," "+ (componentes[16].precio));
          }else{
            n6=placaVideo3;
            carrito.push((componentes[17].categoria) ," " + (componentes[17].marca) ," "+ (componentes[17].modelo) ," "+ (componentes[17].precio));
          }
        break;
 
    case 7:
        alert("Elija su Gabinete")  ;  
        seleccion=Number(prompt("Ingrese 1 para seleccionar Gabinete MiniTower \nIngrese 2 para seleccionar Gabinete MidTower \nIngrese 3 para seleccionar Gabinete FullTower"));
        if(seleccion==1){
            n7=gabinete1;
            carrito.push((componentes[18].categoria) ," " + (componentes[18].marca) ," "+ (componentes[18].modelo) ," "+ (componentes[18].precio));
          }
          else if(seleccion==2){
            n7=gabinete2;
            carrito.push((componentes[19].categoria) ," " + (componentes[19].marca) ," "+ (componentes[19].modelo) ," "+ (componentes[19].precio));
          }else{
            n7=gabinete3;
            carrito.push((componentes[20].categoria) ," " + (componentes[20].marca) ," "+ (componentes[20].modelo) ," "+ (componentes[20].precio));
          }
        break;
 
 
    default:
        break;
 }
i++
}
//
total=sumar (n1,n2,n3,n4,n5,n6,n7);

alert("Terminamos con el armado");
alert("El total del la Pc es $" + total + "\n Gracias por elegirnos" );
console.log(carrito);

let procesadores = componentes.filter(piesa => piesa.categoria == "Procesadores");
console.log(procesadores);

let motherboard = componentes.filter(piesa => piesa.categoria == "Motherboard");
console.log(motherboard);

let memoriaRam = componentes.filter(piesa => piesa.categoria == "Memoria Ram");
console.log(memoriaRam);

let fuente = componentes.filter(piesa => piesa.categoria == "Fuente");
console.log(fuente);

let disco = componentes.filter(piesa => piesa.categoria == "DiscoSSD");
console.log(disco);

let placaDeVideo = componentes.filter(piesa => piesa.categoria == "Placa de video");
console.log(placaDeVideo);

let gabinete = componentes.filter(piesa => piesa.categoria == "Gabinete");
console.log(gabinete);


//USO DE LOS DOM

let modelos = document.getElementsByClassName("card-text");
console.log(modelos [0].innerHTML);
console.log(modelos [1].innerHTML);
console.log(modelos [2].innerHTML);
console.log(modelos [3].innerHTML);
console.log(modelos [4].innerHTML);
console.log(modelos [5].innerHTML);



// uso de un formulario que imprima en consola
let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){

    e.preventDefault();
    let formulario = e.target
    console.log((formulario.children[0].value),(formulario.children[1].value)); 
     
}

const titulo = document.querySelector(`#titulo`)
let nombre = ""
const nombreLS = localStorage.getItem('nombre')

if(nombreLS){
    nombre = nombreLS
} else {
    nombre = prompt("ingrese su nombre")
    localStorage.setItem('nombre', nombre)
}

titulo.innerText = 'Bienvenido ${nombre}'





























