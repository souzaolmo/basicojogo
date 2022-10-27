let personagem = document.getElementById('personagem')
let obstaculo = document.getElementById('obstaculo')

function pular(){
    if(personagem.classList !='animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
}

var colisao= setInterval(function(){
   
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var esquerdadoobstaculo = parseInt(
        window.getComputedStyle(obstaculo).getPropertyValue('Left')
    )

    if(esquerdadoobstaculo < 20 && esquerdadoobstaculo > 0 && topoPersonagem >=130){
        obstaculo.style.animation = 'none'
        obstaculo.style.display ='none'
        alert('você é muito ruim, tente novamente!')
    }

},10)