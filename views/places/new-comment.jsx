const React = require(`react`)
const Default = require('../default')

function new_comment () {
    return (
        <Default title = "New Comment">
             <main className="justify-content-center m-2">
                <h1>Add a Comment</h1>
                <form method="POST" action="/places/show" >
                    <div className="form-floating mb-3">
                        <input className="form-control"
                            id="author"
                            name="author"
                            type="string"
                            placeholder='What should you be known as?'/>
                        <label htmlFor="author">Your Name or Nickname</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control"
                            id="rant"
                            name="rant"
                            type="checkbox" />
                        <label htmlFor="rant">Is this a rant? If so, please select the checkbox.</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control"
                            id="stars"
                            name="stars"
                            type="number"
                            step="0.5"
                            min="1"
                            max="5" />
                        <label htmlFor="stars">Rating</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea className="form-control"
                            id="content"
                            name="content"
                            type="string"
                            placeholder="Tell us about your experience..." 
                            rows="3" />
                        <label htmlFor="content">Comment:</label>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Add New Comment"/>
                </form>
            </main>
        </Default>
    )
}

module.exports = new_comment