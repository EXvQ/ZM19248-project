function imgchange1() { document.getElementById('collection').src = "./image/mycollection2.jpg"; }
function imgchange2() { document.getElementById('collection').src = "./image/mycollection1.jpg"; }

function imgchange() 
{
    if (document.getElementById('collection').src.includes("collection2")) 
    {
        document.getElementById('collection').src = "./image/mycollection1.jpg";
    } 
    else 
    {
        document.getElementById('collection').src = "./image/mycollection2.jpg";
    }
}