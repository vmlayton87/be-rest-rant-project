// Show one place in detail (Associated rants, new rant form, delete rant button)

const React = require(`react`)
const Default = require('../default')

function Show (data) {
    
    //for showing the comments and rating:
    let comments = (
        <h3 className = "inactive">No comments yet!</h3>
    )
    
    let rating = (
        <p className="inactive">Not yet rated</p>
    )
    
    let deletePlaceModal = (
        <div>
        {/* <!-- Button trigger modal --> */}
        
        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#placeStaticBackdrop">
            Delete
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="placeStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="placeStaticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="placeStaticBackdropLabel">Delete Place</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {`Are you sure you want to delete ${data.place.name}?`}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <form action={`/places/${data.place.id}?_method=DELETE`} method="POST">
                                    <input type="submit" className="btn btn-danger" value="CONFIRM DELETE"/>
                                </form>
            </div>
            </div>
        </div>
        </div>
        </div>
    )

    
      
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i=0; i < averageRating; i++) {
            stars += `⭐`
        }
        rating = (
          <h3>
            {stars}
          </h3>
        )

        comments = data.place.comments.map(c => {
            let deleteCommentModal = (
                <div>
                {/* <!-- Button trigger modal --> */}
                
        <button type="button" className="btn position-absolute bottom-0 end-0" data-bs-toggle="modal" data-bs-target="#commentStaticBackdrop">
        <img src="/images/circle24.png" ></img>
        </button>
        
        {/* <!-- Modal --> */}
        <div className="modal fade" id="commentStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="commentStaticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="commentStaticBackdropLabel">Delete Comment</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {`Are you sure you want to delete ${c.author}'s comment?`}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <form  action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`} method="POST">
                    <input type="submit" className="btn btn-danger" value="CONFIRM DELETE"/>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
            )
        return (
            <div key={c.id} className="border col-6 position-relative">
            <h4 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 🤩'}</h4>
            <p>{c.content}</p>
            <p>
                - {c.author}
            </p>
            
            <h5>Rating: {c.stars}</h5>
            
            {deleteCommentModal}
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
                    <img className="img-fluid" style={{maxHeight: 50 +`vh`}} src={data.place.pic}  alt={`a photo of ${data.place.name}`}/>
                    <h5>Located in {data.place.city}, {data.place.state}</h5>
                </div>
                <div className="col-6 align-self-center">
                    <h2>Rating</h2>
                        {rating}
                        <h2>Description</h2>
                    <h5>{data.place.showEstablished()}</h5>
                    <h5>Serving {data.place.cuisine}</h5>

                    <div className="edit-and-delete-buttons">
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning me-2">Edit</a>
                      
                        {deletePlaceModal}
                    </div>

                </div>
                <div className="row">
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