var toolbarOptions = [
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'header': 1 }, { 'header': 2 }],
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['link', 'blockquote', 'code-block'],
             // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  // [{ 'direction': 'rtl' }],                         // text direction
  // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  // [{ 'font': [] }],
  [{ 'align': [] }],
  // ['clean'],                                         // remove formatting button
];

var quill = new Quill('#doc-information', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
});


var toolbarOptions2 = [
                                  // remove formatting button
];


var quill2 = new Quill('#selected-doc-info-quill', {
  theme: 'snow',
  modules: {
     'toolbar': toolbarOptions2
    // 'toolbar': '#toolbar'
  }
  // theme: 'bubble'

});
quill2.disable();
