function extraiLinks (arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function checaStatus (listaURLs) {
    const arrStatus = await Promise
    .all(
        listaURLs.map(async (url) => {
            const response = await fetch(url);
            return response.status;
        })
    )
    return arrStatus;
}

export default async function listaValidada (listaDelinks) {
    const links = extraiLinks(listaDelinks);
    const status = await checaStatus(links);

    return listaDelinks.map((objeto, indice) => ({
        ...objeto, 
        status: status[indice]
    }))
}

//[gatinho salsicha](http://gatinhosalsicha.com.br/)