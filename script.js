let totalRounds = 0;
let specialStageCount = 0;

document.getElementById('round-button').addEventListener('click', function() {
    totalRounds++;
    document.getElementById('rounds').innerText = totalRounds;
});

document.getElementById('special-button').addEventListener('click', function() {
    specialStageCount++;
    document.getElementById('special-stages').innerText = specialStageCount;
    updateProbability();
});

function updateProbability() {
    if (totalRounds > 0) {
        const estimatedProbability = (specialStageCount / totalRounds) * 100;
        document.getElementById('ai-result').innerText = `推定確率: ${estimatedProbability.toFixed(2)}%`;
    }
}
