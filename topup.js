

    function updateAmountDisplay() {
        const sipAmount = parseFloat(document.getElementById('sip-amount').value);
        document.getElementById('amount-display').textContent = `₹${sipAmount.toLocaleString('en-IN')}`;
    }

    function updatePercentageLabel() {
        const percentage = parseFloat(document.getElementById('increment-percentage').value);
        document.getElementById('percentage-min').textContent = `${percentage}%`;
    }

    function updateRateOfReturnLabel() {
        const rate = parseFloat(document.getElementById('rate-of-return').value);
        document.getElementById('rate-min').textContent = `${rate}%`;
    }

    function updatePeriodLabel() {
        const period = parseInt(document.getElementById('investment-period').value);
        document.getElementById('period-min').textContent = `${period} Years`;
    }

    function updateSliderBackground(sliderId) {
        const slider = document.getElementById(sliderId);
        const value = slider.value;
        const min = slider.min;
        const max = slider.max;
        const percentage = ((value - min) / (max - min)) * 100;
        slider.style.background = `linear-gradient(to right, red ${percentage}%, white ${percentage}%)`;
    }

    function calculateSIP() {
        const initialSIPAmount = parseFloat(document.getElementById('sip-amount').value);
        const annualIncrementPercentage = parseFloat(document.getElementById('increment-percentage').value);
        const annualIncrementAmount = parseFloat(document.getElementById('increment-amount').value);
        const rateOfReturn = parseFloat(document.getElementById('rate-of-return').value) / 100;
        const investmentPeriod = parseInt(document.getElementById('investment-period').value);

        let totalInvestment = 0;
        let futureValue = 0;

        if (document.getElementById('percentage').classList.contains('active')) {
            totalInvestment = initialSIPAmount * (investmentPeriod * 12);
            futureValue = calculateFutureValueWithPercentageIncrement(initialSIPAmount, annualIncrementPercentage, rateOfReturn, investmentPeriod);
        } else {
            totalInvestment = initialSIPAmount * (investmentPeriod * 12) + (annualIncrementAmount * (investmentPeriod - 1) * investmentPeriod * 12) / 2;
            futureValue = calculateFutureValueWithAmountIncrement(initialSIPAmount, annualIncrementAmount, rateOfReturn, investmentPeriod);
        }

        document.getElementById('total-investment').textContent = `Total Investment: ₹${totalInvestment.toLocaleString('en-IN')}`;
        document.getElementById('sip-value').textContent = `SIP Value: ₹${futureValue.toLocaleString('en-IN')}`;
    }

    function calculateFutureValueWithPercentageIncrement(initialSIP, incrementPercentage, rateOfReturn, years) {
        let futureValue = 0;
        let monthlyInvestment = initialSIP;
        for (let i = 0; i < years * 12; i++) {
            futureValue = futureValue * (1 + rateOfReturn / 12) + monthlyInvestment;
            if ((i + 1) % 12 === 0) {
                monthlyInvestment += (monthlyInvestment * incrementPercentage) / 100;
            }
        }
        return futureValue;
    }

    function calculateFutureValueWithAmountIncrement(initialSIP, incrementAmount, rateOfReturn, years) {
        let futureValue = 0;
        let monthlyInvestment = initialSIP;
        for (let i = 0; i < years * 12; i++) {
            futureValue = futureValue * (1 + rateOfReturn / 12) + monthlyInvestment;
            if ((i + 1) % 12 === 0) {
                monthlyInvestment += incrementAmount;
            }
        }
        return futureValue;
    }

    function setFrequency(frequency) {
        document.getElementById('monthly').classList.toggle('active', frequency === 'monthly');
        document.getElementById('quarterly').classList.toggle('active', frequency === 'quarterly');
    }

    function setIncrementType(type) {
        document.getElementById('percentage').classList.toggle('active', type === 'percentage');
        document.getElementById('amount').classList.toggle('active', type === 'amount');

        document.getElementById('increment-percentage').style.display = type === 'percentage' ? 'block' : 'none';
        document.getElementById('increment-amount').style.display = type === 'amount' ? 'block' : 'none';
        document.getElementById('amount-range-label').style.display = type === 'amount' ? 'flex' : 'none';
    }

    // Initialize slider backgrounds
    updateSliderBackground('increment-percentage');
    updateSliderBackground('increment-amount');
    updateSliderBackground('rate-of-return');
    updateSliderBackground('investment-period');

