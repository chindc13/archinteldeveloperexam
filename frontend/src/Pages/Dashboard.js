const Dashboard = () => {
    const date = new Date();

    return (
        <div>
            <div className='content-wrapper'>
                <section className="content mt-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="card text-left">
                                    <div className="card-body">
                                        <h3>Welcome to Walbro Writer Dashboard</h3>
                                        <p className="card-text">Data as of {date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
                                        <a href="#" className="btn btn-success">CREATE ARTICLE</a>

                                        <ul className="nav nav-tabs mt-3" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="today-tab" data-toggle="tab" data-target="#today" type="button" role="tab" aria-controls="today" aria-selected="true">TODAY(18)</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="advance-tab" data-toggle="tab" data-target="#advance" type="button" role="tab" aria-controls="advance" aria-selected="false">ADVANCE(7)</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="last7days-tab" data-toggle="tab" data-target="#last7days" type="button" role="tab" aria-controls="last7days" aria-selected="false">LAST 7 DAYS(46)</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="sentback-tab" data-toggle="tab" data-target="#sentback" type="button" role="tab" aria-controls="sentback" aria-selected="false">SENT BACK(4)</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="today" role="tabpanel" aria-labelledby="today-tab">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12 p-0">
                                                            <h6 className="text-center mt-1 mb-3 bg-primary p-1"><strong>Customers</strong></h6>
                                                            <div className="card mb-3">
                                                                <div className="card-body card-body-custom">
                                                                    <i className="icon-btn fas fa-edit"></i>
                                                                    <div className="flex-grow-1">
                                                                        <h5 className="card-title"><a href="#">Deeside Golf Club bolsters Toro fleet</a></h5>
                                                                        <br />
                                                                        <div>
                                                                            <i className="fas fa-star icon-star"></i>
                                                                            <i className="fas fa-star icon-star"></i>
                                                                            <i className="fas fa-star icon-star"></i>
                                                                            <i className="fas fa-star-half-alt icon-star"></i>
                                                                            <i className="far fa-star icon-star"></i>
                                                                        </div>
                                                                        <p className="text-muted mt-1">Created on Oct 8, 2021 3:12 PM<br />
                                                                            [0 | 0] • Source Date Oct 7, 2021<br />
                                                                            Media Date Oct 8, 2021
                                                                        </p>
                                                                    </div>
                                                                    <i className="icon-btn fas fa-user-plus"></i>
                                                                    <i className="icon-btn fas fa-trash-alt text-danger"></i>
                                                                    <i className="icon-btn fas fa-comments"></i>
                                                                </div>
                                                            </div>

                                                            <div className="card mb-3">
                                                                <div className="card-body card-body-custom">
                                                                    <i className="icon-btn fas fa-edit"></i>
                                                                    <div className="flex-grow-1">
                                                                        <h5 className="card-title"><a href="#">REVIEW: 2021 Harley-Davidson Sportster S</a></h5>
                                                                        <br />
                                                                        <div>
                                                                            <i className="fas fa-star icon-star"></i>
                                                                            <i className="fas fa-star icon-star"></i>
                                                                            <i className="fas fa-star icon-star"></i>
                                                                            <i className="fas fa-star-half-alt icon-star"></i>
                                                                            <i className="far fa-star icon-star"></i>
                                                                        </div>
                                                                        <p className="text-muted mt-1">Created on Oct 8, 2021 2:31 PM<br />
                                                                            [0 | 0] • Source Date Oct 7, 2021<br />
                                                                            Media Date Oct 8, 2021
                                                                        </p>
                                                                    </div>
                                                                    <i className="icon-btn fas fa-user-plus"></i>
                                                                    <i className="icon-btn fas fa-trash-alt text-danger"></i>
                                                                    <i className="icon-btn fas fa-comments"></i>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 p-0">
                                                            <h6 className="text-center mt-1 mb-3 bg-primary p-1"><strong>Competitors</strong></h6>
                                                            <p className="text-center">-No Article Available-</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 p-0">
                                                            <h6 className="text-center mt-1 mb-3 bg-primary p-1"><strong>Products</strong></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="advance" role="tabpanel" aria-labelledby="advance-tab">advance</div>
                                            <div className="tab-pane fade" id="last7days" role="tabpanel" aria-labelledby="last7days-tab">last7days</div>
                                            <div className="tab-pane fade" id="sentback" role="tabpanel" aria-labelledby="sentback-tab">sentback</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="card text-left">
                                    <div className="card-body">
                                        <h3>Writer Production</h3>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <td>Name</td>
                                                    <td>Assigned</td>
                                                    <td>Submitted</td>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Writer User 1</td>
                                                        <td>7</td>
                                                        <td>7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Writer User 2</td>
                                                        <td>3</td>
                                                        <td>2</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="card text-left">
                                    <div className="card-body">
                                        <h3>Article List Preview</h3>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12 p-0">
                                                    <h6 className="text-center mt-1 mb-3 bg-primary p-1"><strong>Customers</strong></h6>
                                                    <div className="card mb-3">
                                                        <div className="card-body card-body-custom">
                                                            <div className="flex-grow-1">
                                                                <img src="https://sample-videos.com/img/Sample-png-image-5mb.png" alt="Article Image" className="article-image" />
                                                                <span className="status mt-3">Safe to Use</span>
                                                                <p className="article-meta">archintel</p>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <span className="label">For Editing</span>
                                                                <h5 className="mb-1">
                                                                    <a href="#" className="article-title">[TEST] testing duplicate images</a>
                                                                </h5>

                                                                <p className="mb-2">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. <a href="#">lazy dog</a>.</p>
                                                                <a href="#" className="view-details">View Details</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card mb-3">
                                                        <div className="card-body card-body-custom">
                                                            <div className="flex-grow-1">
                                                                <img src="https://sample-videos.com/img/Sample-png-image-5mb.png" alt="Article Image" className="article-image" />
                                                                <span className="status mt-3">Safe to Use</span>
                                                                <p className="article-meta">archintel</p>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <span className="label">For Editing</span>
                                                                <h5 className="mb-1">
                                                                    <a href="#" className="article-title">[TEST] testing duplicate images</a>
                                                                </h5>
                                                                <p className="mb-2">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. <a href="#">lazy dog</a>.</p>
                                                                <a href="#" className="view-details">View Details</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 p-0">
                                                    <h6 className="text-center mt-1 mb-3 bg-primary p-1"><strong>Competitors</strong></h6>
                                                    <p className="text-center">-No Article Available-</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 p-0">
                                                    <h6 className="text-center mt-1 mb-3 bg-primary p-1"><strong>Products</strong></h6>
                                                    <p className="text-center">-No Article Available-</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard
