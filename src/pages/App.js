import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Loading  from '../components/Loading';
import Error from '../components/Error'
import News from '../components/NewsList';

import { getNews } from '../services/getNews';

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  const {id} = useParams()
  const DEFAULT_SEARCH = 'linux'

  useEffect(() => {
    setLoading(true)
    const fetchTechNews = async () => {
      const res = await getNews({
        searchQuery : id || DEFAULT_SEARCH
      })
      
      if(!res){
        setLoading(false)
        setError(true)

        return
      }

      setLoading(false)
      setArticles(res.articles)
    }

    fetchTechNews()
  }, [id])

  return (
    <div>
      <Navbar  />
      <Container>
        {loading && <Loading/>}
        { error && <Error/> }
        {(!loading && articles.length > 0) && (
          <News articles={articles} />
        )}
      </Container>
    </div>
  );
}

export default App;
