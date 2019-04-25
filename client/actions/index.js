import request from 'superagent'
import axios from 'axios'
import Clarifai from 'clarifai'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const STORE_IMAGE = 'STORE_IMAGE'
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'
export const STORE_SUGGESTIONS = 'STORE_SUGGESTIONS'
export const STORE_INFO = 'STORE_INFO'



export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}



export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts(subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}




export function fetchInfo(suggestion, dispatch) {
  const proxy = `https://cors-anywhere.herokuapp.com/`;
  request.get(`${proxy}https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=${suggestion.name}`)
    .then(res => {
      let pageid = 0;
      
      for (let key in res.body.query.pages){
        pageid = key
      }
  
      dispatch(storeInfo({name:suggestion.name,info:res.body.query.pages[pageid].extract}))
    })
    .catch(err => {
      console.log(err);
      dispatch(showError(err.message))
    });
}

export function fetchSuggestions(imgURL, dispatch) {
  const app = new Clarifai.App({ apiKey: '247d48331ee24177aa349ec95f734ceb' });
  app.models.predict(Clarifai.GENERAL_MODEL, imgURL)
    .then(response => {
      response.rawData.outputs[0].data.concepts.map(suggestion => fetchInfo(suggestion,dispatch))
      //dispatch(storeSuggestions(response.rawData.outputs[0].data.concepts))
    })
    .catch(err => {
      console.log(err);
      dispatch(showError(err.message))
    });
}

export function uploadImage(e) {
  return (dispatch) => {
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/what-ly/upload'
    const CLOUDINARY_UPLOAD_PRESET = 'Whatly'
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    dispatch(uploadingImage())
    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    }).then((res) => {
      console.log('res: ', res.data.secure_url);
      fetchSuggestions(res.data.secure_url, dispatch);
      dispatch(storeImage(res.data.secure_url));

    }).catch((err) => {
      console.log('err: ', err);
      dispatch(showError(err.message))

    })
  }
}

export const storeSuggestions = (suggestions) => {
  return {
    type: STORE_SUGGESTIONS,
    suggestions
  }
}

export const storeImage = (imageURL) => {
  return {
    type: STORE_IMAGE,
    image: imageURL
  }
}

export const storeInfo = (suggestionInfo) => {
  return {
    type: STORE_INFO,
    suggestionInfo
  }
}

export const uploadingImage = () => {
  return {
    type: UPLOAD_IMAGE
  }
}
