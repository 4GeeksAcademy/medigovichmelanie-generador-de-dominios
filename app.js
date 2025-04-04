// Palabras para combinar

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

//Extensiones

let extensions = ['.com', '.net', '.es', '.ar'];

for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            for (let e = 0; e < extensions.length; e++) {
                //console.log(pronoun[p] + adj[a] + noun[n] + extensions[e]);
            }
        }

    }

}

// forEach



pronoun.forEach(function(p) {
    adj.forEach(function(a) {
        noun.forEach(function(n) {
            extensions.forEach(function(e) {
                console.log(p + a + n + e);

            })

        })
    })
})