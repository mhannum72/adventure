
commands = {
    "go"      : {
                    "execute" : playermove,
                    "aliases" : [
                                  [ "go", "to", "the" ],
                                  [ "move", "to", "the" ],
                                  [ "run", "to", "the" ],
                                  [ "walk", "to", "the" ],
                                  [ "walk" ],
                                  [ "run" ],
                                  [ "go" ],
                                  [ "move" ],
                                ],
                    "contextmatch" : checkhavenoun,

    },
    "lookroom" : {
                    "execute" : lookroom,
                    "aliases" : [
                                    [ "show", "me", "what's", "in", "the", "room" ],
                                    [ "show", "me", "whats", "in", "the", "room" ],
                                    [ "show", "what's", "in", "the", "room" ],
                                    [ "show", "whats", "in", "the", "room" ],
                                    [ "what's", "in", "the", "room?" ],
                                    [ "what's", "in", "the", "room" ],
                                    [ "whats", "in", "the", "room?" ],
                                    [ "whats", "in", "the", "room" ],
                                    [ "show", "in", "the", "room" ],
                                    [ "look", "at", "the", "room" ],
                                    [ "show", "the", "room" ],
                                    [ "look", "in", "room" ],
                                    [ "where", "am", "I" ],
                                    [ "where", "am", "I?" ],
                                    [ "look", "at", "room" ],
                                    [ "show", "room" ],
                                    [ "look", "room" ],
                                    [ "look", "around" ],
                                ],
                    "contextmatch" : checknounless,
    },
    "drainnounless" : {
                    "execute" : drainbath,
                    "aliases" : [
                                    [ "let", "the", "water", "out" ],
                                    [ "let", "water", "out" ],
                                ],
                    "contextmatch" : checkdrainnounless,
    },
    "unclogdrain" : {
                    "execute" : unclogbath,
                    "aliases" : [
                                    [ "un", "clog", "the", "drain" ],
                                    [ "unclog", "the", "drain" ],
                                    [ "unclog", "the", "drain" ],
                                    [ "un", "clog", "drain" ],
                                    [ "unclog", "drain" ],
                                ],
                    "contextmatch" : checkdrainnounless
    },
    "drainbath" : {
                    "execute" : drainbath,
                    "aliases" : [
                                    [ "drain", "the", "water", "out", "of" ],
                                    [ "drain", "the", "water", "out", "of" ],
                                    [ "let", "the", "water", "out", "of" ],
                                    [ "let", "the", "water", "out" ],
                                    [ "let", "the", "water", "from" ],
                                    [ "empty", "the", "water", "from" ],
                                    [ "drain", "water", "out", "of" ],
                                    [ "drain", "water", "from" ],
                                    [ "empty", "the" ],
                                    [ "empty", "the" ],
                                    [ "empty" ],
                                    [ "drain" ],

                                ],
                    "contextmatch" : checkdrainbath,

    },
    "closetoilet" : {
                    "execute" : closetoilet,
                    "aliases" : [
                                    [ "close" ],
                                ],
                    "contextmatch" : checktoilet,

    },
    "opentoilet" : {
                    "execute" : opentoilet,
                    "aliases" : [
                                    [ "open" ],
                                ],
                    "contextmatch" : checktoilet,
    },
    "pulldrain" : {
        // Empty bath commands that have the drain as the object 
                    "execute" : drainbath,
                    "aliases" : [
                                    [ "pull" ],
                                ],
                    "contextmatch" : checkpulldrain,
    },
    "opencloset" : {
                    "execute" : opencloset,
                    "aliases" : [
                                    [ "open", "the" ],
                                    [ "open" ],
                                ],
                    "contextmatch" : checkopencloset,
    },
    "unlockcloset" : {
                    "execute" : unlockcloset,
                    "aliases" : [
                                    [ "unlock", "the" ],
                                    [ "unlock" ],
                                ],
                    "contextmatch" : checkunlockcloset,
    },
    "bedjump" : {
                    "execute" : bedjump,
                    "aliases" : [
                                    [ "jump", "on", "the" ],
                                    [ "bounce", "on", "the" ],
                                    [ "bounce", "on"  ],
                                    [ "jump", "on" ],
                                    [ "jump" ],
                                ],
                    "contextmatch" : checkbedjump,
    },
    "north"   : {
                    "execute" : playermovenorth,
                    "aliases" : [
                                  [ "north" ],
                                ],
                    "contextmatch" : checknounless,
                },
    "south"   : {
                    "execute" : playermovesouth,
                    "aliases" : [
                                  [ "south" ],
                                ],
                    "contextmatch" : checknounless,
    },
    "east"    : {
                    "execute" : playermoveeast,
                    "aliases" : [
                                  [ "east" ],
                                ],
                    "contextmatch" : checknounless,
                },
    "west"    : {
                    "execute" : playermovewest,
                    "aliases" : [
                                  [ "west" ],
                                ],
                    "contextmatch" : checknounless,
                },
    "up"      : {
                    "execute" : playermoveup,
                    "aliases" : [
                                  [ "up" ],
                                ],
                    "contextmatch" : checknounless,
                },
    "down"    : {
                    "execute" : playermovedown,
                    "aliases" : [
                                  [ "down" ],
                                ],
                    "contextmatch" : checknounless,
    },


    "quit"    : {
                    "execute" : stopgame,
                    "aliases" : [
                                  [ "end", "game" ],
                                  [ "stop", "playing" ],
                                  [ "stop", "game" ],
                                  [ "halt", "game" ],
                                  [ "exit" ],
                                  [ "quit" ],

                                ],
                    "contextmatch" : checknounless,
    },

    // Keep before the 'take' command so that 'take inventory' will work
    "inventory" : {
                    "execute" : showinventory,
                    "aliases" : [
                                  [ "whats", "in", "my", "inventory" ],
                                  [ "whats", "in", "my", "inventory?" ],
                                  [ "what", "do", "i", "have" ],
                                  [ "what", "do", "i", "have?" ],
                                  [ "take", "inventory" ],
                                  [ "inventory" ],
                                ],
                    "contextmatch" : checknounless,
    },

    "examine" : {
                    "execute" : examineobject,
                    "aliases" : [
                                  [ "look", "at", "the" ],
                                  [ "look", "at" ],
                                  [ "examine", "the" ],
                                  [ "examine" ],
                                  [ "look" ],
                                ],
                    "contextmatch" : checkhavenoun,
    },
    "take"    : { 
                    "execute" : takeobject,
                    "aliases" : [
                                  [ "pick", "up", "the" ],
                                  [ "get", "the" ],
                                  [ "pick", "up" ],
                                  [ "grab", "the" ],
                                  [ "get", "a" ],
                                  [ "take", "the" ],
                                  [ "take", "a" ],
                                  [ "take" ],
                                  [ "get" ],
                                ],
                    "contextmatch" : checkhavenoun,
    },
    "drop"    : { 
                    "execute" : dropobject,
                    "aliases" : [
                                  [ "drop", "the" ],
                                  [ "drop" ],
                                ],
                    "contextmatch" : checkhavenoun,
    },
};

objects = {
    "stonehenge" : {
        "inroomDescription" : "a miniature model of stonehenge",
        "shortDescription"  : "a miniature model of stonehenge",
        "longDescription"   : "A miniature model of stonehenge is fused to the bottom of the tub.",
        "lookDescription"   : "A miniature model of stonehenge that seems to have been " + 
                              "created with shampoo bottles.",
        "takeable"          : false,
        "visible"           : false,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "model", "of", "stone", "henge" ],
                                [ "the", "model", "of", "stonehenge" ],
                                [ "the", "stone", "henge" ],
                                [ "stone", "henge" ],
                                [ "the", "stonehenge" ],
                                [ "stonehenge" ],
                              ],
        "canttaketext"      : "You can't take it. It seems to be fused to the bottom of the bathtub.",
    },
    "bathroomsink" : {
        "inroomDescription" : "the bathroom sink",
        "shortDescription"  : "the bathroom sink",
        "longDescription"   : "A normal bathroom sink.",
        "lookDescription"   : "It is a normal bathroom sink.",
        "takeable"          : false,
        "visible"           : true,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "bathroom", "sink" ],
                                [ "bathroom", "sink" ],
                                [ "sink" ],
                              ],
        "canttaketext"      : "You can't take the bathroom sink, silly!",
    },
    "toilet" : {
        "inroomDescription" : "a toilet bowl",
        "shortDescription"  : "a toilet bowl",
        "longDescription"   : "The toilet bowl is closed.",
        "lookDescription"   : "It is a normal looking toilet bowl. It is closed.",
        "takeable"          : false,
        "visible"           : true,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "toilet", "bowl" ],
                                [ "toilet", "bowl" ],
                                [ "the", "toilet" ],
                                [ "toilet" ],
                              ],
        "isopen"            : false,
    },
    "bathwater" : {
        "inroomDescription" : "bath water",
        "shortDescription"  : "bath water",
        "longDescription"   : "It's normal, unused bath water covered with a layer of velvet bubbles.",
        "lookDescription"   : "It looks like someone was taking a bubble bath. The bubbles make it impossible " +
                              "to see the bottom of the tub.",
        "takeable"          : false,
        "visible"           : true,
        "printinobjs"       : false,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "bath", "water" ],
                                [ "the", "bathwater" ],
                                [ "the", "water" ],
                                [ "bath", "water" ],
                                [ "bathwater" ],
                                [ "water" ],
                              ],
        "contextmatch"      : checkbathwater
    },
    "bubbles" : {
        "inroomDescription" : "bubbles",
        "shortDescription"  : "bubbles",
        "longDescription"   : "A layer of velvet white bubbles sits on top of the bath water.",
        "lookDescription"   : "A layer of velvet white bubbles sits on top of the bath water.",
        "takeable"          : false,
        "visible"           : true,
        "printinobjs"       : false,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "bubbles" ],
                                [ "bubbles" ],
                              ],
    },
    "bathtub" : {
        "inroomDescription" : "a bathtub filled with water and bubbles",
        "shortDescription"  : "a bathtub",
        "longDescription"   : "It looks like a normal bathtub. It is filled to the brim with bubbles.",
        "lookDescription"   : "It looks like someone was taking a bubble bath. The bubbles make it " +
                              "impossible to see the bottom of the tub.",
        "takeable"          : false,
        "visible"           : true,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "bath", "tub" ],
                                [ "the", "bathtub" ],
                                [ "the", "bath" ],
                                [ "the", "tub" ],
                                [ "bathtub" ],
                                [ "bath" ],
                                [ "tub" ],
                              ],
        "haswater"          : true
    },

    "closetdoor" : {
        "inroomDescription" : "a closet door to the west",
        "shortDescription"  : "a closet door",
        "longDescription"   : "A wooden closet door.",
        "lookDescription"   : "It's a normal wooden door. Behind it is mommy's clothes closet. The closet door is locked.",
        "takeable"          : false,
        "visible"           : true,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "closet", "door" ],
                                [ "the", "closet" ],
                                [ "the", "door" ],
                                [ "closet" ],
                                [ "door" ],
                              ],
        "contextmatch"      : checkclosetdoor,
        "islocked"          : true,
        "isclosed"          : true,
    },

    "daddysbed" : {
        "inroomDescription" : "Mommy and Daddy's neatly made bed",
        "shortDescription"  : "Mommy and Daddy's neatly made bed",
        "longDescription"   : "Mommy and Daddy's bed has been neatly made.",
        "lookDescription"   : "Mommy and Daddy's bed has been neatly made.",
        "takeable"          : false,
        "visible"           : true,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "mommy", "and", "daddy's", "bed" ],
                                [ "mommy", "and", "daddy", "bed" ],
                                [ "mommy", "and", "daddys", "bed" ],
                                [ "mommys", "and", "daddys", "bed" ],
                                [ "mommies", "and", "daddies", "bed" ],
                                [ "mommy's", "and", "daddy's", "bed" ],
                                [ "mommy's", "bed" ],
                                [ "mommys", "bed" ],
                                [ "daddy's", "bed" ],
                                [ "daddys", "bed" ],
                                [ "the", "bed" ],
                                [ "bed" ],
                              ],
    },

    "closetkey" : {
        "inroomDescription" : "a shiny golden key next to the bed",
        "shortDescription"  : "a golden key",
        "longDescription"   : "The key glimmers in the light.",
        "lookDescription"   : "It is a tiny golden key that glimmers in the light.",
        "takeable"          : false,
        "visible"           : false,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "shiny", "golden", "key" ],
                                [ "shiny", "golden", "key" ],
                                [ "the", "golden", "key" ],
                                [ "the", "shiny", "key" ],
                                [ "golden", "key" ],
                                [ "shiny", "key" ],
                                [ "the", "key" ],
                                [ "key" ],
                              ]
    },

    "coathanger" : {
        "inroomDescription" : "a wire coat hanger next to the wall",
        "shortDescription"  : "a coat hanger",
        "longDescription"   : "A wire coat hanger hangs on the closet-rod close to the wall.",
        "lookDescription"   : "It's a wire coat hanger. There is a tube of cardboard covering the bottom edge.",
        "takeable"          : true,
        "visible"           : true,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "wire", "coat","hanger" ],
                                [ "the", "coat","hanger" ],
                                [ "the", "wire","hanger" ],
                                [ "wire", "coat","hanger" ],
                                [ "the", "clothes","hanger" ],
                                [ "the", "hanger" ],
                                [ "coat","hanger" ],
                                [ "wire","hanger" ],
                                [ "clothes","hanger" ],
                                [ "hanger" ],
                              ]
    },

    "plasticwrap" : {
        "inroomDescription" : "plastic wrap covering one of mommy's dresses",
        "shortDescription"  : "plastic wrap",
        "longDescription"   : "It's shiny plastic wrap. It covers one of mommy's dresses.",
        "lookDescription"   : "The plastic wrap covers one of mommy's dresses. It looks very sturdy.",
        "canttaketext"      : "You can't take that!  It's protecting mommy's dress!",
        "takeable"          : false,
        "visible"           : false,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "dress", "cover" ],
                                [ "the", "plastic", "wrap" ],
                                [ "dress", "cover" ],
                                [ "the", "plastic" ],
                                [ "plastic", "wrap" ],
                                [ "plastic" ],
                              ]
    },
    "mommysclothes" : {
        "inroomDescription" : "mommy's clothes neatly hanging in rows",
        "shortDescription"  : "mommy's clothes",
        "longDescription"   : "Mommy's work clothes are neatly hanging on coat hangers. Several of them " +
                              "are covered in protective plastic wrap.",
        "lookDescription"   : "Mommy's work clothes are neatly hanging on hangers.",
        "canttaketext"      : "You can't take that!  It belongs to Mommy!",
        "takeable"          : false,
        "visible"           : true,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "mommy's", "work", "clothes" ],
                                [ "mommies", "work", "clothes" ],
                                [ "mommys", "work", "clothes" ],
                                [ "mommy's", "clothes" ],
                                [ "mommies", "clothes" ],
                                [ "mommys", "clothes" ],
                                [ "clothes" ],
                              ]
    },

    "lightswitch" : {
        "inroomDescription" : "a lightswitch on the wall",
        "shortDescription"  : "a lightswitch",
        "longDescription"   : "It's a standard lightswitch.",
        "lookDescription"   : "It's a standard lightswitch. It appears to be turned off.",
        "takeable"          : false, 
        "visible"           : false,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "light", "switch" ],
                                [ "at", "the", "switch" ],
                                [ "the", "lightswitch" ],
                                [ "the", "light" ],
                                [ "the", "lights" ],
                                [ "the", "switch" ],
                                [ "light", "switch" ],
                                [ "the", "light-switch" ],
                                [ "light-switch" ],
                                [ "lightswitch" ],
                                [ "switch" ],
                              ]
    },
    "qbamaze" : {
        "inroomDescription" : "an ornate Q-Ba-Maze next to the bed",
        "vinroomDescription": "an ornate Cuba Maze next to the bed",
        "shortDescription"  : "a Q-Ba-Maze",
        "vshortDescription" : "a Cuba Maze",
        "longDescription"   : "The Q-Ba-Maze looks like alot of fun.",
        "vlongDescription"  : "The Cuba Maze looks like alot of fun.",
        "lookDescription"   : "The Q-Ba-Maze is a multi-colored track that carries " +
                              "a silver marble through a series of stunts.",
        "vlookDescription"  : "The Cuba Maze is a multi-colored track that carries" +
                              "a silver marble through a series of stunts.",
        "canttaketext"      : "You can't take that!  It belongs where it is!",
        "takeable"          : false,
        "visible"           : true,
        "printinobjs"       : true,
//        "takeable"          : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "q", "ba", "maze" ],
                                [ "the", "q-ba", "maze" ],
                                [ "the", "cuba", "maze" ],
                                [ "the", "qba", "maze" ],
                                [ "q", "ba", "maze" ],
                                [ "the", "cuba-maze" ],
                                [ "the", "q-ba-maze" ],
                                [ "the", "cubamaze" ],
                                [ "the", "qbamaze" ],
                                [ "qba", "maze" ],
                                [ "q-ba", "maze" ],
                                [ "cuba", "maze" ],
                                [ "cubamaze" ],
                                [ "cuba-maze" ],
                                [ "qbamaze" ],
                                [ "q-ba-maze" ],
                              ]
    },

    "marble" : {
        "inroomDescription" : "a shiny silver marble",
        "shortDescription"  : "a silver marble",
        "longDescription"   : "The marble looks like the perfect size for a Q-Ba-Maze.",
        "lookDescription"   : "It's a shiny silver marble that looks to be the perfect size for " +
                              "a Q-Ba-Maze.",
        "takeable"          : false,
        "visible"           : false,
        "printinobjs"       : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "shiny", "silver", "metal", "marble" ],
                                [ "shiny", "silver", "metal", "marble" ],
                                [ "the", "shiny", "silver", "marble" ],
                                [ "the", "shiny", "metal", "marble" ],
                                [ "silver", "metal", "marble" ],
                                [ "shiny", "metal", "marble" ],
                                [ "the", "silver", "marble" ],
                                [ "the", "shiny", "marble" ],
                                [ "the", "metal", "marble" ],
                                [ "silver", "marble" ],
                                [ "shiny", "marble" ],
                                [ "metal", "marble" ],
                                [ "the", "marble" ],
                                [ "marble" ],
                              ]
    },

    "lightstring" : {
        "inroomDescription" : "a string of green lights surrounding the window to the left",
        "inroomLongDescription" : "It's a string of green lights surrounding the window to the left. " +
                              "It makes the entire bedroom glow an eerie shade of green.",
        "shortDescription"  : "a string of green lights",
        "longDescription"   : "The string of green colored lights.",
        "lookDescription"   : "It's a string of green colored lights. It glow an eerie shade of green.",
        "takeable"          : true,
        "visible"           : true,
        "printinobjs"       : true,
        "takencount"        : 0,
        "aliases"           : [ 
                                [ "the", "string", "of", "green", "christmas", "lights" ],
                                [ "the", "string", "of", "christmas", "lights" ],
                                [ "the", "string", "of", "green", "lights" ],
                                [ "string", "of", "green", "lights" ],
                                [ "the", "string", "of", "lights" ],
                                [ "the", "christmas", "lights" ],
                                [ "the", "light", "string" ],
                                [ "the", "green", "lights" ],
                                [ "string", "of", "lights" ],
                                [ "christmas", "lights" ],
                                [ "the", "lightstring" ],
                                [ "green", "lights" ],
                                [ "light", "string" ],
                                [ "the", "lights" ],
                                [ "lightstring" ],
                                [ "lights" ],
                              ],
    }
};

// Longdescriptions are punctuated. short descriptions are not 
rooms = {
    "jbedroom" : { 
        "shortDescription"  : "Jackson's bedroom",
        "longDescription"   : "You are in Jackson's bedroom.",
        "exits"             : { 
                                "north" : { "visible" : true,  "destination" : "uphall" },
                              },
        "objects"           : [ "qbamaze" , "lightstring" ],
        "visitCount"        : 0,
        "printedlong"       : false
    },
    "uphall" : {
        "shortDescription"  : "the upstairs hallway",
        "longDescription"   : "You are in the upstairs hallway. The light overhead casts a " +
                              "warm glow over the glossy wooden floor.",
        "exits"             : { 
                                "north" : { "visible" : true,  "destination" : "mdbedroom" }, 
                                "south" : { "visible" : true,  "destination" : "jbedroom" }, 
                                "east"  : { "visible" : true,  "destination" : "upbath" }, 
                                "west"  : { "visible" : false, "destination" : "upcloset" }, 
                              },
        "objects"           : [ "lightswitch", "closetdoor" ],
        "visitCount"        : 0,
        "printedlong"       : false
    },

    "upcloset" : {
        "shortDescription"  : "the upstairs closet",
        "longDescription"   : "You are in the upstairs closet.",
        "exits"             : { 
                                "east"  : { "visible" : true,  "destination" : "uphall" }, 
                              },
        "objects"           : [ "mommysclothes", "plasticwrap", "coathanger" ],
        "visitCount"        : 0,
        "printedlong"       : false
    },

    "upbath" : {
        "shortDescription"  : "the upstairs bathroom",
        "longDescription"   : "You are in the upstairs bathroom.",
        "exits"             : { 
                                "west"  : { "visible" : true,  "destination" : "uphall" }, 
                              },
        "objects"           : [ "bathtub", "toilet", "bathroomsink", "marble", "bubbles", "bathwater", "stonehenge" ],
        "visitCount"        : 0,
        "printedlong"       : false
    },

    "mdbedroom" : {
        "shortDescription"  : "Mommie and Daddy's bedroom",
        "longDescription"   : "You are in Mommie and Daddy's bedroom.",
        "exits"             : { 
                                "south" : { "visible" : true,  "destination" : "uphall" }, 
                              },
        "objects"           : [ "daddysbed", "closetkey" ],
        "visitCount"        : 0,
        "printedlong"       : false
    },
};

directions = {
    "north" : {
        "aliases"           : [ 
                                [ "to", "the", "north" ],
                                [ "to", "north" ],
                                [ "north" ], 
                              ]
    },
    "south" : {
        "aliases"           : [
                                [ "to", "the", "south" ],
                                [ "to", "south" ],
                                [ "south" ],
                              ]
    },
    "east" : {
        "aliases"           : [ 
                                [ "to", "the", "east" ],
                                [ "to", "east" ],
                                [ "east" ],
                              ]
    },
    "west" : {
        "aliases"           : [
                                [ "to", "the", "west" ],
                                [ "to", "west" ],
                                [ "west" ],
                              ]
    },
    "up" : {
        "aliases"           : [ 
                                [ "up" ],
                                [ "upstairs" ],
                              ]
    },
    "down" : {
        "aliases"           : [ 
                                [ "down" ],
                                [ "downstairs" ],
                              ]
    },
};

player = {
    "loc"                   : "jbedroom",
    "inventory"             : [],
    "disappeared"           : [],
    "finished"              : false,
    "stopping"              : false,
    "showroominfo"          : true,
    "showobjectinfo"        : true,
    "showexitinfo"          : true,
    "showstatusinfo"        : true,
    "showresponsestring"    : true,
    "usevoice"              : false,
    "introduction"          : "Welcome to Jackson's adventure! ",
    "voiceintroduction"     : "Welcome to Jackson's adventure! ",
        // Not sure about this yet 
        /*

    "conclusion"            : "Congratulations!  You have made it to the rocket ship! " +
                              "You watch the earth disappear in the distance as the " +
                              "rocket ship takes you to Saturn. ",
    "voiceconclusion"       : "Congratulations!  You have made it to the rocket ship! " +
                              "You watch the earth disappear in the distance as the " +
                              "rocket ship takes you to Saturn. ",
                              */
    "commands"              : commands,
    "objects"               : objects,
    "rooms"                 : rooms,
    "directions"            : directions
};


function outp(str) {
    console.log(str);
}

function showobjects(player, objects, objectlist, response) {

    var count = 0;
    var current = 0;

    for (var name in objectlist) {
        if (objects[objectlist[name]].visible && objects[objectlist[name]].printinobjs)
            count++;
    }

    if (count == 0) {
        return;
    }

    response.responsestring += "You see ";

    for (var name in objectlist) {
        if (objects[objectlist[name]].visible && objects[objectlist[name]].printinobjs) {

            if (count > 1 && current > 0)  
                if (current != count - 1)
                    response.responsestring += ", ";
                else
                    response.responsestring += " ";

            if (count > 1 && current == count - 1)
                response.responsestring += "and ";

            if (objects[objectlist[name]].takencount == 0) {
                if (player.usevoice && objects[objectlist[name]].vinroomDescription) {
                    response.responsestring += objects[objectlist[name]].vinroomDescription;
                }
                else {
                    response.responsestring += objects[objectlist[name]].inroomDescription;
                }
            }
            else {
                if (player.usevoice && objects[objectlist[name]].vshortDescription) {
                    response.responsestring += objects[objectlist[name]].vshortDescription;
                }
                else {
                    response.responsestring += objects[objectlist[name]].shortDescription;
                }
            }

            current++;
        }
    }

    response.responsestring += ". ";
}

function showroom(player, rooms, room, response) {
    var roominfo = rooms[room];
    if (!roominfo.printedlong) {
        if (player.usevoice && roominfo.vlongDescription) {
            response.responsestring += roominfo.vlongDescription + " ";
        }
        else {
            response.responsestring += roominfo.longDescription + " ";
        }
        roominfo.printedlong = true;
    }
    else {
        response.responsestring += "You are in ";
        if (player.usevoice && roominfo.vshortDescription) {
            response.responsestring += roominfo.vshortDescription + ". ";
        }
        else {
            response.responsestring += roominfo.shortDescription + ". ";
        }
    }
}

function showexits(player, exitlist, response) {
    var cnt = 0;
    for (var name in exitlist) {
        if(exitlist[name].visible) {
            cnt++;
        }
    }
    if (cnt == 0) {
        response.responsestring += "You see no exits. ";
        return;
    }

    if (cnt == 1)
        response.responsestring += "There is an exit to the ";
    else
        response.responsestring += "There are exits to the ";

    var current = 0;
    
    for (var name in exitlist) {
        if(exitlist[name].visible) {
            current++;
            if (current == cnt)
                response.responsestring += name + ". ";
            else
                response.responsestring += name + ", ";
            if (cnt > 1 && current == cnt - 1) {
                response.responsestring += "and ";
            }
        }
    }

    return;
}

function neverrun(player, objects, unused, response) {
    outp("You should never be in the neverrun handler");
    process.exit(1);
}

function normalizeCommand(player, words, idx) {
    //var commands = player.commands;

    if (idx >= words.length)
        return null;

    for (var cmd in player.commands) {
        var aliaslist = player.commands[cmd].aliases;
        // enforce that aliases have only descending number of words 
        var countwords = aliaslist[0].length;
        for (var j=0 ; j < aliaslist.length; j++) {
            var alias=aliaslist[j];
            var match=true;
            if (alias.length > countwords) {
                outp("Normalize error for command " + cmd + " for alias " + alias);
                outp("alias.length is " + alias.length + ", countwords is " + countwords);
                outp("command aliases should be in descending order of length");
                process.exit(1);
            }
            countwords=alias.length;

            for (var k=0 ; k < alias.length; k++) {
                if (!words[idx + k] || words[idx + k] !== alias[k]) {
                    match=false;
                    break;
                }
            }
            if (match && player.commands[cmd].contextmatch) {
                match = player.commands[cmd].contextmatch(player, cmd, words, alias.length + idx);
            }
            if (match) {
                var newidx = alias.length + idx;
                return { "normalized" : cmd, "newindex" : newidx };
            }
        }
    }
    return null;
}

function normalizeObject(player, inwords, inidx) {
    var words = inwords;
    var idx = inidx;
    var objects = player.objects;

    if (idx >= words.length)
        return null;
    for (var obj in objects) {
        aliaslist = objects[obj].aliases;
        var countwords = aliaslist[0].length;
        for (var j=0 ; j < aliaslist.length; j++) {
            var alias=aliaslist[j];
            var match=true;

            if (alias.length > countwords) {
                outp("normalize error for object " + obj + " for alias " + alias);
                outp("alias.length is " + alias.length + ", countwords is " + countwords);
                outp("object aliases should be in descending order of length");
                process.exit(1);
            }
            countwords = alias.length;

            for (var k=0 ; k < alias.length; k++) {
                if (!words[idx + k] || words[idx + k] !== alias[k]) {
                    match=false;
                    break;
                }
            }
            if (match && objects[obj].contextmatch) {
                match = objects[obj].contextmatch(player, obj, words, alias.length + idx);
            }
            if (match) {
                var newidx = alias.length + idx;
                return { "normalized" : obj, "newindex" : newidx };
            }
        }
    }
    return null;
}

function dropobject(player, words, idx, response) {
    var rooms = player.rooms;
    var objects = player.objects;
    var roominfo = rooms[player.loc];
    var realobj = normalizeObject(player, words, idx);
    var idx = realobj ? player.inventory.indexOf(realobj.normalized) : -1;
    if (idx == -1) {
        response.responsestring += "You don't have that! ";
    }
    else {
        roominfo.objects.push(realobj.normalized);
        player.inventory.splice(idx, 1);
        objects[realobj.normalized].droppedcount++;
        response.responsestring += "Dropped. ";
    }
}

function takeobject(player, words, idx, response) {
    var rooms = player.rooms;
    var objects = player.objects;
    var roominfo = rooms[player.loc];
    var realobj = normalizeObject(player, words, idx);
    var idx = realobj ? roominfo.objects.indexOf(realobj.normalized) : -1;
    if (idx == -1) {
        response.responsestring += "You don't see that here! ";
    }
    else if (objects[realobj.normalized].takeable == false) {
        if(objects[realobj.normalized].canttaketext) {
            response.responsestring += objects[realobj.normalized].canttaketext;
        }
        else {
            if (objects[realobj.normalized].visible == false) {
                response.responsestring += "You don't see that here! ";
            }
            else {
                response.responsestring += "You can't take that! ";
            }
        }
    }
    else {
        roominfo.objects.splice(idx, 1);
        player.inventory.push(realobj.normalized);
        objects[realobj.normalized].takencount++;
        response.responsestring += "Taken. ";
    }
}

function examineobject(player, words, idx, response) {
    var objects = player.objects;
    var roominfo = rooms[player.loc];
    var realobj = normalizeObject(player, words, idx);
    var idx; //= realobj ? roominfo.objects.indexOf(realobj.normalized) : -1;

    if (!realobj) {
        response.responsestring += "You don't see that here. ";
        return idx;
    }

    idx = roominfo.objects.indexOf(realobj.normalized);
    if (idx == -1) {
        idx = player.inventory.indexOf(realobj.normalized);
    }
    if (idx == -1) {
        response.responsestring += "You don't see that here. ";
        return idx;
    }

    if (objects[realobj.normalized].takencount == 0 &&
            objects[realobj.normalized].inroomLongDescription != null) {
            if (player.usevoice && objects[realobj.normalized].vinroomLongDescription) {
                response.responsestring += objects[realobj.normalized].vinroomLongDescription;
            }
            else {
                response.responsestring += objects[realobj.normalized].inroomLongDescription;
            }
    }

    else if (player.usevoice && objects[realobj].vlongDescription) {
        response.responsestring += objects[realobj.normalized].vlookDescription;
    }
    else {
        response.responsestring += objects[realobj.normalized].lookDescription;
    }
    response.responsestring += " ";
    return idx;
}

function showinventory(player, words, idx, response) {
    var objects = player.objects;
    if (player.inventory.length == 0) {
        response.responsestring += "You aren't carrying anything. ";
    }
    else {
        response.responsestring += "You are carrying ";
        for (var idx = 0 ; idx < player.inventory.length; idx++) {

            if (player.inventory.length > 1 && idx == player.inventory.length - 1)
                response.responsestring += " and ";
            else if (player.inventory.length > 1 && idx > 0)
                response.responsestring += ", ";
            
            if (player.usevoice && objects[player.inventory[idx]].vshortDescription) {
                response.responsestring += 
                    objects[player.inventory[idx]].vshortDescription;
            }
            else {
                response.responsestring += 
                    objects[player.inventory[idx]].shortDescription;
            }
        }
        response.responsestring += ". ";
    }
}

function normalizeDirection(directions, words, idx) {
    for (var dir in directions) {
        aliaslist = directions[dir].aliases;
        for (var j=0 ; j < aliaslist.length; j++) {
            var alias=aliaslist[j];
            var match=true;
            for (var k=0 ; k < alias.length; k++) {
                if (!words[idx + k] || words[idx + k] !== alias[k]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                var newidx = alias.length + idx;
                return { "normalized" : dir, "newindex" : newidx };
            }
        }
    }
    return null;
}

function unclogdrainsuccess(player, words, idx, response) {
    response.responsestring += "You watch the water drain from the tub. ";
    response.responsestring += "As the water drains out, you see a circle of miniature stones ";
    response.responsestring += "fused to the bottom of the tub. In the center of the ";
    response.responsestring += "circle you see a small silver marble.";
    player.objects.bathtub.inroomDescription = "an empty bathtub";
    player.objects.bathtub.shortDescription = "an empty bathtub";
    player.objects.bathtub.longDescription = "It looks like an empty bathtub.";
    player.objects.bathtub.lookDescription = "It looks like an empty bathtub."
    player.objects.bathtub.haswater = false;
    player.objects.stonehenge.visible = true;
    player.objects.marble.visible = true;
    player.objects.marble.takeable = true;
}

function lookroom(player, words, idx, response) {
    player.showstatusinfo = true;
}

// can be called nounless - if we're here we know the intention
function drainbath(player, words, idx, response) {
     if(player.loc == "upbath") {
         if (player.objects.bathtub.haswater == false) {
             response.responsestring += "The bathtub is already drained! ";
         }
         else {
             var idx = player.inventory.indexOf("coathanger");
             if (idx == -1) {
                 response.responsestring += "You toggle the drain switch on and off several times. "+
                     "It doesn't seem to work. The drain must be clogged. ";
             }
             else {
                 unclogdrainsuccess(player, words, idx, response);
             }
         }
     }
     else {
         response.responsestring += "You can't do that! ";
     }
}

function unclogbath(player, words, idx, response) {
     if(player.loc == "upbath") {
         if (player.objects.bathtub.haswater == false) {
             response.responsestring += "The bathtub is already drained! ";
         }
         else {
             var idx = player.inventory.indexOf("coathanger");
             if (idx == -1) {
                 response.responsestring += "You try to unclog the drain using your fingers. " +
                     "It doesn't work.  You need something longer. ";
             }
             else {
                 unclogdrainsuccess(player, words, idx, response);
             }
         }
     }
     else {
         response.responsestring += "You can't do that! ";
     }
}

function closetoilet(player, words, idx, response) {
     if(player.loc == "upbath") {
            var realobj = normalizeObject(player, words, idx);
            if (realobj && realobj.normalized == "toilet") {
                if (player.objects.toilet.isopen == false) {
                    response.responsestring += "The toilet is already closed. ";
                } else {
                    player.objects.toilet.isopen = false;
                    response.responsestring += "You shut the lid of the toilet. ";
                    player.objects.toilet.longDescription = "The toilet bowl is closed. ";
                    player.objects.toilet.lookDescription = "It is a normal toilet bowl. It is closed. ";
                }
            }
     }
}

function opentoilet(player, words, idx, response) {
     if(player.loc == "upbath") {
            var realobj = normalizeObject(player, words, idx);
            if (realobj && realobj.normalized == "toilet") {
                if (player.objects.toilet.isopen == true) {
                    response.responsestring += "The toilet is already open. ";
                } else {
                    player.objects.toilet.isopen = true;
                    response.responsestring += "You open the toilet to find that it is empty. ";
                    player.objects.toilet.longDescription = "The toilet bowl is open. ";
                    player.objects.toilet.lookDescription = "It is a normal toilet bowl. It is open. ";
                }
            }
     }
}



function playermoveint(player, words, idx, dir, response) {
    var rooms = player.rooms;
    var objects = player.objects;
    var roominfo = rooms[player.loc];

    if (dir && roominfo.exits[dir] && roominfo.exits[dir].visible) {
        player.loc = roominfo.exits[dir].destination;
        rooms[player.loc].visitCount++;
        player.showstatusinfo = true;
    }
    else {
        response.responsestring += "You cannot go that direction. ";
    }
    return idx + 1;
}

function checkclosetdoor(player, obj, words, idx) {
    if(player.loc == "uphall") {
        return true;
    }
    return false;
}

function checkunlockcloset(player, cmd, words, idx) {

    if(idx >= words.length)
        return false;

    if(player.loc == "uphall") {
            var realobj = normalizeObject(player, words, idx);
            if (realobj && realobj.normalized == "closetdoor") {
                return true;
            }
    }
    return false;
}

function checkpulldrain(player, cmd, words, idx) {
    if(idx >= words.length)
        return false;

    if(player.loc == "upbath") {
        var realobj = normalizeObject(player, words, idx);
        if (realobj && realobj.normalized == "bathdrain") {
            return true;
        }
    }
    return false;
}

function checkhavenoun(player, cmd, words, idx) {
    if (idx < words.length) {
        return true;
    }
    return false;
}

function checknounless(player, cmd, words, idx) {
    if (idx >= words.length) {
        return true;
    }
    return false;
}

function checkdrainnounless(player, cmd, words, idx) {
    if(player.loc == "upbath") {
        if (idx >= words.length) {
            return true;
        }
    }
    return false;
}

function checktoilet(player, cmd, words, idx) {

    if(idx >= words.length)
        return false;

    if(player.loc == "upbath") {
        var realobj = normalizeObject(player, words, idx);
        if (realobj && realobj.normalized == "toilet") {
            return true;
        }
    }
    return false;
}

function checkdrainbath(player, cmd, words, idx) {
    if(player.loc == "upbath") {
        var realobj = normalizeObject(player, words, idx);
        if (realobj && realobj.normalized == "bathtub") {
            return true;
        }
    }
    return false;
}

function checkbathwater(player, cmd, words, idx) {
    if(player.loc == "upbath") {
        return true;
    }
    return false;
}

function checkopencloset(player, cmd, words, idx) {
    if(idx >= words.length)
        return false;

    if(player.loc == "uphall") {
            var realobj = normalizeObject(player, words, idx);
            if (realobj && realobj.normalized == "closetdoor")
                return true;
    }
    return false;
}

/* "Jump" can be used in different contexts. Check if this is bedjump. */
function checkbedjump(player, cmd, words, idx) {
    if(idx >= words.length)
        return false;

    if(player.loc == "mdbedroom") {
            var realobj = normalizeObject(player, words, idx);
            if (realobj && realobj.normalized == "daddysbed")
                return true;
    }
    return false;
}

function unlockcloset(player, words, idx, response) {
    var realobj = normalizeObject(player, words, idx);
    if(player.loc == "uphall" && realobj && realobj.normalized == "closetdoor") {

        if(!player.objects[realobj.normalized].islocked) {
            response.responsestring += "The closet door is not locked! ";
        }
        else {
            var idx = player.inventory.indexOf("closetkey");

            if (idx == -1) {
                response.responsestring += "You can't seem to unlock the closet door. Maybe there is a key nearby? ";
            }
            else {
                // Dont take it away while i test inventory
                //player.inventory.splice(idx, 1);
                player.objects[realobj.normalized].islocked = false;
                //player.objects[realobj.normalized].longDescription = "the closet door is unlocked";
                //player.objects[realobj.normalized].lookDescription = "the closet door is unlocked";
                player.objects[realobj.normalized].longDescription = "the closet door is open";
                player.objects[realobj.normalized].lookDescription = "the closet door is open";
                player.objects[realobj.normalized].isopen = true;
                player.rooms.uphall.exits.west.visible = true;
                response.responsestring += "The shiny golden key fits the closet's lock perfectly. You turn it and hear a clicking noise. The closet door opens to the west. ";
            }
        }
    }
    else {
        // probably cant get here 
        response.responsestring += "I don't understand. ";
    }
}

function opencloset(player, words, idx, response) {
    var realobj = normalizeObject(player, words, idx);
    if(player.loc == "uphall" && realobj && realobj.normalized == "closetdoor") {
        if(player.objects[realobj.normalized].islocked) {
            response.responsestring += "You attempt to turn the closet doorknob with all your strength, but it won't budge. This closet door is locked. ";
        }
        else if (player.objects[realobj.normalized].isopen) {
            response.responsestring += "The closet door is already open. ";
        }
        else {
            response.responsestring += "You turn the doorknob and watch the closet door swing open. It reveals the upstairs closet to the west. ";
            player.objects[realobj.normalized].longDescription = "the closet door is open";
            player.objects[realobj.normalized].lookDescription = "the closet door is open";
            player.objects[realobj.normalized].isopen = true;
            player.rooms.uphall.exits.west.visible = true;
        }

    }
}


function bedjump(player, words, idx, response) {
    var realobj = normalizeObject(player, words, idx);
    if(player.loc == "mdbedroom" && realobj && realobj.normalized == "daddysbed") {
        response.responsestring += "You vigorously jump up and down on Mommy and Daddy's bed " +
            "making sure to mess up the covers as much as possible. ";
        player.objects.daddysbed.inroomDescription = "Mommy and Daddy's disheveled bed";
        player.objects.daddysbed.shortDescription = "Mommy and Daddy's disheveled bed";
        player.objects.daddysbed.longDescription = "Mommy and Daddy's bed is a mess!";
        player.objects.daddysbed.lookDescription = "Mommy and Daddy's bed is a mess!";
        if (!player.objects.closetkey.visible) {
            response.responsestring += "A small golden key falls from under one of the pillows onto the floor. ";
            player.objects.closetkey.visible=true;
            player.objects.closetkey.takeable=true;
        }
        return idx + 1;
    }
    else {
        response.resopnsestring += "You can't do that! ";
        return idx + 1;
    }

}

function playermove(player, words, idx, response) {
    var normalized = normalizeDirection(directions, words, idx);
    var dir = normalized ? normalized.normalized : null;
    return playermoveint(player, words, idx, dir, response);

}

function playermovenorth(player, words, idx, response) {
    return playermoveint(player, words, idx, "north", response);
}

function playermovesouth(player, words, idx, response) {
    return playermoveint(player, words, idx, "south", response);
}

function playermoveeast(player, words, idx, response) {
    return playermoveint(player, words, idx, "east", response);
}

function playermovewest(player, words, idx, response) {
    return playermoveint(player, words, idx, "west", response);
}

function playermoveup(player, words, idx, response) {
    return playermoveint(player, words, idx, "up", response);
}

function playermovedown(player, words, idx, response) {
    return playermoveint(player, words, idx, "down", response);
}

function stopgame(player, words, idx, response) {
    player.stopping = true;
    return idx + 1;
}

function showstatusinfo(player, rooms, objects, response) {

    if (player.showroominfo) {
        showroom(player, rooms, player.loc, response);
    }

    if (player.showobjectinfo) {
        showobjects(player, objects, rooms[player.loc].objects, response);
    }

    if (player.showexitinfo) {
        showexits(player, rooms[player.loc].exits, response);
    }
}

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('> ');
var response = { responsestring : "" };
response.responsestring += player.usevoice ? player.voiceintroduction : player.introduction;
showstatusinfo(player, player.rooms, player.objects, response);
outp(response.responsestring);
rl.prompt();

rl.on('line', function processline(line) {
    var lc = line.toLowerCase();
    var words = lc.split(" ");
    response.responsestring = "";
    player.showstatusinfo = false;
    player.showresponsestring = true;
    var cmd = normalizeCommand(player, words, 0);
    if (cmd != null)
        (player.commands[cmd.normalized].execute)(player, words, cmd.newindex, response);
    else {
        if (words[0].length > 0)
            response.responsestring += "I do not understand that command. ";
        else {
            player.showstatusinfo = false;
            player.showresponsestring = false;
        }
    }

    if (player.stopping) {
        process.exit(0);
    }
    if (player.finished) {
        if (response.responsestring.length > 0)
            response.responsestring += "\n";
        response.responsestring += player.conclusion;
        outp(response.responsestring);
    }
    else {
        if (player.showstatusinfo) {
            if (player.showresponsestring && response.responsestring.length > 0)
                response.responsestring += "\n";
            showstatusinfo(player, player.rooms, player.objects, response);
        }
        if (player.showresponsestring) {
            outp(response.responsestring);
        }
        rl.prompt();
    }
});


