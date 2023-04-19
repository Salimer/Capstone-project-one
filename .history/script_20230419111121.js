const featuredTeams = [
    {
        image: "Assets/teams/nrg.jpg",
        name: "NRG Esports",
        region: "(North America)",
        description: "NRG Esports is a top-performing North American team that has won several major Rocket League tournaments. The team consists of players GarrettG, jstn, and SquishyMuffinz."
    }
];

featuredTeams.forEach((team) => {

    // create article element
    const container = document.createElement('article');
    container.classList.add('card, d-flex', 'flex-row', 'justify-content-end', 'p-2', 'my-2');
    
    // create image div 
    const imageHolder = document.createElement('div');
    imageHolder.classList.add('featured-image-holder', 'd-flex', 'justify-content-end', 'align-items-end');
    container.appendChild(imageHolder);

    // create image element
    const image = document.createElement('img');
    image.src = team.image;
    image.alt = team.name;
    imageHolder.appendChild(image);

    // create team details div
    const teamDetails = document.createElement('div');
    teamDetails.classList.add('team', 'd-flex', 'flex-column', 'ps-2');
    container.appendChild(teamDetails);

    // create team name
    const teamName = document.createElement('h5');
    teamName.className = "card-title";
    teamName.inner
    teamDetails.appendChild(teamName);

    //
})

document.querySelector('.featured-cards').appendChild(container);

