const React = require('react')
const Default = require('./default')


function error404 () {
    
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>The page you are looking for doesn't exist.</p>    
                <img className="largeImage" src ="/images/hogwarts404-50.png" alt="404 page not found photo using a dark forest" />        
            </main>
        </Default>
    )
}

module.exports = error404