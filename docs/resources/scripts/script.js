// #region VARIABLES ----------------------------
let isNavmenuOpen = false;
// #endregion -----------------------------------

// #region FUNCTIONS ----------------------------
function ClearPage() // unloads every page
{
    document.getElementById('about').style.display = 'none';
    document.getElementById('games').style.display = 'none';
    document.getElementById('links').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('nopage').style.display = 'none';
}

function SetPage(page) // loads specified page
{
    ClearPage();
    if (document.getElementById(page)) document.getElementById(page).style.display = 'block';
    else document.getElementById('nopage').style.display = 'block';

    document.getElementById('container').animate(
        [
            {transform: "translateX(-10px)"},
            {transform: "none"},
        ],
        {
            duration: 200,
            iterations: 1,
        },
    );
}

// Called on hash change - calls SetPage and passes in whatever page is in the hash
function UpdatePage()
{
    const hash = window.location.hash;
    if (hash.substring(1) == '') SetPage('about');
    else SetPage(hash.substring(1));
}

function ToggleNavmenu()
{
    const menu = document.getElementById('mobile-navmenu');

    if (!isNavmenuOpen)
    {
        menu.style.display = 'flex';
        isNavmenuOpen = true;
    }
    else
    {
        menu.style.display = 'none';
        isNavmenuOpen = false;
    }
}
// #endregion -----------------------------------

// #region EVENT LISTENERS ----------------------
document.addEventListener('DOMContentLoaded', () => {UpdatePage();});
window.addEventListener('hashchange', () => {UpdatePage();});
// #endregion -----------------------------------