/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convertirUnidades(unidad, valor)
{
    let metro, pie, pulgada, yarda;

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

    document.getElementById("metro").value= metro;
    document.getElementById("pie").value= pie;
    document.getElementById("pulgada").value= pulgada;
    document.getElementById("yarda").value= yarda;

}