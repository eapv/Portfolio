import Link from "next/link"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/" legacyBehavior >
                <a className="navbar-brand" >My portfolio</a>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Resume/CV</a>
                    </li>
                    <li className="nav-item">
                        <Link href="/blog" legacyBehavior >
                            <a className="nav-link" >Github</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
export default Navbar;