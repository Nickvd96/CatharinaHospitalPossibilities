const filters = document.querySelectorAll('.filter');
const searchBar = document.querySelector('.search-field');
let currentFilter = 'filter-functie';
let currentSearch = '';
// console.log(document.querySelectorAll('.filter'));

document.querySelector('.filter').style.backgroundColor = 'var(--darkpurple)';

searchBar.addEventListener('input', function (e) {
    // console.log(e.target.value);

    // CONVERT SEARCH INPUT TO LOWER CASE
    currentSearch = e.target.value.toLowerCase();
    console.log(currentSearch);

    const labels = document.querySelectorAll('.label');
    for (let j = 0 ; j < labels.length; j++) {
            // CONVERT LABEL TITLE TO LOWER CASE
            let labelTitle = labels[j].getElementsByTagName('H2')[0].innerText.toLowerCase();

            // CHECK WHETHER TITLE MATCHES SEARCH STRING
            if (labelTitle.indexOf(currentSearch) === -1 ) {
                labels[j].style.display = 'none';
            }

            else {
                labels[j].style.display = 'flex';
            }
        }
    }
);
