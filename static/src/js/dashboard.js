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

function toggleDrawerView(state){
    var drawerOverlay = document.getElementsByClassName("drawer-overlay")[0];
    var drawerElement = document.getElementsByTagName("body")[0];

    if(drawerOverlay != undefined){
        drawerOverlay.parentNode.removeChild(drawerOverlay);
    }

    if(state == "out"){
        drawerElement.classList.remove("drawer-long");
        drawerElement.classList.add("drawer-short");
    }
    else if(state == "enter"){
        drawerElement.classList.remove("drawer-short");
        drawerElement.classList.add("drawer-long");
    }

    return;
}

function removeClearfix(){
    var element = document.getElementsByClassName("clearfix");
    var i = 0;

    while(element[i] != undefined){
        element[i].parentNode.removeChild(element[i]);
        i++;
    }

    return;
}

window.onload = function(){
    document.getElementsByTagName("body")[0].classList.add("drawer-short");
    this.modifyDrawerToggler();
    this.removeClearfix();
    // this.document.getElementById("odooAppDrawer").onmouseover = function(){toggleDrawerView("enter")};
    // this.document.getElementById("odooAppDrawer").onmouseout = function(){toggleDrawerView("out")};

    return;
}