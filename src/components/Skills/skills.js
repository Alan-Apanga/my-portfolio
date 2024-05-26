import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import ProdScheduling from '../../assets/production.png';
import Workforce from '../../assets/workforce.png';
import Blending from '../../assets/blending.png';


const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am an innovative Data Scientist specializing in Supply Chain Optimization, I bring expertise in a comprehensive range of technologies to drive actionable insights and optimize decision-making processes. My expertise lies in developing mathematical, machine learning and deep learning models to optimize resources and maximize revenue. I am proficient in data management tools like SQL, Pandas , Numpy, as well as mathematical modelling tools like AMPL, MATLAB, SimPy, TensorFlow and Keras, and optimization tools such as OR-Tools, Gurobi, PuLP, IBM ILOG CPLEX.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Demand Forecasting</h2>
                        <p>Utilizing time series analysis and deep learning techniques to predict customer demand and integrating newly derived features into the existing model, ensuring a more accurate and comprehensive understanding  of the factors affecting cutomer demand.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Route Optimization</h2>
                        <p>Reducing travel time, fuel consumption, and overall operational costs by analyzing traffic patterns and historical trip data, and solving complex scheduling and routing problems.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Inventory Management</h2>
                        <p>Developing digital twins to optimize inventory control processes, preventing stockouts, and maximizing profit.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ProdScheduling} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Production Scheduling</h2>
                        <p>Implementing algorithms to optimize production schedules, reducing setup and holding costs, and ensuring timely delivery.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Workforce} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Workforce Planning</h2>
                        <p>Strategizing workforce allocation to enhance employee retention and compliance with labor laws.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Blending} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Continuous Optimization</h2>
                        <p>ackling complex manufacturing challenges, such as blending problems, to minimize production costs while meeting quality standards.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;