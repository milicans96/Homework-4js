// 1. Napisati funkciju koja prima broj od 1-10. Unutar funkcije generisati nasumičan broj (Math.random) od 1-10 i ispisati
//   korisniku da li je pogodio broj ili ne.
var korisnikBira = prompt ("Izaberite broj od 1 do 10.");
var niz = [1,2,3,4,5,6,7,8,9,10];
var kompBira = Math.floor(Math.random() * 10);
console.log(kompBira);
	if( korisnikBira > 10 ){
		console.log("Pogresan unos.")
	} else if (korisnikBira == kompBira){
	    console.log("Pun pogodak.")
	} else {
		console.log("Vise srece drugi put.")
	}




// // 2. Napisati funkciju koja prima 4 broja, posebno sabira pozitivne,
// // posebno negativne i vraća njihov proizvod (pozitivni * negativni)
function broj (niz) {
	var sumaNeg = 0;
	var sumaPoz = 0;
        for ( var i=0; i<niz.length; i++){
	   	if( niz[i]<0){
                        sumaNeg = sumaNeg + niz[i]; 
                } else {
                       sumaPoz = sumaPoz + niz[i];
                }
	}
        console.log(sumaNeg);
        console.log(sumaPoz);
        console.log(sumaPoz*sumaNeg);
}
var niz1 = [6, -2, 6, 1];
broj (niz1);


// // 3. Napisati funkciju koja prima niz kao parameter i sabira prvi i poslednji element niza. Funkcija treba da podržava niz bilo
//  koje veličine. 
// // Hint: iskoristiti length.
function three (niz){
        var suma = 0;
        for ( var i=0; i<niz.length; i++){
                if ( i === 0  || i === niz.length-1 ){
                        suma = suma + niz[i];
                } 
        }
        console.log(suma);
}
three (niz1);


// // 4. Napisati funkciju koja prima niz brojeva i sabira poslednja tri. Funkcija treba da podržava niz bilo koje veličine.
function four (niz){
        var suma = 0;
        for ( var i=0; i<niz.length; i++){
                if ( i === niz.length-3 || i === niz.length-2  || i === niz.length-1 ){
                        suma = suma + niz[i];
                } 
        }
        console.log(suma);
}
four (niz1);

// // 5. Napisati funkciju koja prima niz i dva broja koji predstavljaju indexe. Zameniti vrednosti u nizu na datim indexima.
//  Primer: ako su indexi 3 i 10  potrebno je zameniti vrednosti niz[3] i niz[10]
function five (niz, indexOne, indexTwo ) {
        var temp = niz[indexOne];
        niz[indexOne] = niz[indexTwo];
        niz[indexTwo] = temp;
        console.log(niz);
}
var niz5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
five (niz5,3,10);

// // 6. Napisati funkciju koja prima niz i vraća drugi niz sa obrnutim redosledom elemenata, tako da je poslednji element u 
// prvom nizu bude prvi element u poslednjem nizu, pretposlednji drugi, itd... 
function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    console.log(ret);
}
var arr = [3,5,7,8]
reverseArr(arr);
// // Primer: [15, 3, 9, 69, 100] > [100, 69, 9, 3, 15]


// // 7. Napisati funkciju koja prima tri parametra. Prvi parametar treba da bude niz brojeva, drugi parametar početni index
//  i drugi krajnji index. Sabrati elemente niza od početnog do krajnjeg indexa.

// // Primer ulaznih podataka [10, 33, 77, 50, 9, 17, 3, 120], 2, 5 > sabrati brojeve od 2. do 5. indexa uključujuci i 2. i 5.
 
// // Primer izlaznih podataka: 153
function seven (niz, ind1, ind2){
        var suma = 0;
        for ( var i=ind1; i<=ind2; i++){
                suma = suma + niz[i];
        }
        console.log(suma);
}
var niz6 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
seven (niz6,4,8); 


