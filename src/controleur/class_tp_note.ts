type TpNoteForm = {
    selectListeInfos : HTMLSelectElement
    , btnAjouter : HTMLInputElement
    , btnRetirer : HTMLInputElement
    , btnValider: HTMLInputElement
    , btnAnnuler: HTMLInputElement
    , radioType1 : HTMLInputElement
    , radioType2 : HTMLInputElement
    , radioType3: HTMLInputElement
    , edtTitreAlbum : HTMLInputElement
    , edtTitreInterprete : HTMLInputElement
    , numberPlage: HTMLInputElement
    , chkMiniAlbum: HTMLInputElement
    , divPartieAffichage: HTMLElement
    , divPartieAjout: HTMLElement
}

class VueTpNote {
    private _form: TpNoteForm
    init(form : TpNoteForm) : void {
        this._form = form
        this.form.divPartieAjout.hidden = true;
    }

    get form() : TpNoteForm { return this._form }

    afficherAjout(): void {
        this.form.divPartieAjout.hidden = false
        this.form.edtTitreAlbum.focus()
    }

    anulerAjout(): void {
        this.form.divPartieAjout.hidden = true
    }
}

let vueTpNoteClass = new VueTpNote
export {vueTpNoteClass}

console.log("helloworld")