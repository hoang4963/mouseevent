imgmr = document.getElementById('image');
window.onload= init;
function init()
{
    imgmr.style.position = 'relative';
    imgmr.style.left = '0px';
}
function moveright()
{
    imgmr.style.left = parseInt(imgmr.style.left) + 10 + 'px';
}