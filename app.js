var _a, _b, _c;
// app.js (TypeScript code converted to JavaScript after transpiling)
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var container = document.querySelector('.container');
    var resumePage = document.getElementById('resumePage');
    container.classList.add('hidden');
    resumePage.classList.remove('hidden');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value;
    var file = (_a = document.getElementById('photo').files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var photoElement = document.getElementById('resumePhoto');
            if (e.target) {
                photoElement.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
    document.getElementById('resumeName').textContent = name;
    document.getElementById('resumeEmail').textContent = email;
    document.getElementById('resumePhone').textContent = phone;
    document.getElementById('resumeDegree').textContent = degree;
    document.getElementById('resumeEducation').textContent = education;
    document.getElementById('resumeWorkExperience').textContent = workExperience;
    document.getElementById('resumeSkills').textContent = skills;
});
(_b = document.getElementById('backButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    window.location.href = 'index.html';
});
(_c = document.getElementById('downloadButton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var resumeContent = document.getElementById('resumeContent');
    // Options for PDF generation
    var options = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // Ensure html2pdf is available and called correctly
    window.html2pdf().from(resumeContent).set(options).save();
});
