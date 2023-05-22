const process = require('process');

const argv = process.argv

const fs = require('fs');

const file = argv[2]
const value = argv[3]

    fs.readFile(file,{encoding: 'utf8'},(err,data)=>{
        if(err){
            console.log("Something Wrong")
        }else{
            let arr = data.split(" ");
            let count = 0
            
            for(let i=0;i<=arr.length-1;i++){
                if(arr[i]==value){
                    count++
                }
            }
            console.log(count)
        }
    })

