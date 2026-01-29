import SectionTitle from "@/components/ui/sectionTitle"
import { teamMembersTwoData } from "@/db/teamMembersTwoData"
import { Link } from "react-router-dom"

const TeamesTwo = ({ isTitleShow }: { isTitleShow: boolean }) => {
    return (
        <section id="team" className="team-section-2 section-padding bg-cover" style={{ backgroundImage: 'url("/img/team/bg.jpg")' }}>
            <div className="container">
                {
                    isTitleShow &&
                    <div className="section-title-area">
                        <SectionTitle>
                            <SectionTitle.SubTitle>expert team</SectionTitle.SubTitle>
                            <SectionTitle.Title>our expert team</SectionTitle.Title>
                        </SectionTitle>
                        <Link to="/team" className="theme-btn wow slideUp" data-delay=".5">
                            All Member
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                }
                <div className="row">
                    {teamMembersTwoData.map((member) => (
                        <div
                            key={member.id}
                            className="col-xl-4 col-lg-4 col-md-6 wow slideUp"
                            data-delay={member.delay}
                        >
                            <div className="team-card-items">
                                <div className="team-image">
                                    <img src={member.image} alt="team-img" />
                                    <div className="social-profile">
                                        <span className="plus-btn">
                                            <i className="fas fa-share-alt" />
                                        </span>
                                        <ul>
                                            {
                                                member.socialLinks.map(({ icon, link }) => (
                                                    <li key={icon}>
                                                        <Link to={link}>
                                                            <i className={icon} />
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link to="/team-details">{member.name}</Link>
                                    </h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default TeamesTwo