import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const portfolioItems = [
    {
      image: Portfolio1,
      techStack: 'Streamlit, Pandas, Numpy',
      source: 'https://www.linkedin.com/posts/alan-apanga_operationsresearch-inventorymanagement-supplychainoptimization-activity-7198115687079284736-pWcV?utm_source=share&utm_medium=member_desktop',
    },
    {
      image: Portfolio2,
      techStack: 'Python, Gurobi, PuLP',
      source: 'https://github.com/Alan-Apanga/Capacitated-Facility-Location-Problem',
    },
    {
      image: Portfolio3,
      techStack: 'Scikit-Learn, Lightgbm, PostgreSQL',
      source: 'https://github.com/Alan-Apanga/Demand-Forecasting',
    },
    {
      image: Portfolio4,
      techStack: 'Monte Carlo, SimPy, Markov Chain',
      source: 'https://github.com/Alan-Apanga/Queue_simulation',
    },
    {
      image: Portfolio5,
      techStack: 'Javascript, HTML, CSS, Django',
      source: 'https://github.com/Alan-Apanga/BLENDING-PROBLEM',
    },
    {
      image: Portfolio6,
      techStack: 'Numpy, Pandas, PlotlyExpress',
      source: 'https://github.com/Alan-Apanga/Sustainability-Reporting',
    },
  ];


const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">
            I take pride in leveraging advanced analytics and machine learning to drive efficiency and cost reduction. I am excited to bring my skills and experience to help businesses achieve their goals and transform complex data into actionable strategies. Let’s collaborate to enhance your supply chain operations and achieve outstanding results.
            </span>
            <div className="worksContainer">
                {portfolioItems.map((item, index) => (
                <div className="worksItem" key={index}>
                    <img src={item.image} alt="" className="worksImg" />
                    <div className="worksInfo">
                    <p className="techStack">{item.techStack}</p>
                    <a href={item.source} className="sourceLink">Source</a>
                    </div>
                </div>
                ))}
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;