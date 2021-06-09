createPage = () => {

  createBlocs = (blocs) => {
    const numberBlocks = Math.floor(Math.random() * 5) + 1
    for (let i = 0; i < numberBlocks; i++) {
      blocs.push({id: compteur, blocs: []})
      compteur++;
    }
  }

  const page = {blocs: []}
  let compteur = 1;
  createBlocs(page.blocs)
  page.blocs.forEach(bloc => {
    createBlocs(bloc.blocs)
    bloc.blocs.forEach(bloc => {
      createBlocs(bloc.blocs)
      bloc.blocs.forEach(bloc => {
        createBlocs(bloc.blocs)
      })
    })
  })
  return page
}


getBlock = (bloc, blocs) => {
  if (bloc.blocs.length > 0) {
    bloc.blocs.forEach(b => {
      blocs.push(b.id);
      getBlock(b, blocs);
    })
  }
}

const page = createPage(); // création d'un objet page aléatoire
console.log(page);

const idblocs = []; // tableau de stockage des id de chaque bloc
// On boucle sur le tableau de blocs contenu dans page
page.blocs.forEach(bloc => {
  idblocs.push(bloc.id); // stock les id des blocs
  getBlock(bloc, idblocs) // appel de la fonction récursives
})

console.log(idblocs);
