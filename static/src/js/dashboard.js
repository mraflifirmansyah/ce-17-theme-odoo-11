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
    var drawerElement = document.getElementById("odooAppDrawer");

    if(drawerState == "close"){
        drawerState = "open";
        drawerElement.classList.remove("drawer-close-custom");
        drawerElement.classList.add("drawer-open-custom");
    }
    else if(drawerState == "open"){
        drawerState = "close";
        drawerElement.classList.remove("drawer-open-custom");
        drawerElement.classList.add("drawer-close-custom");
    }

    return;
}

window.onload = function(){
    this.modifyDrawerToggler();
    this.document.getElementById("drawerToggleBtn").onclick = function(){toggleDrawerView()};

    return;
}