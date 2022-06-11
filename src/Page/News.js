import React, { useEffect, useState }from 'react'
import NewsItem from '../components/NewsItem'
import Spinner from '../components/Spinner'

const News = () => {
  const [article, setArticle] = useState([]) 
  const [loading, setLoading] = useState(false)
  const [page , setPage] = useState(1)
  const [results, setResults] = useState()
  const fetchData = async() =>{
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=2e1985f452d044e5b6cf13057e496dbe&pageSize=9&page=1`
    setLoading(true)
    let data =  await fetch(url);
    let parsedData = await data.json();
    setArticle(parsedData.articles);
    setResults(parsedData.totalResults);
    setLoading(false)

    
  }
  const handleNextClick = async()=>{
    console.log(page)
    if(page + 1 > Math.ceil(results/9)){
    }
    else{
      let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=2e1985f452d044e5b6cf13057e496dbe&pageSize=9&page=${page+1}`
      setLoading(true)
      let data = await fetch(url);
      let parsedData = await data.json();
      setPage(page + 1);
      setArticle(parsedData. articles)
      setLoading(false)
    }
  }
  const handlePrevClick = async()=>{
      let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=2e1985f452d044e5b6cf13057e496dbe&pageSize=9&page=${page-1}`
      setLoading(true)
      let data = await fetch(url);
      let parsedData = await data.json();
      setPage(page - 1);
      setArticle(parsedData. articles)
      setLoading(false)
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className="container my-5">
      <h2 className="mb-4">News - Top Headline</h2>
      {loading && <Spinner />}
      <div className="row">
                
        {!loading && article.map((element, i)=>{
          return(
          <div key={i} className="col-md-4 mb-4">
            <NewsItem title={element.title? element.title.slice(0, 45):''} description={element.description? element.description.slice(0, 95):''} imgurl={element.urlToImage} url={element.url} />
          </div>
          )
        })
        }
      </div>
      <div className="d-flex justify-content-between">
          <button disabled={page <= 1} className="btn btn-primary" onClick={handlePrevClick} >Previous</button>
          <button className="btn btn-primary" onClick={handleNextClick} >Next</button>
      </div>
      
    </div>
  )
}


export default News