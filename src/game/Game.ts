import { Item, items } from "./Items"
import { Exits, Room, rooms } from "./Rooms"

type Player = {
    inventory: Item[]
    location: Room
}

type GameSave = {
    location: string
    inventory: Item[]
    moves: number
}

let moves = 0
const score = 0
let output = ""
let verbose = false
let roomView = rooms.westOfHouse.name
let player: Player
let room: Room
let restGameEntered = 0

const rawSavedGame = localStorage.getItem("zorkSaveGame")
if (rawSavedGame) {
    // Get Saved Game
    const savedGame = JSON.parse(rawSavedGame) as GameSave
    // Create our blank player object
    player = {
        inventory: [],
        location: rooms[savedGame.location]
    }
    // Fill our players inventory
    for (let sv = 0; sv < savedGame.inventory.length; sv++) {
        player.inventory.push(items[savedGame.inventory[sv].var_string])
    }
    // Set our players location
    // Set our moves variable
    moves = savedGame.moves
    //Set our room view
    roomView = player.location.name

    // View our room
    room = player.location
    look()
    room.visited = true
} else {
    player = {
        inventory: [],
        location: rooms.westOfHouse
    }
    room = player.location
    look()
    if (room) {
        room.visited = true
    }
}

room = player.location

function reset() {
    restGameEntered++
    if (restGameEntered !== 2) {
        output += "Get lost? If you'd like to start over, type reset once more.\n\n"
    } else if (restGameEntered === 2) {
        output += "Your game has been reset.\n\n"
        localStorage.clear()
        window.location.reload()
    } else {
        output += "Issue resetting game. Good Luck.\n\n"
    }
}

let saveHasBeenEntered = 0

function save(player: Player) {
    saveHasBeenEntered++
    if (localStorage.getItem("zorkSaveGame") && saveHasBeenEntered !== 2) {
        output += "You have an existing save! If you'd like to overwrite it, type save again.\n\n"
    } else if (!localStorage.getItem("zorkSaveGame") || saveHasBeenEntered === 2) {
        const savePlayer: GameSave = {
            inventory: player.inventory,
            location: player.location.var_name,
            moves
        }

        localStorage.setItem("zorkSaveGame", JSON.stringify(savePlayer))

        output += "Your game has been saved.\n\n"

        saveHasBeenEntered = 0
    } else {
        output += "Issue saving game. Good Luck.\n\n"
    }
}

function showItems() {
    const itemList = []

    for (let i = 0; i < room.items.length; i++) {
        if (room.items[i].specialdesc) {
            output += room.items[i].specialdesc + "\n"
        } else {
            itemList.push(room.items[i].desc)
        }
    }

    if (itemList.length === 1) {
        output += "There is a " + itemList[0] + " here.\n\n"
    } else if (itemList.length > 1) {
        const str = ""
        for (let i = 0; i < itemList.length; i++) {
            if (!itemList[i + 1]) {
                str.concat(itemList[i])
            } else {
                str.concat(itemList[i] + ", ")
            }
        }
        output += "There is a " + str + " here.\n\n"
    }
}

function look() {
    console.log(room)

    if (!room.roomIsDark) {
        output += "" + room.name + "\n"
        output += room.look + "\n\n"

        showItems()
    } else if (room.roomIsDark && !items.lantern.itemInUse) {
        output += "You have moved into a dark place.\nIt is pitch black. You are likely to be eaten by a grue.\n\n"
    } else if (room.roomIsDark && items.lantern.itemInUse) {
        output += "" + room.name + "\n"
        output += room.look + "\n\n"

        showItems()
    }
}

function read(item: string | string[]) {
    if (Array.isArray(item)) {
        // If the array has length of 1, the player didn't specify a direction
        if (item.length === 1) {
            output += "What do you want to read?\n\n"
        } else {
            read(item[1])
        }
    } else {
        const itemObj = items[item]

        if (!itemObj || !player.inventory.includes(itemObj)) {
            output += "You don't have a " + itemObj?.name + " in your bag!\n\n"
        } else if ("contents" in itemObj && itemObj.contents) {
            output += itemObj.contents + "\n\n"
        }
    }
}

function take(item: string | string[]) {
    if (Array.isArray(item)) {
        // If the array has length of 1, the player didn't specify a direction
        if (item.length === 1) {
            output += "What do you want to take?\n\n"
        } else {
            take(item[1])
        }
    } else {
        const itemObj = items[item]

        if (!itemObj || !player.location.items.includes(itemObj)) {
            switch (Math.floor(Math.random() * 4) + 1) {
                case 1:
                    output += "You can't see any " + item + " here!\n\n"
                    break
                case 2:
                    output += "Valient Attempt.\n\n"
                    break
                case 3:
                    output += "What a concept!\n\n"
                    break
                case 4:
                    output += "I don't know the word " + item + ".\n\n"
                    break
                default:
                    output += "I'm not sure i get it!.\n\n"
            }
        } else if (player.inventory.includes(itemObj)) {
            output += "You already have the " + itemObj.name + " in your bag!\n\n"
        } else {
            player.inventory.push(itemObj)

            if (!verbose) {
                if (room.visited) {
                    output += "You put the " + itemObj.name + " in your bag.\n\n"
                    itemObj.taken = true
                } else {
                    output += "You have collected a" + itemObj.desc + " containing " + itemObj.contents + "\n\n"
                    itemObj.taken = true
                }
            } else {
                look()
                itemObj.taken = true
            }
        }
    }
}

function use(item: string[] | string) {
    if (Array.isArray(item)) {
        // If the array has length of 1, the player didn't specify an item
        if (item.length === 1) {
            output += "Use what?\n\n"
        } else {
            use(item[1])
        }
    } else {
        const itemObj = items[item]

        if (!itemObj || !player.inventory.includes(itemObj)) {
            switch (Math.floor(Math.random() * 4) + 1) {
                case 1:
                    output += "You can't use the " + item + " here!\n\n"
                    break
                case 2:
                    output += "Valiant Attempt.\n\n"
                    break
                case 3:
                    output += "What a concept!\n\n"
                    break
                case 4:
                    output += "I don't know the word " + item + ".\n\n"
                    break
                default:
                    output += "I'm not sure i get it!.\n\n"
            }
        } else {
            if (!itemObj.itemInUse) {
                if (!verbose) {
                    if (room.visited) {
                        output += "" + itemObj.useDesc + ".\n\n"
                        itemObj.itemInUse = true
                    } else {
                        output += "" + itemObj.useDesc + "\n\n"
                        itemObj.itemInUse = true
                    }
                    look()
                } else {
                    look()
                    itemObj.itemInUse = true
                }
            } else if (itemObj.itemInUse) {
                if (!verbose) {
                    if (room.visited) {
                        output += "You put away the " + itemObj.name + ".\n\n"
                        itemObj.itemInUse = false
                    } else {
                        output += "You put away the" + itemObj.name + "\n\n"
                        itemObj.itemInUse = false
                    }
                    look()
                } else {
                    look()
                    itemObj.itemInUse = false
                }
            }
        }
    }
}

// If player typed "go -direction-", this function receives an array
// as a parameter. The item at the array index 1 should be the direction
// entered. This function will recursively call itself, passing that
// direction as a parameter.
function go(direction: string[] | string) {
    if (Array.isArray(direction)) {
        // If the array has length of 1, the player didn't specify a direction
        if (direction.length === 1) {
            output += "Which direction?\n\n"
        } else {
            go(direction[1])
        }
    } else {
        if (!(direction in room)) {
            output += "You can't go that way.\n\n"
        } else {
            player.location = room[direction as keyof Exits] as Room
            room = player.location
            roomView = player.location.name

            if (!verbose) {
                if (room.visited) {
                    output += "" + room.name + "\n\n"
                    showItems()
                } else {
                    look()
                    room.visited = true
                }
            } else {
                look()
                room.visited = true
            }
        }
    }
}

function bag() {
    if (player.inventory === undefined || player.inventory.length === 0) {
        output += "There is nothing in your bag!.\n\n"
    } else {
        output += "Your bag contains:\n"
        for (let j = 0; j < player.inventory.length; j++) {
            output += player.inventory[j].name + "\n"
        }
    }
}

// Define Invalid Command text
function invalidCommand(cmd: string) {
    switch (Math.floor(Math.random() * 4) + 1) {
        case 1:
            output += "I don't know the word \"" + cmd + '".\n'
            break
        case 2:
            output += "We're not going down that road again!\n\n"
            break
        case 3:
            output += "What a concept!\n\n"
            break
        case 4:
            output += "Sorry, my memory is poor. Please give a direction.\n\n"
            break
        default:
            output += "I'm not sure i get it!.\n\n"
    }
}

// Defines brief mode
function brief() {
    verbose = false
    output +=
        'ZORK is now in its normal "brief" printing mode, which gives long descriptions of places never before visited, and short descriptions otherwise.\n\n'
}

function help() {
    output += "Here is a list of acceptable commands:\n"
    const acceptedCommands = [
        "> go [direction]",
        "> north",
        "> east",
        "> south",
        "> west",
        "> up",
        "> down",
        "> look",
        "> open",
        "> enter",
        "> exit",
        "> climb",
        "> brief [ short descriptions ]",
        "> verbose [ long descriptions ]",
        "> help",
        "> take",
        "> bag",
        "> save [ Save current game]",
        "> reset [ Reset game including save ]"
    ]
    for (let i = 0; i < acceptedCommands.length; i++) {
        output += acceptedCommands[i] + "\n"
    }
}

// Defines verbose mode
function verboseOn() {
    verbose = true
    output +=
        'ZORK is now in its "verbose" mode, which always gives long descriptions of locations (even if you\'ve been there before).\n\n'
}

function parseCommand(command: string) {
    const commandParts = command.toLowerCase().split(" ")

    switch (commandParts[0]) {
        case "bag":
        case "inventory":
            bag()
            break

        case "use":
            use(commandParts)
            break

        case "read":
            read(commandParts)
            break

        case "take":
            take(commandParts)
            break

        case "go":
            go(commandParts)
            break

        case "north":
        case "n":
            go("north")
            break

        case "south":
        case "s":
            go("south")
            break

        case "east":
        case "e":
            go("east")
            break

        case "west":
        case "w":
            go("west")
            break

        case "up":
        case "u":
            go("up")
            break

        case "down":
        case "d":
            go("down")
            break

        case "open":
            go("open")
            break

        case "enter":
            go("enter")
            break

        case "exit":
            go("exit")
            break

        case "climb":
            go("climb")
            break

        case "look":
        case "l":
            look()
            break

        case "brief":
            brief()
            break

        case "verbose":
            verboseOn()
            break

        case "help":
            help()
            break
        case "move":
            go("move")
            break

        case "save":
            save(player)
            break

        case "reset":
            reset()
            break

        default:
            invalidCommand(command)
    }
}

export function submitCommand(command: string) {
    moves++

    output = ""
    parseCommand(command)
}

export function getState() {
    return {
        moves,
        output,
        score,
        room: roomView
    }
}
