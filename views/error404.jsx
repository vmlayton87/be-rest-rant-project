const React = require('react')
const Default = require('./default')


function error404 () {
    
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>The page you are looking for doesn't exist.</p>            
            </main>
        </Default>
    )
}

module.exports = error404