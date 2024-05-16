window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');

    function toggleButtons(activeBtn, inactiveBtn) {
        activeBtn.classList.add('active');
        activeBtn.classList.remove('inactive');
        inactiveBtn.classList.remove('active');
        inactiveBtn.classList.add('inactive');
    }

    toggleButtons(btn1, btn2);

    btn1.addEventListener('click', function(event) {
        event.preventDefault();
        toggleButtons(btn1, btn2);
        document.getElementById('dropdown-container').style.display = 'block';
        document.getElementById('dropdown-container-2').style.display = 'none'; // Ocultar botón 5 al cambiar a botón 1
    });

    btn2.addEventListener('click', function(event) {
        event.preventDefault();
        toggleButtons(btn2, btn1);
        document.getElementById('dropdown-container').style.display = 'none';

        document.getElementById('dropdown-container-2').style.display = 'block';
    });

    document.getElementById('dropdown-container').style.display = 'block';
});

function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.btn-dropdown')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const dropdown = dropdowns[i];
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        }
    }
}

function selectOption(option) {
    const dropdown = document.getElementById('dropdown-content');
    const dropdownBtn = document.querySelector('.btn-dropdown');
    
    dropdownBtn.textContent = option.textContent;

    dropdown.style.display = 'none';
}

function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-content');
    dropdown.style.display === 'block' ? dropdown.style.display = 'none' : dropdown.style.display = 'block';
}

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown-content');
    const dropdownBtn = document.querySelector('.btn-dropdown');
    
    if (!dropdown.contains(event.target) && event.target !== dropdownBtn) {
        dropdown.style.display = 'none';
    }
});

function toggleDropdownAdditional() {
    const dropdownContent = document.getElementById("dropdown-content-additional");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function selectAdditionalOption(option) {
    const dropdownBtn = document.getElementById('btn-dropdown-additional');
    
    dropdownBtn.textContent = option.textContent;

    const dropdownContent = document.getElementById("dropdown-content-additional");
    dropdownContent.style.display = 'none';
}

function toggleAdditionalDropdown(visible) {
    const dropdown = document.getElementById('dropdown-container');
    dropdown.style.display = visible ? 'block' : 'none';
}

function toggleButtons(btn1Active) {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const dropdownContainer2 = document.getElementById('dropdown-container-2');

    btn1.classList.toggle('active', btn1Active);
    btn2.classList.toggle('active', !btn1Active);

    dropdownContainer2.style.display = btn1Active ? 'none' : 'block';
}

btn1.addEventListener('click', function(event) {
    event.preventDefault();
    toggleButtons(true);
});

btn2.addEventListener('click', function(event) {
    event.preventDefault();
    toggleButtons(false);
});

function toggleDropdownAdditional2() {
    const dropdownContent = document.getElementById("dropdown-content-additional-2");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function selectAdditionalOption2(option) {
    const dropdownBtn = document.getElementById('btn-dropdown-additional-2');
    
    dropdownBtn.textContent = option.textContent;

    const dropdownContent = document.getElementById("dropdown-content-additional-2");
    dropdownContent.style.display = 'none';
}

function toggleAdditionalDropdown2(visible) {
    const dropdown = document.getElementById('dropdown-container-2');
    dropdown.style.display = visible ? 'block' : 'none';
}

function toggleDropdownAdditional3() {
    const dropdownContent = document.getElementById("dropdown-content-additional-3");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function selectAdditionalOption3(option) {
    const dropdownBtn = document.getElementById('btn-dropdown-additional-3');
    
    dropdownBtn.textContent = option.textContent;

    const dropdownContent = document.getElementById("dropdown-content-additional-3");
    dropdownContent.style.display = 'none';
}
