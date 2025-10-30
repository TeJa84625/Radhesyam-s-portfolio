fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const home = data.home;

        document.getElementById('mobile-no').href = "tel:+91" + home.contact;
        document.getElementById('mobile-no').textContent = "(+91) " + home.contact;

        document.getElementById('professional-mail-id').href = "mailto:" + home.professional_mailid;
        document.getElementById('professional-mail-id').textContent = home.professional_mailid;

        document.getElementById('personal-mail-id').href = "mailto:" + home.personal_mailid;
        document.getElementById('personal-mail-id').textContent = home.personal_mailid;
    })
    .catch(error => console.error("Error loading the JSON file:", error));