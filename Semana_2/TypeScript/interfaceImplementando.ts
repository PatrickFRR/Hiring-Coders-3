interface IPet{
    name: string
    type: string
    age: number
    food: string[]
}

let Dog: IPet = {
    name: 'Bolt',
    type: 'Dog',
    age: 1,
    food: ['Bone', 'Beef']
}

let Cat: IPet = {
    name: 'Luna',
    type: 'Cat',
    age: 3,
    food: ['Fish']
}

let GuineaPig: IPet = {
    name: 'Hurley',
    type: 'Guinea pig',
    age: 1,
    food: ['Fruits']
}