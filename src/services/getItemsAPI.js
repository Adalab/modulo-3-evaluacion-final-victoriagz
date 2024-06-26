const getItemsAPI = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const parsedUsers = data.results.map((user) => {
        return {
          id: user.id,
          name: user.name,
          picture: user.image,
          specie: user.species,
          status: user.status,
          origin: user.origin.name,
          episodes: user.episode.length,
        };
      });
      return parsedUsers;
    });
};

export default getItemsAPI;
