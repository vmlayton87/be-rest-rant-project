const React = require(`react`)
const Default = require('../default')

function new_comment (data) {
    return (
        <Default title = "New Comment">
             <main className="m-2">
                <h1 className="justify-content-center">Add a Comment</h1>
                <form method="POST" action={`/places/${data.place.id}`}>
                    <div className="form-floating mb-3">
                        <input className="form-control"
                            id="author"
                            name="author"
                            type="string"
                            placeholder='Your Name or Nickname'/>
                        <label htmlFor="author">Your Name or Nickname</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control"
                            id="stars"
                            name="stars"
                            type="number"
                            step="0.5"
                            min="1"
                            max="5" 
                            required
                            placeholder="Rating"/>
                        <label htmlFor="stars">Rating</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea style={{height: 100+ "px"}} className="form-control"
                            id="content"
                            name="content"
                            type="string" 
                            placeholder="Comment:"/>
                        <label htmlFor="content">Comment:</label>
                    </div>

                    
                    <div className="form-check mb-3 checkbox-label">
                        <input className="form-check-input"
                            id="rant"
                            name="rant"
                            type="checkbox" />
                        <label className="form-check-label" htmlFor="rant">Is this a rant? If so, please select the checkbox to the left.</label>
                    </div>
                    

                    <input className="btn btn-primary" type="submit" value="Add New Comment"/>
                </form>
            </main>
        </Default>
    )
}

module.exports = new_comment