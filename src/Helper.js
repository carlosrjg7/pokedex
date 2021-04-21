export const fill = (number, len = 3) => "0".repeat(len - number.toString().length) + number.toString();

export const getId = (url) => {
 let splited = url.split('/');
 let realId = splited[splited.length - 2];
 return realId;
}

export const objToPokeArray = (obj) =>{
    let poke = [];

    poke.push({
        id: obj.id,
        name: obj.name,
        url: `https://pokeapi.co/api/v2/pokemon/${obj.id}/`
    });

    return poke;
}

export const imgSrc = (realId, idex, imgDefault) =>{
    let ImgSrc;
    if(realId > 0){ 
        ImgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ idex }.png`;
    }else{
        ImgSrc = imgDefault;
    }
    return ImgSrc;
}

export const getIdFromSpecie = (url) =>{
    let splited = url.split('/');
    let realId = splited[splited.length - 2];
 return realId;
}