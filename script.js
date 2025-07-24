
function submitUserInput() {
    const formData = new FormData(document.getElementById('userInputForm'));
    const careerGoals = formData.get('careerGoals');
    const industry = formData.get('industry');
    const experience = formData.get('experience');

    fetch('/functions/api/handler.ts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            careerGoals,
            industry,
            experience
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        renderTemplateOptions(data.templates);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function renderTemplateOptions(templates) {
    const templateSelection = document.getElementById('templateSelection');
    templateSelection.innerHTML = '';
    templates.forEach(template => {
        const templateDiv = document.createElement('div');
        templateDiv.className = 'border p-4 rounded';
        templateDiv.innerHTML = `
            <h3 class="text-teal-800 font-semibold">${template.name}</h3>
            <p>${template.description}</p>
            <button class="mt-2 bg-gold-500 text-white px-4 py-2 rounded hover:bg-gold-400" onclick="selectTemplate('${template.id}')">Select</button>
        `;
        templateSelection.appendChild(templateDiv);
    });
}

function selectTemplate(templateId) {
    console.log('Template selected:', templateId);
    // Further actions to process the template selection
}
