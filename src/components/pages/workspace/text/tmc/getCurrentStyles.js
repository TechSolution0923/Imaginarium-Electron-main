import tinymce from "tinymce";
import rgbHex from "rgb-hex";

function getCurrentStyle(state, setState) {
    console.log("getAlignStyles")
    const isAlignLeft = tinymce.activeEditor.queryCommandState('JustifyLeft');
    const isAlignCenter = tinymce.activeEditor.queryCommandState('JustifyCenter');
    const isAlignRight = tinymce.activeEditor.queryCommandState('JustifyRight');
    const isAlignFull = tinymce.activeEditor.queryCommandState('JustifyFull');

    let alignVal;

    if (isAlignLeft || (!isAlignLeft && !isAlignCenter && !isAlignRight && !isAlignFull)) {
        alignVal = 1;
    }
    else if (isAlignCenter) {
        alignVal = 2;
    }
    else if (isAlignRight) {
        alignVal = 3;
    }
    else if (isAlignFull) {
        alignVal = 4;
    }

    let lineHeight = tinymce.activeEditor.queryCommandValue("LineHeight");
    lineHeight = parseFloat(lineHeight, 10);
    lineHeight = isNaN(lineHeight) ? 25 : lineHeight;
    // let ordered = tinymce.activeEditor.queryCommandState('InsertOrderedList', 'list-style-type');
    // let unordered = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode());

    // console.log("ordered: ", ordered);
    // console.log("unordered: ", unordered);

    // let spacing = tinymce.activeEditor.queryCommandState("mceNonBreaking");
    // console.log("spacing: ", spacing);

    let boldStatus = tinymce.activeEditor.queryCommandState("Bold");
    let italicStatus = tinymce.activeEditor.queryCommandState("Italic");
    let underlineStatus = tinymce.activeEditor.queryCommandState("Underline");
    let strikeStatus = tinymce.activeEditor.queryCommandState("Strikethrough");

    let case1 = tinymce.activeEditor.queryCommandState("mceTitleCase");
    let case2 = tinymce.activeEditor.queryCommandState("mceUpperCase");
    let case3 = tinymce.activeEditor.queryCommandState("mceLowerCase");
    let caseStatus = 1;
    if (case1) caseStatus = 1;
    else if (case2) caseStatus = 2;
    else if (case3) caseStatus = 3;

    console.log("case1: ", case1);
    console.log("case2: ", case2);
    console.log("case3: ", case3);

    let blockquote = tinymce.activeEditor.selection.getNode().nodeName;
    console.log("blockquote: ", blockquote);
    let formatBlock = "Paragraph";
    switch (blockquote) {
        case "P":
            formatBlock = "Paragraph";
            break;
        case "H1":
            formatBlock = "Headerline 1";
            break;
        case "H2":
            formatBlock = "Headerline 2";
            break;
        case "H3":
            formatBlock = "Headerline 3";
            break;
        case "H4":
            formatBlock = "Headerline 4";
            break;
        case "H5":
            formatBlock = "Headerline 5";
            break;
        case "H6":
            formatBlock = "Headerline 6";
            break;
        default:
            break;
    }

    // Color

    let color = tinymce.activeEditor.selection.getNode();
    // let temp = color.attributes[0].nodeValue === undefined ? "rgb(0,0,0)" : color.attributes[0].nodeValue;
    let temp;
    let attribute = color.attributes[0];
    if (attribute !== undefined && attribute !== null && attribute !== "") {
        temp = "#" + rgbHex(attribute.nodeValue.slice(7).replace(";", ""));
    }
    temp = temp === undefined ? "#FFFFFF" : temp;
    //

    let fontSize = parseInt(tinymce.activeEditor.queryCommandValue("FontSize"));

    let fontName = tinymce.activeEditor.queryCommandValue("FontName");

    setState({ ...state, align: alignVal, lineH: lineHeight, bold: boldStatus, italic: italicStatus, underline: underlineStatus, strikethr: strikeStatus, pCase: caseStatus, blockquote: formatBlock, colorVal: temp, fSize: fontSize, fName: fontName });



}

export default getCurrentStyle;