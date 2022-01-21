const showShoes = async () => {
    try {
        const {data} = await axios.get('/api/v1/shoes');
        const { name: firstName, link: firstLink, price: firstPrice, featured: firstFeatured, rating: firstRating, createdAt: firstCreatedAt, anime: firstanime } = data.shoe[0];
        const { name: lastName, link: lastLink, price: lastPrice, featured: lastFeatured, rating: lastRating, createdAt: lastCreatedAt, anime: lastanime } = data.shoe[data.shoe.length - 1];
        document.getElementById('getAllShoes').innerHTML += `
            {
                "name": "${firstName}",
                "link": "${firstLink}"
                "price": ${firstPrice},
                "featured": ${firstFeatured},
                "rating": ${firstRating},
                "createdAt": "${firstCreatedAt},
                "anime": "${firstanime}"
            },
            ...
            {
                "name": "${lastName}",
                "link": "${lastLink}"
                "price": ${lastPrice},
                "featured": ${lastFeatured},
                "rating": ${lastRating},
                "createdAt": "${lastCreatedAt},
                "anime": "${lastanime}"
            },`;
    } catch (err) {
        console.log(err);
    }
};

const getOneShoe = async () => {
    try {
        const {data} = await axios.get('/api/v1/shoes/61ba64a93c0b0bed8453e1b8');
        const { name, link, price, featured, rating, createdAt, anime } = data.shoe;
        document.getElementById('getOneShoe').innerHTML += `
            {
                "name": "${name}",
                "link": "${link}",
                "price": ${price},
                "featured": ${featured},
                "rating": ${rating},
                "createdAt": "${createdAt},
                "anime": "${anime}"
            }`;
    } catch (err) {
        console.log(err);
    }
};

showShoes();
getOneShoe();