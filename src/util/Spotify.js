const clientId = '7677eba86972410da9d6ab22fa85a838';
const redirectURI = 'http://localhost:3000/';
//const redirectURI = 'https://hobbes179.github.io/jammming';
//const redirectURI = 'hobbes179-jammming.surge.sh';
let accessToken = '';

const Spotify = {

  getAccessToken() {
    if (accessToken !== '') {
      console.log('access token is ' + accessToken);
      return accessToken;
    }
    // Check to see if the URL contains the access token and expiration info
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      console.log('access token is ' + accessToken);
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    accessToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, { headers: headers }
      ).then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Search Request failed!');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
    // Code to execute with jsonResponse
    if (!jsonResponse.tracks) {
      return [];
    }
    console.log(jsonResponse);
    return jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }));
    });
  },

  savePlaylist(playlistName, trackURIs) {

    // Make sure both input fields are present and set up variables
    if (playlistName==='' || trackURIs==='') {return};
    accessToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    // GET user's Spotify ID
    return fetch(`https://api.spotify.com/v1/me`, { headers: headers }
      ).then(response => response.json()
      ).then(jsonResponse => {
      userId = jsonResponse.id;

    // POST new playlist on user's Spotify account
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({name: playlistName})
      }).then(response => response.json()
      ).then(jsonResponse => {
      const playlistId = jsonResponse.id;

    //POST playlist tracks to new playlist
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({uris: trackURIs})
      })
    });
  });
  }


}

export default Spotify;
