import React from 'react'

const Sidenav = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="#" className="brand-link">
                        <span className="brand-text font-weight-light">Writer Chassis</span>
                </a>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X-UKegvFJk9xQtCqkjcj7m1Wr-cUWk4P0Q&s" className="img-circle elevation-2 mt-2" alt="User Image"/>
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">{localStorage.getItem("name")}<br/>{localStorage.getItem("type")}</a>
                        </div>
                    </div>

                    <div className="user-panel d-flex align-items-center justify-content-center">
                        <h4 className='text-white'><strong>Walbro</strong></h4>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <a href="/dashboard" className="nav-link active">
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/all/media" className="nav-link">
                                    <p>All Media</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/account/settings" className="nav-link">
                                    <p>Account Settings</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default Sidenav
