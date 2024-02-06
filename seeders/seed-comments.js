const db = require('../models/mongoose_index')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    let comment2 = await db.Comment.create({
        author: 'Still Hungry',
        rant: true,
        stars: 2.0,
        content: 'Not enough food, small portions. DO NOT recommend!'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id, comment2.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()
