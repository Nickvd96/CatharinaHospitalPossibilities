const filters = document.querySelectorAll('.filter');
const searchBar = document.querySelector('.search-field');
let currentFilter = 'filter-afdeling';
let currentSearch = '';
// console.log(document.querySelectorAll('.filter'));

applyFilter();

function applyFilter() {
    // CHANGE COLORS OF FILTER BUTTONS AND UPDATE CURRENTFILTER TO TARGET
    for (let j = 0 ; j < filters.length; j++) {
        if (filters[j].id === currentFilter) {
            filters[j].style.backgroundColor = 'var(--darkpurple)';
        }

        else  {
            filters[j].style.backgroundColor = 'var(--lightpurple)';
        }
    }
    
    // CHANGE VISIBILITY OF LABELS AFTER CLICKING FILTER
    const labels = document.querySelectorAll('.label');
    for (let j = 0 ; j < labels.length; j++) {
        if (labels[j].id === currentFilter) {
            // console.log(labels[j].getElementsByTagName('H2'));

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

        else  {
            labels[j].style.display = 'none';
        }
    }
}

// ADD EVENTLISTENER THAT DETECTS SEARCH INPUT
searchBar.addEventListener('input', function (e) {
    // console.log(e.target.value);

    // CONVERT SEARCH INPUT TO LOWER CASE
    currentSearch = e.target.value.toLowerCase();
    
    applyFilter();
    }
);

// LOOP THROUGH ALL FILTERS
for (let i = 0 ; i < filters.length; i++) {
    filters[i].addEventListener("click", function (e) {
        currentFilter = e.target.id;
        // console.log("currentFilter = " + currentFilter);
        // console.log(e.target.id);
        
        applyFilter();  
    });
}