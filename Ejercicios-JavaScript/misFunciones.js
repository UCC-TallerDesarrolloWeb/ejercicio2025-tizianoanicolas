/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
let convertirUnidades = (unidad, valor) =>
{
    let metro, pie, pulgada, yarda;

    if(valor.includes(","))
    {
        valor=valor.replace(",", ".")
    }

    if(isNaN(valor))
    {
        alert("El valor ingresado no es correcto");
        metro="";
        pie="";
        yarda="";
        pulgada="";
    }
    else
    {

    if(unidad=="unid_metro")
    {
        metro= valor;
        pie= 3.28*metro;
        pulgada= 39.37*metro;
        yarda= 1.0936*metro;
    }

    if(unidad=="unid_pulgada")
    {
        pulgada= valor;
        pie= 0.08333333*pulgada;
        metro= 0.0254*pulgada;
        yarda= 0.02777778*pulgada;
    }

    if(unidad=="unid_pie")
    {
        pie= valor;
        metro= 0.3048*pie;
        pulgada= 12*pie;
        yarda= 0.33333333333*pie;
    }

    if(unidad=="unid_yarda")
    {
        yarda= valor;
        pie= 3*yarda;
        pulgada= 36*yarda;
        metro= 0.9144*yarda;
    }
    }

    document.getElementById("metro").value= Number(metro).toFixed(2);
    document.getElementById("pulgada").value= Number(pulgada).toFixed(2);
    document.getElementById("pie").value= Math.round(pie*100)/100;
    document.getElementById("yarda").value= Math.round(yarda*100)/100;

}

let convertirGR = (id, valor) =>
{
    let cantGrados, cantRadianes;
    if (id=="grados")
    {
        cantGrados = valor;
        cantRadianes = cantGrados*Math.PI/180
        document.getElementById("radianes").value = cantRadianes
    }
        else
    {
        cantRadianes = valor;
        cantGrados = cantRadianes*180/Math.PI;
        document.getElementById("grados").value = cantGrados
    }
}


let mostarOcultarDiv = (id) =>
{
//    if(id=="mostrarDiv")
//    {
//        document.getElementsByName("unDiv")[0].style.display = "block";
//    }
//    else
//    {
//        document.getElementsByName("unDiv")[0].style.display = "none";
//    }

    const mostrar = id=="mostrarDiv" ? "block" : "none"
    document.getElementsByName("unDiv")[0].style.display = mostrar;
}

let sumar = () =>
{
    let sum1 = document.getElementById("nums1").value;
    let sum2 = document.getElementById("nums2").value;


    if(isNaN(sum1) || isNaN(sum2))
    {
        alert("Una de las variables no es numérica en la suma");
    }
    else
    {
        document.getElementById("totalS").value = Number(sum1) + Number(sum2);
    }
   
}

let restar = () =>
{
    let res1 = document.getElementById("numr1").value;
    let res2 = document.getElementById("numr2").value;

     if(isNaN(res1) || isNaN(res2))
    {
        alert("Una de las variables no es numérica en la resta");
    }
    else
    {
        document.getElementById("totalR").value = Number(res1) - Number(res2);
    }
}

let multiplicar = () =>
{
    let mul1 = document.getElementById("numm1").value;
    let mul2 = document.getElementById("numm2").value;

    if(isNaN(mul1) || isNaN(mul2))
    {
        alert("Una de las variables no es numérica en la multiplicacion");
    }
    else
    {
        document.getElementById("totalM").value = Number(mul1) * Number(mul2);
    }
}

let dividir = () =>
{
    let div1 = document.getElementById("numd1").value;
    let div2 = document.getElementById("numd2").value;

    if(isNaN(div1) || isNaN(div2))
    {
        alert("Una de las variables no es numérica en la division");
    }
    else
    {
        document.getElementById("totalD").value = Number(div1) / Number(div2);
    }
}