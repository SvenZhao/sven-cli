#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import tinyCommand from "./command/tiny";

yargs(hideBin(process.argv)).command(tinyCommand).demandCommand(1).parse();
