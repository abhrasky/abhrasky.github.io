import { BlogPostDataType } from "@/db/blogPostsThreeData"
import { Link } from "react-router-dom"

const BlogCard = ({ news, className }: { news: BlogPostDataType, className?: string }) => {
    return (
        <div className={`news-card-items ${className}`}>
            <div className="news-image">
                <img src={news.image} alt="news-img" />
                <div className="post-date">
                    <h3>
                        {news.date.day} <br />
                        <span>{news.date.month}</span>
                    </h3>
                </div>
            </div>
            <div className="news-content">
                <ul>
                    <li>
                        <i className="fa-regular fa-user" />
                        By {news.author}
                    </li>
                    <li>
                        <i className="fa-solid fa-tag" />
                        {news.category}
                    </li>
                </ul>
                <h3>
                    <Link to={news.link}>{news.title}</Link>
                </h3>
                <Link to={news.link} className="theme-btn-2 mt-3">
                    read More
                    <i className="fa-solid fa-arrow-right-long" />
                </Link>
            </div>
        </div>
    )
}

export default BlogCard