// Show one place in detail (Associated rants, new rant form, delete rant button)

const React = require(`react`)
const Default = require('../default')

function Show (data) {
    return (
    <Default title={`${data.place.name} Info`}>
        <main>
        <h1>{data.place.name}</h1>
        
        <div className="clearfix">
            <img src={data.place.pic} className="col-md-4 float-md-start mb-3 ms-md-3" alt={`a photo of ${data.place.name}`}/>
            <div>
                <h2>Rating</h2>
                    <p>
                        Not yet rated
                    </p>
            </div>
            <div>
                <h2>Description</h2>
                    <p>
                        Located in {data.place.city}, {data.place.state} and serving {data.place.cuisine}.
                    </p>
            </div>
            <div className="edit-and-delete-buttons">
            <a href={`/places/${data.id}/edit`} className="btn btn-warning me-2">Edit</a>
            <form action={`/places/${data.id}?_method=DELETE`} method="POST">
                <input type="submit" className="btn btn-danger" value="DELETE"/>
            </form>
        </div>
            
        </div>
        <div>
            <h2>Comments</h2>
                <p>
                    No comments yet
                </p>
        </div>
        </main>
    </Default>
) }

module.exports = Show