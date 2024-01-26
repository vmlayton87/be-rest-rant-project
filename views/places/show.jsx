// Show one place in detail (Associated rants, new rant form, delete rant button)

const React = require(`react`)
const Default = require('../default')

function Show (data) {
    return (
    <Default>
        <main>
        <div class="clearfix">
            <img src={data.place.pic} class="col-md-6 float-md-start mb-3 ms-md-3" alt={`a photo of ${data.place.name}`}/>

            <h1>{data.place.name}</h1>
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
            <div>
                <h2>Comments</h2>
                    <p>
                        No comments yet
                    </p>
            </div>
        </div>
            {/* <div className="card mb-3" style={{maxwidth: 540 +"px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={data.place.pic} class="img-fluid rounded-start" alt={`photo of ${data.place.name}`} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{data.place.name}</h1>
                            
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div> */}
        </main>
    </Default>
) }

module.exports = Show