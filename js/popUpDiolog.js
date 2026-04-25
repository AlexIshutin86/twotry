
// ========== POPUP DIALOG ==========
const enrolButton = document.querySelector('#buttonOpinion1');
const enrolDialog = document.querySelector('#enrolOpinionDialog1');
const closeModel = enrolDialog ? enrolDialog.querySelector('#closeDialog1') : null;

if (enrolButton && enrolDialog && closeModel) {
    enrolButton.addEventListener('click', () => {
        enrolDialog.showModal();
    });

    closeModel.addEventListener('click', () => {
        enrolDialog.close();
    });
}