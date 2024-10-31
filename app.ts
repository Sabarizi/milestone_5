// app.js (TypeScript code converted to JavaScript after transpiling)
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const container = document.querySelector('.container') as HTMLElement;
    const resumePage = document.getElementById('resumePage') as HTMLElement;
    container.classList.add('hidden');
    resumePage.classList.remove('hidden');

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const file = (document.getElementById('photo') as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoElement = document.getElementById('resumePhoto') as HTMLImageElement;
            if (e.target) {
                photoElement.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(file);
    }

    (document.getElementById('resumeName') as HTMLElement).textContent = name;
    (document.getElementById('resumeEmail') as HTMLElement).textContent = email;
    (document.getElementById('resumePhone') as HTMLElement).textContent = phone;
    (document.getElementById('resumeDegree') as HTMLElement).textContent = degree;
    (document.getElementById('resumeEducation') as HTMLElement).textContent = education;
    (document.getElementById('resumeWorkExperience') as HTMLElement).textContent = workExperience;
    (document.getElementById('resumeSkills') as HTMLElement).textContent = skills;
});

document.getElementById('backButton')?.addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.getElementById('downloadButton')?.addEventListener('click', () => {
    const resumeContent = document.getElementById('resumeContent') as HTMLElement;

    // Options for PDF generation
    const options = {
        margin:       0.5,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Ensure html2pdf is available and called correctly
    (window as any).html2pdf().from(resumeContent).set(options).save();
});
