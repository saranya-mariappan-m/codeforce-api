

const getCodeForceUsers = async () => {

    const usersResponse = await fetch(
        'https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan',
        {
            method: 'GET',
        }
    );

    const usersData = await usersResponse.json();
    console.log(usersData);
    const userResult = [...usersData.result];
    const data = {};
    const divWrapper = document.createElement('div');
    divWrapper.classList.add('container-fluid', 'flex-row', 'justify-content-evenly');
    userResult.forEach(element => {
        const profileWrapper = document.createElement('div');
        profileWrapper.classList.add('flex-items', 'mt-2');

        const titlePhoto = document.createElement('img');
        const userName = document.createElement('div');
        userName.classList.add('user-name', 'fw-bold');
        const city = document.createElement('div');
        city.classList.add('city');
        const rank = document.createElement('div');
        rank.classList.add('rank', 'text-capitalize');

        titlePhoto.setAttribute('src', element.titlePhoto);
        userName.innerHTML = element.firstName + ' ' + element.lastName;
        if (element.city != undefined) {
            city.innerHTML = element.city + ', ' + (element.country || '');
        }

        rank.innerHTML = element.rank + ' in the Organization ' + (element.organization || 'XYZ');

        profileWrapper.appendChild(titlePhoto);
        profileWrapper.appendChild(userName);
        profileWrapper.appendChild(city);
        profileWrapper.appendChild(rank);
        divWrapper.appendChild(profileWrapper);
    });
    const mainContent = document.querySelector("section");

    mainContent.appendChild(divWrapper);
}
getCodeForceUsers();