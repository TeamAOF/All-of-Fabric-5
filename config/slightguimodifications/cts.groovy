// Here is the groovy file for screen elements
info("Hello From 'Slight' Gui Modifications cts script")

mainMenu {
    enabled = true

    splashText {
        enabled = true
        splashesEnabled = false
    }

    background {
        clearBackgrounds()
        backgroundStayLength = 50000 // 50 seconds
        backgroundFadeLength = 2000 // 2 seconds fade
        renderGradientShade = false
        image { texture = file("config/slightguimodifications/background.png") }
    }

    removeMinecraftLogo()
    removeEditionBadge()
    clearAllButtons()

    label {
        position {
            x = 2
            y {
                it - 20
            }
        }

        text = literal("All of Fabric 5 - 1.3.0")
    }

    button {
        position {
            x {it / 5 + 105}
            y { it / 2 + 15}
        }
        width = 100
        height = 20

        text = literal("Mods")
        onClicked = modMenu()
    }
    button {
        position {
            x {it / 5}
            y { it / 2 + 15}
        }
        width = 100
        height = 20

        text = literal("Languages")
        onClicked = language()
    }
    button {
        position {
            x {it / 5}
            y {it / 2 - 60}
        }
        width = 204
        height = 20
		align = "left"
        text = translatable("menu.singleplayer")
        onClicked = singleplayer()
    }
    button {
        position {
            x {it / 5}
            y {it / 2 - 35}
        }
        width = 204
        height = 20

        text = translatable("menu.multiplayer")
        onClicked = multiplayer()
    }
    
    /*
    button {
        position {
            x {it / 2 + 100}
            y {it / 2}
        }
        width = 100
        height = 20

        text = literal("Reload")
        onClicked = reloadCts()
    }
    */
    
    button {
        position {
            x {it / 5 + 105}
            y { it / 2 + 40}
        }
        width = 100
        height = 20

        text = translatable("menu.quit")
        onClicked = exit()
    }
    button {
        position {
            x {it / 5}
            y { it / 2 + 40}
        }
        width = 100
        height = 20

        text = translatable("menu.options")
        onClicked = options()
    }
    button {
        position {
            x {it / 5 + 105}
            y { it / 2 - 10}
        }
        width = 100
        height = 20

        text = literal("Rent A Server")
        onClicked = url("https://www.bisecthosting.com/AOF")
    }
    button {
        position {
            x {it / 5}
            y { it / 2 - 10}
        }
        width = 100
        height = 20

        text = literal("Discord")
        onClicked = url("https://discord.gg/6rkdm48")
    }
}