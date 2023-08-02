function contar(){
    var n1 = document.getElementById('istart')
    var n2 = document.getElementById('iend')
    var n3 = document.getElementById('ipasso')
    var res = document.getElementById('res')
    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
        res.innerHTML= 'Impossível contar!'
    }else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(n3.value)
        if(i<f){
        for(let c = i; c<=f; c+=p){
            res.innerHTML += c + ' \u{1f449} '
        }

        }else {
            for (let c = i; c>=f; c-=p){
                res.innerHTML += c + ' \u{1f449} '
            }
        }
        res.innerHTML += '\u{1f3c1}'
    }
}
