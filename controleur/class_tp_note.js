class VueTpNote {
    init(form) {
        this._form = form;
        this.form.divPartieAjout.hidden = true;
    }
    get form() { return this._form; }
    afficherAjout() {
        this.form.divPartieAjout.hidden = false;
        this.form.edtTitreAlbum.focus();
    }
}
let vueTpNoteClass = new VueTpNote;
export { vueTpNoteClass };
//# sourceMappingURL=class_tp_note.js.map