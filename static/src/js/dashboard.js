// Global Variables
var prevToggleID;

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

function drawerScroll(event){
    var scrollY = document.getElementById("odooAppDrawer").scrollTop;
    var scrollYMax = document.getElementById("odooAppDrawer").scrollTopMax;
    var scrollYChange = arguments[0].deltaY;

    if(scrollYChange < 0){
        document.getElementById("odooAppDrawer").scrollTop += -10;
    }
    else if(scrollYChange > 0){
        document.getElementById("odooAppDrawer").scrollTop += 10;
    }

    if(scrollY > scrollYMax){
        document.getElementById("odooAppDrawer").scrollTop = scrollYMax;
    }
    else if(scrollY < 0){
        document.getElementById("odooAppDrawer").scrollTop = 0;
    }

    return;
}

function submenuIDAndOnClickAssignment(){
    var parentNode = document.getElementsByClassName("oe_secondary_menu");
    for(var i = 0; i < parentNode.length; i++){
        var parentID = parentNode[i].getAttribute("data-menu-parent");
        var dropdownNode = parentNode[i].getElementsByClassName("oe_secondary_submenu");
        for(var j = 0; j < dropdownNode.length; j++){
            dropdownNode[j].id = "dropdown_" + parentID + "_" + j;
            dropdownNode[j].parentElement.getElementsByClassName("dropdown-toggle")[0].setAttribute("toggled-id", "dropdown_" + parentID + "_" + j);
            dropdownNode[j].parentElement.getElementsByClassName("dropdown-toggle")[0].onclick = function(){detectDropdownToggle(event);};
        }
    }

    parentNode = document.getElementsByClassName("oe_secondary_submenu");
    for(var i = 0; i < parentNode.length; i++){
        var dropdownNode = parentNode[i].getElementsByClassName("oe_menu_leaf");
        for(var j = 0; j < dropdownNode.length; j++){
            dropdownNode[j].addEventListener("click", function(event){
                if(document.getElementsByClassName("o_sub_menu_content")[0].getElementsByClassName("active")[0] != undefined){
                    document.getElementsByClassName("o_sub_menu_content")[0].getElementsByClassName("active")[0].classList.remove("active");
                }
                if(event.currentTarget.parentElement.parentElement.parentElement.getElementsByClassName("active")[0] != undefined){
                    event.currentTarget.parentElement.parentElement.parentElement.getElementsByClassName("active")[0].classList.remove("active");
                }

                if(document.getElementsByClassName("o_sub_menu_content")[0].getElementsByClassName("open")[0] != undefined){
                    document.getElementsByClassName("o_sub_menu_content")[0].getElementsByClassName("open")[0].classList.add("active");
                }
                else if(document.getElementsByClassName("o_sub_menu_content")[0].getElementsByClassName("active-open")[0] != undefined){
                    document.getElementsByClassName("o_sub_menu_content")[0].getElementsByClassName("active-open")[0].classList.add("active");
                }

                event.currentTarget.parentElement.classList.add("active");

                return;
            });
        }
    }

    return;
}

function rearrangeNavbarDropdownMenu(){
    var dropdownMenu = document.getElementsByClassName("oe_secondary_submenu");
    var headerEl = document.getElementsByTagName("header")[0]; 
    var newEl = document.createElement("div");
    newEl.id = "dropdownMenu";

    headerEl.appendChild(newEl);

    for(var i = 0; i < dropdownMenu.length; i++){
        newEl.appendChild(dropdownMenu[0]);
    }

    return;
}

function detectDropdownToggle(event){
    var currentToggleID = event.currentTarget.getAttribute("toggled-id");
    var elementID = document.getElementById(currentToggleID);
    
    if(elementID.style.display == "none" || elementID.style.display == ""){
        elementID.style.display = "-webkit-box";
    }
    else{
        elementID.style.display = "none";
    }

    if(prevToggleID != undefined && prevToggleID != currentToggleID){
        var prevElementID = document.getElementById(prevToggleID);
        prevElementID.style.display = "none";
    }

    prevToggleID = currentToggleID;
    // debugger;

    return;
}

function bodyClickDetector(event){
    if(event == undefined)
        return;
        
    var clickedElement = event.target;

    if(clickedElement.classList.contains("dropdown-toggle") == false && clickedElement.classList.contains("oe_secondary_submenu") == false){
        if(prevToggleID != null)
            document.getElementById(prevToggleID).style.display = "none";
    }

    if(clickedElement.classList.contains("oe_secondary_submenu") == true || clickedElement.classList.contains("oe_secondary_menu") == true){
        var elID = clickedElement.id;
        document.querySelector("a[toggled-id=\"" + elID + "\"]").parentElement.classList.add("active-open");
    }
    else{
        if(document.getElementsByClassName("active-open")[0] != undefined)
            document.getElementsByClassName("active-open")[0].classList.remove("active-open");
    }

    return;
}

window.onload = function(){
    document.getElementsByTagName("body")[0].classList.add("drawer-short");
    removeClearfix();
    adjustDrawerItem();
    forcaLogoSetup();
    submenuIDAndOnClickAssignment();
    rearrangeNavbarDropdownMenu();
    document.getElementById("odooAppDrawer").onmouseover = function(){toggleDrawerView("enter");};
    document.getElementById("odooAppDrawer").onmouseout = function(){toggleDrawerView("out");};
    document.getElementById("odooAppDrawer").onwheel = function(){drawerScroll(event);};
    document.getElementsByTagName("body")[0].onclick = function(){bodyClickDetector(event);};

    return;
};