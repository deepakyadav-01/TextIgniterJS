"use strict";class t{constructor(){this.events={}}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)}emit(t,e){this.events[t]&&this.events[t].forEach((t=>t(e)))}}class e{constructor(t,e={}){this.text=t,this.attributes={bold:e.bold||!1,italic:e.italic||!1,underline:e.underline||!1}}isBold(){return this.attributes.bold}setBold(t){this.attributes.bold=t}isItalic(){return this.attributes.italic}setItalic(t){this.attributes.italic=t}isUnderline(){return this.attributes.underline}setUnderline(t){this.attributes.underline=t}clone(){return new e(this.text,Object.assign({},this.attributes))}hasSameAttributes(t){return this.attributes.bold===t.attributes.bold&&this.attributes.italic===t.attributes.italic&&this.attributes.underline===t.attributes.underline}}class s extends t{get selectedBlockId(){return this._selectedBlockId}set selectedBlockId(t){if(this._selectedBlockId!==t){this._selectedBlockId=t;const e=this.getCursorOffset(document.querySelector('[id="editor"]')),s=this.getCursorOffset(document.querySelector('[data-id="'+t+'"]'));this.currentOffset=e-s}}constructor(){super(),this._selectedBlockId=null,this.pieces=[new e("")],this.blocks=[{dataId:"data-id-1734604240404",class:"paragraph-block",pieces:[new e(" ")]}],this.selectedBlockId="data-id-1734604240404",this.currentOffset=0}getPlainText(){return this.pieces.map((t=>t.text)).join("")}insertAt(t,s,i,n="",r=0){let o=0,c=[],l=!1,a=0;""===n&&null===n||(a=this.blocks.findIndex((t=>t.dataId===n)),o=this.currentOffset);for(let n of this.blocks[a].pieces){const r=o+n.text.length;if(!l&&i<=r){const r=i-o;r>0&&c.push(new e(n.text.slice(0,r),Object.assign({},n.attributes))),c.push(new e(t,{bold:s.bold||!1,italic:s.italic||!1,underline:s.underline||!1})),r<n.text.length&&c.push(new e(n.text.slice(r),Object.assign({},n.attributes))),l=!0}else c.push(n.clone());o=r}if(!l){const i=c[c.length-1];i&&i.hasSameAttributes(new e("",{bold:s.bold||!1,italic:s.italic||!1,underline:s.underline||!1}))?i.text+=t:c.push(new e(t,{bold:s.bold||!1,italic:s.italic||!1,underline:s.underline||!1}))}const d=this.mergePieces(c);this.blocks[a].pieces=d,this.emit("documentChanged",this)}deleteRange(t,s,i="",n=0){if(t===s)return;let r=[],o=0,c=0;""===i&&null===i||(c=this.blocks.findIndex((t=>t.dataId===i)),o=n);for(let i of this.blocks[c].pieces){const n=o+i.text.length;if(n<=t||o>=s)r.push(i.clone());else{const c=o,l=i.text;t>c&&t<n&&r.push(new e(l.slice(0,t-c),Object.assign({},i.attributes))),s<n&&r.push(new e(l.slice(s-c),Object.assign({},i.attributes)))}o=n}const l=this.mergePieces(r);this.blocks[c].pieces=l,0===l.length&&this.blocks.length>1&&(this.blocks=this.blocks.filter((t=>0!==t.pieces.length))),this.emit("documentChanged",this)}getCursorOffset(t){const e=window.getSelection();if(!e||0===e.rangeCount)return-1;const s=e.getRangeAt(0);let i=0;const n=t=>{var e;return t===s.startContainer?(i+=s.startOffset,!0):(3===t.nodeType&&(i+=(null===(e=t.textContent)||void 0===e?void 0:e.length)||0),Array.from(t.childNodes).some(n))};return n(t),i}formatAttribute(t,s,i,n){let r=[],o=0,c=-1;""===this.selectedBlockId&&null===this.selectedBlockId||(c=this.blocks.findIndex((t=>t.dataId===this.selectedBlockId)),o=this.currentOffset);for(let l of this.blocks[c].pieces){const c=o+l.text.length;if(c<=t||o>=s)r.push(l.clone());else{const c=o,a=l.text,d=Math.max(t-c,0),u=Math.min(s-c,a.length);d>0&&r.push(new e(a.slice(0,d),Object.assign({},l.attributes)));const h=new e(a.slice(d,u),Object.assign({},l.attributes));h.attributes[i]=n,r.push(h),u<a.length&&r.push(new e(a.slice(u),Object.assign({},l.attributes)))}o=c}const l=this.mergePieces(r);this.blocks[c].pieces=l,this.emit("documentChanged",this)}toggleBoldRange(t,e){const s=this.isRangeEntirelyAttribute(t,e,"bold");this.formatAttribute(t,e,"bold",!s)}toggleItalicRange(t,e){const s=this.isRangeEntirelyAttribute(t,e,"italic");this.formatAttribute(t,e,"italic",!s)}toggleUnderlineRange(t,e){const s=this.isRangeEntirelyAttribute(t,e,"underline");this.formatAttribute(t,e,"underline",!s)}isRangeEntirelyAttribute(t,e,s){let i=this.currentOffset,n=!0;if(""!==this.selectedBlockId){const r=this.blocks.findIndex((t=>t.dataId===this.selectedBlockId));for(let o of this.blocks[r].pieces){const r=i+o.text.length;if(r>t&&i<e&&!o.attributes[s]){n=!1;break}i=r}}return n}mergePieces(t){let e=[];for(let s of t){const t=e[e.length-1];t&&t.hasSameAttributes(s)?t.text+=s.text:e.push(s)}return e}findPieceAtOffset(t,e=""){let s=this.currentOffset;if(""!==e){const i=this.blocks.findIndex((t=>t.dataId===e));for(let e of this.blocks[i].pieces){const i=s+e.text.length;if(t>=s&&t<=i)return e;s=i}}return null}}function i(t){const e=window.getSelection();if(!e||0===e.rangeCount)return null;const s=e.getRangeAt(0),i=s.cloneRange();i.selectNodeContents(t),i.setEnd(s.startContainer,s.startOffset);const n=i.toString().length;i.setEnd(s.endContainer,s.endOffset);return{start:n,end:i.toString().length}}class n{constructor(t,e){this.container=t,this.document=e}render(){const t=i(this.container);this.container.innerHTML="",this.document.blocks.forEach((t=>{if(""!==t.dataId){const e=document.createElement("div");e.setAttribute("data-id",t.dataId),e.setAttribute("class",t.class),t.pieces.forEach((t=>{e.appendChild(this.renderPiece(t))})),this.container.appendChild(e)}})),function(t,e){if(!e)return;let s=0;const i=document.createRange();i.setStart(t,0),i.collapse(!0);const n=[t];let r,o=!1,c=!1;for(;!c&&(r=n.pop());)if(3===r.nodeType){const t=r,n=s+t.length;!o&&e.start>=s&&e.start<=n&&(i.setStart(t,e.start-s),o=!0),o&&e.end>=s&&e.end<=n&&(i.setEnd(t,e.end-s),c=!0),s=n}else if("BR"===r.tagName)o||e.start!==s||(i.setStartBefore(r),o=!0),o&&e.end===s&&(i.setEndBefore(r),c=!0),s++;else{const t=r;let e=t.childNodes.length;for(;e--;)n.push(t.childNodes[e])}const l=window.getSelection();l&&(l.removeAllRanges(),l.addRange(i))}(this.container,t)}renderPiece(t){const e=t.text.split("\n");return this.wrapAttributes(e,t.attributes)}wrapAttributes(t,e){const s=document.createDocumentFragment();return t.forEach(((i,n)=>{let r=document.createTextNode(i);if(e.underline){const t=document.createElement("u");t.appendChild(r),r=t}if(e.italic){const t=document.createElement("em");t.appendChild(r),r=t}if(e.bold){const t=document.createElement("strong");t.appendChild(r),r=t}s.appendChild(r),n<t.length-1&&s.appendChild(document.createElement("br"))})),s}}class r extends t{constructor(t){super(),this.container=t,this.setupButtons()}setupButtons(){this.container.querySelectorAll("button").forEach((t=>{t.addEventListener("mousedown",(t=>{t.preventDefault()}))})),this.container.addEventListener("click",(t=>{const e=t.target.closest("button");if(e){const t=e.getAttribute("data-action");t&&this.emit("toolbarAction",t)}}))}updateActiveStates(t){this.container.querySelectorAll("button").forEach((e=>{const s=e.getAttribute("data-action");let i=!1;"bold"===s&&t.bold&&(i=!0),"italic"===s&&t.italic&&(i=!0),"underline"===s&&t.underline&&(i=!0),e.classList.toggle("active",i)}))}}window.TextIgniter=class{constructor(t,e){this.document=new s,this.editorView=new n(t,this.document),this.toolbarView=new r(e),this.currentAttributes={bold:!1,italic:!1,underline:!1},this.manualOverride=!1,this.lastPiece=null,this.toolbarView.on("toolbarAction",(t=>this.handleToolbarAction(t))),this.document.on("documentChanged",(()=>this.editorView.render())),t.addEventListener("keydown",(t=>this.handleKeydown(t))),t.addEventListener("keyup",(()=>this.syncCurrentAttributesWithCursor())),document.addEventListener("keydown",(t=>{if((t.ctrlKey||t.metaKey)&&!t.altKey){const e=t.key.toLowerCase();if(["b","i","u"].includes(e)){t.preventDefault();const s="b"===e?"bold":"i"===e?"italic":"underline";this.handleToolbarAction(s)}}})),document.addEventListener("selectionchange",this.handleSelectionChange.bind(this)),this.document.emit("documentChanged",this.document)}getSelectionRange(){const t=i(this.editorView.container);return t?[t.start,t.end]:[0,0]}handleToolbarAction(t){const[e,s]=this.getSelectionRange();if(e<s)switch(t){case"bold":this.document.toggleBoldRange(e,s);break;case"italic":this.document.toggleItalicRange(e,s);break;case"underline":this.document.toggleUnderlineRange(e,s)}else this.currentAttributes[t]=!this.currentAttributes[t],this.manualOverride=!0;this.toolbarView.updateActiveStates(this.currentAttributes)}handleSelectionChange(){var t;const e=window.getSelection();if(!e||0===e.rangeCount)return;const s=null===(t=e.getRangeAt(0).startContainer.parentElement)||void 0===t?void 0:t.closest("[data-id]");s&&s instanceof HTMLElement&&(this.document.selectedBlockId=s.getAttribute("data-id")||null)}handleKeydown(t){const[s,i]=this.getSelectionRange();if("Enter"===t.key){t.preventDefault();const n=`data-id-${Date.now()}`;this.document.blocks.push({dataId:n,class:"paragraph-block",pieces:[new e(" ")]}),this.syncCurrentAttributesWithCursor(),this.editorView.render(),this.setCursorPosition(i+1,n),i>s&&this.document.deleteRange(s,i,this.document.selectedBlockId,this.document.currentOffset)}else"Backspace"===t.key?(t.preventDefault(),s===i&&s>0?(this.document.deleteRange(s-1,s,this.document.selectedBlockId,this.document.currentOffset),this.setCursorPosition(s-1)):i>s&&(this.document.deleteRange(s,i,this.document.selectedBlockId,this.document.currentOffset),this.setCursorPosition(s))):1!==t.key.length||t.ctrlKey||t.metaKey||t.altKey||(t.preventDefault(),i>s&&this.document.deleteRange(s,i,this.document.selectedBlockId,this.document.currentOffset),this.document.insertAt(t.key,Object.assign({},this.currentAttributes),s,this.document.selectedBlockId,this.document.currentOffset),this.setCursorPosition(s+1))}syncCurrentAttributesWithCursor(){const[t,e]=this.getSelectionRange();if(t===e){const e=this.document.findPieceAtOffset(t,this.document.selectedBlockId);e?(e!==this.lastPiece&&(this.manualOverride=!1,this.lastPiece=e),this.manualOverride||(this.currentAttributes={bold:e.attributes.bold,italic:e.attributes.italic,underline:e.attributes.underline},this.toolbarView.updateActiveStates(this.currentAttributes))):(this.manualOverride||(this.currentAttributes={bold:!1,italic:!1,underline:!1},this.toolbarView.updateActiveStates(this.currentAttributes)),this.lastPiece=null)}}setCursorPosition(t,e=""){if(""===e)this.editorView.container.focus();else{document.querySelector('[data-id="'+e+'"]').focus()}const s=window.getSelection();if(!s)return;const i=document.createRange();let n=0;const r=[this.editorView.container];let o;for(;o=r.pop();)if(3===o.nodeType){const e=o,s=n+e.length;if(t>=n&&t<=s){i.setStart(e,t-n),i.collapse(!0);break}n=s}else if("BR"===o.tagName){if(t===n){i.setStartBefore(o),i.collapse(!0);break}n++}else{const t=o;let e=t.childNodes.length;for(;e--;)r.push(t.childNodes[e])}s.removeAllRanges(),s.addRange(i)}};