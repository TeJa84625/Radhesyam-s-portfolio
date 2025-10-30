fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const home = data.home;

        document.getElementById('profile-img').src = home.profile;
        document.getElementById('profile-name').textContent = home.name;
        document.getElementById('profile-name-nav').textContent = home.name;
        document.getElementById('profile-position').textContent = home.position;
        document.getElementById('profile-university').textContent = home.university;
        document.getElementById('university-location').textContent = home.location;
        document.getElementById('profile-biography').textContent = home.biography;

        const linksList = document.getElementById('profile-links');
        Object.entries(home.links).forEach(([url, imageUrl]) => {
            const linkElement = document.createElement('a');
            linkElement.href = url;
            linkElement.target = "_blank";
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = `Link to ${url}`;
            imageElement.classList.add('w-8', 'h-8', 'transition', 'hover:scale-110'); 
            linkElement.appendChild(imageElement);
            linksList.appendChild(linkElement);
        });

        const interestsList = document.getElementById('interests-list');
        home.interests.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            interestsList.appendChild(li);
        });

        const educationList = document.getElementById('education-list');
        home.education.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `🎓 ${item}`;
            educationList.appendChild(li);
        });

        const membershipsList = document.getElementById('memberships-list');
        home.professional_memberships.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            membershipsList.appendChild(li);
        });

        const editorialList = document.getElementById('editorial-list');
        home.editorial_board_member.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            editorialList.appendChild(li);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));

const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });