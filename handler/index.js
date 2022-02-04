const mongoose = require('mongoose')
const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const globPromise = promisify(glob);
console.log('handler cargado.')
const data12 = Date.now()
/**
 * @param {Client} client
 */
module.exports = async (client) => {
    // Commands
    try {

    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
            console.log(`${file.name}, Cargado`)
        } else {
            console.log(`${file} no fue cargado`)
        } if(file.aliases && Array.isArray(file.aliases)) file.aliases.forEach(alias => client.aliases.set(alias, file.name))
    });

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    // Slash Commands
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return console.log(`${file} no fue cargado`);
        console.log(`${file.name}, SlashCommands, Cargado`)
        client.slashCommands.set(file.name, file);

        if(file.userPermissions) file.defaultPermissions = false;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {

        await client.guilds.cache
            .get("741489702963773501")
            .commands.set(arrayOfSlashCommands);
     console.log(arrayOfSlashCommands)
        // Register for all the guilds the bot is in
        // await client.application.commands.set(arrayOfSlashCommands);
    });
    } catch (err) {
        console.log(err)
    }

    console.log(`${Date.now() - data12} ms se tardo en cargar el handler`)


};