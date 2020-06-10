function clearAll( ){
let inputs = document.getElementsByTagName("input");
   for(var i=0; i<inputs.length; i++ ){
       inputs[i].value = "";
   }

}



function createCode() {
    var getData = document.getElementById("data").value;
    var secondData = document.getElementById("data2").value;


    // Using the JSBarcode library https://github.com/lindell/JsBarcode. 
    JsBarcode("#barcode", getData, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 35,
        displayValue: true
    });
    JsBarcode("#barcode2", secondData, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 35,
        displayValue: true
    });


}

function printCode(){

    //Creates a page with the  barcode displayed

    var dataUrl = document.getElementById('barcode').toDataURL(); //attempt to save base64 string to server using this var  
    var dataUrl2 = document.getElementById('barcode2').toDataURL(); //attempt to save base64 string to server using this var  
   
    var windowContent = '<!DOCTYPE html>';

    windowContent += '<html>'
    windowContent += '<head><title>Print barcode</title><link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></head>';
    windowContent += '<body>'
    windowContent += '<div class="container">'

    windowContent += '<div class="row">'
    windowContent += '<div class="col" style="text-align:center;">'
    windowContent += '<h1 style="font-size:12px;"> Data Barcode </h1>';
    windowContent += '<img src="' + dataUrl + '" style="margin-left:100px;">';
    windowContent += ' </div>';
    windowContent += '<div class="col" style="text-align:center;">'
    windowContent += '<h1 style="font-size:12px;"> Data Barcode </h1>';
    windowContent += '<img src="' + dataUrl2 + '" style="margin-left:100px;">';
    windowContent += ' </div>';
    windowContent += ' </div>';
    windowContent += ' </div>';
    windowContent += '</body>';
    windowContent += '</html>';
    //opens the page
    var printWin = window.open('', '', 'width= 800,height=800');
    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.focus();

    //prints and then closes the page. 
    printWin.print();
    printWin.document.close();
    printWin.close();
    console.log("barcode");
}