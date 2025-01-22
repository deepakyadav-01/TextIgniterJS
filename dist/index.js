"use strict";class t{constructor(){this.events={}}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)}emit(t,e){this.events[t]&&this.events[t].forEach((t=>t(e)))}}class e{constructor(t,e={}){this.text=t;const n=document.getElementById("fontFamily"),s=document.getElementById("fontSize");let i="Arial",o="16px";n&&(i=n.value),s&&(o=s.value),this.attributes={bold:e.bold||!1,italic:e.italic||!1,underline:e.underline||!1,undo:e.undo||!1,redo:e.redo||!1,fontFamily:e.fontFamily||i,fontSize:e.fontSize||o}}isBold(){return this.attributes.bold}setBold(t){this.attributes.bold=t}isItalic(){return this.attributes.italic}isUndo(){return this.attributes.undo}isRedo(){return this.attributes.redo}setItalic(t){this.attributes.italic=t}isUnderline(){return this.attributes.underline}setUnderline(t){this.attributes.underline=t}setUndo(t){this.attributes.undo=t}setRedo(t){this.attributes.redo=t}clone(){return new e(this.text,Object.assign({},this.attributes))}hasSameAttributes(t){return this.attributes.bold===t.attributes.bold&&this.attributes.italic===t.attributes.italic&&this.attributes.underline===t.attributes.underline&&this.attributes.undo===t.attributes.undo&&this.attributes.redo===t.attributes.redo&&this.attributes.fontFamily===t.attributes.fontFamily&&this.attributes.fontSize===t.attributes.fontSize}}class n extends t{get selectedBlockId(){return this._selectedBlockId}set selectedBlockId(t){if(this._selectedBlockId!==t){this._selectedBlockId=t;const e=this.getCursorOffset(document.querySelector('[id="editor"]')),n=this.getCursorOffset(document.querySelector('[data-id="'+t+'"]'));this.currentOffset=e-n}}constructor(){super(),this.undoStack=[],this.redoStack=[],this.dataIds=[],this._selectedBlockId=null,this.pieces=[new e("")],this.blocks=[{dataId:"data-id-1734604240404",class:"paragraph-block",alignment:"left",pieces:[new e(" ")]}],this.selectedBlockId="data-id-1734604240404",this.currentOffset=0}getPlainText(){return this.pieces.map((t=>t.text)).join("")}insertAt(t,n,s,i="",o=0,l="",d=""){let c=0,a=[],r=!1,u=0;""===i&&null===i||(u=this.blocks.findIndex((t=>t.dataId===i)),c=this.currentOffset);const h=this.getRangeText(s,s);console.log("run1..",t,s,h);for(let i of this.blocks[u].pieces){const o=c+i.text.length;if(!r&&s<=o){const o=s-c;o>0&&a.push(new e(i.text.slice(0,o),Object.assign({},i.attributes))),a.push(new e(t,{bold:n.bold||!1,italic:n.italic||!1,underline:n.underline||!1})),o<i.text.length&&a.push(new e(i.text.slice(o),Object.assign({},i.attributes))),r=!0}else a.push(i.clone());c=o}if(!r){const s=a[a.length-1];s&&s.hasSameAttributes(new e("",{bold:n.bold||!1,italic:n.italic||!1,underline:n.underline||!1}))?s.text+=t:a.push(new e(t,{bold:n.bold||!1,italic:n.italic||!1,underline:n.underline||!1}))}const g=this.mergePieces(a);this.blocks[u].pieces=g;const m=this.getRangeText(s,s+t.length);if("redo"!==d){0===this.redoStack.filter((t=>t.id===l)).length&&(this.undoStack.push({id:Date.now().toString(),start:s,end:s+t.length,action:"insert",previousValue:h,newValue:m}),this.redoStack=[])}this.emit("documentChanged",this);const f=document.querySelector('[data-id="'+i+'"]');f.focus(),this.setCursorPositionUsingOffset(f,c)}setCursorPositionUsingOffset(t,e){t.focus();const n=window.getSelection();if(!n)return;const s=document.createRange();let i=0;const o=t=>{if(3===t.nodeType){const n=t,o=i+n.length;if(console.log("data",o,n),e>=i&&e<=o)return s.setStart(n,e-i),s.collapse(!0),!0;i=o}else if(1===t.nodeType){const e=Array.from(t.childNodes);for(const t of e)if(o(t))return!0}return!1};o(t),console.log(s,"data"),n.removeAllRanges(),n.addRange(s)}deleteRange(t,n,s="",i=0){if(t===n)return;let o=[],l=0,d=0;""===s&&null===s||(d=this.blocks.findIndex((t=>t.dataId===s)),l=i);const c=this.getRangeText(t,n);console.log("run11",c);for(let s of this.blocks[d].pieces){const i=l+s.text.length;if(i<=t||l>=n)o.push(s.clone());else{const d=l,c=s.text;t>d&&t<i&&o.push(new e(c.slice(0,t-d),Object.assign({},s.attributes))),n<i&&o.push(new e(c.slice(n-d),Object.assign({},s.attributes)))}l=i}console.log(s,"dataId",this.currentOffset,"offset",l,"currentOffset",i);const a=this.mergePieces(o);this.blocks[d].pieces=a,0===a.length&&this.blocks.length>1&&(this.blocks=this.blocks.filter((t=>0!==t.pieces.length)));const r=this.getRangeText(t-1,n-1);console.log(r),this.emit("documentChanged",this)}deleteBlocks(){this.blocks.filter((t=>!this.dataIds.includes(t.dataId))),this.emit("documentChanged",this)}getSelectedTextDataId(){const t=window.getSelection();if(!t||0===t.rangeCount)return null;const e=t.getRangeAt(0).startContainer,n=(e.nodeType===Node.TEXT_NODE?e.parentElement:e).closest("[data-id]");return(null==n?void 0:n.getAttribute("data-id"))||null}getAllSelectedDataIds(){var t;const e=window.getSelection();if(!e||0===e.rangeCount)return[];const n=e.getRangeAt(0),s=[],i=document.createNodeIterator(n.commonAncestorContainer,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);let o;for(;o=i.nextNode();)if(n.intersectsNode(o)){const e=o.nodeType===Node.TEXT_NODE?o.parentElement:o,n=null===(t=null==e?void 0:e.closest("[data-id]"))||void 0===t?void 0:t.getAttribute("data-id");n&&!s.includes(n)&&s.push(n)}return this.dataIds=s,s}getSelectedDataIds(){const t=window.getSelection();if(!t||0===t.rangeCount)return[];const e=t.getRangeAt(0),n=[],s=e.startContainer,i=e.endContainer,o=this.getDataIdFromNode(s),l=this.getDataIdFromNode(i);return o&&!n.includes(o)&&n.push(o),l&&!n.includes(l)&&n.push(l),this.dataIds=n,n}getDataIdFromNode(t){var e;const n=t.nodeType===Node.TEXT_NODE?t.parentElement:t;return(null===(e=null==n?void 0:n.closest("[data-id]"))||void 0===e?void 0:e.getAttribute("data-id"))||null}getCursorOffset(t){const e=window.getSelection();if(!e||0===e.rangeCount)return-1;const n=e.getRangeAt(0);let s=0;const i=t=>{var e;return t===n.startContainer?(s+=n.startOffset,!0):(3===t.nodeType&&(s+=(null===(e=t.textContent)||void 0===e?void 0:e.length)||0),Array.from(t.childNodes).some(i))};return i(t),s}formatAttribute(t,n,s,i){console.log(s,"attribute1",t,n);let o=[],l=0,d=-1;""===this.selectedBlockId&&null===this.selectedBlockId||(d=this.blocks.findIndex((t=>t.dataId===this.selectedBlockId)),l=this.currentOffset,console.log(d,"index attribute1",l));for(let c of this.blocks[d].pieces){console.log(c.text.length,"piece.text.length attribute1");const d=l+c.text.length;if(d<=t||l>=n)o.push(c.clone());else{const d=l,a=c.text,r=Math.max(t-d,0),u=Math.min(n-d,a.length);r>0&&o.push(new e(a.slice(0,r),Object.assign({},c.attributes)));const h=new e(a.slice(r,u),Object.assign({},c.attributes));("bold"!==s&&"italic"!==s&&"underline"!==s&&"undo"!==s&&"redo"!==s||"boolean"!=typeof i)&&("fontFamily"!==s&&"fontSize"!==s||"string"!=typeof i)||(h.attributes[s]=i),o.push(h),u<a.length&&o.push(new e(a.slice(u),Object.assign({},c.attributes)))}l=d}const c=this.mergePieces(o);this.blocks[d].pieces=c,this.emit("documentChanged",this)}toggleOrderedList(t,e=1){const n=this.blocks.findIndex((e=>e.dataId===t)),s=this.blocks.find((e=>e.dataId===t));s&&(s.listType="ol"===s.listType?null:"ol",s.listStart=e,this.blocks[n].listType=s.listType,console.log(s,"action -- block ol ",n,this.blocks[n].listType),this.emit("documentChanged",this))}toggleUnorderedList(t){const e=this.blocks.find((e=>e.dataId===t));e&&(e.listType="ul"===e.listType?null:"ul",this.emit("documentChanged",this))}getRangeText(t,e){let n="",s=0;for(const i of this.blocks){for(const o of i.pieces){const i=o.text.length;if(s+i>=t&&s<e){const l=Math.max(0,t-s),d=Math.min(i,e-s);n+=o.text.substring(l,d)}if(s+=i,s>=e)break}if(s>=e)break}return n}undo(){const t=this.undoStack.pop();console.log(t,"action undo"),t&&(this.redoStack.push(t),this.revertAction(t))}redo(){const t=this.redoStack.pop();console.log(t,"action redo"),t&&(this.undoStack.push(t),this.applyAction(t))}revertAction(t){switch(t.action){case"bold":this.toggleBoldRange(t.start,t.end,t.id);break;case"italic":this.toggleItalicRange(t.start,t.end,t.id);break;case"underline":this.toggleUnderlineRange(t.start,t.end,t.id);break;case"insert":console.log("insert... delete"),this.deleteRange(t.start,t.end,this.selectedBlockId,this.currentOffset)}}applyAction(t){switch(t.action){case"bold":this.toggleBoldRange1(t.start,t.end,t.id);break;case"italic":this.toggleItalicRange1(t.start,t.end,t.id);break;case"underline":this.toggleUnderlineRange1(t.start,t.end,t.id);break;case"insert":console.log("insert... insert"),this.insertAt(t.newValue||"",{},t.start,this.selectedBlockId,this.currentOffset,t.id,"redo")}}toggleBoldRange1(t,e,n=""){const s=this.isRangeEntirelyAttribute(t,e,"bold");this.formatAttribute(t,e,"bold",!s)}toggleItalicRange1(t,e,n=""){const s=this.isRangeEntirelyAttribute(t,e,"italic");this.formatAttribute(t,e,"italic",!s)}toggleUnderlineRange1(t,e,n=""){const s=this.isRangeEntirelyAttribute(t,e,"underline");this.formatAttribute(t,e,"underline",!s)}toggleBoldRange(t,e,n=""){const s=this.getRangeText(t,e),i=this.isRangeEntirelyAttribute(t,e,"bold");this.formatAttribute(t,e,"bold",!i);const o=this.getRangeText(t,e);0===this.redoStack.filter((t=>t.id===n)).length&&(this.undoStack.push({id:Date.now().toString(),start:t,end:e,action:"bold",previousValue:s,newValue:o}),this.redoStack=[])}toggleItalicRange(t,e,n=""){const s=this.getRangeText(t,e),i=this.isRangeEntirelyAttribute(t,e,"italic");this.formatAttribute(t,e,"italic",!i);const o=this.getRangeText(t,e);0===this.redoStack.filter((t=>t.id===n)).length&&(this.undoStack.push({id:Date.now().toString(),start:t,end:e,action:"italic",previousValue:s,newValue:o}),this.redoStack=[])}toggleUnderlineRange(t,e,n=""){const s=this.getRangeText(t,e),i=this.isRangeEntirelyAttribute(t,e,"underline");this.formatAttribute(t,e,"underline",!i);const o=this.getRangeText(t,e);0===this.redoStack.filter((t=>t.id===n)).length&&(this.undoStack.push({id:Date.now().toString(),start:t,end:e,action:"underline",previousValue:s,newValue:o}),this.redoStack=[])}toggleUndoRange(t,e,n=""){const s=this.isRangeEntirelyAttribute(t,e,"undo");this.formatAttribute(t,e,"undo",!s)}toggleRedoRange(t,e){const n=this.isRangeEntirelyAttribute(t,e,"redo");this.formatAttribute(t,e,"redo",!n)}isRangeEntirelyAttribute(t,e,n){let s=this.currentOffset,i=!0;if(""!==this.selectedBlockId){const o=this.blocks.findIndex((t=>t.dataId===this.selectedBlockId));console.log(o,"vicky",this.selectedBlockId);for(let l of this.blocks[o].pieces){const o=s+l.text.length;if(o>t&&s<e&&!l.attributes[n]){i=!1;break}s=o}}return i}mergePieces(t){let e=[];for(let n of t){const t=e[e.length-1];t&&t.hasSameAttributes(n)?t.text+=n.text:e.push(n)}return e}findPieceAtOffset(t,e=""){let n=this.currentOffset;if(""!==e){const s=this.blocks.findIndex((t=>t.dataId===e));for(let e of this.blocks[s].pieces){const s=n+e.text.length;if(t>=n&&t<=s)return e;n=s}}return null}setFontFamily(t,e,n){this.formatAttribute(t,e,"fontFamily",n)}setFontSize(t,e,n){this.formatAttribute(t,e,"fontSize",n)}setAlignment(t,e){const n=this.blocks.find((t=>t.dataId===e));n&&(n.alignment=t,this.emit("documentChanged",this))}}function s(t){const e=window.getSelection();if(!e||0===e.rangeCount)return null;const n=e.getRangeAt(0),s=n.cloneRange();s.selectNodeContents(t),s.setEnd(n.startContainer,n.startOffset);const i=s.toString().length;s.setEnd(n.endContainer,n.endOffset);return{start:i,end:s.toString().length}}class i{constructor(t,e){this.container=t,this.document=e}render(){const t=s(this.container);this.container.innerHTML="",console.log(this.document.blocks,"action -- block editorview"),this.document.blocks.forEach((t=>{if(""!==t.dataId){let e,n;"ol"===t.listType?(e=document.createElement("ol"),e.setAttribute("start",null==t?void 0:t.listStart.toString())):e="ul"===t.listType?document.createElement("ul"):document.createElement("div"),e.setAttribute("data-id",t.dataId),e.setAttribute("class",t.class),e.style.textAlign=t.alignment||"left","ol"===t.listType||"ul"===t.listType?(n=document.createElement("li"),t.pieces.forEach((t=>{n.appendChild(this.renderPiece(t))})),e.append(n)):t.pieces.forEach((t=>{e.appendChild(this.renderPiece(t))})),this.container.appendChild(e)}})),function(t,e){if(!e)return;let n=0;const s=document.createRange();s.setStart(t,0),s.collapse(!0);const i=[t];let o,l=!1,d=!1;for(;!d&&(o=i.pop());)if(3===o.nodeType){const t=o,i=n+t.length;!l&&e.start>=n&&e.start<=i&&(s.setStart(t,e.start-n),l=!0),l&&e.end>=n&&e.end<=i&&(s.setEnd(t,e.end-n),d=!0),n=i}else if("BR"===o.tagName)l||e.start!==n||(s.setStartBefore(o),l=!0),l&&e.end===n&&(s.setEndBefore(o),d=!0),n++;else{const t=o;let e=t.childNodes.length;for(;e--;)i.push(t.childNodes[e])}const c=window.getSelection();c&&(c.removeAllRanges(),c.addRange(s))}(this.container,t)}renderPiece(t){const e=t.text.split("\n");return this.wrapAttributes(e,t.attributes)}wrapAttributes(t,e){const n=document.createDocumentFragment();return t.forEach(((s,i)=>{let o=document.createTextNode(s);if(e.underline){const t=document.createElement("u");t.appendChild(o),o=t}if(e.italic){const t=document.createElement("em");t.appendChild(o),o=t}if(e.bold){const t=document.createElement("strong");t.appendChild(o),o=t}console.log(e,"attribute----1",document.getElementById("fontFamily"));const l=document.getElementById("fontFamily"),d=document.getElementById("fontSize");let c="Arial",a="16px";l&&(c=l.value,console.log(c,"Selected Font Family")),d&&(a=d.value,console.log(a,"Selected Font size"));const r=document.createElement("span");r.style.fontFamily=e.fontFamily||c,r.style.fontSize=e.fontSize||a,r.appendChild(o),n.appendChild(r),i<t.length-1&&n.appendChild(document.createElement("br"))})),n}}class o extends t{constructor(t){super(),this.container=t,this.setupButtons()}setupButtons(){this.container.querySelectorAll("button").forEach((t=>{t.addEventListener("mousedown",(t=>{t.preventDefault()}))})),this.container.addEventListener("click",(t=>{const e=t.target.closest("button");if(e){const t=e.getAttribute("data-action");t&&this.emit("toolbarAction",t)}}))}updateActiveStates(t){this.container.querySelectorAll("button").forEach((e=>{const n=e.getAttribute("data-action");let s=!1;"bold"===n&&t.bold&&(s=!0),"italic"===n&&t.italic&&(s=!0),"underline"===n&&t.underline&&(s=!0),"undo"===n&&t.undo&&(s=!0),"redo"===n&&t.redo&&(s=!0),e.classList.toggle("active",s)}))}}function l(t){return d((new DOMParser).parseFromString(t,"text/html").body,{bold:!1,italic:!1,underline:!1})}function d(t,n){let s=Object.assign({},n);const i=[];if(t instanceof HTMLElement)"STRONG"!==t.tagName&&"B"!==t.tagName||(s.bold=!0),"EM"!==t.tagName&&"I"!==t.tagName||(s.italic=!0),"U"===t.tagName&&(s.underline=!0),t.childNodes.forEach((t=>{console.log({child:t}),i.push(...d(t,s))}));else if(t instanceof Text){const n=t.nodeValue||"";""!==n.trim()&&i.push(new e(n,Object.assign({},s)))}return i}window.TextIgniter=class{constructor(t,s){var d,c,a,r,u;this.document=new n,this.editorView=new i(t,this.document),this.toolbarView=new o(s),this.currentAttributes={bold:!1,italic:!1,underline:!1,undo:!1,redo:!1},this.manualOverride=!1,this.lastPiece=null,this.toolbarView.on("toolbarAction",((t,e=[])=>this.handleToolbarAction(t,e))),this.document.on("documentChanged",(()=>this.editorView.render())),t.addEventListener("keydown",(t=>this.handleKeydown(t))),t.addEventListener("keyup",(()=>this.syncCurrentAttributesWithCursor())),document.addEventListener("mouseup",(()=>{const t=this.document.getAllSelectedDataIds();console.log("Selected text is inside element with data-id:",t),console.log(this.document.dataIds,"this.document.dataIds")})),null===(d=document.getElementById("fontFamily"))||void 0===d||d.addEventListener("change",(t=>{const e=t.target.value,[n,s]=this.getSelectionRange();this.document.dataIds.length>1?this.document.blocks.forEach((t=>{if(this.document.dataIds.includes(t.dataId)){console.log(document.getElementById(t.dataId)),console.log(t.dataId,this.document.dataIds,"attribute1"),this.document.selectedBlockId=t.dataId;let s=0;t.pieces.forEach((t=>{s+=t.text.length}));let i=n-s;this.document.setFontFamily(i,s,e)}})):this.document.setFontFamily(n,s,e)})),null===(c=document.getElementById("fontSize"))||void 0===c||c.addEventListener("change",(t=>{const e=t.target.value,[n,s]=this.getSelectionRange();this.document.dataIds.length>1?this.document.blocks.forEach((t=>{if(this.document.dataIds.includes(t.dataId)){this.document.selectedBlockId=t.dataId;let s=0;t.pieces.forEach((t=>{s+=t.text.length}));let i=n-s;this.document.setFontSize(i,s,e)}})):this.document.setFontSize(n,s,e)})),null===(a=document.getElementById("alignLeft"))||void 0===a||a.addEventListener("click",(()=>{this.document.dataIds.forEach((t=>this.document.setAlignment("left",t)))})),null===(r=document.getElementById("alignCenter"))||void 0===r||r.addEventListener("click",(()=>{this.document.dataIds.forEach((t=>this.document.setAlignment("center",t)))})),null===(u=document.getElementById("alignRight"))||void 0===u||u.addEventListener("click",(()=>{this.document.dataIds.forEach((t=>this.document.setAlignment("right",t)))})),document.addEventListener("keydown",(t=>{if((t.ctrlKey||t.metaKey)&&!t.altKey){const e=t.key.toLowerCase();if(["b","i","u"].includes(e)){t.preventDefault();const n="b"===e?"bold":"i"===e?"italic":"underline";this.handleToolbarAction(n)}if("z"===e?(t.preventDefault(),this.document.undo()):"y"===e&&(t.preventDefault(),this.document.redo()),"a"===e){const t=this.document.getAllSelectedDataIds();console.log("Selected text is inside element with data-id:",t)}"l"===t.key?(t.preventDefault(),this.document.setAlignment("left",this.document.selectedBlockId)):"e"===t.key?(t.preventDefault(),this.document.setAlignment("center",this.document.selectedBlockId)):"r"===t.key&&(t.preventDefault(),this.document.setAlignment("right",this.document.selectedBlockId)),console.log("undo",this.document.undoStack,"redo",this.document.redoStack)}})),document.addEventListener("selectionchange",this.handleSelectionChange.bind(this)),this.document.emit("documentChanged",this.document),t.addEventListener("paste",(t=>{var n,s;t.preventDefault();const i=null===(n=t.clipboardData)||void 0===n?void 0:n.getData("text/html"),[o,d]=this.getSelectionRange();d>o&&this.document.deleteRange(o,d);let c=[];if(i)c=l(i);else{const n=(null===(s=t.clipboardData)||void 0===s?void 0:s.getData("text/plain"))||"";c=[new e(n,Object.assign({},this.currentAttributes))]}let a=o;for(const t of c)this.document.insertAt(t.text,Object.assign({},t.attributes),a,this.document.selectedBlockId),a+=t.text.length;this.setCursorPosition(a)})),t.addEventListener("dragover",(t=>{t.preventDefault()})),t.addEventListener("drop",(t=>{var n,s;t.preventDefault();const i=null===(n=t.dataTransfer)||void 0===n?void 0:n.getData("text/html"),[o,d]=this.getSelectionRange();d>o&&this.document.deleteRange(o,d);let c=[];if(i)c=l(i);else{const n=(null===(s=t.dataTransfer)||void 0===s?void 0:s.getData("text/plain"))||"";c=[new e(n,Object.assign({},this.currentAttributes))]}let a=o;for(const t of c)this.document.insertAt(t.text,Object.assign({},t.attributes),a,this.document.selectedBlockId),a+=t.text.length;this.setCursorPosition(a)}))}getSelectionRange(){const t=s(this.editorView.container);return t?[t.start,t.end]:[0,0]}handleToolbarAction(t,e=[]){const[n,s]=this.getSelectionRange();switch(console.log(t,"action---"),t){case"orderedList":this.document.dataIds.map(((t,e)=>this.document.toggleOrderedList(t,e+1)));break;case"unorderedList":this.document.dataIds.map((t=>this.document.toggleUnorderedList(t)))}if(n<s)switch(t){case"bold":this.document.dataIds.length>1?this.document.blocks.forEach((t=>{if(this.document.dataIds.includes(t.dataId)){this.document.selectedBlockId=t.dataId;let e=0;t.pieces.forEach((t=>{e+=t.text.length}));let s=n-e;this.document.toggleBoldRange(s,e)}})):this.document.toggleBoldRange(n,s);break;case"italic":this.document.dataIds.length>1?this.document.blocks.forEach((t=>{if(this.document.dataIds.includes(t.dataId)){this.document.selectedBlockId=t.dataId;let e=0;t.pieces.forEach((t=>{e+=t.text.length}));let s=n-e;this.document.toggleItalicRange(s,e)}})):this.document.toggleItalicRange(n,s);break;case"underline":this.document.dataIds.length>1?this.document.blocks.forEach((t=>{if(this.document.dataIds.includes(t.dataId)){this.document.selectedBlockId=t.dataId;let e=0;t.pieces.forEach((t=>{e+=t.text.length}));let s=n-e;this.document.toggleUnderlineRange(s,e)}})):this.document.toggleUnderlineRange(n,s);break;case"undo":this.document.undo();break;case"redo":this.document.redo()}else this.currentAttributes[t]=!this.currentAttributes[t],this.manualOverride=!0;console.log("undo",this.document.undoStack,"redo",this.document.redoStack),this.toolbarView.updateActiveStates(this.currentAttributes)}handleSelectionChange(){var t;const e=window.getSelection();if(!e||0===e.rangeCount)return;const n=null===(t=e.getRangeAt(0).startContainer.parentElement)||void 0===t?void 0:t.closest("[data-id]");n&&n instanceof HTMLElement&&(this.document.selectedBlockId=n.getAttribute("data-id")||null)}handleKeydown(t){var n,s,i,o;const[l,d]=this.getSelectionRange();if("Enter"===t.key){console.log("blocks",this.document.blocks),t.preventDefault();const c=`data-id-${Date.now()}`;if("ol"===(null===(n=this.document.blocks[this.document.blocks.length-1])||void 0===n?void 0:n.listType)||"ul"===(null===(s=this.document.blocks[this.document.blocks.length-1])||void 0===s?void 0:s.listType)){const t=null===(i=this.document.blocks[this.document.blocks.length-1])||void 0===i?void 0:i.listType;let n=1;"ol"===t&&(n=null===(o=this.document.blocks[this.document.blocks.length-1])||void 0===o?void 0:o.listStart,n+=1),this.document.blocks.push({dataId:c,class:"paragraph-block",pieces:[new e(" ")],listType:t,listStart:"ol"===t?n:""})}else if(null!==this.getCurrentCursorBlock()){const t=this.addBlockAfter(this.document.blocks,this.getCurrentCursorBlock().toString(),{dataId:c,class:"paragraph-block",pieces:[new e(" ")]});this.document.blocks=t,console.log("vicky11",this.document.blocks," updatedBlock",t)}else this.document.blocks.push({dataId:c,class:"paragraph-block",pieces:[new e(" ")]});this.syncCurrentAttributesWithCursor(),this.editorView.render(),this.setCursorPosition(d+1,c),d>l&&this.document.deleteRange(l,d,this.document.selectedBlockId,this.document.currentOffset)}else"Backspace"===t.key?(t.preventDefault(),this.document.dataIds.length>1&&(console.log(this.document.dataIds,"this.document.dataIds"),this.document.deleteBlocks()),l===d&&l>0?(this.document.deleteRange(l-1,l,this.document.selectedBlockId,this.document.currentOffset),this.setCursorPosition(l-1)):d>l&&(this.document.deleteRange(l,d,this.document.selectedBlockId,this.document.currentOffset),this.setCursorPosition(l))):1!==t.key.length||t.ctrlKey||t.metaKey||t.altKey?"Delete"===t.key&&(t.preventDefault(),l===d?(this.document.deleteRange(l,l+1,this.document.selectedBlockId),this.setCursorPosition(l)):d>l&&(this.document.deleteRange(l,d,this.document.selectedBlockId),this.setCursorPosition(l))):(t.preventDefault(),d>l&&this.document.deleteRange(l,d,this.document.selectedBlockId,this.document.currentOffset),this.document.insertAt(t.key,Object.assign({},this.currentAttributes),l,this.document.selectedBlockId,this.document.currentOffset),this.setCursorPosition(l+1))}getCurrentCursorBlock(){const t=window.getSelection();if(!t||0===t.rangeCount)return null;const e=t.getRangeAt(0).startContainer,n=e.nodeType===Node.TEXT_NODE?e.parentElement:e,s=null==n?void 0:n.closest("[data-id]");return(null==s?void 0:s.getAttribute("data-id"))||null}addBlockAfter(t,e,n){const s=t.findIndex((t=>t.dataId===e));if(-1===s)return console.error(`Block with dataId "${e}" not found.`),t;return[...t.slice(0,s+1),n,...t.slice(s+1)]}syncCurrentAttributesWithCursor(){const[t,e]=this.getSelectionRange();if(t===e){const e=this.document.findPieceAtOffset(t,this.document.selectedBlockId);e?(e!==this.lastPiece&&(this.manualOverride=!1,this.lastPiece=e),this.manualOverride||(this.currentAttributes={bold:e.attributes.bold,italic:e.attributes.italic,underline:e.attributes.underline},this.toolbarView.updateActiveStates(this.currentAttributes))):(this.manualOverride||(this.currentAttributes={bold:!1,italic:!1,underline:!1},this.toolbarView.updateActiveStates(this.currentAttributes)),this.lastPiece=null)}}setCursorPosition(t,e=""){if(""===e)this.editorView.container.focus();else{document.querySelector('[data-id="'+e+'"]').focus()}const n=window.getSelection();if(!n)return;const s=document.createRange();let i=0;const o=[this.editorView.container];let l;for(;l=o.pop();)if(3===l.nodeType){const e=l,n=i+e.length;if(t>=i&&t<=n){s.setStart(e,t-i),s.collapse(!0);break}i=n}else if("BR"===l.tagName){if(t===i){s.setStartBefore(l),s.collapse(!0);break}i++}else{const t=l;let e=t.childNodes.length;for(;e--;)o.push(t.childNodes[e])}n.removeAllRanges(),n.addRange(s)}};
