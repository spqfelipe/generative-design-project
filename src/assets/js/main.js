/*  
******************************************************
                 EVENT MODULE
******************************************************

This module has all events to track button click
*/

// EVNT - Download Button
const downloadBtn = document.getElementById('download-btn')

downloadBtn.addEventListener('click', (e) => {
    let finalCanvas = document.getElementById('finalCanvas')
    saveCanvas(finalCanvas, 'random_shit', 'png')
})


const refreshBtn = document.getElementById('refresh-btn')

refreshBtn.addEventListener('click', (e) => {
    location.reload()
})



