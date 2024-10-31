import { CommandModule, Argv } from "yargs";
import TinyCommand from "./tinyCommand";
import SquooshCommand from "./squooshCommand";

const subCommands = [TinyCommand, SquooshCommand];

const ImgCommand: CommandModule<{}, {}> = {
    command: "img <command>",
    describe: "图片相关处理",
    builder: (yargs: Argv<{}>) => yargs.command(subCommands).demandCommand(1).strict(),
    handler: () => { },
};

export default ImgCommand;
