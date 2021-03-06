﻿import { ImageDetect } from "@alt1/base";
import { loader } from "webpack";

export default function (this: loader.LoaderContext, source: Buffer) {
	this.cacheable(true);
	ImageDetect.clearPngColorspace(source);
	var imgstr = source.toString("base64");
	return `module.exports=require("@alt1/base").ImageDetect.imageDataFromBase64("${imgstr}")`;
	//return `import {ImageDetect} from "@alt1/base"; module.exports=ImageDetect.imageDataFromBase64("${imgstr}")`;
}
export let raw = true;