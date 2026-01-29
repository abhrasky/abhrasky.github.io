import { blogPostsTwoData } from "@/db/blogPostsTwoData"
import BlogCard from "./blogCard"
import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const BlogsTwo = () => {
  return (
    <section id="blog" className="news-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <SectionTitle>
            <SectionTitle.SubTitle>Latest Blog</SectionTitle.SubTitle>
            <SectionTitle.Title>Our Latest Blog</SectionTitle.Title>
          </SectionTitle>
          <Link to="/news" className="theme-btn wow slideUp" data-delay=".5">
            All Article
            <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </div>
        <div className="row">
          {blogPostsTwoData.map((news) => (
            <div
              key={news.id}
              className="col-xl-4 col-lg-6 col-md-6 wow slideUp"
              data-delay={news.delay}
            >
              <BlogCard news={news} />
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default BlogsTwo