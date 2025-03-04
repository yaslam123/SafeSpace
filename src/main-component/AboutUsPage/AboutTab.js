import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import aImg from "../../images/map/map-about-tab.svg";
import aImg1 from "../../images/about/aboutDetailsthumb1.jpg";
import aImg2 from "../../images/about/aboutDetailsthumb2.jpg";
import aImg3 from "../../images/about/aboutDetailsthumb3.jpg";

const AboutTab = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="about position-relative">
      <img src={aImg} alt="Gainioz" className="map-about-tab" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="featureTab">
              <Nav tabs className="nav justify-content-center">
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Our Mission
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Our Vission
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Our Values
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab} className="pt-55">
                <TabPane tabId="1">
                  <div className="row">
                    <div className="col-lg-10 mx-auto">
                      <div className="aboutDetails text-center">
                        <p className="aboutDetailsText mb-20">
                          Safe Space Somalia (S3) is committed to harnessing the
                          power and agency of women, youth, and marginalized
                          communities to foster a more inclusive and socially
                          cohesive Somalia. Through digital engagement, policy
                          advocacy, and cultural mobilization, we create safe
                          spaces for dialogue, empowerment, and action. We
                          believe in leveraging digital mediation to amplify
                          voices, using research and advocacy to influence
                          policies, and fostering social and cultural
                          initiatives that bring communities together. Our
                          mission is to bridge divides, promote peace, and
                          empower communities at all levels—from the grassroots
                          to national decision-making platforms.
                        </p>
                        <p className="aboutDetailsText mb-20">
                          By championing inclusivity, creating opportunities for
                          marginalized groups, and driving meaningful
                          conversations, we strive to reshape Somalia’s social
                          landscape into one that is equitable, participatory,
                          and resilient.
                        </p>
                      </div>
                      <div className="aboutDetailsThumbs pt-100">
                        <div className="row g-0 align-items-center">
                          <div className="col-lg-4">
                            <div className="aboutDetailsThumb">
                              <img src={aImg1} alt="About Gainioz" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="aboutDetailsThumb aboutDetailsThumb--big">
                              <img src={aImg2} alt="About Gainioz" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="aboutDetailsThumb">
                              <img src={aImg3} alt="About Gainioz" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="row">
                    <div className="col-lg-10 mx-auto">
                      <div className="aboutDetails text-center">
                        <p className="aboutDetailsText mb-20">
                          Safe Space Somalia (S3) envisions a peaceful,
                          inclusive, and socially cohesive Somalia, where every
                          individual—regardless of gender, background, or social
                          status—has the freedom to participate, express, and
                          thrive. Our vision is to build a society that embraces
                          diversity, fosters unity, and creates equal
                          opportunities for all. We strive to cultivate safe
                          spaces, meaningful dialogue, and progressive policies
                          that empower women, youth, and marginalized
                          communities to shape their own futures.
                        </p>
                        <p className="aboutDetailsText mb-20">
                          By bridging cultural, social, and political divides,
                          we aim to reshape Somalia into a nation driven by
                          inclusivity, justice, and collective prosperity.
                          Through our unwavering commitment to empowerment,
                          advocacy, and collaboration, we work towards a future
                          where every voice is heard, and every community
                          flourishes.
                        </p>
                      </div>
                      <div className="aboutDetailsThumbs pt-100">
                        <div className="row g-0 align-items-center">
                          <div className="col-lg-4">
                            <div className="aboutDetailsThumb">
                              <img src={aImg1} alt="About Gainioz" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="aboutDetailsThumb aboutDetailsThumb--big">
                              <img src={aImg2} alt="About Gainioz" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="aboutDetailsThumb">
                              <img src={aImg3} alt="About Gainioz" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div className="row">
                    <div className="col-lg-10 mx-auto">
                      <div className="aboutDetails text-center">
                        <p className="aboutDetailsText mb-20">
                          At Safe Space Somalia (S3), our work is guided by a
                          strong commitment to inclusivity, empowerment, and
                          social transformation. Our core values define who we
                          are and shape the impact we strive to create in Somali
                          society. We believe in Inclusivity, ensuring that all
                          voices—especially those of women, youth, and
                          marginalized communities—are heard and represented. We
                          uphold Equity, advocating for fair opportunities and
                          social justice in every aspect of our work. Our
                          foundation is built on Collaboration, working with
                          communities, policymakers, and global partners to
                          drive sustainable change.
                        </p>
                        <p className="aboutDetailsText mb-20">
                          We are committed to Innovation, using digital
                          platforms, cultural initiatives, and research-driven
                          advocacy to foster meaningful progress. Our work is
                          driven by Integrity, ensuring transparency,
                          accountability, and ethical engagement at all levels.
                          Above all, we champion Resilience, empowering
                          individuals and communities to overcome challenges,
                          reclaim their agency, and lead transformative change.
                        </p>
                      </div>
                      <div className="aboutDetailsThumbs pt-100">
                        <div className="row g-0 align-items-center">
                          <div className="col-lg-4">
                            <div className="aboutDetailsThumb">
                              <img src={aImg1} alt="About Gainioz" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="aboutDetailsThumb aboutDetailsThumb--big">
                              <img src={aImg2} alt="About Gainioz" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="aboutDetailsThumb">
                              <img src={aImg3} alt="About Gainioz" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
