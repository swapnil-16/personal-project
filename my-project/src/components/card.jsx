




function Card(props) { 
    console.dir(props);

  return (
    <>
    <div className="container">
            <h2 className="text-center mb-5 fw-bold">{props.title}</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
                <div className="col">
                    <div className="card feature-card h-100">
                        <div className="card-body text-center">
                            <div className="feature-icon">
                                <i className="fas fa-paint-brush"></i>
                            </div>
                            <h5 className="card-title">Innovative Design</h5>
                            <p className="card-text">Cutting-edge designs that captivate and engage your audience, crafted with precision and creativity.</p>
                        </div>
                    </div>
                </div>
                
                <div className="col">
                    <div className="card feature-card h-100">
                        <div className="card-body text-center">
                            <div className="feature-icon">
                                <i className="fas fa-bolt"></i>
                            </div>
                            <h5 className="card-title">Fast Performance</h5>
                            <p className="card-text">Lightning-fast loading speeds and optimized performance for the ultimate user experience.</p>
                        </div>
                    </div>
                </div>
                
                <div className="col">
                    <div className="card feature-card h-100">
                        <div className="card-body text-center">
                            <div className="feature-icon">
                                <i className="fas fa-headset"></i>
                            </div>
                            <h5 className="card-title">24/7 Support</h5>
                            <p className="card-text">Round-the-clock assistance from our dedicated team to ensure your success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
