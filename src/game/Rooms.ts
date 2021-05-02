import { Item, items } from "./Items"

export type Exits = {
    north?: Room
    northeast?: Room
    east?: Room
    southeast?: Room
    south?: Room
    southwest?: Room
    west?: Room
    northwest?: Room
    up?: Room
    down?: Room
    enter?: Room
    exit?: Room
    open?: Room
    climb?: Room
    move?: Room
}

export type Room = Exits & {
    var_name: string
    name: string
    look: string
    items: Item[]
    visited?: boolean
    roomIsDark: boolean
}

const addExit = (room: Room, direction: keyof Exits, exit: Room) => {
    room[direction] = exit
}

export const rooms: Record<string, Room> = {
    northOfHouse: {
        var_name: "northOfHouse",
        name: "North of House",
        look:
            "You are facing the north side of a white house. There is no door here,\n and all the windows are boarded up. To the north a narrow path winds through the trees.",
        items: [],
        roomIsDark: false
    },
    forestPath: {
        var_name: "forestPath",
        name: "Forest Path",
        look:
            "This is a path winding through a dimly lit forest. The path heads north-south here.\n One particulary large tree with some low branches stands at the edge of the path.",
        items: [],
        roomIsDark: false
    },
    forest_one: {
        var_name: "forest_one",
        name: "Forest",
        look: "This is a dimly lit forest, with large trees all around",
        items: [],
        roomIsDark: false
    },
    forest_two: {
        var_name: "forest_two",
        name: "Forest",
        look: "This is a forest, with trees in all directions.\nTo the east, there appears to be light.",
        items: [],
        roomIsDark: false
    },
    forest_three: {
        var_name: "forest_three",
        name: "Forest",
        look: "This is a dimly lit forest, with large trees all around.",
        items: [],
        roomIsDark: false
    },
    forest_four: {
        var_name: "forest_four",
        name: "Forest",
        look: "The forest thins out, revealing impassable mountains.",
        items: [],
        roomIsDark: false
    },
    stormTossed: {
        var_name: "stormTossed",
        name: "Forest",
        look: "Storm-tossed trees block your way.",
        items: [],
        roomIsDark: false
    },
    southOfHouse: {
        var_name: "southOfHouse",
        name: "South of House",
        look:
            "You are facing the south side of a white house.\n There is no door here, and all the windows are boarded",
        items: [],
        roomIsDark: false
    },
    westOfHouse: {
        var_name: "westOfHouse",
        name: "West of House",
        look: "This is an open field west of a white house, with a boarded front door.\nThere is a small mailbox here.",
        items: [items.mat],
        visited: true,
        roomIsDark: true
    },
    behindHouse: {
        var_name: "behindHouse",
        name: "Behind House",
        look:
            "You are behind the white house. A path leads into the forest to the east. \nIn one corner of the house there is a small window which is slightly ajar.",
        items: [],
        roomIsDark: false
    },
    windowBehindHouse: {
        var_name: "windowBehindHouse",
        name: "Behind House",
        look:
            "You are behind the white house. A path leads into the forest to the east. \nIn one corner of the house there is a small window which is open.",
        items: [],
        roomIsDark: false
    },
    kitchen: {
        var_name: "kitchen",
        name: "Kitchen",
        look:
            "You are in the kitchen of a the white house. A table seems to have been used recently for the\npreparation of food. A passage leads to the west and a dark staircase can be seen leading upward.\n A dark chimney leads down and to the east is a small window which is open.\n",
        items: [items.sack, items.bottle],
        roomIsDark: false
    },
    mailbox: {
        var_name: "mailbox",
        name: "Mailbox",
        look: "Opening the mailbox reveals a leaflet.",
        items: [items.leaflet],
        roomIsDark: false
    },
    tree: {
        var_name: "tree",
        name: "Up A Tree",
        look:
            "You are about 10 feet above the ground nestled among some large branches.\nThe nearest branch above you is out of reach. Besides you on the branch is a small birds nest.",
        items: [items.egg],
        roomIsDark: false
    },
    northClearing: {
        var_name: "northClearing",
        name: "Clearing",
        look: "You are in a clearing, with a forest surrounding you on all sides. A path leads south.",
        items: [items.leaves],
        roomIsDark: false
    },
    eastClearing: {
        var_name: "eastClearing",
        name: "Clearing",
        look: "You are in a small clearing in a well marked forest path that extends to the east and west.",
        items: [],
        roomIsDark: false
    },
    canyonView: {
        var_name: "canyonView",
        name: "Canyon View",
        look:
            "You are at the top of the Great Canyon on its west wall.\nFrom here there is a marvelous view of the canyon and parts of the Frigid River upstream. Across the canyon, the walls of the White Cliffs join the mighty ramparts of the Flathead Mountains to the east.\n Following the Canyon upstream to the north, Aragain Falls may be seen, complete with rainbow.\n The mighty Frigid River flows out from a great dark cavern. To the west and south can be seen an immense forest, stretching for miles around. A path leads northwest.<br > It is possible to climb down into the canyon from here.",
        items: [],
        roomIsDark: false
    },
    rockyLedge: {
        var_name: "rockyLedge",
        name: "Rocky Ledge",
        look:
            "You are on a ledge about halfway up the wall of the river canyon.\nYou can see from here that the main flow from Aragain Falls twists along a passage which it is impossible for you to enter.\nBelow you is the canyon bottom. Above you is more cliff, which appears climbable.",
        items: [],
        roomIsDark: false
    },
    canyonBottom: {
        var_name: "canyonBottom",
        name: "Canyon Bottom",
        look:
            "You are beneath the walls of the river canyon which may be climbable here.\nThe lesser part of the runoff of Aragain Falls flows by below. To the north is a narrow path.",
        items: [],
        roomIsDark: false
    },
    endOfRainbow: {
        var_name: "endOfRainbow",
        name: "End of Rainbow",
        look:
            "You are on a small, rocky beach on the continuation of the Frigid River past the Falls.\n The beach is narrow due to the presence of the White Cliffs. The river canyon opens here and sunlight shines in from above.\nA rainbow crosses over the falls to the east and a narrow path continues to the southwest.",
        items: [],
        roomIsDark: false
    },
    chimney: {
        var_name: "chimney",
        name: "Chimney",
        look: "You are in a small cold chimney, on the wall reads 'Santa was here'.",
        items: [],
        roomIsDark: true
    },
    livingRoom: {
        var_name: "livingRoom",
        name: "Living Room",
        look:
            "You are in the living room. There is a doorway to the east, a wooden door with strange gothic lettering to the west, which appears to be nailed shut, a trophy case, and a large oriental rug in the center of the room.",
        items: [items.sword, items.lantern],
        roomIsDark: false
    },
    livingRoomRugMoved: {
        var_name: "livingRoomRugMoved",
        name: "Living Room",
        look:
            "With a great effort, the rug is moved to one side of the room, revealing the dusty cover of a closed trap door.",
        items: [items.sword, items.lantern],
        roomIsDark: false
    },
    livingRoomTrapDoor: {
        var_name: "livingRoomTrapDoor",
        name: "Trap Door",
        look: "The door reluctantly opens to reveal a rickety staircase descending into darkness.",
        items: [],
        roomIsDark: false
    },
    cellar: {
        var_name: "cellar",
        name: "Cellar",
        look:
            "You are in a dark and damp cellar with a narrow passageway leading north, and a crawlway to the south. On the west is the bottom of a steep metal ramp which is unclimbable.",
        items: [],
        roomIsDark: true
    }
}

addExit(rooms.forest_one, "south", rooms.stormTossed)
addExit(rooms.forest_one, "north", rooms.southOfHouse)

addExit(rooms.stormTossed, "north", rooms.forest_one)

addExit(rooms.northOfHouse, "east", rooms.behindHouse)
addExit(rooms.northOfHouse, "south", rooms.southOfHouse)
addExit(rooms.northOfHouse, "north", rooms.forestPath)
addExit(rooms.northOfHouse, "west", rooms.westOfHouse)

addExit(rooms.forestPath, "south", rooms.northOfHouse)
addExit(rooms.forestPath, "climb", rooms.tree)
addExit(rooms.forestPath, "up", rooms.tree)
addExit(rooms.forestPath, "north", rooms.northClearing)

addExit(rooms.northClearing, "west", rooms.forest_two)
addExit(rooms.northClearing, "east", rooms.forest_three)
addExit(rooms.northClearing, "south", rooms.forestPath)

addExit(rooms.forest_two, "east", rooms.forestPath)
addExit(rooms.forest_two, "north", rooms.northClearing)
addExit(rooms.forest_two, "south", rooms.westOfHouse)

addExit(rooms.forest_three, "west", rooms.forestPath)
addExit(rooms.forest_three, "east", rooms.forest_four)

addExit(rooms.forest_four, "west", rooms.forestPath)

addExit(rooms.tree, "climb", rooms.forestPath)
addExit(rooms.tree, "down", rooms.forestPath)
addExit(rooms.tree, "south", rooms.northOfHouse)

addExit(rooms.southOfHouse, "north", rooms.westOfHouse)
addExit(rooms.southOfHouse, "south", rooms.forest_one)
addExit(rooms.southOfHouse, "east", rooms.behindHouse)
addExit(rooms.southOfHouse, "west", rooms.westOfHouse)

addExit(rooms.westOfHouse, "north", rooms.northOfHouse)
addExit(rooms.westOfHouse, "south", rooms.southOfHouse)
addExit(rooms.westOfHouse, "east", rooms.behindHouse)
addExit(rooms.westOfHouse, "west", rooms.forest_two)
addExit(rooms.westOfHouse, "open", rooms.mailbox)

addExit(rooms.mailbox, "north", rooms.northOfHouse)
addExit(rooms.mailbox, "south", rooms.southOfHouse)
addExit(rooms.mailbox, "east", rooms.behindHouse)
addExit(rooms.mailbox, "west", rooms.forest_two)

addExit(rooms.behindHouse, "open", rooms.windowBehindHouse)
addExit(rooms.behindHouse, "south", rooms.southOfHouse)
addExit(rooms.behindHouse, "west", rooms.westOfHouse)
addExit(rooms.behindHouse, "east", rooms.eastClearing)
addExit(rooms.behindHouse, "north", rooms.northOfHouse)

addExit(rooms.eastClearing, "west", rooms.behindHouse)
addExit(rooms.eastClearing, "east", rooms.canyonView)

addExit(rooms.canyonView, "west", rooms.eastClearing)
addExit(rooms.canyonView, "east", rooms.rockyLedge)
addExit(rooms.canyonView, "climb", rooms.rockyLedge)
addExit(rooms.canyonView, "down", rooms.rockyLedge)

addExit(rooms.rockyLedge, "west", rooms.canyonView)
addExit(rooms.rockyLedge, "up", rooms.canyonView)
addExit(rooms.rockyLedge, "down", rooms.canyonBottom)
addExit(rooms.rockyLedge, "climb", rooms.canyonBottom)

addExit(rooms.canyonBottom, "up", rooms.rockyLedge)
addExit(rooms.canyonBottom, "climb", rooms.rockyLedge)
addExit(rooms.canyonBottom, "north", rooms.endOfRainbow)

addExit(rooms.endOfRainbow, "south", rooms.canyonBottom)

addExit(rooms.windowBehindHouse, "enter", rooms.kitchen)
addExit(rooms.windowBehindHouse, "east", rooms.eastClearing)
addExit(rooms.windowBehindHouse, "west", rooms.westOfHouse)
addExit(rooms.windowBehindHouse, "north", rooms.northOfHouse)
addExit(rooms.windowBehindHouse, "south", rooms.southOfHouse)

addExit(rooms.kitchen, "exit", rooms.behindHouse)
addExit(rooms.kitchen, "up", rooms.chimney)
addExit(rooms.kitchen, "west", rooms.livingRoom)

addExit(rooms.chimney, "down", rooms.kitchen)

addExit(rooms.livingRoom, "east", rooms.kitchen)
addExit(rooms.livingRoom, "move", rooms.livingRoomRugMoved)

addExit(rooms.livingRoomRugMoved, "east", rooms.kitchen)
addExit(rooms.livingRoomRugMoved, "open", rooms.livingRoomTrapDoor)

addExit(rooms.livingRoomTrapDoor, "down", rooms.cellar)
addExit(rooms.livingRoomTrapDoor, "east", rooms.kitchen)

addExit(rooms.cellar, "up", rooms.livingRoom)
