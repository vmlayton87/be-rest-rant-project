const React = require(`react`)
const Default = require('../default')

function new_form () {
    return (
        <Default>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input 
                            id="name"
                            name="name"
                            required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Image</label>
                        <input 
                            id="pic"
                            name="pic"
                            type="url"/>
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input 
                            id="city"
                            name="city"/>
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input 
                            id="state"
                            name="state"/>
                    </div>
                    <div>
                        <label htmlFor="cuisine">Cuisine</label>
                        <input 
                            id="cuisine"
                            name="cuisine"
                            required />
                    </div>
                    <input type="submit" value="Add Place"/>
                </form>
            </main>
        </Default>
    )
}
module.exports = new_form

