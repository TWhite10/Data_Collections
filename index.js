

//R-ALAB 308.4.1: Working with Data Collections


//part one from previous code


// let csvData  = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// function csvFile(csvString){
//     let rows = csvString.split(`\n`);

//     let data = [];

//     for (let i = 0; i < rows.length; i++){
//         let cells = rows[i].split(`,`);
//         data.push(cells);
        
//     } return data;
   
// } 
// let output = csvFile(csvData);
// console.log(output);


/////part two

// let csvData  = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// function csvFile(csvString){
//     let rows = csvString.split(`\n`);
//     let headers = rows[0].split(`,`);
//     let headerslength = headers.length;
//     let columnnum = rows[0].split(`,`).length;
//     let data = [];

//     for (let i = 0; i < rows.length; i++){
//         let cells = rows[i].split(`,`);
//         data.push(cells);
        
//     } return data;
   
// } 
// let output = csvFile(csvData);
// console.log(output);
// console.log(columnnum)


// //part three
// let csvData  = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// function csvFile(csvString){
//     let rows = csvString.split(`\n`);
//     let headers = rows[0].split(`,`).map(header => header.toLowerCase());
  
//     let arrData = [];

//     for (let i =1; i < rows.length; i++){
//         let cells = rows[i].split(`,`);
//         objData = {};

//         for (let x =0 ; x < headers.length; x++){
//             objData[headers[x]] = cells[x];
//         }
//         arrData.push(objData);
       
//     } return arrData;
   
// } 
// let output = csvFile(csvData);
// console.log(output);

//part 4 
let csvData  = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

function csvFile(csvString){
    let rows = csvString.split(`\n`);
    let headers = rows[0].split(`,`).map(header => header.toLowerCase());
    let arrData = [];
    for (let i =1; i < rows.length; i++){
        let cells = rows[i].split(`,`);
        objData = {};

        for (let x =0 ; x < headers.length; x++){
            objData[headers[x]] = cells[x];
        }
        arrData.push(objData);
    } 
    return arrData;
} 
let output = csvFile(csvData);
console.log(output);

