// fuck js dog shit lang
document.addEventListener("DOMContentLoaded", function () {
    let VisibleMMR = document.getElementById("visiblemmr");
    let RPGain = document.getElementById("rpgain");
    let Reputation = document.getElementById("reputation");

    VisibleMMR.value = localStorage.getItem("MMR") || "";
    RPGain.value = localStorage.getItem("RP") || "";
    Reputation.value = localStorage.getItem("Rep") || "";

    if (VisibleMMR.value && RPGain.value && Reputation.value) {
        Calculate();
    }
});

function Calculate() {
    let VisibleMMR = parseInt(document.getElementById("visiblemmr").value) || 0;
    let RPGain = parseInt(document.getElementById("rpgain").value) || 0;
    let Reputation = document.getElementById("reputation").value.trim().toLowerCase();

    let ExtraRP = { "exemplary": 3, "esteemed": 2, "respectable": 1 }[Reputation] || 0;

    let HiddenMMR = Math.round(VisibleMMR + (RPGain - 20 - ExtraRP) * 12);
    document.getElementById("hiddenmmr").textContent = HiddenMMR;

    let Rank = GetRank(HiddenMMR);
    let RankElement = document.getElementById("estimatedrank");
    RankElement.textContent = Rank.value;
    RankElement.className = "rank-text " + Rank.class;

    let ProgressBar = document.getElementById("progressbar");
    ProgressBar.style.width = `${Math.min((HiddenMMR - 1000) / 3500 * 100, 100)}%`;
    ProgressBar.style.backgroundColor = Rank.color;

    localStorage.setItem("MMR", VisibleMMR);
    localStorage.setItem("RP", RPGain);
    localStorage.setItem("Rep", Reputation);
}

function GetRank(mmr) {
    const ranks = [
        { threshold: 4500, value: "Champion", class: "champion", color: "#ff0066" },
        { threshold: 4400, value: "Diamond 1", class: "diamond", color: "#7C3E8C" },
        { threshold: 4300, value: "Diamond 2", class: "diamond", color: "#7C3E8C" },
        { threshold: 4200, value: "Diamond 3", class: "diamond", color: "#7C3E8C" },
        { threshold: 4100, value: "Diamond 4", class: "diamond", color: "#7C3E8C" },
        { threshold: 4000, value: "Diamond 5", class: "diamond", color: "#7C3E8C" },
        { threshold: 3900, value: "Emerald 1", class: "emerald", color: "#00ff88" },
        { threshold: 3800, value: "Emerald 2", class: "emerald", color: "#00ff88" },
        { threshold: 3700, value: "Emerald 3", class: "emerald", color: "#00ff88" },
        { threshold: 3600, value: "Emerald 4", class: "emerald", color: "#00ff88" },
        { threshold: 3500, value: "Emerald 5", class: "emerald", color: "#00ff88" },
        { threshold: 3400, value: "Platinum 1", class: "platinum", color: "#66ccff" },
        { threshold: 3300, value: "Platinum 2", class: "platinum", color: "#66ccff" },
        { threshold: 3200, value: "Platinum 3", class: "platinum", color: "#66ccff" },
        { threshold: 3100, value: "Platinum 4", class: "platinum", color: "#66ccff" },
        { threshold: 3000, value: "Platinum 5", class: "platinum", color: "#66ccff" },
        { threshold: 2900, value: "Gold 1", class: "gold", color: "#ffcc00" },
        { threshold: 2800, value: "Gold 2", class: "gold", color: "#ffcc00" },
        { threshold: 2700, value: "Gold 3", class: "gold", color: "#ffcc00" },
        { threshold: 2600, value: "Gold 4", class: "gold", color: "#ffcc00" },
        { threshold: 2500, value: "Gold 5", class: "gold", color: "#ffcc00" },
        { threshold: 2400, value: "Silver 1", class: "silver", color: "#c0c0c0" },
        { threshold: 2300, value: "Silver 2", class: "silver", color: "#c0c0c0" },
        { threshold: 2200, value: "Silver 3", class: "silver", color: "#c0c0c0" },
        { threshold: 2100, value: "Silver 4", class: "silver", color: "#c0c0c0" },
        { threshold: 2000, value: "Silver 5", class: "silver", color: "#c0c0c0" },
        { threshold: 1900, value: "Bronze 1", class: "bronze", color: "#cd7f32" },
        { threshold: 1800, value: "Bronze 2", class: "bronze", color: "#cd7f32" },
        { threshold: 1700, value: "Bronze 3", class: "bronze", color: "#cd7f32" },
        { threshold: 1600, value: "Bronze 4", class: "bronze", color: "#cd7f32" },
        { threshold: 1500, value: "Bronze 5", class: "bronze", color: "#cd7f32" },
        { threshold: 1400, value: "Copper 1", class: "copper", color: "#8b4513" },
        { threshold: 1300, value: "Copper 2", class: "copper", color: "#8b4513" },
        { threshold: 1200, value: "Copper 3", class: "copper", color: "#8b4513" },
        { threshold: 1100, value: "Copper 4", class: "copper", color: "#8b4513" },
        { threshold: 1000, value: "Copper 5", class: "copper", color: "#8b4513" }
    ];

    for (let rank of ranks) {
        if (mmr >= rank.threshold) return rank;
    }
    
    return { value: "Unranked", class: "", color: "#aaa" };
}