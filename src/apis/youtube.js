import axios from 'axios';

const KEY = 'AIzaSyCvan5LeLmGfZ1ere_OMTkEBA6bjvsFD-U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
}
);
