const process = require('process');

const argv = process.argv

const fs = require('fs');

const file = argv[2]
const value = argv[3]

let count = 0
fs.readFile(file, { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.log("Something Wrong")
    } else {
        let arr = data.split("\n");
        console.log(arr)

        for (let i = 0; i <= arr.length - 1; i++) {

            let data1 = arr[i].split(" ")

            for (let j = 0; j <= data1.length - 1; j++) {

                if (data1[j] == value) {
                    count++
                }

            }

            // for(let i=0;i<=arr.length-1;i++){
            //     if(arr[i]==value){
            //         count++
            //     }
            // }
        }
    }
    console.log(count)
    })
