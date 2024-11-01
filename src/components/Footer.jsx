function Footer() {
    return (
        <footer className="#ab47bc purple lighten-4 page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right right"
                        href="https://github.com/Romzes82/react-shop"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
