import PropTypes from "prop-types";

import styles from './news.module.css'

import NewsCard from "../NewsCard";

const News = ({articles}) => {
    return (
        <div className={styles.newsList}>
            {articles.map((article, index, arr) => {

                if(!article.urlToImage || !article.author || !article.content){
                    return null
                }

                return (
                    <NewsCard 
                        key={index}
                        src={article.urlToImage}
                        title={article.title}
                        publishedAt={article.publishedAt}
                        author={article.author}
                        sourceName={article.source.name}
                        description={article.description}
                        notLastChild= {!(arr.length === index+1)}
                    />
                )
            })}
        </div>
    )
}

News.prototype = {
    articles: PropTypes.array
}

export default News