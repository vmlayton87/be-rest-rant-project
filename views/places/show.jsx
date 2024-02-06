// Show one place in detail (Associated rants, new rant form, delete rant button)

const React = require(`react`)
const Default = require('../default')

function Show (data) {
    
    let comments = (
        <h3 className = "inactive">No comments yet!</h3>
    )
    
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
        return (
            <div key={c.id} className="border">
            <h4 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 🤩'}</h4>
            <p>{c.content}</p>
            <p>
                - {c.author}
            </p>
            <h4>Rating: {c.stars}</h4>
            </div>
        )
        })
    }
           
    return (
    <Default title={`${data.place.name} Info`}>
        <main>
        <h1>{data.place.name}</h1>
        <div className="container text-center">
            <div className="row">
                <div className="col-6">
                    <img className="img-fluid" src={data.place.pic}  alt={`a photo of ${data.place.name}`}/>
                    <h5>Located in {data.place.city}, {data.place.state}</h5>
                </div>
                <div className="col-6 align-self-center">
                    <h2>Rating</h2>
                        <p>
                            Not yet rated
                        </p>
                        <h2>Description</h2>
                    <h5>{data.place.showEstablished()}</h5>
                    <h5>Serving {data.place.cuisine}</h5>

                    <div className="edit-and-delete-buttons">
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning me-2">Edit</a>
                        <form action={`/places/${data.place.id}?_method=DELETE`} method="POST">
                            <input type="submit" className="btn btn-danger" value="DELETE"/>
                        </form>
                    </div>
                </div>
                <div className="col-12">
                    <h2>Comments</h2>
                    <div>
                        <a href={`/places/${data.place.id}/comment`} className="btn btn-outline-primary mb-2">Add a Comment</a>
                    </div>
                        {comments}
                </div>
            </div>
        </div>
        </main>
    </Default>
) }

module.exports = Show