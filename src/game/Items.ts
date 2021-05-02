export type Item = {
    var_string: string
    name: string
    specialdesc: string
    desc: string
    contents: string
    taken: boolean
    actionArr: string[]
    openDesc: string
    useDesc: string
    itemInUse: boolean
}

export const items: Record<string, Item> = {
    sack: {
        var_string: "sack",
        name: "sack",
        specialdesc: "",
        desc: "elongated brown sack, smelling of hot peppers\n",
        contents: "hot peppers",
        taken: false,
        actionArr: ["open", "eat"],
        openDesc: "Opening the sack reveals a lunch, and a clove of garlice.",
        useDesc:
            "What the heck! You wont make friends this way, but nobody around here is too friendly anyhow. Gulp!\n",
        itemInUse: false
    },
    bottle: {
        var_string: "bottle",
        name: "bottle",
        specialdesc: "A glass bottle is sitting on the table containing a quantity of water.\n",
        desc: "A glass bottle is sitting on the table containing\na quantity of water.",
        contents: "a quantity of water",
        taken: false,
        actionArr: ["open", "drink"],
        openDesc: "opened",
        useDesc: "Thank you very much. I was rather thirsty (from all this talking, probably}.\n",
        itemInUse: false
    },
    leaflet: {
        var_string: "leaflet",
        name: "leaflet",
        specialdesc: "",
        desc: "small leaflet",
        contents:
            "WELCOME TO ZORK!\n\nZORK is a game of adventure, danger and low cunning.\nIn it you will explore some of the most amazing territory ever seen by mortals.\nNo computer should be without one!",
        taken: false,
        actionArr: ["read"],
        openDesc: "",
        useDesc: "",
        itemInUse: false
    },
    mat: {
        var_string: "mat",
        name: "mat",
        specialdesc: "A rubber mat saying 'Welcome to Zork!' lies by the door.\n",
        desc: "A rubber mat",
        contents: "",
        taken: false,
        actionArr: [],
        openDesc: "",
        useDesc: "",
        itemInUse: false
    },
    egg: {
        var_string: "egg",
        name: "egg",
        specialdesc:
            "In the birds nest is a large egg encrusted with precious jewels, apparently scavenged by a childless songbird.\n The egg is covered with fine golf inlay, and ornamented in lapis lazuli and mother-of-pearl.\n Unlike most eggs, this one is hinged and closed with a delicate looking clasp.\n The egg appears extremely fragile.\n",
        desc: "",
        contents: "",
        taken: false,
        actionArr: ["use"],
        openDesc: "You've opened the egg.\n",
        useDesc: "The egg glimmers, blinds you, and you fall to the ground.\n",
        itemInUse: false
    },
    leaves: {
        var_string: "leaves",
        name: "grating",
        specialdesc: "On the ground is a pile of leaves.\n",
        desc: "",
        contents: "",
        taken: false,
        actionArr: ["use"],
        openDesc: "",
        useDesc: "You place the grating on the ground. Great..",
        itemInUse: false
    },
    sword: {
        var_string: "sword",
        name: "elven sword",
        specialdesc: "Above the trophy case hangs an elvish sword of great antiquity.\n",
        desc: "",
        contents: "",
        taken: false,
        actionArr: ["use", "attack"],
        openDesc: "You pull the elven sword from you bag and hold it high in the air. It glows with a mystical aura.\n",
        useDesc: "You fiercly swing the sword.\n",
        itemInUse: false
    },
    lantern: {
        var_string: "lantern",
        name: "brass lantern",
        specialdesc: "A battery-powered brass lantern is on the trophy case.\n",
        desc: "",
        contents: "",
        taken: false,
        actionArr: ["use", "on", "off"],
        openDesc: "",
        useDesc: "The brass lantern is now on.\n",
        itemInUse: false
    }
}
