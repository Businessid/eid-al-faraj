import {FETCH_ALBUMS, FETCH_ALBUMSDETAILS, FETCH_GALLERYCATEGORY} from "./types";

export const fetchAlbums = () => {
    return dispatch => {
        const body = {
            page: 1
        };
        fetch("https://admin.urbandmusic.com/api/albums", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: FETCH_ALBUMS,
                    value: res
                });
            })
            .catch(error => {
            });
    };
};

export const fetchAlbumsDetails = (albumid,artistid) => {
    return dispatch => {
        const body = {
            albumid: albumid?albumid:"",
            artistid: artistid?artistid:""
        };
        fetch("https://admin.urbandmusic.com/api/albumdetails", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                if(res.success){
                    dispatch({
                        type: FETCH_ALBUMSDETAILS,
                        value: res.result
                    });
                }else{
                    dispatch({
                        type: FETCH_ALBUMSDETAILS,
                        value: []
                    });
                }
                
            })
            .catch(error => {
            });
    };
};

export const fetchgallerycategory = () => {
    return dispatch => {
        const body = {
            "page":"1"
        };
        fetch("https://admin.urbandmusic.com/api/gallerycategory", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
              
                dispatch({
                    type: FETCH_GALLERYCATEGORY,
                    value: res.result
                });
            })
            .catch(error => {
               
            });
    };
};
