// Create Note

// Creating the grid with notes
function addNewNote() {
    let noteTitle = document.querySelector('#new-note-form input').value;
    let noteDesc = document.querySelector('#new-note-form textarea').value;
    let noteTags = document.querySelector('#new-note-form #tags').value;
    
    const note = document.createElement('div');
    note.classList.add('single-note');

    note.innerHTML = `
        <div class="note-icons">
            <button class="btn edit-note"><input type="checkbox"><i class="far fa-edit"></i></button>
            <button class="btn delete-note"><input type="checkbox"><i class="fas fa-trash"></i></button>
        </div>
        <input type="text" value="${noteTitle}">
        <textarea rows="7">${noteDesc}</textarea>
        <input type="text" id="tags" value="Tags: ${noteTags}">
        <button class="save-changes submit btn btn-small" style="display: none;">Save Changes</button>`
        
        init();
        document.querySelector('#notes-area .notes').appendChild(note);

    // Edit Note
    const editNote = note.querySelector('.edit-note').addEventListener('click', () => {
        note.querySelector('.single-note input[type="text"]').style = 'pointer-events: inherit;';
        note.querySelector('.single-note textarea').style = 'pointer-events: inherit;';
        note.querySelector('.single-note #tags').style = 'pointer-events: inherit;';
        note.querySelector('.single-note .save-changes').style = 'display: block;';
    })

    const savesChanges = note.querySelector('.save-changes').addEventListener('click', () => {
        note.querySelector('.single-note input[type="text"]').style = 'pointer-events: none;';
        note.querySelector('.single-note textarea').style = 'pointer-events: none;';
        note.querySelector('.single-note #tags').style = 'pointer-events: none;';
        note.querySelector('.single-note .save-changes').style = 'display: none;';
    })

    // Delete Note
    const deleteNote = note.querySelector('.delete-note').addEventListener('click', () => note.remove())
}

// Init form
function init() {
    document.querySelector('#new-note-form input').value = '';
    document.querySelector('#new-note-form textarea').value = '';
    document.querySelector('#new-note-form #tags').value = '';
}

// Making the animation with form
const addNote = document.querySelector('.new-note').addEventListener('click', () => {
    if(document.querySelector('#new-note-form div').style.margin == '0'){
        document.querySelector('#new-note-form').style.maxHeight = '0';
        document.querySelector('#new-note-form div').style.margin = '-300px';
    } else {
        document.querySelector('#new-note-form').style.maxHeight = '100%';
        document.querySelector('#new-note-form div').style.margin = '0';
    }
})

// Making the submit button
const submitNote = document.querySelector('#new-note-form .submit').addEventListener('click', () => {
    document.querySelector('#new-note-form').style.maxHeight = '0';
    document.querySelector('#new-note-form div').style.margin = '-300px';
    addNewNote();
})

// List Button
const list = document.querySelector('.list-icon input').addEventListener('click', () => {
    document.querySelector('#notes-area .notes').classList.add('list-view');
    document.querySelector('#notes-area .notes').classList.remove('grid-view');
})

// Grid Button
const grid = document.querySelector('.grid-icon input').addEventListener('click', () => {
    document.querySelector('#notes-area .notes').classList.add('grid-view');
    document.querySelector('#notes-area .notes').classList.remove('list-view');
})