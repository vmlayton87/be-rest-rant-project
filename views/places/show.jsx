// Show one place in detail (Associated rants, new rant form, delete rant button)

const React = require(`react`)
const Default = require('../default')

function Show (data) {
    return (
    <Default title={`${data.place.name} Info`}>
        <main>
        <h1>{data.place.name}</h1>
        <div className="container text-center">
            <div className="row">
                <div className="col-6">
                    <img src={data.place.pic}  alt={`a photo of ${data.place.name}`}/>
                    <h5>Located in {data.place.city}, {data.place.state}</h5>
                </div>
                <div className="col-6">
                    <h2>Rating</h2>
                        <p>
                            Not yet rated
                        </p>
                        <h2>Description</h2>
                    <h5>{data.place.showEstablished()}</h5>
                    <h5>Serving {data.place.cuisine}</h5>

                    <div className="edit-and-delete-buttons">
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning me-2">Edit</a>
                        <form action={`/places/${data.id}?_method=DELETE`} method="POST">
                            <input type="submit" className="btn btn-danger" value="DELETE"/>
                        </form>
                    </div>
                </div>
                <div className="col-12">
                    <h2>Comments</h2>
                        <p>
                            No comments yet
                        </p>
                </div>
            </div>
        </div>
        </main>
    </Default>
) }

module.exports = Show