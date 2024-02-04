const db = require('../models/mongoose_index')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisine: 'Thai, Pan-Asian',
    pic: 'https://images.unsplash.com/photo-1533630654593-b222d5d44449?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwwfHwwfHx8Mg%3D%3D',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisine: 'Coffee, Bakery',
    pic: 'https://images.unsplash.com/photo-1460865332492-81fd69fc5996?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
