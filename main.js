var bagsBins = document.getElementById("bags");

var box = document.getElementById("boxes");


//var mainQR = new QRCode(document.getElementById("qrcode"));

function PrintElem(elem, jobNum, Current) {
    var mywindow = window.open('', 'PRINT', 'height=900,width=900');

    mywindow.document.write('<html><head><title>' + document.title + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h3 style="margin: auto;width: 50%; padding: 10px;"> </br>' + document.getElementById(Current).value + ' - ' + document.getElementById(jobNum).value + '</h3>');

    mywindow.document.write('<div style="margin: auto;width: 50%; padding: 10px;">' + document.getElementById(elem).innerHTML + '</div>');
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

   var askPrint = confirm("Would you like to print?");
   
   if(askPrint == true){
       mywindow.print();
    mywindow.close();
   }


}


function makeCode() {
    var mainQR = new QRCode(document.getElementById("qrcode"), {
        text: "Bags/Bins-" & bagsBins.value & "Boxes:" & box.value,
        width: 120,
        height: 120,
        colorDar: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H



    });
    mainQR.makeCode(bagsBins.value + box.value);
    PrintElem('qrcode', 'Jobs', 'current');
    mainQR.clear();

}