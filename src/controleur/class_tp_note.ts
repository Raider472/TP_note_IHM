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
    , divMiniAlbum: HTMLElement
    , pNuméroPlages: HTMLElement
}

class VueTpNote {
    private _form: TpNoteForm
    init(form : TpNoteForm) : void {
        this._form = form
        this.form.divPartieAjout.hidden = true
    }

    get form() : TpNoteForm { return this._form }

    afficherAjout(): void {
        this.form.divPartieAjout.hidden = false
        this.form.divPartieAffichage.ariaDisabled 
        this.form.edtTitreAlbum.focus()
    }

    cacherChkPlages(): void {
        let valeurNumbString = this.form.numberPlage.value
        let valeurNumber = parseInt(valeurNumbString, 10)
        if (valeurNumber > 5) {
            this.form.divMiniAlbum.hidden = true
            this.form.chkMiniAlbum.checked = false
        }
    }

    afficherChkPlages(): void {
        let valeurNumbString = this.form.numberPlage.value
        let valeurNumber = parseInt(valeurNumbString, 10)
        if (valeurNumber <= 5) {
            this.form.divMiniAlbum.hidden = false
        }
    }

    anulerAjout(): void {
        this.form.divPartieAjout.hidden = true
        this.viderAjout()
    }

    viderAjout(): void {
        this.form.edtTitreAlbum.value = ""
        this.form.edtTitreInterprete.value = ""
        this.form.numberPlage.value = ""
        if (this.form.radioType1.checked) {
            this.form.radioType1.checked = false
        }
        else if (this.form.radioType2.checked) {
            this.form.radioType2.checked = false
        }
        else if (this.form.radioType3.checked) {
            this.form.radioType3.checked = false
        }
        if (this.form.chkMiniAlbum.checked) {
            this.form.chkMiniAlbum.checked = false
        }
    }

    verifieurSaisie(): void {
        let nombre = parseInt(this.form.numberPlage.value, 10)
        if (this.form.edtTitreAlbum.value === "" || this.form.edtTitreInterprete.value === "" ) {
            if (this.form.edtTitreAlbum.value === "") {
                this.form.edtTitreAlbum.focus()
            }
            else {
                this.form.edtTitreInterprete.focus()
            }
            return this.messageErreur()
        }
        if (this.form.radioType1.checked === false && this.form.radioType2.checked === false && this.form.radioType3.checked === false) {
            return this.messageErreur()
        }
        if (isNaN(nombre)) {
            this.form.numberPlage.focus()
            return this.messageErreur()
        }
        if (confirm("Voulez-vous ajouter la saisi dans la liste ?") === true) { //TODO Changer avec son API ?
            return this.ajouterSaisie()
        }
    }

    messageErreur(): void {
        alert("Erreur - élément manquant \n Veuillez saisir les éléments requis pour toutes les cases nécessaires." ) //TODO Changer avec son API ?
    }

    ajouterSaisie(): void {
        let texte = ""
        texte += this.form.edtTitreAlbum.value.trim() + " - "
        texte += this.form.edtTitreInterprete.value.trim() +" - "
        if (this.form.radioType1.checked) {
            texte += "Soliste" + " - "
        }
        else if (this.form.radioType2.checked) {
            texte += "Groupe" + " - "
        }
        else if (this.form.radioType3.checked) {
            texte += "Autre" + " - "
        }
        if (this.form.chkMiniAlbum.checked) {
            texte += "mini "
        }
        if (this.form.numberPlage.value == "1") {
            texte += this.form.numberPlage.value.trim() + " plage"
        }
        else {
            texte += this.form.numberPlage.value.trim() + " plages"
        }
        let opt = new Option(texte, texte)
        this.form.selectListeInfos.add(opt)
        this.viderAjout()
        this.form.divPartieAjout.hidden = true
    }

    retirerSaisie(): void {
        if (this.form.selectListeInfos.selectedIndex >= 0) {
            this.form.selectListeInfos.remove(this.form.selectListeInfos.selectedIndex)
        }
        else {
            alert("Erreur - élément invalide \n Veuillez sélectionner une plage sur la liste") //TODO Changer avec son API ?
        }
    }
}

let vueTpNoteClass = new VueTpNote
export {vueTpNoteClass}