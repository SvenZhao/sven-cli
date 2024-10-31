#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import ImgCommand from "./command/imgCommand";

yargs(hideBin(process.argv))
    .command(ImgCommand)
    .demandCommand(1).parse();
