const React = require('react')
const Default = require('./default')


function error404 () {
    
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>The page you are looking for doesn't exist.</p>  
                <img src="/public/images/hogwarts404.png" alt="404 image"/>            
            </main>
        </Default>
    )
}

module.exports = error404