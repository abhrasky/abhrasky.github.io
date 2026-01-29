import { Link } from "react-router-dom";

const PageTitle = ({ title, currentPage }: { title: string; currentPage: string }) => {
  return (
    <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: 'url("/img/breadcrumb.jpg")' }}>
      <div className="border-shape">
        <img src="/img/element.png" alt="shape-img" />
      </div>
      <div className="line-shape">
        <img src="/img/line-element.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="page-heading">
          <h1 className="wow slideUp" data-delay=".3">{title}</h1>
          <ul className="breadcrumb-items wow slideUp" data-delay=".5">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <i className="fas fa-chevron-right" />
            </li>
            <li>
              {currentPage}
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default PageTitle