import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './SearchBar';
import ListPage from './ListPage';

function Launches() {
  const [post, setPost] = useState([])
  const [searchResults, setSearchResults] = useState([]);
  const { id } = useParams();
  const url = `https://api.spacexdata.com/v3/launches?${id}`;

  useEffect(() => {
   axios.get(url).then(res => {
    setPost(res.data)
    res.data.sort((a,b)=>a.flight_number>b.flight_number?1:-1)
   })
   .catch(err => {
    console.log(err)
   })
      
  }, [url])


  return (
    <>
      <SearchBar post={post} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  )
}
export default Launches