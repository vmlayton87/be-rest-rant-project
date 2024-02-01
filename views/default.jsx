
const React = require('react')


function Default (html) {
    
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{html.title || `REST-rant`}</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
            <link rel="stylesheet" href="/style.css"/>
        </head>
        <body>
            <nav >
                <div >
                    <ul >
                        <li>
                            <a  href="/">Home</a>
                        </li>
                        <li >
                            <a  href="/places">Places</a>
                        </li>
                        <li >
                            <a  href="/places/new">Add Place</a>
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
