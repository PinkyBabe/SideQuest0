
    function expandPostArea() {
        document.getElementById('expanded_post').classList.remove('hidden');
        document.getElementById('post_textarea').classList.add('hidden');
        document.getElementById('post_button').classList.add('hidden');
    }

    function collapsePostArea() {
        document.getElementById('expanded_post').classList.add('hidden');
        document.getElementById('post_textarea').classList.remove('hidden');
        document.getElementById('post_button').classList.remove('hidden');
    }

    function toggleSpecifyField() {
        const jobDescription = document.getElementById('job_description');
        const specifyField = document.getElementById('specify_job');
        if (jobDescription.value === 'Others') {
            specifyField.classList.remove('hidden');
        } else {
            specifyField.classList.add('hidden');
        }
    }

    function toggleCashField() {
        const cashCheckbox = document.getElementById('reward_cash');
        const cashField = document.getElementById('cash_amount');
        if (cashCheckbox.checked) {
            cashField.classList.remove('hidden');
        } else {
            cashField.classList.add('hidden');
        }
    }

    function submitPost() {
        const jobDescription = document.getElementById('job_description').value;
        const specifyJob = document.getElementById('specify_job').value;
        const rewardCash = document.getElementById('reward_cash').checked;
        const cashAmount = document.getElementById('cash_amount').value;
        const rewardSnack = document.getElementById('reward_snack').checked;

        if (!jobDescription && !specifyJob) {
            alert('Please specify the job!');
            return;
        }

        if (rewardCash && !cashAmount) {
            alert('Please specify the cash amount!');
            return;
        }

        alert('Post submitted successfully!');
        collapsePostArea();
    }
