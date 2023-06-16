import './Navbar.css'
const Navbar=()=> {
    return (
        <>
            <nav className="navbar">
            <span className="title">
                NULOYAL
            </span>
            <div>
                <ul >
                    <li>Platform</li>
                    <li>Customer</li>
                    <li>Learning Center</li>
                    <li>Company</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <button className='request-demo'>Request Demo</button>
            </nav>
        </>

    )

}
export default Navbar;