import "./Home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function Home(){

    const navigate = useNavigate();

    return(

        <div className="home">


            <section className="hero">

               <section className="hero">

                <div className="hero-overlay">

                    <div className="hero-text">

                    <h1>Smart Crop Recommendation for Farmers 🌱</h1>

                    <p>
                        Use AI to determine the best crop to grow based on soil nutrients,
                        rainfall, humidity and temperature.
                    </p>

                    <button 
                    className="hero-btn"
                    onClick={()=>navigate("/recommendation")}>
                        Try Crop AI
                    </button>

                    </div>

                </div>

                </section>

                

            </section>

            <section className="features">

            <h2 className="features-title"><span>Platform</span> Features</h2>

            <div className="feature-grid">

                <div className="feature-card">

                <div className="feature-icon">🌱</div>

                <h3>AI Crop Prediction</h3>

                <p>
                    Our ML model recommends the best crop based on soil nutrients,
                    rainfall, humidity and temperature.
                </p>

                </div>

                <div className="feature-card">

                <div className="feature-icon">📚</div>

                <h3>Crop Library</h3>

                <p>
                    Explore detailed information about crops, growing seasons,
                    soil requirements and farming techniques.
                </p>

                </div>

                <div className="feature-card">

                <div className="feature-icon">💰</div>

                <h3>Mandi Prices</h3>

                <p>
                    Check real-time mandi prices to choose the most profitable crop.
                </p>

                </div>

            </div>

            </section>



            <section className="how">

            <h2 className="how-title"><span>How</span> It Works</h2>

            <div className="steps">

                <div className="step">

                <div className="step-number">1</div>

                <h3>Enter Soil Data</h3>

                <p>
                    Provide soil nutrients like Nitrogen, Phosphorus,
                    Potassium along with weather conditions.
                </p>

                </div>


                <div className="step">

                <div className="step-number">2</div>

                <h3>AI Analysis</h3>

                <p>
                    Our machine learning model analyzes the farm
                    conditions and environmental factors.
                </p>

                </div>


                <div className="step">

                <div className="step-number">3</div>

                <h3>Get Crop Recommendation</h3>

                <p>
                    Instantly receive the most suitable crop
                    to maximize productivity and profit.
                </p>

                </div>

            </div>

            </section>

            <Footer/>

        </div>

    )
}

export default Home