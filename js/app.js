//zmienne do css root:
//let root = document.documentElement;
let root = document.querySelector(":root");
root.style.setProperty('--someColor', 'red');

const blind = document.querySelector('.blindCover');
const blindGridContainer = document.querySelector('.grid-item7');
const waszeKorzysci = document.querySelector('.grid-item20');
const navBar = document.querySelector('nav');
const navBarA = document.querySelectorAll('nav a');
const tablica63 = Array.from(document.querySelectorAll('.grid-item63 div'));
const tablicaDivTekstowReferencji = tablica63.filter(item => item.className.includes("referencjeTekst"));
const tablicaDivAutorowReferencji = tablica63.filter(item => item.className.includes("Autor"));
const tablicaDots = tablica63.filter(item => item.className.includes("dot"));


//galeria
const ekranClose  = document.querySelector('.ekranGaleriiClose');
const ekranPrev = document.querySelector('.ekranGaleriiPrev'); 
const ekranNext = document.querySelector('.ekranGaleriiNext');
const ekran = document.querySelector('.ekranGalerii');
const tablicaGalerii = [document.querySelector('.grid-item40'),document.querySelector('.grid-item41'),document.querySelector('.grid-item42'),document.querySelector('.grid-item43'),document.querySelector('.grid-item44'),document.querySelector('.grid-item45'),document.querySelector('.grid-item46'),document.querySelector('.grid-item47')];
const tablicaPodpisowEkranu = [document.querySelector('.podpis1'), document.querySelector('.podpis2'), document.querySelector('.podpis3'), document.querySelector('.podpis4'),document.querySelector('.podpis5'),document.querySelector('.podpis6'), document.querySelector('.podpis7'), document.querySelector('.podpis8')]
let nowShowingPic = 0;

openGalery = (numer) => {
ekran.style.height = "100%";
ekran.style.width = "100%";
ekran.style.border = "2px solid var(--mainColor)";
ekranClose.style.display = "block";
ekranPrev.style.display = "block";
ekranNext.style.display = "block";
ekran.style.backgroundImage = `url('./img/galeria/${numer+1}.jpg')`;

tablicaPodpisowEkranu.forEach(item => {
    item.style.bottom = "-50vh;";
    item.style.opacity = "0";
}); 
tablicaPodpisowEkranu[numer].style.bottom = "10vh";
tablicaPodpisowEkranu[numer].style.opacity = "1";
nowShowingPic = numer+1;


}

const closeGalery = () => {
ekran.style.backgroundImage = "";
ekran.style.height = "0";
ekran.style.width = "0";
ekran.style.border = "0px solid var(--mainColor)";
ekranClose.style.display = "none";
ekranPrev.style.display = "none";
ekranNext.style.display = "none";
}

ekranClose.addEventListener("click", closeGalery);
ekranNext.addEventListener("click", () => {
    nowShowingPic === tablicaGalerii.length ? openGalery(0) : openGalery(nowShowingPic);   
});
ekranPrev.addEventListener("click", () => {
    nowShowingPic === 1 ? openGalery(tablicaGalerii.length-1) : openGalery(nowShowingPic-2);   
});

tablicaGalerii.forEach((item, index) =>  item.addEventListener("click", () => openGalery(index)));

const clearReferencje = () => {
for (i=0; i<tablicaDivTekstowReferencji.length; i++)
{
    // console.log(i);
    tablicaDivTekstowReferencji[i].style.left = "-100%";
    tablicaDivAutorowReferencji[i].style.left = "-100%";
    tablicaDots[i].style.left = `${41 + 3*i}%`;
    tablicaDots[i].classList.remove("active");
    
}
}

const showReferencje = (x) => {
    tablicaDivTekstowReferencji[x].style.left = "50%";
    tablicaDivAutorowReferencji[x].style.left = "50%";
} 

tablicaDots.forEach ((item, jegoIndex) => {
    item.addEventListener("click", (e)=>{
        // console.log(e.target, jegoIndex);
        clearReferencje();
        item.classList.add("active");
        showReferencje(jegoIndex);
    }); 
})
clearReferencje();
showReferencje(0);
tablicaDots[0].classList.add("active");

let oIlePodniescTlo = 0;
document.addEventListener('scroll', ()=>{


    
    
    
    // DO NOT REMOVE - USEFUL
    // console.log(`window.scrollY: ${window.scrollY}`);
    // console.log(`korzysci.offsetTop: ${waszeKorzysci.offsetTop}`);
    // console.log(`blindGridContainer.offsetTop: ${blindGridContainer.offsetTop}`);
    // console.log(`blindGridContainer.clientHeight: ${blindGridContainer.clientHeight}`);
    // console.log();
    
    if (window.scrollY > 50){
        navBar.classList.add("waveInBack");
    } else {
        navBarA.forEach((item) => item.style.color = "white");
        // navBar.classList.remove("gradient1");
        navBar.classList.remove("waveInBack");

    }
    
    //obsługa zasłonki na obrazku
    if (window.scrollY > (blindGridContainer.offsetTop - blindGridContainer.clientHeight)){
        blind.style.width = `${window.scrollY - blindGridContainer.offsetTop + blindGridContainer.clientHeight}px`;
    }
    
    //podnoszenie paralaksy
 
    let roznica = window.scrollY - waszeKorzysci.offsetTop - waszeKorzysci.clientHeight;
    // console.log(`różnica: ${roznica}`);
    if (roznica > -600) {
        // console.log(`mała`);
        oIlePodniescTlo = oIlePodniescTlo - 0.7;
        // console.log(oIlePodniescTlo);
        document.body.style.backgroundPosition=`0 ${oIlePodniescTlo}%`; 
    }
        
});