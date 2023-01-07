import {vueTpNoteClass} from "./class_tp_note"

vueTpNoteClass.init({
    selectListeInfos: document.querySelector("[id=select_listeInfos]"),
    btnAjouter: document.querySelector("[id=btn_ajouter]"),
    btnRetirer: document.querySelector("[id=btn_retirer]"),
    btnValider: document.querySelector("[id=btn_valider]"),
    btnAnnuler: document.querySelector("[id=btn_annuler]"),
    radioType1: document.querySelector("[id=radio_soliste]"),
    radioType2: document.querySelector("[id=radio_groupe]"),
    radioType3: document.querySelector("[id=radio_autre]"),
    edtTitreAlbum: document.querySelector("[id=edt_titreAlbum"),
    edtTitreInterprete: document.querySelector("[id=edt_interpreteAlbum]"),
    numberPlage: document.querySelector("[id=num_plages]"),
    chkMiniAlbum: document.querySelector("[id=chk_miniAlbum]"),
    divPartieAffichage: document.querySelector("[id=div_listeAlbums]"),
    divPartieAjout: document.querySelector("[id=ajout_album]"),
    divMiniAlbum: document.querySelector("[id=div_miniAlbum]"),
    divNuméroPlages: document.querySelector("[id=div_numéroAlbum]")
})

vueTpNoteClass.form.btnAjouter.addEventListener("click", function() {vueTpNoteClass.afficherAjout()})
vueTpNoteClass.form.btnRetirer.addEventListener("click", function() {vueTpNoteClass.retirerSaisie()})
vueTpNoteClass.form.btnAnnuler.addEventListener("click", function() {vueTpNoteClass.anulerAjout()})
vueTpNoteClass.form.btnValider.addEventListener("click", function() {vueTpNoteClass.verifieurSaisie()})
vueTpNoteClass.form.numberPlage.addEventListener("change", function() {vueTpNoteClass.cacherChkPlages(), vueTpNoteClass.afficherChkPlages()})