// fuck js dog shit lang
document.addEventListener("DOMContentLoaded", function () {
    let visiblemmr = document.getElementById("visibleMMR");
    let rpgain = document.getElementById("rpGain");

    if (localStorage.getItem("MMR")) {
        visiblemmr.value = localStorage.getItem("MMR");
    }
    if (localStorage.getItem("RP")) {
        rpgain.value = localStorage.getItem("RP");
    }

    if (visiblemmr.value != "" && rpgain.value != "") {
        calculateHiddenMMR();
    }
});


function calculateHiddenMMR() {
    let visibleMMR = parseInt(document.getElementById("visibleMMR").value);
    let rpGain = parseInt(document.getElementById("rpGain").value);

    let baseRP = 25;
    let scalingFactor = 15;

    let hiddenMMR = Math.round(visibleMMR + (rpGain - baseRP) * scalingFactor);
    
    let rankData = getRank(hiddenMMR);

    document.getElementById("hiddenMMR").textContent = hiddenMMR;
    let rankElement = document.getElementById("estimatedRank");
    rankElement.textContent = rankData.rank;
    rankElement.className = "rank-text " + rankData.class;

    let progressBar = document.getElementById("progressBar");
    let progress = (hiddenMMR - 1000) / 3500 * 100;
    progressBar.style.width = `${Math.min(progress, 100)}%`;

    progressBar.style.backgroundColor = rankData.color;

    localStorage.setItem("MMR", visibleMMR);
    localStorage.setItem("RP", rpGain);
}

function getRank(mmr) {
    if (mmr >= 4500) return { rank: "Champion", class: "champion", color: "#ff0066" };
    if (mmr >= 4400) return { rank: "Diamond 1", class: "diamond", color: "#7C3E8C" };
    if (mmr >= 4300) return { rank: "Diamond 2", class: "diamond", color: "#7C3E8C" };
    if (mmr >= 4200) return { rank: "Diamond 3", class: "diamond", color: "#7C3E8C" };
    if (mmr >= 4100) return { rank: "Diamond 4", class: "diamond", color: "#7C3E8C" };
    if (mmr >= 4000) return { rank: "Diamond 5", class: "diamond", color: "#7C3E8C" };
    if (mmr >= 3900) return { rank: "Emerald 1", class: "emerald", color: "#00ff88" };
    if (mmr >= 3800) return { rank: "Emerald 2", class: "emerald", color: "#00ff88" };
    if (mmr >= 3700) return { rank: "Emerald 3", class: "emerald", color: "#00ff88" };
    if (mmr >= 3600) return { rank: "Emerald 4", class: "emerald", color: "#00ff88" };
    if (mmr >= 3500) return { rank: "Emerald 5", class: "emerald", color: "#00ff88" };
    if (mmr >= 3400) return { rank: "Platinum 1", class: "platinum", color: "#66ccff" };
    if (mmr >= 3300) return { rank: "Platinum 2", class: "platinum", color: "#66ccff" };
    if (mmr >= 3200) return { rank: "Platinum 3", class: "platinum", color: "#66ccff" };
    if (mmr >= 3100) return { rank: "Platinum 4", class: "platinum", color: "#66ccff" };
    if (mmr >= 3000) return { rank: "Platinum 5", class: "platinum", color: "#66ccff" };
    if (mmr >= 2900) return { rank: "Gold 1", class: "gold", color: "#ffcc00" };
    if (mmr >= 2800) return { rank: "Gold 2", class: "gold", color: "#ffcc00" };
    if (mmr >= 2700) return { rank: "Gold 3", class: "gold", color: "#ffcc00" };
    if (mmr >= 2600) return { rank: "Gold 4", class: "gold", color: "#ffcc00" };
    if (mmr >= 2500) return { rank: "Gold 5", class: "gold", color: "#ffcc00" };
    if (mmr >= 2400) return { rank: "Silver 1", class: "silver", color: "#c0c0c0" };
    if (mmr >= 2300) return { rank: "Silver 2", class: "silver", color: "#c0c0c0" };
    if (mmr >= 2200) return { rank: "Silver 3", class: "silver", color: "#c0c0c0" };
    if (mmr >= 2100) return { rank: "Silver 4", class: "silver", color: "#c0c0c0" };
    if (mmr >= 2000) return { rank: "Silver 5", class: "silver", color: "#c0c0c0" };
    if (mmr >= 1900) return { rank: "Bronze 1", class: "bronze", color: "#cd7f32" };
    if (mmr >= 1800) return { rank: "Bronze 2", class: "bronze", color: "#cd7f32" };
    if (mmr >= 1700) return { rank: "Bronze 3", class: "bronze", color: "#cd7f32" };
    if (mmr >= 1600) return { rank: "Bronze 4", class: "bronze", color: "#cd7f32" };
    if (mmr >= 1500) return { rank: "Bronze 5", class: "bronze", color: "#cd7f32" };
    if (mmr >= 1400) return { rank: "Copper 1", class: "copper", color: "#8b4513" };
    if (mmr >= 1300) return { rank: "Copper 2", class: "copper", color: "#8b4513" };
    if (mmr >= 1200) return { rank: "Copper 3", class: "copper", color: "#8b4513" };
    if (mmr >= 1100) return { rank: "Copper 4", class: "copper", color: "#8b4513" };
    if (mmr >= 1000) return { rank: "Copper 5", class: "copper", color: "#8b4513" };
    return { rank: "Unranked", class: "", color: "#aaa" };
}
