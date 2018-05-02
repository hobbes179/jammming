const clientId = '7677eba86972410da9d6ab22fa85a838';
const redirectURI = 'http://localhost:3000/';
let accessToken = '';

const Spotify = {

  getAccessToken() {
    if (accessToken !== '') {
      return accessToken;
    }
    else if (window.location.href.match(/access_token=([^&]*)/)) {
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      let expiresIn = window.location.href.match(/expires_in([^&]*)/)[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      window.location.assign(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`);
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      let expiresIn = window.location.href.match(/expires_in([^&]*)/)[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    }

  },

  search(term) {
    fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {Authorization: `Bearer ${accessToken}`}
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
    // Code to execute with jsonResponse
    console.log(jsonResponse);
    // .map(track => ({
    //   id: track.id,
    //   name: track.name,
    //   artist: track.artists[0].name,
    //   album: track.album.name,
    //   uri: track.uri
    // }))
  });
  }


}

export default Spotify;
