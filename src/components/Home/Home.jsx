import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { achive, gamresOnSale, mostPopular, slideImages, threeData, twoData } from '../Data';
import videoGame from "../../assets/video3.mp4";
import "./home.css"

const Home = () => {
    return (
        <>
            <video autoPlay loop muted>
                <source src={videoGame} type="video/mp4" />
            </video>
            <div className='sliderImg'>
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide" key={index}>
                            <img width="100%" height="50%" src={slideImage.url} />
                            <span>{slideImage.caption}</span>
                        </div>
                    ))}
                </Slide>
            </div>
            <div className='gamesDiv'>
                <h4>Games On Sale </h4>
                <div>
                    {gamresOnSale.map((e) => (
                        <div>
                            <div style={{ borderRadius: "15px", overflow: "hidden" }}>
                                <img width={"100%"} height={"250px"} src={e.image} alt="" />
                            </div>
                            <div>
                                <div>{e.name}</div>
                                <div>₹{e.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='gamesDiv'>
                <div>
                    {threeData.map((e) => (
                        <div>
                            <div style={{ borderRadius: "15px", overflow: "hidden" }}>
                                <img width={"100%"} height={"200px"} src={e.image} alt="" />
                            </div>
                            <div>
                                <div>{e.name}</div>
                                <div className='des'>{e.description}</div>
                                <div>₹{e.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='gamesDiv'>
                <h4>Most Popular</h4>
                <div>
                    {mostPopular.map((e) => (
                        <div>
                            <div style={{ borderRadius: "15px", overflow: "hidden" }}>
                                <img width={"100%"} height={"280px"} src={e.image} alt="" />
                            </div>
                            <div>
                                <div>{e.name}</div>
                                <div>₹{e.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='gamesDiv'>
                <div>
                    {twoData.map((e) => (
                        <div>
                            <div style={{ borderRadius: "15px", overflow: "hidden" }}>
                                <img width={"100%"} src={e.image} alt="" />
                            </div>
                            <div>
                                <div>{e.name}</div>
                                <div className='des'>{e.description}</div>
                                <div>₹{e.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='gamesDiv'>
                <h4>Game with Achievements</h4>
                <div>
                    {achive.map((e) => (
                        <div>
                            <div style={{ borderRadius: "15px", overflow: "hidden" }}>
                                <img width={"100%"} height={"280px"} src={e.image} alt="" />
                            </div>
                            <div>
                                <div>{e.name}</div>
                                <div>₹{e.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='exploreDiv'>
                <div>
                    <img width={"100%"} src="https://cdn2.unrealengine.com/egs-featured-titles-blade-16x9-1920x1080-aaf6937d52da.jpg?h=1080&resize=1&w=1920" alt="" />
                </div>
                <div>
                    <h4>Explore Our Catalog</h4>
                    <div>Browse by genre, features, price, and more to find your next favorite game.</div>
                    <button>Explore</button>
                </div>
            </div>
        </>
    )
}

export default Home