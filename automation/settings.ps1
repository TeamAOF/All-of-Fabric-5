# The main modpack folder
# Do not change or move
$InstanceRoot = ("$PSScriptRoot/.." | Resolve-Path)

# =====================================================================//
#  CURSEFORGE ACCOUNT SETTINGS
# =====================================================================//

$CURSEFORGE_USER = "HeyAmAK9"

# For details see: https://www.curseforge.com/account/api-tokens
# Defined in secrets.ps1 
# $CURSEFORGE_TOKEN = 

# ProjectID can be found on the modpack's Curseforge Projects page, under "About This Project"
$CURSEFORGE_PROJECT_ID = 548076

# =====================================================================//
#  MAIN MODPACK SETTINGS
# =====================================================================//

# This is the modpack name as seen in it's CurseForge url: https://www.curseforge.com/minecraft/modpacks/[all-of-fabric-5]
$MODPACK_NAME = "all-of-fabric-5"

# Name of the Modpack in the ZIP File
$CLIENT_NAME = "All-of-Fabric-5"

# Version Of The Modpack
$MODPACK_VERSION = "0.2.9"

# Last Version Of The Modpack
# Needed For Changelog Parsing
$LAST_MODPACK_VERSION = "0.2.8"

# =====================================================================//
#  CHANGELOG SETTINGS
# =====================================================================//

# Changelog Type
# Can be "markdown", "text" or "html"
$CLIENT_CHANGELOG_TYPE = "markdown"

# Changelog
# Must be a single string.
$CLIENT_CHANGELOG = "[![](https://i.imgur.com/o5aNlUD.jpg)](https://github.com/TeamAOF/All-of-Fabric-5/blob/main/changelogs/CHANGELOG.md)"

# =====================================================================//
#  CURSEFORGE PROJECT SETTINGS
# =====================================================================//

# Modpack's Minecraft Version
# @(6756) - is Minecraft 1.12.2
# @(7722) - is Minecraft 1.15.2
# @(8134) - is Minecraft 1.16.4
# More can be found by running GetGameVersions
$GAME_VERSIONS = @(8857)

# Can be "alpha", "beta" or "release"
$CLIENT_RELEASE_TYPE = "release"

#=====================================================================//
#  DEPENDENCIES URL
#=====================================================================//

# File name of the latest https://github.com/Gaz492/twitch-export-builder/releases
$TwitchExportBuilderDLWindows = "twitch-export-builder_windows_amd64.exe"
$TwitchExportBuilderDLLinux = "twitch-export-builder_linux_amd64"
$TwitchExportBuilderDLMac = "twitch-export-builder_darwin_amd64"

# File name of the latest https://github.com/TheRandomLabs/ChangelogGenerator/releases
$ChangelogGeneratorDL = "ChangelogGenerator-2.0.0-pre10.jar"

# File name of the latest https://github.com/MelanX/ModListCreator/releases
$ModlistCreatorJar = "ModListCreator-1.2.1.jar"

#=====================================================================//
#  CLIENT FILE SETTINGS
#=====================================================================//

# Most of these are defined in .build.json.

# Configs to remove from the client files
$CONFIGS_TO_REMOVE_FROM_CLIENT_FILES = 

# Accepts directories
$REMOVE_FROM_CLIENT_FILES = @("local/ftbutilities", "local/ftbchunks/data", "local/ftbultimine", "local/ftbultimine-client.snbt")

#=====================================================================//
#  SERVER FILE SETTINGS
#=====================================================================//

# $CLIENT_MODS_TO_REMOVE_FROM_SERVER_FILES has been moved to remove-client-mods.ps1 

$ServerFilesFolder = "$InstanceRoot/server_files"

$ServerSetupConfigPath = "$InstanceRoot/server_files/server-setup-config.yaml"

# A continuous line of the folders and files (with extensions) to zip into Server Files.
# Default: @("mods", "config")
# Deprecated, everything in the server_files folder is zipped
$CONTENTS_TO_ZIP = @()

# =====================================================================//
#  Operating System
# =====================================================================//

$IsLinux = $false

$IsMacOS = $false

$IsWindows = $true

# =====================================================================//
#  MODULES
# =====================================================================//

# Toggle twitch-export-builder (automatic building of the manifest zip) on/off
# Default: $true
$ENABLE_CURSE_CLIENT_MODULE = $true

# Toggle the modpack uploader on/off
# Setting this to $false will also disable the Server File and Changelog Generator Modules.
# Default: $true
$ENABLE_MODPACK_UPLOADER_MODULE = $true

# Toggle server file feature on/off
# Default: $true
$ENABLE_SERVER_FILE_MODULE = $true

# Toggle automatic changelog generator on/off
# This module requires an older modpack manifest zip to be present, 
# $LAST_MODPACK_VERSION must be set, and the manifest naming must be consistent.
# Default: $false
$ENABLE_CHANGELOG_GENERATOR_MODULE = $true

# Toggle creation of a modlist file on/off
# Default: $true
$ENABLE_MODLIST_CREATOR_MODULE = $true

# Toggle removal and re-download of jars on/off.
# Setting this to true will ensure that you always have the latest 
# Twitch Export Builder and ChangelogGenerator, but increases the
# amount of time this script takes to execute.
# Default: $false
$ENABLE_ALWAYS_UPDATE_JARS = $false

# Toggles github changelog generator integration on/off.
# Requires extensive setup, this is an advanced step.
# See below link for info:
# https://github.com/github-changelog-generator/github-changelog-generator
# Default: $false
$ENABLE_GITHUB_CHANGELOG_GENERATOR_MODULE = $true	



# =====================================================================//
#  ADVANCED
#  Do not change anything unless you
#  know what you are doing!
# =====================================================================//

# Syntax of the Client ZIP File
$CLIENT_ZIP_NAME = "$CLIENT_NAME-$MODPACK_VERSION"

# Syntax of the Previous Versions Client ZIP File
$LAST_MODPACK_ZIP_NAME = "$CLIENT_NAME-$LAST_MODPACK_VERSION"

# Default: "$CLIENT_NAME $MODPACK_VERSION"
$CLIENT_FILE_DISPLAY_NAME = "All of Fabric 5 - $MODPACK_VERSION"

# Can be "markdown", "text" or "html"
# Default: $CLIENT_CHANGELOG_TYPE
$SERVER_CHANGELOG_TYPE = $CLIENT_CHANGELOG_TYPE

# Must be a single string. Use Powershell escaping for new lines etc. New line is `n and indent is `t
# Default: $CLIENT_CHANGELOG
$SERVER_CHANGELOG = $CLIENT_CHANGELOG

# Can be "alpha", "beta" or "release"
# Default: $CLIENT_RELEASE_TYPE
$SERVER_RELEASE_TYPE = $CLIENT_RELEASE_TYPE

# Default: "$CLIENT_NAME Server $MODPACK_VERSION"
$SERVER_ZIP_NAME = "$CLIENT_NAME`-Server-$MODPACK_VERSION"

# Default: $SERVER_FILENAME
$SERVER_FILE_DISPLAY_NAME = "All of Fabric 5 Server - $MODPACK_VERSION"

# Path to the ModListCreators output file
$ModlistPath = "$InstanceRoot/changelogs/modlist_$MODPACK_VERSION.md"
$ChangelogPath = "$InstanceRoot/changelogs/changelog_mods_$MODPACK_VERSION.md"