function extraiLinks (arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

export default function listaValidada (listaDelinks) {
    return extraiLinks(listaDelinks);
}