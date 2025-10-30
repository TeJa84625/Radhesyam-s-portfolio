fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const home = data.home;

        document.getElementById('mobile-no').href = "tel:+91" + home.contact;
        document.getElementById('mobile-no').innerHTML  = '<i class="fas fa-phone-alt mr-2"></i>' + "(+91) " + home.contact;

        document.getElementById('professional-mail-id').href = "mailto:" + home.professional_mailid;
        document.getElementById('professional-mail-id').innerHTML = '<i class="fas fa-envelope mr-2"></i>' + home.professional_mailid;

        document.getElementById('personal-mail-id').href = "mailto:" + home.personal_mailid;
        document.getElementById('personal-mail-id').innerHTML = '<i class="fas fa-envelope mr-2"></i>' + home.personal_mailid;
    })
    .catch(error => console.error("Error loading the JSON file:", error));