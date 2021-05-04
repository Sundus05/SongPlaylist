var addButton = document.querySelector('.add');
var frameContainer = document.querySelector('.frame-container');




addButton.addEventListener('click', function(){

    var items = document.querySelector(".items");
    var vname = document.getElementById('name').value;
    var url = document.getElementById('link').value;

    console.log(vname);
    console.log(url);

    var list = document.createElement("li");
    list.innerText = `${vname}`;
    items.appendChild(list);

    
    var res = url.split("v=");
    console.log(res);
    
    var id = res[1];
    console.log(id);

    // https://www.youtube.com/watch?v=jU3fpeV4mcU
    // <iframe width="853" height="480" src="https://www.youtube.com/embed/jU3fpeV4mcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    var output = `<iframe id="i-frame" width="1103" height="600" src="https://www.youtube.com/embed/${id}"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    `;

    frameContainer.innerHTML = `${output}`;

    console.log(output);








})






