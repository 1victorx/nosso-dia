function nana(){
    let namoro = document.getElementById("Fotos")
    //trouxe o selection para o java 
    let link = namoro.value
    // peguei tudo que está escrito no selection (value = esrito)
    if(link !== "") {
        let a = document.getElementById("dow")
        // peguei a id de download que está em html 
        a.href = link
        // puxei o download href para o link que já é tudo do selection 
        a.click()
        //denominei o click para tudo 
    }}
    
function nana2(){
    let namoro2 = document.getElementById("vivi")
    let link2 = namoro2.value
    if(link2 !== "") {
        let a2 = document.getElementById("dow2")
        a2.href = link2
        a2.click()
    }}