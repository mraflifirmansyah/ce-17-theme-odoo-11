var drawerState = "close";

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

function toggleDrawerView(){
    var drawerElement = document.getElementsByTagName("body")[0];

    if(drawerState == "close"){
        drawerState = "open";
        drawerElement.classList.replace("drawer-long","drawer-short");
    }
    else if(drawerState == "open"){
        drawerState = "close";
        drawerElement.classList.replace("drawer-short","drawer-long");
    }

    return;
}

window.onload = function(){
    document.getElementsByTagName("body")[0].classList.add("drawer-long");
    this.document.getElementsByClassName("drawer-overlay")[0].remove();
    this.modifyDrawerToggler();
    this.document.getElementById("drawerToggleBtn").onclick = function(){toggleDrawerView()};

    return;
}