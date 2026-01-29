import { serviceOneData } from "@/db/serviceOneData"
import ServiceCard from "./serviceCard"
import SectionTitle from "@/components/ui/sectionTitle"

const ServicesFour = () => {
    return (
        <section id="services" className="service-section-3 section-padding pt-0">
            <div className="line-shape-2">
                <img src="/img/service/line-shape-2.png" alt="shape-img" />
            </div>
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>Services We Offer</SectionTitle.SubTitle>
                    <SectionTitle.Title>Provide Comprehensive<br /> Ecological Service</SectionTitle.Title>
                </SectionTitle>
                <div className="row">
                    {
                        serviceOneData.slice(0, 4).map((service) => {
                            return (
                                <div key={service.id} className="col-xl-3 col-lg-4 col-md-6 wow slideUp" data-delay=".9">
                                    <ServiceCard service={service} className={`style-3 mt-70 ${service.active ? 'active' : ''}`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

    )
}

export default ServicesFour