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

function adjustDrawerItem(){
    var drawerParent = document.getElementById("appDrawerApps");
    var dashboards = document.querySelector("a[data-menu-name=\"Dashboards\"").parentNode;
    var crm = document.querySelector("a[data-menu-name=\"CRM\"").parentNode;
    var sales = document.querySelector("a[data-menu-name=\"Sales\"").parentNode;
    var contacts = document.querySelector("a[data-menu-name=\"Contacts\"").parentNode;
    var emailMarketing = document.querySelector("a[data-menu-name=\"Email Marketing\"").parentNode;
    var project = document.querySelector("a[data-menu-name=\"Project\"").parentNode;

    drawerParent.insertBefore(dashboards, drawerParent.children[0]);
    drawerParent.insertBefore(crm, drawerParent.children[1]);
    drawerParent.insertBefore(sales, drawerParent.children[2]);
    drawerParent.insertBefore(contacts, drawerParent.children[3]);

    drawerParent.removeChild(emailMarketing);
    drawerParent.removeChild(project);

    return;
}

function removeClearfix(){
    var drawerParent = document.getElementById("appDrawerApps");
    var clearfix = document.getElementsByClassName("clearfix");
    
    while(clearfix[0] != undefined)
        drawerParent.removeChild(clearfix[0]);

    return;
}

function forcaLogoSetup(){
    var elParent = document.getElementById("appDrawerAppPanelHead");
    var elLogo = elParent.getElementsByClassName("oe_logo")[0];
    elParent.insertBefore(elLogo, elParent.firstElementChild);

    var elRemove = elParent.getElementsByTagName("div");
    while(elRemove[0] != undefined)
        elParent.removeChild(elRemove[0]);
    elRemove = elParent.getElementsByClassName("oe_logo_edit")[0];
    elRemove.parentNode.removeChild(elRemove);

    var cloneSrc = elParent.getElementsByTagName("img")[0];
    var cloneDst = cloneSrc.cloneNode(true);
    cloneSrc.id = "logo-short";
    cloneDst.id = "logo-long";
    elLogo.appendChild(cloneDst);

    var elLogoShort = document.getElementById("logo-short");
    elLogoShort.setAttribute("src", "/forca_theme/static/src/img/favicon.ico");

    return;
}

window.onload = function(){
    document.getElementsByTagName("body")[0].classList.add("drawer-short");
    this.modifyDrawerToggler();
    this.removeClearfix();
    this.adjustDrawerItem();
    this.forcaLogoSetup();
    this.document.getElementById("odooAppDrawer").onmouseover = function(){toggleDrawerView("enter")};
    this.document.getElementById("odooAppDrawer").onmouseout = function(){toggleDrawerView("out")};

    return;
}