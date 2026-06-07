// ─── Embedded PSL 2025 Dataset ───────────────────────────────────────────────
const RAW_DATA = [
  { Match_ID:"PSL2025_01", Match_No:"1",         Date:"11-Apr-25", Team_1:"Lahore Qalandars",  Team_2:"Islamabad United",  Venue:"Rawalpindi", Toss_Winner:"Islamabad United",  Toss_Decision:"Field", Winning_Team:"Islamabad United",  Won_By:"Wickets", Margin:8,   Target:140, POTM:"Jason Holder",      Notes:"Muhammad Naeem (LQ) made T20 debut" },
  { Match_ID:"PSL2025_02", Match_No:"2",         Date:"12-Apr-25", Team_1:"Quetta Gladiators", Team_2:"Peshawar Zalmi",    Venue:"Rawalpindi", Toss_Winner:"Peshawar Zalmi",    Toss_Decision:"Field", Winning_Team:"Quetta Gladiators", Won_By:"Runs",    Margin:80,  Target:null, POTM:"Abrar Ahmed",       Notes:"" },
  { Match_ID:"PSL2025_03", Match_No:"3",         Date:"12-Apr-25", Team_1:"Multan Sultans",    Team_2:"Karachi Kings",     Venue:"Karachi",    Toss_Winner:"Karachi Kings",     Toss_Decision:"Field", Winning_Team:"Karachi Kings",     Won_By:"Wickets", Margin:4,   Target:235, POTM:"James Vince",       Notes:"Fawad Ali (KK) made T20 debut" },
  { Match_ID:"PSL2025_04", Match_No:"4",         Date:"13-Apr-25", Team_1:"Lahore Qalandars",  Team_2:"Quetta Gladiators", Venue:"Rawalpindi", Toss_Winner:"Quetta Gladiators", Toss_Decision:"Field", Winning_Team:"Lahore Qalandars",  Won_By:"Runs",    Margin:79,  Target:null, POTM:"Fakhar Zaman",      Notes:"" },
  { Match_ID:"PSL2025_05", Match_No:"5",         Date:"14-Apr-25", Team_1:"Islamabad United",  Team_2:"Peshawar Zalmi",    Venue:"Rawalpindi", Toss_Winner:"Islamabad United",  Toss_Decision:"Bat",   Winning_Team:"Islamabad United",  Won_By:"Runs",    Margin:102, Target:null, POTM:"Sahibzada Farhan",  Notes:"" },
  { Match_ID:"PSL2025_06", Match_No:"6",         Date:"15-Apr-25", Team_1:"Lahore Qalandars",  Team_2:"Karachi Kings",     Venue:"Karachi",    Toss_Winner:"Lahore Qalandars",  Toss_Decision:"Bat",   Winning_Team:"Lahore Qalandars",  Won_By:"Runs",    Margin:65,  Target:null, POTM:"Fakhar Zaman",      Notes:"" },
  { Match_ID:"PSL2025_07", Match_No:"7",         Date:"16-Apr-25", Team_1:"Islamabad United",  Team_2:"Multan Sultans",    Venue:"Rawalpindi", Toss_Winner:"Multan Sultans",    Toss_Decision:"Field", Winning_Team:"Islamabad United",  Won_By:"Runs",    Margin:47,  Target:null, POTM:"Jason Holder",      Notes:"" },
  { Match_ID:"PSL2025_08", Match_No:"8",         Date:"18-Apr-25", Team_1:"Karachi Kings",     Team_2:"Quetta Gladiators", Venue:"Karachi",    Toss_Winner:"Karachi Kings",     Toss_Decision:"Bat",   Winning_Team:"Karachi Kings",     Won_By:"Runs",    Margin:56,  Target:null, POTM:"James Vince",       Notes:"" },
  { Match_ID:"PSL2025_09", Match_No:"9",         Date:"19-Apr-25", Team_1:"Peshawar Zalmi",    Team_2:"Multan Sultans",    Venue:"Rawalpindi", Toss_Winner:"Peshawar Zalmi",    Toss_Decision:"Bat",   Winning_Team:"Peshawar Zalmi",    Won_By:"Runs",    Margin:120, Target:null, POTM:"Abdul Samad",       Notes:"Largest victory in PSL history (runs)" },
  { Match_ID:"PSL2025_10", Match_No:"10",        Date:"20-Apr-25", Team_1:"Karachi Kings",     Team_2:"Islamabad United",  Venue:"Karachi",    Toss_Winner:"Islamabad United",  Toss_Decision:"Field", Winning_Team:"Islamabad United",  Won_By:"Wickets", Margin:6,   Target:129, POTM:"Shadab Khan",       Notes:"" },
  { Match_ID:"PSL2025_11", Match_No:"11",        Date:"21-Apr-25", Team_1:"Peshawar Zalmi",    Team_2:"Karachi Kings",     Venue:"Karachi",    Toss_Winner:"Karachi Kings",     Toss_Decision:"Field", Winning_Team:"Karachi Kings",     Won_By:"Wickets", Margin:2,   Target:148, POTM:"Khushdil Shah",     Notes:"" },
  { Match_ID:"PSL2025_12", Match_No:"12",        Date:"22-Apr-25", Team_1:"Multan Sultans",    Team_2:"Lahore Qalandars",  Venue:"Multan",     Toss_Winner:"Multan Sultans",    Toss_Decision:"Bat",   Winning_Team:"Multan Sultans",    Won_By:"Runs",    Margin:33,  Target:null, POTM:"Yasir Khan",        Notes:"" },
  { Match_ID:"PSL2025_13", Match_No:"13",        Date:"23-Apr-25", Team_1:"Multan Sultans",    Team_2:"Islamabad United",  Venue:"Multan",     Toss_Winner:"Multan Sultans",    Toss_Decision:"Bat",   Winning_Team:"Islamabad United",  Won_By:"Wickets", Margin:7,   Target:169, POTM:"Andries Gous",      Notes:"" },
  { Match_ID:"PSL2025_14", Match_No:"14",        Date:"24-Apr-25", Team_1:"Lahore Qalandars",  Team_2:"Peshawar Zalmi",    Venue:"Lahore",     Toss_Winner:"Peshawar Zalmi",    Toss_Decision:"Field", Winning_Team:"Peshawar Zalmi",    Won_By:"Wickets", Margin:7,   Target:130, POTM:"Alzarri Joseph",    Notes:"" },
  { Match_ID:"PSL2025_15", Match_No:"15",        Date:"25-Apr-25", Team_1:"Quetta Gladiators", Team_2:"Karachi Kings",     Venue:"Lahore",     Toss_Winner:"Karachi Kings",     Toss_Decision:"Field", Winning_Team:"Quetta Gladiators", Won_By:"Runs",    Margin:5,   Target:null, POTM:"Abrar Ahmed",       Notes:"" },
  { Match_ID:"PSL2025_16", Match_No:"16",        Date:"26-Apr-25", Team_1:"Multan Sultans",    Team_2:"Lahore Qalandars",  Venue:"Lahore",     Toss_Winner:"Lahore Qalandars",  Toss_Decision:"Field", Winning_Team:"Lahore Qalandars",  Won_By:"Wickets", Margin:5,   Target:186, POTM:"Daryl Mitchell",    Notes:"" },
  { Match_ID:"PSL2025_17", Match_No:"17",        Date:"27-Apr-25", Team_1:"Quetta Gladiators", Team_2:"Peshawar Zalmi",    Venue:"Lahore",     Toss_Winner:"Peshawar Zalmi",    Toss_Decision:"Field", Winning_Team:"Quetta Gladiators", Won_By:"Runs",    Margin:64,  Target:null, POTM:"Faheem Ashraf",     Notes:"" },
  { Match_ID:"PSL2025_18", Match_No:"18",        Date:"29-Apr-25", Team_1:"Multan Sultans",    Team_2:"Quetta Gladiators", Venue:"Lahore",     Toss_Winner:"Quetta Gladiators", Toss_Decision:"Field", Winning_Team:"Quetta Gladiators", Won_By:"Wickets", Margin:10,  Target:90,  POTM:"Khurram Shahzad",   Notes:"Mohammad Rizwan first to carry bat in PSL" },
  { Match_ID:"PSL2025_19", Match_No:"19",        Date:"30-Apr-25", Team_1:"Lahore Qalandars",  Team_2:"Islamabad United",  Venue:"Lahore",     Toss_Winner:"Islamabad United",  Toss_Decision:"Field", Winning_Team:"Lahore Qalandars",  Won_By:"Runs",    Margin:88,  Target:null, POTM:"Sikandar Raza",     Notes:"" },
  { Match_ID:"PSL2025_20", Match_No:"20",        Date:"01-May-25", Team_1:"Karachi Kings",     Team_2:"Multan Sultans",    Venue:"Lahore",     Toss_Winner:"Karachi Kings",     Toss_Decision:"Bat",   Winning_Team:"Karachi Kings",     Won_By:"Runs",    Margin:87,  Target:null, POTM:"James Vince",       Notes:"Match shifted from Multan to Lahore" },
  { Match_ID:"PSL2025_21", Match_No:"21",        Date:"01-May-25", Team_1:"Lahore Qalandars",  Team_2:"Quetta Gladiators", Venue:"Lahore",     Toss_Winner:"Quetta Gladiators", Toss_Decision:"Field", Winning_Team:"No Result",         Won_By:null,      Margin:null,Target:null, POTM:null,                Notes:"Match abandoned due to rain" },
  { Match_ID:"PSL2025_22", Match_No:"22",        Date:"02-May-25", Team_1:"Islamabad United",  Team_2:"Peshawar Zalmi",    Venue:"Lahore",     Toss_Winner:"Islamabad United",  Toss_Decision:"Bat",   Winning_Team:"Peshawar Zalmi",    Won_By:"Wickets", Margin:6,   Target:144, POTM:"Maaz Sadaqat",      Notes:"" },
  { Match_ID:"PSL2025_23", Match_No:"23",        Date:"03-May-25", Team_1:"Islamabad United",  Team_2:"Quetta Gladiators", Venue:"Lahore",     Toss_Winner:"Quetta Gladiators", Toss_Decision:"Field", Winning_Team:"Quetta Gladiators", Won_By:"Wickets", Margin:2,   Target:158, POTM:"Hassan Nawaz",      Notes:"Quetta qualified for playoffs" },
  { Match_ID:"PSL2025_24", Match_No:"24",        Date:"04-May-25", Team_1:"Lahore Qalandars",  Team_2:"Karachi Kings",     Venue:"Lahore",     Toss_Winner:"Karachi Kings",     Toss_Decision:"Field", Winning_Team:"Karachi Kings",     Won_By:"Wickets", Margin:4,   Target:169, POTM:"Irfan Khan Niazi",  Notes:"Match reduced to 15 overs per side (DLS)" },
  { Match_ID:"PSL2025_25", Match_No:"25",        Date:"05-May-25", Team_1:"Multan Sultans",    Team_2:"Peshawar Zalmi",    Venue:"Multan",     Toss_Winner:"Multan Sultans",    Toss_Decision:"Bat",   Winning_Team:"Peshawar Zalmi",    Won_By:"Wickets", Margin:7,   Target:109, POTM:"Ahmed Daniyal",     Notes:"" },
  { Match_ID:"PSL2025_26", Match_No:"26",        Date:"07-May-25", Team_1:"Quetta Gladiators", Team_2:"Islamabad United",  Venue:"Rawalpindi", Toss_Winner:"Islamabad United",  Toss_Decision:"Field", Winning_Team:"Quetta Gladiators", Won_By:"Runs",    Margin:109, Target:null, POTM:"Rilee Rossouw",     Notes:"Highest PSL total (263/3); First pair with centuries in same innings" },
  { Match_ID:"PSL2025_27", Match_No:"27",        Date:"17-May-25", Team_1:"Karachi Kings",     Team_2:"Peshawar Zalmi",    Venue:"Rawalpindi", Toss_Winner:"Peshawar Zalmi",    Toss_Decision:"Field", Winning_Team:"Karachi Kings",     Won_By:"Runs",    Margin:23,  Target:null, POTM:"David Warner",      Notes:"Karachi & Islamabad qualified for playoffs" },
  { Match_ID:"PSL2025_28", Match_No:"28",        Date:"18-May-25", Team_1:"Multan Sultans",    Team_2:"Quetta Gladiators", Venue:"Rawalpindi", Toss_Winner:"Multan Sultans",    Toss_Decision:"Bat",   Winning_Team:"Quetta Gladiators", Won_By:"Wickets", Margin:2,   Target:190, POTM:"Hassan Nawaz",      Notes:"Match shifted from Multan to Rawalpindi" },
  { Match_ID:"PSL2025_29", Match_No:"29",        Date:"18-May-25", Team_1:"Lahore Qalandars",  Team_2:"Peshawar Zalmi",    Venue:"Rawalpindi", Toss_Winner:"Peshawar Zalmi",    Toss_Decision:"Field", Winning_Team:"Lahore Qalandars",  Won_By:"Runs",    Margin:26,  Target:null, POTM:"Salman Mirza",      Notes:"Match reduced to 13 overs; Lahore qualified" },
  { Match_ID:"PSL2025_30", Match_No:"30",        Date:"19-May-25", Team_1:"Islamabad United",  Team_2:"Karachi Kings",     Venue:"Rawalpindi", Toss_Winner:"Karachi Kings",     Toss_Decision:"Field", Winning_Team:"Islamabad United",  Won_By:"Runs",    Margin:79,  Target:null, POTM:"Alex Hales",        Notes:"" },
  { Match_ID:"PSL2025_31", Match_No:"Qualifier",  Date:"21-May-25", Team_1:"Quetta Gladiators", Team_2:"Islamabad United",  Venue:"Lahore",     Toss_Winner:"Quetta Gladiators", Toss_Decision:"Bat",   Winning_Team:"Quetta Gladiators", Won_By:"Runs",    Margin:30,  Target:null, POTM:"Faheem Ashraf",     Notes:"Match shifted from Rawalpindi to Lahore" },
  { Match_ID:"PSL2025_32", Match_No:"Eliminator 1",Date:"22-May-25",Team_1:"Karachi Kings",     Team_2:"Lahore Qalandars",  Venue:"Lahore",     Toss_Winner:"Karachi Kings",     Toss_Decision:"Bat",   Winning_Team:"Lahore Qalandars",  Won_By:"Wickets", Margin:6,   Target:191, POTM:"Abdullah Shafique", Notes:"" },
  { Match_ID:"PSL2025_33", Match_No:"Eliminator 2",Date:"23-May-25",Team_1:"Lahore Qalandars",  Team_2:"Islamabad United",  Venue:"Lahore",     Toss_Winner:"Lahore Qalandars",  Toss_Decision:"Bat",   Winning_Team:"Lahore Qalandars",  Won_By:"Runs",    Margin:95,  Target:null, POTM:"Salman Mirza",      Notes:"" },
  { Match_ID:"PSL2025_34", Match_No:"Final",      Date:"25-May-25", Team_1:"Quetta Gladiators", Team_2:"Lahore Qalandars",  Venue:"Lahore",     Toss_Winner:"Quetta Gladiators", Toss_Decision:"Bat",   Winning_Team:"Lahore Qalandars",  Won_By:"Wickets", Margin:6,   Target:204, POTM:"Kusal Perera",      Notes:"Record chase in a PSL final" }
];

// Parse dates
const df = RAW_DATA.map(r => ({
  ...r,
  DateObj: new Date(r.Date.replace(/-/g, ' '))
})).sort((a, b) => a.DateObj - b.DateObj);

// ─── Helpers ─────────────────────────────────────────────────────────────────
function valueCounts(arr) {
  return arr.reduce((acc, v) => { acc[v] = (acc[v] || 0) + 1; return acc; }, {});
}

function unique(arr) {
  return [...new Set(arr)];
}

const plotConfig = { responsive: true, displayModeBar: true, displaylogo: false };

// ─── Overview Stats ───────────────────────────────────────────────────────────
function loadOverview() {
  const totalMatches = df.length;
  const teams = unique([...df.map(r => r.Team_1), ...df.map(r => r.Team_2)]);
  const venues = unique(df.map(r => r.Venue));
  const winByWickets = df.filter(r => r.Won_By === 'Wickets').length;
  const winByRuns = df.filter(r => r.Won_By === 'Runs').length;

  animateCounter('totalMatches', totalMatches);
  animateCounter('totalTeams', teams.length);
  animateCounter('totalVenues', venues.length);
  animateCounter('winByWickets', winByWickets);
  animateCounter('winByRuns', winByRuns);
}

function animateCounter(id, target) {
  const el = document.getElementById(id);
  let start = 0;
  const duration = 1200;
  const step = Math.ceil(target / (duration / 16));
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = start;
  }, 16);
}

// ─── Team Performance ─────────────────────────────────────────────────────────
function loadTeamPerformance() {
  const validMatches = df.filter(r => r.Winning_Team !== 'No Result');
  const winCounts = valueCounts(validMatches.map(r => r.Winning_Team));
  const teams = Object.keys(winCounts).sort((a, b) => winCounts[b] - winCounts[a]);
  const wins = teams.map(t => winCounts[t]);

  const trace = {
    x: teams, y: wins, type: 'bar',
    marker: { color: '#00a8cc' },
    text: wins, textposition: 'auto',
    hovertemplate: '<b>%{x}</b><br>Wins: %{y}<extra></extra>'
  };

  Plotly.newPlot('teamPerformanceChart', [trace], {
    title: 'Team Performance — Total Wins',
    xaxis: { title: 'Team' }, yaxis: { title: 'Wins' },
    template: 'plotly_white', height: 400, showlegend: false,
    font: { family: 'Poppins, sans-serif', size: 12 }
  }, plotConfig);
}

// ─── Win Percentage ───────────────────────────────────────────────────────────
function loadWinPercentage() {
  const validMatches = df.filter(r => r.Winning_Team !== 'No Result');
  const winCounts = valueCounts(validMatches.map(r => r.Winning_Team));
  const allTeams = unique([...df.map(r => r.Team_1), ...df.map(r => r.Team_2)]);

  const teamMatchCounts = {};
  allTeams.forEach(t => {
    teamMatchCounts[t] = df.filter(r => r.Team_1 === t || r.Team_2 === t).length;
  });

  const data = allTeams
    .filter(t => winCounts[t])
    .map(t => ({ team: t, pct: +((winCounts[t] / teamMatchCounts[t]) * 100).toFixed(1) }))
    .sort((a, b) => a.pct - b.pct);

  const trace = {
    x: data.map(d => d.pct), y: data.map(d => d.team),
    type: 'bar', orientation: 'h',
    marker: {
      color: data.map(d => d.pct),
      colorscale: 'Viridis', showscale: true,
      colorbar: { title: 'Win %' }
    },
    text: data.map(d => d.pct + '%'), textposition: 'auto',
    hovertemplate: '<b>%{y}</b><br>Win %: %{x}%<extra></extra>'
  };

  Plotly.newPlot('winPercentageChart', [trace], {
    title: 'Team Win Percentage',
    xaxis: { title: 'Win Percentage (%)' }, yaxis: { title: 'Team' },
    template: 'plotly_white', height: 400,
    font: { family: 'Poppins, sans-serif', size: 12 }
  }, plotConfig);
}

// ─── Toss Impact ──────────────────────────────────────────────────────────────
function loadTossImpact() {
  const validMatches = df.filter(r => r.Winning_Team !== 'No Result');
  const tossWonMatch = validMatches.filter(r => r.Toss_Winner === r.Winning_Team).length;
  const tossLostMatch = validMatches.length - tossWonMatch;

  const trace = {
    type: 'pie',
    labels: ['Toss Winner Won', 'Toss Winner Lost'],
    values: [tossWonMatch, tossLostMatch],
    hole: 0.4,
    marker: { colors: ['#00a8cc', '#ff6b6b'] },
    textinfo: 'label+percent+value',
    textfont: { size: 13 },
    hovertemplate: '<b>%{label}</b><br>Count: %{value}<br>%{percent}<extra></extra>'
  };

  Plotly.newPlot('tossImpactChart', [trace], {
    title: 'Toss Impact — Did Toss Winners Win?',
    template: 'plotly_white', height: 400,
    font: { family: 'Poppins, sans-serif', size: 12 }
  }, plotConfig);
}

// ─── Venue Stats ──────────────────────────────────────────────────────────────
function loadVenueStats() {
  const venueCounts = valueCounts(df.map(r => r.Venue));
  const venues = Object.keys(venueCounts);
  const counts = venues.map(v => venueCounts[v]);

  const trace = {
    type: 'pie', labels: venues, values: counts, hole: 0.3,
    textinfo: 'label+value',
    textfont: { size: 11 },
    hovertemplate: '<b>%{label}</b><br>Matches: %{value}<extra></extra>'
  };

  Plotly.newPlot('venueStatsChart', [trace], {
    title: 'Matches Played at Each Venue',
    template: 'plotly_white', height: 400,
    font: { family: 'Poppins, sans-serif', size: 12 }
  }, plotConfig);
}

// ─── Win Method ───────────────────────────────────────────────────────────────
function loadWinMethod() {
  const validMatches = df.filter(r => r.Winning_Team !== 'No Result');
  const methods = valueCounts(validMatches.map(r => r.Won_By));
  const keys = Object.keys(methods);
  const values = keys.map(k => methods[k]);

  const trace = {
    x: keys, y: values, type: 'bar',
    marker: { color: ['#4ecdc4', '#ff6b6b'] },
    text: values, textposition: 'auto',
    hovertemplate: '<b>%{x}</b><br>Count: %{y}<extra></extra>'
  };

  Plotly.newPlot('winMethodChart', [trace], {
    title: 'Wins by Method (Runs vs Wickets)',
    xaxis: { title: 'Method' }, yaxis: { title: 'Number of Wins' },
    template: 'plotly_white', height: 400, showlegend: false,
    font: { family: 'Poppins, sans-serif', size: 12 }
  }, plotConfig);
}

// ─── Margin Distribution ──────────────────────────────────────────────────────
function loadMarginDistribution() {
  const validMatches = df.filter(r => r.Winning_Team !== 'No Result' && r.Margin != null);
  const runsMargins = validMatches.filter(r => r.Won_By === 'Runs').map(r => r.Margin);
  const wicketsMargins = validMatches.filter(r => r.Won_By === 'Wickets').map(r => r.Margin);

  const traceRuns = {
    x: runsMargins, type: 'histogram', name: 'Runs',
    marker: { color: '#00a8cc' }, opacity: 0.7, nbinsx: 15,
    hovertemplate: 'Runs: %{x}<br>Count: %{y}<extra></extra>'
  };
  const traceWickets = {
    x: wicketsMargins, type: 'histogram', name: 'Wickets',
    marker: { color: '#ff6b6b' }, opacity: 0.7, nbinsx: 10,
    hovertemplate: 'Wickets: %{x}<br>Count: %{y}<extra></extra>'
  };

  Plotly.newPlot('marginDistributionChart', [traceRuns, traceWickets], {
    title: 'Distribution of Victory Margins',
    xaxis: { title: 'Margin' }, yaxis: { title: 'Frequency' },
    template: 'plotly_white', height: 400, barmode: 'overlay',
    font: { family: 'Poppins, sans-serif', size: 12 }
  }, plotConfig);
}

// ─── Player of the Match ──────────────────────────────────────────────────────
function loadPlayerOfMatch() {
  const potmList = df.filter(r => r.POTM).map(r => r.POTM);
  const potmCounts = valueCounts(potmList);
  const sorted = Object.entries(potmCounts)
    .sort((a, b) => a[1] - b[1])
    .slice(-10);
  const players = sorted.map(e => e[0]);
  const awards = sorted.map(e => e[1]);

  const trace = {
    x: awards, y: players, type: 'bar', orientation: 'h',
    marker: { color: awards, colorscale: 'Blues', showscale: false },
    text: awards, textposition: 'auto',
    hovertemplate: '<b>%{y}</b><br>Awards: %{x}<extra></extra>'
  };

  Plotly.newPlot('playerOfMatchChart', [trace], {
    title: 'Top 10 Players by POTM Awards',
    xaxis: { title: 'Number of Awards' }, yaxis: { title: 'Player' },
    template: 'plotly_white', height: 500,
    font: { family: 'Poppins, sans-serif', size: 12 }
  }, plotConfig);
}

// ─── Toss Decision ────────────────────────────────────────────────────────────
function loadTossDecision() {
  const decisions = valueCounts(df.map(r => r.Toss_Decision));
  const keys = Object.keys(decisions);
  const values = keys.map(k => decisions[k]);

  const trace = {
    type: 'pie', labels: keys, values: values, hole: 0.4,
    marker: { colors: ['#4ecdc4', '#ffd93d'] },
    textinfo: 'label+percent+value', textfont: { size: 14 },
    hovertemplate: '<b>%{label}</b><br>Count: %{value}<extra></extra>'
  };

  Plotly.newPlot('tossDecisionChart', [trace], {
    title: 'Toss Decision Preference (Bat vs Field)',
    template: 'plotly_white', height: 400,
    font: { family: 'Poppins, sans-serif', size: 12 }
  }, plotConfig);
}

// ─── Match Timeline ───────────────────────────────────────────────────────────
function loadMatchTimeline() {
  const dates = df.map(r => r.DateObj);
  const cumulative = df.map((_, i) => i + 1);

  const trace = {
    x: dates, y: cumulative, type: 'scatter',
    mode: 'lines+markers',
    line: { color: '#00a8cc', width: 2 },
    marker: { size: 6 },
    fill: 'tozeroy', fillcolor: 'rgba(0,168,204,0.2)',
    hovertemplate: 'Match #%{y}<br>%{x|%d %b %Y}<extra></extra>'
  };

  Plotly.newPlot('matchTimelineChart', [trace], {
    title: 'Tournament Timeline — Cumulative Matches',
    xaxis: { title: 'Date' }, yaxis: { title: 'Cumulative Match Count' },
    template: 'plotly_white', height: 400,
    font: { family: 'Poppins, sans-serif', size: 12 }
  }, plotConfig);
}

// ─── Head-to-Head ─────────────────────────────────────────────────────────────
function loadHeadToHead() {
  const teams = unique([...df.map(r => r.Team_1), ...df.map(r => r.Team_2)]).sort();
  const matrix = teams.map(t1 =>
    teams.map(t2 => {
      if (t1 === t2) return 0;
      return df.filter(r =>
        (r.Team_1 === t1 || r.Team_2 === t1) &&
        (r.Team_1 === t2 || r.Team_2 === t2) &&
        r.Winning_Team === t1
      ).length;
    })
  );

  const trace = {
    type: 'heatmap', z: matrix, x: teams, y: teams,
    colorscale: 'Blues', text: matrix,
    texttemplate: '%{text}', textfont: { size: 12 },
    colorbar: { title: 'Wins' },
    hovertemplate: '<b>%{y}</b> vs <b>%{x}</b><br>Wins: %{z}<extra></extra>'
  };

  Plotly.newPlot('headToHeadChart', [trace], {
    title: 'Head-to-Head: Wins Matrix',
    xaxis: { title: 'Opponent' }, yaxis: { title: 'Team' },
    template: 'plotly_white', height: 500,
    font: { family: 'Poppins, sans-serif', size: 11 }
  }, plotConfig);
}

// ─── Recent Matches ───────────────────────────────────────────────────────────
function loadRecentMatches() {
  const recent = [...df].reverse().slice(0, 10);
  const container = document.getElementById('recentMatches');
  container.innerHTML = '';

  recent.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';
    const margin = match.Margin != null
      ? `${match.Margin} ${match.Won_By}`
      : match.Notes || 'N/A';

    card.innerHTML = `
      <div class="match-date">${match.Date} &bull; ${match.Venue}</div>
      <div class="match-teams">
        ${match.Team_1} <span class="match-vs">vs</span> ${match.Team_2}
      </div>
      <div class="match-winner">🏆 Winner: ${match.Winning_Team}</div>
      <div class="match-details">Margin: ${margin}</div>
      ${match.POTM ? `<div class="match-potm">⭐ Player of the Match: ${match.POTM}</div>` : ''}
    `;
    container.appendChild(card);
  });
}

// ─── Responsive Resize ────────────────────────────────────────────────────────
window.addEventListener('resize', () => {
  ['teamPerformanceChart','winPercentageChart','tossImpactChart',
   'venueStatsChart','winMethodChart','marginDistributionChart',
   'playerOfMatchChart','tossDecisionChart','matchTimelineChart','headToHeadChart'
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el && el.data) Plotly.Plots.resize(el);
  });
});

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadOverview();
  loadTeamPerformance();
  loadWinPercentage();
  loadTossImpact();
  loadVenueStats();
  loadWinMethod();
  loadMarginDistribution();
  loadPlayerOfMatch();
  loadTossDecision();
  loadMatchTimeline();
  loadHeadToHead();
  loadRecentMatches();
});
