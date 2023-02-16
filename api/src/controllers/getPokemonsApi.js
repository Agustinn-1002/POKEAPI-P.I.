const axios = require('axios');

const getApi = async () => {
    const {data} = await axios('https://pokeapi.co/api/v2/pokemon?limit=40');
    let info = data.results;
    for (let e of info) {
        const {data} = await axios(e.url)
        e.id=data.id;
        e.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`;
        e.types = data.types.map(i => i.type);
        e.attack = data.stats[1]['base_stat'];
    }
    return info;
}

module.exports = {
    getApi
}

