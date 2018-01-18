const _ = require('lodash')

let dragon = (name, size, element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!'

dragon = _.curry(dragon)

let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')

console.log(tinyDragon('lightning'))
//result: fluffykins is a tiny dragon that breathes lightning!

//console.log(dragon('fluffykins', 'tiny', 'lightning'))

/*
let dragon1 = 
    name =>
        size =>
            element =>
                name + ' is a ' +
                size + ' dragon that breathes ' +
                element + '!'
*/
//console.log(dragon1('fluffykins')('tiny')('lightning'))
//result: fluffykins is a tiny dragon that breathes lightning!

let dragons = [
    { name: 'fluffykins',   element: 'lightning' },
    { name: 'noomi',        element: 'lightning' },
    { name: 'karo',         element: 'fire'},
    { name: 'doomer',       element: 'timewarp'}
]

let hasElement =
    (element, obj) => obj.element === element

let lightingDragons = 
    dragons.filter(x => hasElement('lightning', x))

console.log(lightingDragons)
/** result:
 *  { name: 'fluffykins', element: 'lightning' },
    { name: 'noomi', element: 'lightning' } ]
 */
