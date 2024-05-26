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
      source: 'https://github.com/your-repo2',
    },
    {
      image: Portfolio3,
      techStack: 'Python, Django, PostgreSQL',
      source: 'https://github.com/your-repo3',
    },
    {
      image: Portfolio4,
      techStack: 'Vue.js, Firebase',
      source: 'https://github.com/your-repo4',
    },
    {
      image: Portfolio5,
      techStack: 'Angular, Express, MySQL',
      source: 'https://github.com/your-repo5',
    },
    {
      image: Portfolio6,
      techStack: 'Ruby on Rails, SQLite',
      source: 'https://github.com/your-repo6',
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