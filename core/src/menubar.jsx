import { useState } from 'react';
import './menubar.css'

function MenuBar(){

    function exportPDF() {
            var contentDiv = document.getElementById("print-content");
            var printWindow = window.open('', '_blank');
            printWindow.document.write('<html><head><title>Resume</title>');
            printWindow.document.write('<script src="https://kit.fontawesome.com/f270a71fbc.js" crossorigin="anonymous"></script>');
            printWindow.document.write('<link rel="stylesheet" type="text/css" href="/print.css">');
            printWindow.document.write('<link rel="preconnect" href="https://fonts.googleapis.com">');
            printWindow.document.write('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
            printWindow.document.write('<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;300;400;500;700&display=swap" rel="stylesheet">');
            printWindow.document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
            
            printWindow.document.write('</head><body>');
            printWindow.document.write(contentDiv.innerHTML);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        }
    




    return(
        <>
            <div id="menubar-container">
            <button id='print-button' className='button' onClick = {exportPDF}><i class="fa-regular fa-floppy-disk"></i></button>
            <button id='image-toggle' className='button'><i class="fa-solid fa-id-badge"></i></button>
            <button className='button'></button>
            <button className='button'></button>
            <button className='button'></button>
            </div>
        </>
    )
}

export default MenuBar
