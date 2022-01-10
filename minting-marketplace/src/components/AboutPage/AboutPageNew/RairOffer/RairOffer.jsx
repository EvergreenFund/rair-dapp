import React from 'react'

const RairOffer = () => {
    return (
        <div className="about-rair-offer">
            <div className="rair-offer-title">
                Only RAIR Offers <span className="change-color-text">encrypted streaming</span>
            </div>
            <div className="about-offer-content">
                <div className="streaming-box">
                    <div className="streaming-offer">
                        <button className="streaming-btn">Streaming</button>
                        <div className="container-progress">
                            <div className="streaming-percent">
                                <div className="percent">15%</div>
                                <div className="percent">10%</div>
                                <div className="percent">7.5%</div>
                            </div>
                            <div className="streaming-progress">
                                <div className="line-purple"></div>
                                <div className="line-grey"></div>
                                <div className="progress-box">1</div>
                                <div className="progress-box">2</div>
                                <div className="progress-box">3</div>
                            </div>
                        </div>
                    </div>
                    <div className="streaming-offer non-streaming">
                        <button className="non-streaming-btn">Non-Streaming</button>
                        <div className="container-progress">
                            <div className="streaming-percent non-streaming">
                                <div className="percent">5%</div>
                                <div className="percent">2.5%</div>
                                <div className="percent">1.25%</div>
                            </div>
                            <div className="streaming-progress non-streaming">
                                <div className="line-grey"></div>
                                <div className="line-grey-second"></div>
                                <div className="progress-box">1</div>
                                <div className="progress-box">2</div>
                                <div className="progress-box">3</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="royalty-box">
                    <h5>Royalty Schedule</h5>
                    <div className="royalty-list">
                        <ul>
                            <li><span>Tier1 </span>Personal</li>
                            <li><span>Tier2 </span>SMB</li>
                            <li><span>Tier3 </span>Enterprise</li>
                        </ul>
                    </div>
                    <h5>Annual Sales</h5>
                </div>
            </div>
        </div>
    )
}

export default RairOffer
