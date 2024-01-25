const React = require('react')
const Default = require('./default')

function home () {
    return (
        <Default>
            <main>
                <h1>HOME</h1>
                <img className="largeImage" src="images/jason-leung-poI7DelFiVA-unsplash.jpg" alt="empty restaurant dark themed" />
                <br />
                <cite>
                    Photo by <a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
                </cite>
  
                <a href="/places" className="d-grid gap-2 col-6 mx-auto">
                    <button className=" btn btn-primary">Places Page</button>
                </a>

            </main>
        </Default>
    )
}

module.exports = home