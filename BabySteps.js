var isi = process.argv.length;
var xxx = 0;
for (var x = 2; x < isi; x++) {
    xxx += Number(process.argv[x]);
};
console.log(xxx);