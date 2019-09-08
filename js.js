let xhr = new XMLHttpRequest(); 
xhr.open("GET", "xml.xml", false); 
xhr.send(''); 
let xmlDoc = xhr.responseXML;


ispisSve();
document.querySelector("#btnSve").addEventListener("click", ispisSve);
document.querySelector("#btnPistols").addEventListener("click", ispisOruzje);
document.querySelector("#btnShotguns").addEventListener("click", ispisOruzje);
document.querySelector("#btnSmgs").addEventListener("click", ispisOruzje);
document.querySelector("#btnAssaultRifles").addEventListener("click", ispisOruzje);
document.querySelector("#btnSniperRifles").addEventListener("click", ispisOruzje);


function ispisOruzje(evt)
{
    let oruzje = xmlDoc.getElementsByTagName(evt.target.value);
    let tekst = `<table class="table">
    <tr>
        <th>Naziv</th>
        <th>Cijena</th>
        <th>Zemlja podrijetla</th>
        <th>Kalibar</th>
        <th>Kapacitet spremnika</th>
        <th>Težina</th>
        <th>Slika</th>
    </tr>`;
    
    for (let i = 0; i < oruzje.length; i++) {
        tekst += `
        <tr>
            <td> ${oruzje[i].children[0].innerHTML} </td>
            <td> ${oruzje[i].children[1].innerHTML} </td>
            <td> ${oruzje[i].children[2].innerHTML} </td>
            <td> ${oruzje[i].children[3].innerHTML} </td>
            <td> ${oruzje[i].children[4].innerHTML} </td>
            <td> ${oruzje[i].children[5].innerHTML} </td>
            <td> <img class="${evt.target.value}" src="${oruzje[i].children[6].innerHTML}" alt="${oruzje[i].children[0].innerHTML}"></td>
        </tr> `;
    }
    tekst += "</table>";
    document.querySelector("#zaXML").innerHTML = tekst;
}


function ispisSve()
{
    let sve = xmlDoc.getElementsByTagName("oruzja");
    let tekst = `<table class="table">
    <tr>
        <th>Naziv</th>
        <th>Cijena</th>
        <th>Zemlja podrijetla</th>
        <th>Kalibar</th>    
        <th>Kapacitet spremnika</th>
        <th>Težina</th>
        <th>Slika</th>
    </tr>`;
    
    for (let i = 0; i < sve[0].children.length; i++) {
        for (let j = 0; j < sve[0].children[i].children.length; j++) {
            tekst += `
        <tr>
            <td> ${sve[0].children[i].children[j].children[0].innerHTML} </td>
            <td> ${sve[0].children[i].children[j].children[1].innerHTML} </td>
            <td> ${sve[0].children[i].children[j].children[2].innerHTML} </td>
            <td> ${sve[0].children[i].children[j].children[3].innerHTML} </td>
            <td> ${sve[0].children[i].children[j].children[4].innerHTML} </td>
            <td> ${sve[0].children[i].children[j].children[5].innerHTML} </td>
            <td> <img class="pistol" src="${sve[0].children[i].children[j].children[6].innerHTML}" alt="${sve[0].children[i].children[j].children[0].innerHTML}"></td>
        </tr> `;
        }
    }
    tekst += "</table>";
    document.querySelector("#zaXML").innerHTML = tekst;
}


