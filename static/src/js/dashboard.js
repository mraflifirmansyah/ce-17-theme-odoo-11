var drawerState = "long";

function modifyDrawerToggler(){
    var aToggler = document.getElementsByClassName("app-drawer-toggle")[0];
    var btnToggler = document.createElement("button");
    btnToggler.id = "drawerToggleBtn";
    btnToggler.className = "drawer-toggle navbar-collapse collapse btn btn-default app-drawer-toggle";
    btnToggler.innerHTML = "<span class=\"sr-only\">Toggle App Drawer</span> \
                                <i class=\"fa fa-th fa-lg app-drawer-icon-open\" \
                                t-translation=\"off\" \
                                aria-hidden=\"true\" \
                                />";
    aToggler.parentNode.replaceChild(btnToggler, aToggler);

    return;
}

function removeOverlay(){
    var drawerOverlay = this.document.getElementsByClassName("drawer-overlay")[0];
    drawerOverlay.parentNode.removeChild(drawerOverlay);

    return;
}

function toggleDrawerView(){
    var drawerElement = document.getElementsByTagName("body")[0];

    if(drawerState == "long"){
        drawerState = "short";
        drawerElement.classList.remove("drawer-long");
        drawerElement.classList.add("drawer-short");
    }
    else if(drawerState == "short"){
        drawerState = "long";
        drawerElement.classList.remove("drawer-short");
        drawerElement.classList.add("drawer-long");
    }

    return;
}

window.onload = function(){
    document.getElementsByTagName("body")[0].classList.add("drawer-long");
    this.modifyDrawerToggler();
    this.removeOverlay();
    this.document.getElementById("drawerToggleBtn").onclick = function(){toggleDrawerView()};

    return;
}