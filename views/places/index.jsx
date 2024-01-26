// Index page listing all places

const React = require('react')
const Default = require('../default')

function Index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        
        <div className="col-12 col-sm-4 col-lg-3">
        <div className="card" >
          <div className="ratio ratio-4x3 ">
            <img src={place.pic} alt={place.name} className="card-img-top object-fit-cover"></img></div>
        <div className="card-body">
          <h5 className="card-title"><a href={`places/${index}`}>{place.name}</a></h5>
          <p className="card-text">{place.cuisine}</p>
          <p className="card-text">Located in {place.city}, {place.state}</p>
          <a href={`places/${index}`} className="btn btn-primary">More Info</a>
        </div>
        </div>
        </div>
        
      )
    })
    
    return (
      <Default>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="container text-center">
                <div className="row justify-content-center g-2">
                {placesFormatted}
              </div>
              </div>
          </main>
      </Default>
  )
  }
  
  

module.exports = Index