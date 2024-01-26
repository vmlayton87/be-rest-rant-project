
const React = require('react')
const Default = require('../default.jsx')

function edit_form ({place, index}) {
    return (
        <Default>
            <main className="justify-content-center m-2">
                <h1>Edit {place.name}</h1>
                <form action={`/places/${index}?_method=PUT`} method="POST" >
                    <div className="form-floating mb-3">
                        <input className="form-control"
                            id="name"
                            name="name"
                            placeholder="Place Name"
                            required 
                            defaultValue={place.name}/>
                        <label htmlFor="name">Place Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control"
                            id="city"
                            name="city"
                            placeholder="City"
                            defaultValue={place.city}/>
                        <label htmlFor="city">City</label>
                    </div>

                    <div className="form-floating mb-3">
                        <select className="form-select"
                            id="state"
                            name="state"
                            placeholder="State"
                            defaultValue={place.state}>
                            <option selected>Choose a state</option>
                            <option value="AK">Alaska</option>
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="AZ">Arizona</option>
                            <option value="CA">California</option>
                            <option value="CT">Connecticut</option>
                            <option value="CO">Colorado</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="IA">Iowa</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MA">Massachussets</option>
                            <option value="MD">Maryland</option>
                            <option value="ME">Maine</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MO">Missouri</option>
                            <option value="MS">Mississippi</option>
                            <option value="MT">Montana</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="NE">Nebraska</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NV">Nevada</option>
                            <option value="NY">New York</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OH">Ohio</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VA">Virginia</option>
                            <option value="VT">Vermont</option>
                            <option value="WA">Washington</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WV">West Virginia</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <label htmlFor="state">State</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control"
                            id="cuisine"
                            name="cuisine"
                            placeholder="Cuisine"
                            required 
                            defaultValue={place.cuisine}/>
                        <label htmlFor="cuisine">Cuisine</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control"
                            id="pic"
                            name="pic"
                            type="url"
                            placeholder="Place Image URL"
                            defaultValue={place.pic}/>
                        <label htmlFor="pic">Place Image URL</label>
                    </div>

                    <input className="btn btn-primary" type="submit" value={`Edit ${place.name}`}/>
                </form>
            </main>
        </Default>
    )
}

module.exports = edit_form
