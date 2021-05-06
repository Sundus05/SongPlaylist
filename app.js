var addButton = document.querySelector('.add');
var frameContainer = document.querySelector('.frame-container');


//All Functions 
loadEventListeners();

function loadEventListeners() {

    addButton.addEventListener('click', addSong);
    document.addEventListener('DOMContentLoaded', getSongs);

}

// Fetch Songs From Local Storage
function getSongs() {
    var items = document.querySelector(".items");

    let songs;
    if (localStorage.getItem('songs') === null) {
        songs = [];
    } else {
        songs = JSON.parse(localStorage.getItem('songs'));
    }

    songs.forEach(function(song) {
        // var vname = document.getElementById('name').value;
        // var url = document.getElementById('link').value;

        //Creating Song List
        var list = document.createElement("li");
        items.appendChild(list);


        //Play Button 
        var playButton = document.createElement("i");
        playButton.setAttribute("class", "fas fa-play");
        list.appendChild(playButton);


        //Song Name
        var text = document.createElement("p");
        text.innerHTML = song.vname;
        list.appendChild(text);


        //Delete Button
        var delButton = document.createElement("i");
        delButton.setAttribute("class", "fas fa-trash-alt");
        delButton.setAttribute("id", "del");
        list.appendChild(delButton);

        //Play Song On Click
        list.onclick = function playSong() {

            var output = `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${song.id}?autoplay=1&mute=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

            frameContainer.innerHTML = `${output}`;

        }

        //Delete Function 
        delButton.onclick = function delSong() {
            console.log('deleted');
            delButton.parentElement.remove();
            deleteFromStorage(list);
            frameContainer.innerHTML = ``;

        }

    });
}


//Main Function
function addSong(e) {

    var items = document.querySelector(".items");
    var vname = document.getElementById('name').value;
    var url = document.getElementById('link').value;


    console.log(vname);
    console.log(url);

    //Creating Song List
    if (vname !== "" && url !== "") {
        var list = document.createElement("li");
        items.appendChild(list);


        //Play Button 
        var playButton = document.createElement("i");
        list.setAttribute("class", "fas fa-play");
        list.appendChild(playButton);


        //Song Name
        var text = document.createElement("p");
        text.innerHTML = `${vname}`;
        list.appendChild(text);

        //Delete Button
        var delButton = document.createElement("i");
        delButton.setAttribute("class", "fas fa-trash-alt");
        delButton.setAttribute("id", "del");
        list.appendChild(delButton);

        //Split URL
        var res = url.split("v=");

        var str = res[1].split("&");
        var id = str[0];
        console.log(id);

        var output = `<iframe id="i-frame" width="1000" height="600" src="https://www.youtube.com/embed/${id}?autoplay=1&mute=0"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    `;

        frameContainer.innerHTML = `${output}`;

        console.log(output);

        //Play Song 
        playButton.onclick = function playSong() {

                var output = `
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}?autoplay=1&mute=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

                frameContainer.innerHTML = `${output}`;

            }
            //Delete Function 
        delButton.onclick = function delSong() {
            alert("Are you sure?");
            console.log('deleted');
            delButton.parentElement.remove();
            deleteFromStorage(list);
            frameContainer.innerHTML = ``;


        }





    } else {
        alert("Fill input fields");
    }
    e.preventDefault();
    //Call Store Function
    storeSongs(vname, id);

    // Store in Local Storage
    function storeSongs(vname, id) {
        let songObj = {
            id: `${id}`,
            vname: `${vname}`
        }

        let songs;
        if (localStorage.getItem('songs') === null) {
            songs = [];
        } else {
            songs = JSON.parse(localStorage.getItem('songs'));
        }
        songs.push(songObj);
        localStorage.setItem('songs', JSON.stringify(songs));
    }


    document.getElementById('name').value = " ";
    document.getElementById('link').value = " ";




}

//Delete From Local Storage
function deleteFromStorage(songItem) {

    console.log(songItem);

    let songs;
    if (localStorage.getItem('songs') === null) {
        songs = [];
    } else {
        songs = JSON.parse(localStorage.getItem('songs'));
    }
    songs.forEach(function(song, songId) {
        if (songItem.textContent === song.vname) {
            console.log(songs.splice(songId, 1));
        }
        localStorage.setItem('songs', JSON.stringify(songs));

    })

}