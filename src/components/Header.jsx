function Header() {
    return (
        <nav className="#ab47bc purple lighten-1">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    React shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/Romzes82/react-shop"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
