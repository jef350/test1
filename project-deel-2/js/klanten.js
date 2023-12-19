function fetchCustomerData() {
    return fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => data.results[0]);
}

function displayCustomers(numCustomers) {
    const container = document.getElementById('customer-container');

    for (let i = 0; i < numCustomers; i++) {
        fetchCustomerData().then(customerData => {
            const customerCard = document.createElement('section');
            customerCard.classList.add('customer-card');

            const img = document.createElement('img');
            img.src = customerData.picture.large;
            img.alt = 'Customer Image';
            img.classList.add('customer-img');

            const detailsContainer = document.createElement('article');
            detailsContainer.classList.add('customer-details');

            const title = document.createElement('p');
            title.textContent = customerData.name.title;
            title.classList.add('customer-title');

            const name = document.createElement('p');
            name.textContent = `${customerData.name.first} ${customerData.name.last}`;
            name.classList.add('customer-name');

            const country = document.createElement('p');
            country.textContent = customerData.location.country;

            detailsContainer.appendChild(title);
            detailsContainer.appendChild(name);
            detailsContainer.appendChild(country);

            customerCard.appendChild(img);
            customerCard.appendChild(detailsContainer);

            container.appendChild(customerCard);
        });
    }
}

displayCustomers(15);

