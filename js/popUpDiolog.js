
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


// ========== POPUP DIALOG ==========
// Handle all opinion buttons and their corresponding dialogs
for (let i = 1; i <= 5; i++) {
    const enrolButton = document.querySelector(`#buttonOpinion${i}`);
    const enrolDialog = document.querySelector(`#enrolOpinionDialog${i}`);
    const closeModel = enrolDialog ? enrolDialog.querySelector(`#closeDialog${i}`) : null;

    if (enrolButton && enrolDialog && closeModel) {
        enrolButton.addEventListener('click', () => {
            enrolDialog.showModal();
        });

        closeModel.addEventListener('click', () => {
            enrolDialog.close();
        });
    }
}