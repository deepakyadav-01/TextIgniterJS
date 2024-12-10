"use strict";const t={bold:'<svg \n                xmlns="http://www.w3.org/2000/svg" \n                width="18" \n                height="18" \n                viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">\n                <title>Bold</title>\n                <path d="M17.061 11.22A4.46 4.46 0 0 0 18 8.5C18 6.019 15.981 4 13.5 4H6v15h8c2.481 0 4.5-2.019 4.5-4.5a4.48 4.48 0 0 0-1.439-3.28zM13.5 7c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H9V7h4.5zm.5 9H9v-3h5c.827 0 1.5.673 1.5 1.5S14.827 16 14 16z"></path>\n            </svg>',italic:'<svg \n                xmlns="http://www.w3.org/2000/svg" \n                width="18" \n                height="18" \n                viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">\n                <title>Italic</title>\n                <path d="M19 7V4H9v3h2.868L9.012 17H5v3h10v-3h-2.868l2.856-10z"></path>\n            </svg>',underline:'<svg \n                    xmlns="http://www.w3.org/2000/svg" \n                    width="18" height="18" \n                    viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">\n                    <title>Underline</title>\n                    <path d="M5 18h14v2H5zM6 4v6c0 3.309 2.691 6 6 6s6-2.691 6-6V4h-2v6c0 2.206-1.794 4-4 4s-4-1.794-4-4V4H6z"></path>\n                </svg>',subscript:'<svg \n                xmlns="http://www.w3.org/2000/svg" \n                    width="18" height="18" \n                    viewBox="0 0 24 24">\n                    <title>Subscript</title>\n                    <path fill="currentColor" d="M19 20v-3h3v-1h-3v-1h4v3h-3v1h3v1zM5.875 18l4.625-7.275L6.2 4h2.65l3.1 5h.1l3.075-5H17.8l-4.325 6.725L18.125 18H15.45l-3.4-5.425h-.1L8.55 18z"/>\n                </svg>',superscript:'<svg \n                    xmlns="http://www.w3.org/2000/svg" \n                    width="18" \n                    height="18" \n                    viewBox="0 0 24 24">\n                    <title>Superscript</title>\n                    <path fill="currentColor" d="M19 9V6h3V5h-3V4h4v3h-3v1h3v1zM5.875 20l4.625-7.275L6.2 6h2.65l3.1 5h.1l3.075-5H17.8l-4.325 6.725L18.125 20H15.45l-3.4-5.425h-.1L8.55 20z"/>\n                </svg>',left_align:'<svg \n                    xmlns="http://www.w3.org/2000/svg" \n                    width="18" \n                    height="18" \n                    viewBox="0 0 24 24">\n                    <title>Left Align</title>\n                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.5 12h8m-8 6.25h15m-15-12.5h15"/>\n                </svg>',center_align:'<svg \n                    xmlns="http://www.w3.org/2000/svg" \n                    width="18" \n                    height="18" \n                    viewBox="0 0 24 24">\n                    <title>Center Align</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M8 12h8M6 18h12"/>\n                </svg>',right_align:'<svg \n                    xmlns="http://www.w3.org/2000/svg" \n                    width="18" \n                    height="18" \n                    viewBox="0 0 24 24">\n                    <title>Right Align</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.5 12h-8m8-6.25h-15m15 12.5h-15"/></svg>',justify:'<svg \n                xmlns="http://www.w3.org/2000/svg" \n                width="18" \n                height="18" \n                viewBox="0 0 20 20">\n                <title>Justify</title><path fill="currentColor" d="M2 4.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.25m0 5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25m.75 4.25a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"/>\n            </svg>',bullet_list:'<svg \n                    xmlns="http://www.w3.org/2000/svg" \n                    width="18" \n                    height="18" \n                    viewBox="0 0 16 16">\n                    <title>Bullet List</title><path fill="currentColor" d="M2 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M2 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M5.5 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM5 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 5 8m.5 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/></svg>',numbered_list:'<svg \n                    xmlns="http://www.w3.org/2000/svg" \n                    width="18" \n                    height="18" \n                    viewBox="0 0 512 512">\n                    <title>Numbererd List</title>\n                    <path fill="currentColor" d="M184 80h288v32H184zm0 160h288v32H184zm0 160h288v32H184zm-64-240V40H56v32h32v88zM56 262.111V312h80v-32H91.777L136 257.889V192H56v32h48v14.111zM56 440v32h80V344H56v32h48v16H80v32h24v16z"/>\n                </svg>',insert_table:'<svg \n                    xmlns="http://www.w3.org/2000/svg" \n                    width="18" \n                    height="18" \n                    viewBox="0 0 20 20">\n                    <title>Insert Table</title>\n                    <path fill="currentColor" d="M1.364 5.138v12.02h17.272V5.138zM.909 1.5h18.182c.502 0 .909.4.909.895v15.21a.9.9 0 0 1-.91.895H.91c-.503 0-.91-.4-.91-.895V2.395C0 1.9.407 1.5.91 1.5m5.227 1.759c0-.37.306-.671.682-.671s.682.3.682.671v13.899c0 .37-.305.67-.682.67a.676.676 0 0 1-.682-.67zm6.96-.64c.377 0 .682.3.682.67v4.995h4.91c.377 0 .683.301.683.672c0 .37-.306.671-.682.671l-4.911-.001v3.062h5.002c.377 0 .682.3.682.671c0 .37-.305.671-.682.671h-5.002v3.158a.676.676 0 0 1-.682.671a.676.676 0 0 1-.681-.67l-.001-3.159H1.001a.676.676 0 0 1-.682-.67c0-.371.305-.672.682-.672h11.413V9.626L.909 9.627a.676.676 0 0 1-.682-.671c0-.37.306-.671.682-.671l11.505-.001V3.289c0-.37.306-.67.682-.67"/>\n                </svg>',insert_layout:'<svg \n                    xmlns="http://www.w3.org/2000/svg" \n                    width="18" \n                    height="18" \n                    viewBox="0 0 256 256">\n                    <title>Insert Layout</title>\n                    <path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v42H38V56a2 2 0 0 1 2-2m-2 146v-90h60v92H40a2 2 0 0 1-2-2m178 2H110v-92h108v90a2 2 0 0 1-2 2"/>\n                </svg>',heading:'<svg \n                xmlns="http://www.w3.org/2000/svg" \n                width="18" \n                height="18" \n                viewBox="0 0 24 24">\n                <title>Heading</title>\n                <path fill="currentColor" d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"/>\n            </svg>',hyperlink:'<svg \n                xmlns="http://www.w3.org/2000/svg" \n                width="18" \n                height="18" \n                viewBox="0 0 24 24">\n                <title>Hyperlink</title>\n                <path fill="currentColor" d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353a.75.75 0 0 0-1.18.928a5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061z"/>\n                <path fill="currentColor" d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353a.75.75 0 0 0 1.18-.928a5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568z"/>\n            </svg>',image:'<svg \n            xmlns="http://www.w3.org/2000/svg" \n            width="18" \n            height="18" \n            viewBox="0 0 16 16">\n            <title>Insert Image</title>\n            <path fill="currentColor" d="M6 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9-4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-3.448 6.134l-3.76 2.769a.5.5 0 0 1-.436.077l-.087-.034l-1.713-.87L1 11.8V14h14V9.751zM15 2H1v8.635l4.28-2.558a.5.5 0 0 1 .389-.054l.094.037l1.684.855l3.813-2.807a.5.5 0 0 1 .52-.045l.079.05L15 8.495z"/>\n        </svg>'};class e{constructor(t){this.editor=t}insertImage(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.onchange=t=>{var e;const n=null===(e=t.target.files)||void 0===e?void 0:e[0];if(n){const t=new FileReader;t.onload=t=>{var e,n;const i=document.createElement("img");i.src=null===(e=t.target)||void 0===e?void 0:e.result,i.style.maxWidth="100%";const o=null===(n=window.getSelection())||void 0===n?void 0:n.getRangeAt(0);o&&(o.deleteContents(),o.insertNode(i))},t.readAsDataURL(n)}},t.click()}}class n{constructor(t){this.editor=t}openHeadingModal(){const t=document.createElement("div");t.classList.add("modal");[1,2,3,4,5,6].forEach((e=>{const n=document.createElement("button");n.innerText=`H${e}`,n.onclick=()=>{document.execCommand("formatBlock",!1,`<h${e}>`),document.body.removeChild(t)},t.appendChild(n)}));const e=document.createElement("button");e.innerText="Close",e.onclick=()=>document.body.removeChild(t),t.appendChild(e),document.body.appendChild(t)}}class i{constructor(t){this.editor=t}openTableModal(){const t=document.createElement("div");t.classList.add("modal");const e=document.createElement("input");e.type="number",e.placeholder="Enter No. Of Rows",e.min="1",e.style.marginRight="2px";const n=document.createElement("input");n.type="number",n.placeholder="Enter No. Of Columns",n.min="1";const i=document.createElement("button");i.innerText="Insert Table",i.onclick=()=>{const i=parseInt(e.value)||1,o=parseInt(n.value)||1;this.insertTable(i,o),document.body.removeChild(t)};const o=document.createElement("button");o.innerText="Close",o.onclick=()=>document.body.removeChild(t),t.appendChild(e),t.appendChild(n),t.appendChild(i),t.appendChild(o),document.body.appendChild(t)}insertTable(t,e){const n=document.createElement("table");n.style.width="100%",n.style.borderCollapse="collapse";for(let i=0;i<t;i++){const t=n.insertRow();for(let n=0;n<e;n++){const e=t.insertCell();e.style.border="1px solid #ccc",e.style.padding="20px",e.contentEditable="true",e.innerText=" "}}this.editor.appendChild(n)}}class o{constructor(t){this.editor=t}openLayoutModal(){const t=document.createElement("div");t.classList.add("modal");const e=document.createElement("button");e.innerText="Single Column",e.onclick=()=>{this.insertLayout(1,[100,0]),document.body.removeChild(t)};const n=document.createElement("button");n.innerText="Two Columns",n.onclick=()=>{this.insertLayout(2,[50,50]),document.body.removeChild(t)};const i=document.createElement("button");i.innerText="Three Columns",i.onclick=()=>{this.insertLayout(3,[33.33,33.33,33.33]),document.body.removeChild(t)};const o=document.createElement("button");o.innerText="60-40 Split",o.onclick=()=>{this.insertLayout(2,[60,40]),document.body.removeChild(t)};const l=document.createElement("button");l.innerText="40-60 Split",l.onclick=()=>{this.insertLayout(2,[40,60]),document.body.removeChild(t)};const s=document.createElement("button");s.innerText="Close",s.onclick=()=>document.body.removeChild(t),t.appendChild(e),t.appendChild(n),t.appendChild(i),t.appendChild(o),t.appendChild(l),t.appendChild(s),document.body.appendChild(t)}insertLayout(t,e){const n=document.createElement("div");n.style.display="flex";for(let i=0;i<t;i++){const t=document.createElement("div");t.style.flex=`0 0 ${e[i]}%`,t.style.border="1px solid #ccc",t.style.padding="20px",t.contentEditable="true",n.appendChild(t)}this.editor.appendChild(n)}}class l{constructor(t){this.modal=null,this.overlay=null,this.currentAnchor=null,this.savedRange=null,this.editor=t,this.editor.addEventListener("mouseup",(()=>this.saveSelection())),this.editor.addEventListener("keyup",(()=>this.saveSelection()))}saveSelection(){const t=window.getSelection();t&&t.rangeCount>0&&(this.savedRange=t.getRangeAt(0).cloneRange())}openHyperlinkModal(){if(this.modal)return;this.overlay=document.createElement("div"),this.overlay.classList.add("modal-overlay"),document.body.appendChild(this.overlay),this.modal=document.createElement("div"),this.modal.classList.add("hyperlink-modal");const t=document.createElement("input");t.type="text",t.placeholder="Enter link text",t.classList.add("hyperlink-input");const e=document.createElement("input");e.type="text",e.placeholder="Enter URL",e.classList.add("hyperlink-input");const n=document.createElement("button");n.textContent="Insert/Update Link",n.onclick=()=>this.insertHyperlink(t.value,e.value);const i=document.createElement("button");if(i.textContent="Close",i.onclick=()=>this.closeHyperlinkModal(),this.modal.appendChild(t),this.modal.appendChild(e),this.modal.appendChild(n),this.modal.appendChild(i),this.savedRange){const n=this.savedRange.commonAncestorContainer;let i=n instanceof HTMLAnchorElement?n:n.parentElement;i&&"A"===i.tagName&&(this.currentAnchor=i,t.value=i.textContent||"",e.value=i.href)}document.body.appendChild(this.modal),this.modal.style.position="fixed",this.modal.style.top="20%",this.modal.style.left="45%",this.modal.style.backgroundColor="#fff",this.modal.style.zIndex="1000",this.overlay.style.position="fixed",this.overlay.style.top="0",this.overlay.style.left="0",this.overlay.style.width="100%",this.overlay.style.height="100%",this.overlay.style.backgroundColor="rgba(0, 0, 0, 0.5)",this.overlay.style.backdropFilter="blur(5px)",this.overlay.style.zIndex="999"}insertHyperlink(t,e){if(t&&e){if(this.currentAnchor)this.currentAnchor.href=e,this.currentAnchor.textContent=t,this.currentAnchor.target="_blank",this.currentAnchor=null;else if(this.savedRange){const n=window.getSelection();null==n||n.removeAllRanges(),null==n||n.addRange(this.savedRange);const i=document.createElement("a");i.href=e,i.textContent=t,i.target="_blank",i.style.textDecoration="none",i.onclick=t=>{t.preventDefault(),window.open(i.href,"_blank")};const o=document.createDocumentFragment();o.appendChild(i);try{this.savedRange.deleteContents(),this.savedRange.insertNode(o),this.savedRange.setStartAfter(i),this.savedRange.setEndAfter(i),this.savedRange=null}catch(t){console.error("Error inserting hyperlink:",t)}}else console.error("No saved selection range found.");this.closeHyperlinkModal()}else console.error("Both link text and URL are required.")}closeHyperlinkModal(){this.modal&&(document.body.removeChild(this.modal),this.modal=null),this.overlay&&(document.body.removeChild(this.overlay),this.overlay=null)}}class s{constructor(t,s){const r=document.getElementById(t);if(!(r&&r instanceof HTMLDivElement))throw new Error("Editor element not found or incorrect element type.");this.editor=r,this.config=s,this.imageHandler=new e(this.editor),this.textHeadingHandler=new n(this.editor),this.insertTableHandler=new i(this.editor),this.insertLayoutHandler=new o(this.editor),this.hyperlinkHandler=new l(this.editor),this.createContainer(),this.init(),this.createToolbar(),this.addKeyboardShortcuts()}createContainer(){this.container=document.createElement("div"),this.container.classList.add("text-igniter"),this.editor.parentNode.insertBefore(this.container,this.editor),this.container.appendChild(this.editor)}init(){this.editor.contentEditable="true",this.editor.classList.add("editor"),this.addSelectionListener(),this.editor.focus()}createToolbar(){const e=document.createElement("div");e.classList.add("toolbar");const n={bold:t.bold,italic:t.italic,underline:t.underline,subscript:t.subscript,superscript:t.superscript,left_align:t.left_align,center_align:t.center_align,right_align:t.right_align,justify:t.justify,bullet_list:t.bullet_list,numbered_list:t.numbered_list,insert_table:t.insert_table,insert_layout:t.insert_layout,heading:t.heading,hyperlink:t.hyperlink,image:t.image};this.config.features.forEach((i=>{if("heading"===i){const n=document.createElement("button");n.innerHTML=t.heading,n.setAttribute("data-command",i),n.onclick=()=>this.textHeadingHandler.openHeadingModal(),e.appendChild(n)}else if("insert_table"===i){const n=document.createElement("button");n.innerHTML=t.insert_table,n.onclick=()=>this.insertTableHandler.openTableModal(),e.appendChild(n)}else if("insert_layout"===i){const n=document.createElement("button");n.innerHTML=t.insert_layout,n.onclick=()=>this.insertLayoutHandler.openLayoutModal(),e.appendChild(n)}else if("hyperlink"===i){const n=document.createElement("button");n.innerHTML=t.hyperlink,n.onclick=()=>this.hyperlinkHandler.openHyperlinkModal(),e.appendChild(n)}else{const t=document.createElement("button");t.innerHTML=n[i],t.setAttribute("data-command",i),t.onclick=()=>this.format(i),"left_align"===i&&t.classList.add("active"),e.appendChild(t)}})),this.container.insertBefore(e,this.editor)}deactivateAlignmentButtons(){["left_align","center_align","right_align","justify"].forEach((t=>{const e=this.container.querySelector(`button[data-command='${t}']`);e&&e.classList.remove("active")}))}addSelectionListener(){document.addEventListener("selectionchange",(()=>{this.updateSubSuperButtonState(),this.updateListButtonState()}))}addKeyboardShortcuts(){document.addEventListener("keydown",(t=>{t.ctrlKey&&"b"===t.key?(t.preventDefault(),this.format("bold")):t.ctrlKey&&"i"===t.key?(t.preventDefault(),this.format("italic")):t.ctrlKey&&"u"===t.key&&(t.preventDefault(),this.format("underline"))}))}format(t){try{const e={bold:"bold",italic:"italic",underline:"underline",subscript:"subscript",superscript:"superscript",left_align:"justifyLeft",center_align:"justifyCenter",right_align:"justifyRight",justify:"justifyFull",bullet_list:"insertUnorderedList",numbered_list:"insertOrderedList",insert_table:"insertTable",insert_layout:"insertLayout",heading:"formatBlock",hyperlink:"createLink",image:"insertImage"}[t];if(e)if("image"===t&&this.imageHandler.insertImage(),["left_align","center_align","right_align","justify"].includes(t)&&this.deactivateAlignmentButtons(),"subscript"===t?document.queryCommandState("superscript")&&document.execCommand("superscript",!1,""):"superscript"===t&&document.queryCommandState("subscript")&&document.execCommand("subscript",!1,""),"bullet_list"===t?document.queryCommandState("insertOrderedList")&&document.execCommand("insertOrderedList",!1,""):"numbered_list"===t&&document.queryCommandState("insertUnorderedList")&&document.execCommand("insertUnorderedList",!1,""),document.queryCommandSupported(e)){document.execCommand(e,!1,"")?(this.updateButtonState(t),this.updateSubSuperButtonState(),this.updateListButtonState()):console.warn(`The command '${t}' could not be executed.`)}else console.warn(`The command '${t}' is not supported.`);else console.warn(`The command '${t}' is not recognized.`)}catch(e){console.error(`Error executing command '${t}':`,e)}}updateButtonState(t){["left_align","center_align","right_align","justify"].includes(t)&&this.deactivateAlignmentButtons();const e=this.container.querySelector(`button[data-command='${t}']`);if(e){let n=!1;["left_align","center_align","right_align","justify"].includes(t)?e.classList.add("active"):(n=document.queryCommandState(t),n?e.classList.add("active"):e.classList.remove("active"))}}updateSubSuperButtonState(){const t=this.container.querySelector("button[data-command='subscript']"),e=this.container.querySelector("button[data-command='superscript']");t&&(document.queryCommandState("subscript")?t.classList.add("active"):t.classList.remove("active")),e&&(document.queryCommandState("superscript")?e.classList.add("active"):e.classList.remove("active"))}updateListButtonState(){const t=this.container.querySelector("button[data-command='bullet_list']"),e=this.container.querySelector("button[data-command='numbered_list']");t&&(document.queryCommandState("insertUnorderedList")?t.classList.add("active"):t.classList.remove("active")),e&&(document.queryCommandState("insertOrderedList")?e.classList.add("active"):e.classList.remove("active"))}getHtml(){return this.editor.innerHTML}getJson(){const t=e=>{if(e.nodeType===Node.TEXT_NODE)return e.textContent||"";const n={type:e.nodeName.toLowerCase(),attributes:{},children:[]};return e instanceof Element&&Array.from(e.attributes).forEach((t=>{n.attributes[t.name]=t.value})),e.childNodes.forEach((e=>{n.children.push(t(e))})),n};return{type:"root",attributes:{},children:[t(this.editor)]}}}window.TextIgniter=s,exports.TextIgniter=s;
