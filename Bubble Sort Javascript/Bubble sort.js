let nganu = [1, 5, -1, 11, 9, 4, 2]


function bubbleSorting(nganu) {
    for (let i = 0; i < nganu.length; i++) {
        console.log({ i, nganu })
        for (let j = i + 1; j < nganu.length; j++) {
            if (nganu[i] < nganu[j]) {
                [nganu[i], nganu[j]] = [nganu[j], nganu[i]]
                console.log({ j, nganu })
                console.log("-------------------------------------------------------")
            }
        }
    }
    return nganu;
}
console.log(bubbleSorting(nganu));

console.log("INI yang biasa")

let ngene = [1, 5, -1, 11, 9, 4, 2]


function bubbleSorting2(ngene) {
    //Iterating  from 0 to i(0-6) < ngene.length(7) that means it will stop at 6
    for (let i = 0; i < ngene.length; i++) {
        console.log({ i, ngene })
        // iterating from i+1 to i+1(1-6) < ngene.length(7)
        for (let j = i + 1; j < ngene.length; j++) {
            //comparing value of ngene index[i] to ngene index[j(1-6)]
            if (ngene[i] > ngene[j]) {
                let A = ngene[i];
                ngene[i] = ngene[j];
                ngene[j] = A;
                console.log({ j, ngene })
                console.log("----------------------------")
            }
        }
    }
    console.log("ini lenght ====>  " + ngene.length)
    return ngene;
}
console.log(bubbleSorting2(ngene));

let ngono = [1, 5, -1, 11, 9, 4, 2]

function bubbleSorting3(ngono) {
    for (let i = 0; i < ngono.length; i++) {
        console.log({ i, ngono })
        //iterating from 0 and stop when its come to 5, because 5(j) < 6(7(ngono.length)-0(first i index)- 1), index will increment 
        for (let j = 0; j < ngono.length - i - 1; j++) {
            if (ngono[j] > ngono[j + 1]) {
                let A = ngono[j];
                ngono[j] = ngono[j + 1];
                ngono[j + 1] = A;
                console.log({ j, ngono })
                console.log("----------------------------")
            }
        }
    }
    return ngono;
}
console.log(bubbleSorting2(ngono));

    // https://www.geeksforgeeks.org/bubble-sort/
