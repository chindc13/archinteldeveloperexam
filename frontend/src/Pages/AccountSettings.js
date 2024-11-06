import React from 'react'

function AccountSettings() {
    return (
        <div>
            <div className='content-wrapper'>
                <section className="content">
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Walbro - Account Settings</h4>
                                        <p className="card-text text-secondary">Manage account settings for Walbro</p>
                                        <div className='row'>
                                            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                                                <div className='card'>
                                                    <div className="card-body">
                                                        <h4>General</h4>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                            <label className="form-check-label ml-2">Require image Caption</label>
                                                        </div>
                                                        <p className='text-secondary text-sm'>This will require image caption line 1 upon submit for editing or publishing; Unchecking will disable all image caption fields.</p>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                            <label className="form-check-label ml-2">Require Meta Description</label>
                                                        </div>
                                                        <p className='text-secondary text-sm'>This will require description upon submit for editing or publishing; unchecking will hide the field.</p>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                            <label className="form-check-label ml-2">Show Video Text field</label>
                                                        </div>
                                                        <p className='text-secondary text-sm'>This will show video text field in the writer/editor panels.</p>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                            <label className="form-check-label ml-2">Enable Video Process</label>
                                                        </div>
                                                        <p className='text-secondary text-sm'>This will show video text field in the writer/editor panels.</p>

                                                        <div className='row'>
                                                            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                                                                <p>Summary Word Count</p>
                                                                <div className="form-group">
                                                                    <label for="summary-minimum" className="d-block">Minimum</label>
                                                                    <input type="number" className="form-control custom-input" id="summary-minimum" placeholder="10" />
                                                                    <small className="description-text">
                                                                        Below the value will appear the count display in red text otherwise it will appear orange.
                                                                    </small>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label for="summary-standard" className="d-block">Standard</label>
                                                                    <input type="number" className="form-control custom-input" id="summary-standard" placeholder="80" />
                                                                    <small className="description-text">
                                                                        Equal or greater than this value will appear the count display in green text.
                                                                    </small>
                                                                </div>

                                                                <div className="form-group">
                                                                    <label for="summary-maximum" className="d-block">Maximum</label>
                                                                    <input type="number" className="form-control custom-input" id="summary-maximum" placeholder="100" />
                                                                    <small className="description-text">
                                                                        Greater than this value will appear the count display in red text.
                                                                    </small>
                                                                </div>
                                                            </div>
                                                            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                                                                <p>Content Word Count</p>
                                                                <div class="form-group">
                                                                    <label for="content-minimum" class="d-block">Minimum</label>
                                                                    <input type="number" class="form-control custom-input" id="content-minimum" placeholder="10" />
                                                                    <small class="description-text">
                                                                        Below the value will appear the count display in red text otherwise it will appear orange.
                                                                    </small>
                                                                </div>

                                                                <div class="form-group">
                                                                    <label for="content-standard" class="d-block">Standard</label>
                                                                    <input type="number" class="form-control custom-input" id="content-standard" placeholder="80" />
                                                                    <small class="description-text">
                                                                        Equal or greater than this value will appear the count display in green text.
                                                                    </small>
                                                                </div>

                                                                <div class="form-group">
                                                                    <label for="content-maximum" class="d-block">Maximum</label>
                                                                    <input type="number" class="form-control custom-input" id="content-maximum" placeholder="100" />
                                                                    <small class="description-text">
                                                                        Greater than this value will appear the count display in red text.
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                                                <div className='card'>
                                                    <div className="card-body">
                                                        <h4>Categories</h4>
                                                        <p className='text-secondary text-sm'>These settings are ccategory validation on submitting an article for edit or publish.</p>
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <td className='text-sm text-bold'>Name</td>
                                                                    <td className='text-sm text-bold'>Require Summary</td>
                                                                    <td className='text-sm text-bold'>Require Content</td>
                                                                    <td className='text-sm text-bold'>Require Link In Summary</td>
                                                                    <td className='text-sm text-bold'>Require Link In Content</td>
                                                                    <td className='text-sm text-bold'>Require Links In Summary</td>
                                                                    <td className='text-sm text-bold'>Require Links In Content</td>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Customers</td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Competitors</td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Products</td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                        <td className='text-center'><input className="form-check-input" type="checkbox" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
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

export default AccountSettings
