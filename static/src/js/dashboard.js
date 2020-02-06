var drawerState = "close";

function modifyDrawerToggler(){
    var aToggler = document.getElementsByClassName("app-drawer-toggle")[0];
    var btnToggler = document.createElement("button");
    btnToggler.className = "drawer-toggle navbar-collapse collapse btn btn-default app-drawer-toggle";
    btnToggler.onclick = "toggleDrawerView()";
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
        drawerElement.style = "width: 250px !important;"
    }
    else if(drawerState == "open"){
        drawerState = "close";
        drawerElement.style = "width: 200px !important;"
    }

    return;
}

window.onload = function(){
    this.modifyDrawerToggler();

    return;
}