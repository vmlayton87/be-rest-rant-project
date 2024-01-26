
const React = require('react')

function Default (html) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Title</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
            <link rel="stylesheet" href="/style.css"/>
        </head>
        <body>
            <nav className="navbar sticky-top bg-body-tertiary">
                <div className="container-fluid">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/places">Places</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {html.children}
        </body>
        </html>
    )
}


module.exports = Default
