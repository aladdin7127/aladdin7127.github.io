// fuck js dog shit lang
document.addEventListener("DOMContentLoaded", function () {
    let VisibleMMR = document.getElementById("visiblemmr");
    let RPGain = document.getElementById("rpgain");

    if (localStorage.getItem("MMR")) {
        VisibleMMR.value = localStorage.getItem("MMR");
    }
    if (localStorage.getItem("RP")) {
        RPGain.value = localStorage.getItem("RP");
    }

    if (VisibleMMR.value != "" && RPGain.value != "") {
        Calculate();
    }
});

function Calculate() {
    let VisibleMMR = parseInt(document.getElementById("visiblemmr").value);
    let RPGain = parseInt(document.getElementById("rpgain").value);

    let HiddenMMR = Math.round(VisibleMMR + (RPGain - 25) * 15);
    document.getElementById("hiddenmmr").textContent = HiddenMMR;
    
    let Rank = getRank(HiddenMMR);
    let RankElement = document.getElementById("estimatedrank");
    RankElement.textContent = Rank.value;
    RankElement.className = "rank-text " + Rank.class;
    
    let ProgressBar = document.getElementById("progressbar");
    ProgressBar.style.width = `${Math.min((HiddenMMR - 1000) / 3500 * 100, 1000)}%`;
    ProgressBar.style.backgroundColor = Rank.color;

    localStorage.setItem("MMR", VisibleMMR);
    localStorage.setItem("RP", RPGain);
}

function getRank(mmr) {
    if (mmr >= 4500) return { value: "Champion", class: "champion", color: "#ff0066" };
    if (mmr >= 4400) return { value: "Diamond 1", class: "diamond", color: "#7C3E8C" };
    if (mmr >= 4300) return { value: "Diamond 2", class: "diamond", color: "#7C3E8C" };
    if (mmr >= 4200) return { value: "Diamond 3", class: "diamond", color: "#7C3E8C" };
    if (mmr >= 4100) return { value: "Diamond 4", class: "diamond", color: "#7C3E8C" };
    if (mmr >= 4000) return { value: "Diamond 5", class: "diamond", color: "#7C3E8C" };
    if (mmr >= 3900) return { value: "Emerald 1", class: "emerald", color: "#00ff88" };
    if (mmr >= 3800) return { value: "Emerald 2", class: "emerald", color: "#00ff88" };
    if (mmr >= 3700) return { value: "Emerald 3", class: "emerald", color: "#00ff88" };
    if (mmr >= 3600) return { value: "Emerald 4", class: "emerald", color: "#00ff88" };
    if (mmr >= 3500) return { value: "Emerald 5", class: "emerald", color: "#00ff88" };
    if (mmr >= 3400) return { value: "Platinum 1", class: "platinum", color: "#66ccff" };
    if (mmr >= 3300) return { value: "Platinum 2", class: "platinum", color: "#66ccff" };
    if (mmr >= 3200) return { value: "Platinum 3", class: "platinum", color: "#66ccff" };
    if (mmr >= 3100) return { value: "Platinum 4", class: "platinum", color: "#66ccff" };
    if (mmr >= 3000) return { value: "Platinum 5", class: "platinum", color: "#66ccff" };
    if (mmr >= 2900) return { value: "Gold 1", class: "gold", color: "#ffcc00" };
    if (mmr >= 2800) return { value: "Gold 2", class: "gold", color: "#ffcc00" };
    if (mmr >= 2700) return { value: "Gold 3", class: "gold", color: "#ffcc00" };
    if (mmr >= 2600) return { value: "Gold 4", class: "gold", color: "#ffcc00" };
    if (mmr >= 2500) return { value: "Gold 5", class: "gold", color: "#ffcc00" };
    if (mmr >= 2400) return { value: "Silver 1", class: "silver", color: "#c0c0c0" };
    if (mmr >= 2300) return { value: "Silver 2", class: "silver", color: "#c0c0c0" };
    if (mmr >= 2200) return { value: "Silver 3", class: "silver", color: "#c0c0c0" };
    if (mmr >= 2100) return { value: "Silver 4", class: "silver", color: "#c0c0c0" };
    if (mmr >= 2000) return { value: "Silver 5", class: "silver", color: "#c0c0c0" };
    if (mmr >= 1900) return { value: "Bronze 1", class: "bronze", color: "#cd7f32" };
    if (mmr >= 1800) return { value: "Bronze 2", class: "bronze", color: "#cd7f32" };
    if (mmr >= 1700) return { value: "Bronze 3", class: "bronze", color: "#cd7f32" };
    if (mmr >= 1600) return { value: "Bronze 4", class: "bronze", color: "#cd7f32" };
    if (mmr >= 1500) return { value: "Bronze 5", class: "bronze", color: "#cd7f32" };
    if (mmr >= 1400) return { value: "Copper 1", class: "copper", color: "#8b4513" };
    if (mmr >= 1300) return { value: "Copper 2", class: "copper", color: "#8b4513" };
    if (mmr >= 1200) return { value: "Copper 3", class: "copper", color: "#8b4513" };
    if (mmr >= 1100) return { value: "Copper 4", class: "copper", color: "#8b4513" };
    if (mmr >= 1000) return { value: "Copper 5", class: "copper", color: "#8b4513" };
    return { value: "Unranked", class: "", color: "#aaa" };
}
