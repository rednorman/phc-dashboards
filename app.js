const ALL_COES   = [
  {"id": "compensation", "displayName": "Compensation", "accentColor": "#4B8BDE", "programs": [{"name": "Compensation", "level": "Compensation", "color": "#4B8BDE", "bgColor": "#E3EEFB", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Compensation", "labels": ["compensation"]}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24, "rcaExcludeInterventions": ["SYSTEM_FIX"]},
  {"id": "payroll", "displayName": "Payroll", "accentColor": "#2DB88A", "programs": [{"name": "Payroll", "level": "Payroll", "color": "#2DB88A", "bgColor": "#D4F4E6", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Payroll", "labels": ["payroll"]}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24},
  {"id": "sales-compensation", "displayName": "Sales Compensation", "accentColor": "#F45D48", "programs": [{"name": "Sales Compensation", "level": "Sales Compensation", "color": "#F45D48", "bgColor": "#FDE8E6", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Sales Compensation", "labels": ["sales_compensation"]}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24},
  {"id": "talent-development", "displayName": "Talent Development", "accentColor": "#9B59B6", "programs": [{"name": "Talent Development", "level": "Talent Development", "color": "#9B59B6", "bgColor": "#F5EEF8", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Talent Development", "labels": ["talent_development"]}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24},
  {"id": "people-data-analytics", "displayName": "People Data & Analytics", "accentColor": "#4B8BDE", "programs": [{"name": "People Data & Analytics", "level": "People Data & Analytics", "color": "#4B8BDE", "bgColor": "#E3EEFB", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "People Data & Analytics", "labels": ["people_insights"]}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24},
  {"id": "talent-operations", "displayName": "Talent Operations", "accentColor": "#F39C12", "programs": [{"name": "Talent Operations", "level": "Talent Operations", "color": "#F39C12", "bgColor": "#FEF9E7", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Talent Operations", "labels": ["talent_operations"]}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24},
  {"id": "afo", "displayName": "AFO", "accentColor": "#2DB88A", "programs": [{"name": "AFO", "level": "AFO", "color": "#2DB88A", "bgColor": "#D4F4E6", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "AFO", "labels": ["travel_expense", "procurement"]}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24},
  {"id": "equity", "displayName": "Equity", "accentColor": "#F45D48", "programs": [{"name": "Equity", "level": "Equity", "color": "#F45D48", "bgColor": "#FDE8E6", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Equity", "labels": ["equity"]}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24},
  {"id": "ext-wf", "displayName": "EXT WF", "accentColor": "#9B59B6", "programs": [{"name": "EXT WF", "level": "EXT WF", "color": "#9B59B6", "bgColor": "#F5EEF8", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "EXT WF", "labels": ["ext_wf", "hris"]}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24},
  {"id": "environment", "displayName": "Environment", "accentColor": "#2DB88A", "programs": [{"name": "Environment", "level": "Environment", "color": "#2DB88A", "bgColor": "#D4F4E6", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Environment", "labels": ["environment"]}, {"team": "C&I", "labels": ["community_inclusion"]}, {"team": "Other", "isDefault": true}]}, {"name": "Env Contractors", "level": "Environment Contractors", "color": "#F39C12", "bgColor": "#FEF9E7", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24},
  {"id": "performance-enablement", "displayName": "Performance Enablement", "accentColor": "#9B59B6", "programs": [{"name": "Performance Enablement", "level": "Performance Enablement", "color": "#9B59B6", "bgColor": "#F5EEF8", "ownershipRules": [{"team": "Performance Enablement", "labels": ["performance_enablement"]}, {"team": "HRIS", "labels": ["hris"]}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Risotto", "isRisotto": true}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24},
  {"id": "benefits", "displayName": "Benefits", "accentColor": "#F45D48", "programs": [{"name": "Benefits", "level": "Benefits", "levels": ["Benefits"], "categoryFilter": ["Savings", "Perks", "Health", "Commuter"], "color": "#F45D48", "bgColor": "#FDE8E6", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Benefits", "labels": ["benefits"]}, {"team": "Other", "isDefault": true}]},
    {"name": "Leave", "level": "Benefits", "levels": ["Benefits", "Accomm"], "categoryFilter": ["Time & Absence", "Payroll"], "color": "#4B8BDE", "bgColor": "#E3EEFB", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Leave", "labels": ["benefits"]}, {"team": "Other", "isDefault": true}]},
    {"name": "Accommodations", "level": "Accomm", "levels": ["Accomm"], "color": "#2DB88A", "bgColor": "#D4F4E6", "ownershipRules": [{"team": "Risotto", "isRisotto": true}, {"team": "PSE", "labels": ["people_services"]}, {"team": "Accommodations", "labels": ["accommodations"]}, {"team": "Other", "isDefault": true}]}], "ttfrGoal": 8, "ttrGoal": 24}
];
const JIRA_TOOL  = 'mcp__2d897a15-f542-4de1-a531-4335b8b5b8ff__searchJiraIssuesUsingJql';
const CLOUD_ID   = '3fd33630-4e39-4689-ad04-db32e3843117';
const RISOTTO_ID = '712020:606e4d99-cac9-4729-80b6-3220918bb043';
const ALL_FIELDS  = ['security','customfield_10438','customfield_10490','customfield_10540','labels','assignee','status','summary','created','resolutiondate'];
const FEEDBACK_FIELDS = ['customfield_10454','customfield_10540','summary','status','assignee','customfield_10490','created'];
const TTFR_FIELDS = ['comment','created'];
const PHC_FIELDS  = ['labels','created','resolutiondate'];
const BACKEND_URL   = 'https://script.google.com/a/macros/gusto.com/s/AKfycbw_OWTvzj5mDSwvNW1rrKUip14nkC2WhftJi6-2Ee3kNaMCPDwqzPfkawS1y-PJPLNL3w/exec';
const PHC_CACHE_KEY = 'phc_total_v19_';
function getCachedPHC(periodKey){
  try{
    const raw=localStorage.getItem(PHC_CACHE_KEY+periodKey); if(!raw) return null;
    const d=JSON.parse(raw);
    const nowUtc=new Date(),curKey=`${nowUtc.getUTCFullYear()}_${String(nowUtc.getUTCMonth()+1).padStart(2,'0')}`;
    if(periodKey===curKey&&Date.now()-d.cachedAt>86400000) return null;
    return d;
  }catch(e){return null;}
}
function cachePHC(periodKey,data){try{localStorage.setItem(PHC_CACHE_KEY+periodKey,JSON.stringify({...data,cachedAt:Date.now()}));}catch(e){}}
const FREEZE_KEY='phc_coe_freeze_v2_';
function getFrozen(coeId,periodKey){try{const r=localStorage.getItem(FREEZE_KEY+coeId+'_'+periodKey);return r?JSON.parse(r):null;}catch(e){return null;}}
function saveFreeze(coeId,periodKey){
  if(!Object.keys(state.programs).length||!state.phcTotal) return false;
  const progs={};
  for(const[k,d] of Object.entries(state.programs)){progs[k]={volume:d.volume,ttfr:d.ttfr,ttr:d.ttr,byCategory:d.byCategory,byTier:d.byTier,byOwnership:d.byOwnership};}
  try{localStorage.setItem(FREEZE_KEY+coeId+'_'+periodKey,JSON.stringify({programs:progs,phcTotal:state.phcTotal,frozenAt:Date.now()}));return true;}catch(e){return false;}
}
function updateFreezeUI(){
  const btn=document.getElementById('freezeBtn'); if(!btn) return;
  const frozen=getFrozen(state.activeCoe.id,state.period?.key);
  if(frozen){btn.textContent='\u2744\uFE0F Frozen';btn.style.background='#4B8BDE';btn.title=`Frozen ${new Date(frozen.frozenAt).toLocaleDateString()} \u2014 click to unfreeze`;}
  else{btn.textContent='\uD83D\uDD12 Freeze';btn.style.background='rgba(255,255,255,0.15)';btn.title='Save a snapshot so this month loads instantly without re-pulling Jira';}
}
function toggleFreeze(){
  if(!state.period) return;
  const frozen=getFrozen(state.activeCoe.id,state.period.key);
  if(frozen){localStorage.removeItem(FREEZE_KEY+state.activeCoe.id+'_'+state.period.key);updateFreezeUI();document.getElementById('lastUpdated').textContent='Unfrozen \u2014 Refresh to re-pull from Jira';}
  else{if(saveFreeze(state.activeCoe.id,state.period.key)){updateFreezeUI();document.getElementById('lastUpdated').textContent=`\u2744\uFE0F Frozen ${state.period.label} \u2014 ${state.activeCoe.displayName}`;}else{alert('No data loaded yet. Refresh first then freeze.');}}
}
const TEAM_COLORS = { Risotto:'#9B59B6', PSE:'#4B8BDE', Other:'#ADB5BD', HRIS:'#2DB88A', 'Performance Enablement':'#F39C12', Compensation:'#F45D48', Payroll:'#2DB88A', 'Sales Compensation':'#F45D48', 'Talent Development':'#9B59B6', 'Talent Operations':'#F39C12', AFO:'#2DB88A', Equity:'#E74C3C', 'EXT WF':'#9B59B6', Environment:'#2DB88A', 'C&I':'#F39C12' };
const TIER_COLORS = { 'Tier 0':'#c0392b','Tier 1':'#e67e22','Tier 2':'#0A8080','Tier 3':'#27ae60','Unknown':'#ADB5BD' };
const SCORE_COLORS = { 1:'#c0392b',2:'#e67e22',3:'#f39c12',4:'#2DB88A',5:'#27ae60' };
let state = { activeCoe: ALL_COES[0], programs:{}, phcTotal:null, period:null, trendsData:null, csatData:{}, charts:{}, loading:false };
function switchCoe(id) {
  const coe = ALL_COES.find(c => c.id === id);
  if (!coe) return;
  Object.values(state.charts).forEach(c => { try { c.destroy(); } catch(e){} });
  state.activeCoe  = coe;
  state.programs   = {};
  state.phcTotal   = null;
  state.trendsData = null;
  state.csatData   = {};
  document.documentElement.style.setProperty('--accent', coe.accentColor);
  document.getElementById('headerTitle').textContent = 'PHC ' + coe.displayName + ' Dashboard';
  document.getElementById('lastUpdated').textContent = 'Select a period and click \u21BA Refresh to load data';
  document.getElementById('csatStatus').style.display = 'none';
  updateFreezeUI();
  buildTabs();
  loadCSAT();
  if (state.period) doRefresh();
}
function buildTabs() {
  const bar  = document.getElementById('tabsBar');
  const cont = document.getElementById('tabContents');
  bar.innerHTML  = '';
  cont.innerHTML = '';
  state.charts   = {};
  const coe  = state.activeCoe;
  const tabs = [
    {id:'overview', label:'Overview'},
    ...coe.programs.map(p => ({id:'prog-'+p.name.toLowerCase().replace(/\W+/g,'-'), label:p.name})),
    {id:'trends',   label:'Trends'},
    {id:'rca',      label:'RCA'},
    {id:'feedback', label:'\uD83D\uDCAC Feedback'},
    ...(coe.id==='benefits'?[{id:'oe',label:'\uD83C\uDFAF Open Enrollment'}]:[])
  ];
  tabs.forEach((t, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i===0?' active':'');
    btn.textContent = t.label; btn.dataset.tab = t.id;
    btn.onclick = () => switchTab(t.id, btn);
    bar.appendChild(btn);
    const div = document.createElement('div');
    div.id = 'tab-' + t.id;
    div.className = 'tab-content' + (i===0?' active':'');
    div.innerHTML = '<div class="loading-overlay"><p style="color:var(--gray-600);">Select a period and click <strong>\u21BA Refresh</strong> to load data.</p></div>';
    cont.appendChild(div);
  });
}
function getMonthRange(y,m){
  const mm=String(m).padStart(2,'0'), ld=String(new Date(y,m,0).getDate()).padStart(2,'0');
  const lbl=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m];
  return{start:`${y}-${mm}-01`,end:`${y}-${mm}-${ld}`,label:`${lbl} ${y}`,key:`${y}_${mm}`};
}
function buildDropdowns(){
  const coeSel = document.getElementById('coeSel');
  ALL_COES.forEach(coe => {
    const o = document.createElement('option');
    o.value = coe.id; o.textContent = coe.displayName;
    coeSel.appendChild(o);
  });
  const monthSel = document.getElementById('monthSel');
  const nowUtc=new Date(); const nowY=nowUtc.getUTCFullYear(),nowM=nowUtc.getUTCMonth();
  for(let i=0;i<12;i++){
    const d=new Date(Date.UTC(nowY,nowM-i,1));
    const y=d.getUTCFullYear(),m=d.getUTCMonth()+1,r=getMonthRange(y,m);
    const o=document.createElement('option');
    o.value=JSON.stringify({y,m}); o.textContent=r.label;
    if(i===1) o.selected=true;
    monthSel.appendChild(o);
  }
  const _defV=JSON.parse(monthSel.options[1]?.value||'{}');
  if(_defV.y){monthSel.value=JSON.stringify(_defV);state.period=getMonthRange(_defV.y,_defV.m);}
  document.documentElement.style.setProperty('--accent', state.activeCoe.accentColor);
  document.getElementById('headerTitle').textContent = 'PHC ' + state.activeCoe.displayName + ' Dashboard';
}
function onPeriodChange(){
  const sel=document.getElementById('monthSel'); if(!sel.value) return;
  const v=JSON.parse(sel.value); state.period=getMonthRange(v.y,v.m);
  state.programs={}; state.phcTotal=null; state.trendsData=null;
  loadCSAT();
  doRefresh();
}
function buildDayChunks(period){
  const pad=n=>String(n).padStart(2,'0'),chunks=[],last=new Date(period.end+'T12:00:00Z');
  let cur=new Date(period.start+'T12:00:00Z');
  while(cur<=last){
    const next=new Date(cur); next.setUTCDate(next.getUTCDate()+1);
    chunks.push({gte:`${cur.getUTCFullYear()}-${pad(cur.getUTCMonth()+1)}-${pad(cur.getUTCDate())}`,lt:`${next.getUTCFullYear()}-${pad(next.getUTCMonth()+1)}-${pad(next.getUTCDate())}`});
    cur=next;
  }
  return chunks;
}
function buildWeekChunks(period){
  const pad=n=>String(n).padStart(2,'0'),chunks=[],last=new Date(period.end+'T12:00:00Z');
  let cur=new Date(period.start+'T12:00:00Z');
  while(cur<=last){
    const end=new Date(cur); end.setUTCDate(end.getUTCDate()+6);
    if(end>last) end.setTime(last.getTime());
    const endNext=new Date(end); endNext.setUTCDate(endNext.getUTCDate()+1);
    chunks.push({gte:`${cur.getUTCFullYear()}-${pad(cur.getUTCMonth()+1)}-${pad(cur.getUTCDate())}`,lt:`${endNext.getUTCFullYear()}-${pad(endNext.getUTCMonth()+1)}-${pad(endNext.getUTCDate())}`});
    cur=new Date(end); cur.setUTCDate(cur.getUTCDate()+1);
  }
  return chunks;
}
function parseJiraResponse(raw){
  try{
    if(typeof raw==='string') return JSON.parse(raw);
    if(Array.isArray(raw)&&raw[0]?.text) return JSON.parse(raw[0].text);
    if(raw?.issues) return raw;
    return JSON.parse(raw?.content?.[0]?.text||raw?.text||JSON.stringify(raw));
  }catch(e){return{};}
}
function getMTOffset(d){const y=d.getUTCFullYear();const m2=new Date(Date.UTC(y,2,1));m2.setUTCDate(1+(7-m2.getUTCDay())%7+7);const n1=new Date(Date.UTC(y,10,1));n1.setUTCDate(1+(7-n1.getUTCDay())%7);return(d>=m2&&d<n1)?-6:-7;}
function businessHoursBetween(startUTC,endUTC){
  if(!startUTC||!endUTC||endUTC<=startUTC) return 0;
  const WS=9,WE=17; let cur=new Date(startUTC),total=0;
  while(cur<endUTC){
    const off=getMTOffset(cur),mt=new Date(cur.getTime()+off*3600000);
    const dow=mt.getUTCDay();
    if(dow===0||dow===6){mt.setUTCDate(mt.getUTCDate()+(dow===0?1:2));mt.setUTCHours(WS,0,0,0);cur=new Date(mt.getTime()-off*3600000);continue;}
    const h=mt.getUTCHours()+mt.getUTCMinutes()/60+mt.getUTCSeconds()/3600;
    if(h<WS){mt.setUTCHours(WS,0,0,0);cur=new Date(mt.getTime()-off*3600000);continue;}
    if(h>=WE){mt.setUTCDate(mt.getUTCDate()+1);mt.setUTCHours(WS,0,0,0);cur=new Date(mt.getTime()-off*3600000);continue;}
    const eod=new Date(mt);eod.setUTCHours(WE,0,0,0);const eodUTC=new Date(eod.getTime()-off*3600000);
    const segEnd=endUTC<eodUTC?endUTC:eodUTC;total+=(segEnd-cur)/3600000;cur=eodUTC;if(cur>=endUTC)break;
    mt.setUTCDate(mt.getUTCDate()+1);mt.setUTCHours(WS,0,0,0);cur=new Date(mt.getTime()-off*3600000);
  }
  return total;
}
function getFirstPublicComment(t){return(t.fields?.comment?.comments||[]).find(c=>c.jsdPublic===true)||null;}
function getTTFRHours(t){const c=getFirstPublicComment(t);if(!c)return null;return businessHoursBetween(new Date(t.fields.created),new Date(c.created));}
function getTTRHours(t){const r=t.fields?.resolutiondate;if(!r)return null;return businessHoursBetween(new Date(t.fields.created),new Date(r));}
function getTTFROngoing(t,ttfrMap){if(ttfrMap&&typeof ttfrMap[t.key]==='number')return null;const s=(t.fields?.status?.name||'').toLowerCase();if(['done','closed','resolved','cancelled','canceled'].includes(s))return null;return businessHoursBetween(new Date(t.fields.created),new Date());}
function getTTROngoing(t){if(t.fields?.resolutiondate)return null;const s=(t.fields?.status?.name||'').toLowerCase();if(['done','closed','resolved','cancelled','canceled'].includes(s))return null;return businessHoursBetween(new Date(t.fields.created),new Date());}
async function fetchTTFRData(issueKeys){
  const map={};const BATCH=100;
  for(let i=0;i<issueKeys.length;i+=BATCH){
    const batch=issueKeys.slice(i,i+BATCH);
    const jql=`key in (${batch.join(',')}) ORDER BY key ASC`;
    try{
      let data;
      if(window.cowork){const raw=await window.cowork.callMcpTool(JIRA_TOOL,{cloudId:CLOUD_ID,jql,fields:TTFR_FIELDS,maxResults:BATCH});data=parseJiraResponse(raw);}
      else{const qs=new URLSearchParams({key:'10GyLkckn0E6fcEZYeQm1GPa8-PX8d09',action:'jira',jql,fields:TTFR_FIELDS.join(','),maxResults:BATCH});const resp=await fetch(BACKEND_URL+'?'+qs,{credentials:'include'});data=await resp.json();}
      for(const issue of(data.issues||[])){const fc=getFirstPublicComment(issue);map[issue.key]=fc?businessHoursBetween(new Date(issue.fields.created),new Date(fc.created)):null;}
    }catch(e){}
  }
  return map;
}
async function fetchWithCursor(baseJql,fields){
  const issues=[]; let nextPageToken=null;
  const jql=baseJql+' ORDER BY key ASC';
  for(let pg=0;pg<50;pg++){
    try{
      let data;
      if(window.cowork){
        const params={cloudId:CLOUD_ID,jql,fields,maxResults:100};
        if(nextPageToken) params.nextPageToken=nextPageToken;
        const raw=await window.cowork.callMcpTool(JIRA_TOOL,params);
        data=parseJiraResponse(raw);
      } else {
        const qs=new URLSearchParams({key:'10GyLkckn0E6fcEZYeQm1GPa8-PX8d09',action:'jira',jql,fields:fields.join(','),maxResults:100});
        if(nextPageToken) qs.set('nextPageToken',nextPageToken);
        const resp=await fetch(BACKEND_URL+'?'+qs,{credentials:'include'});
        data=await resp.json();
      }
      const batch=Array.isArray(data.issues)?data.issues:[];
      if(!batch.length) break;
      issues.push(...batch);
      if(data.isLast||!data.nextPageToken) break;
      nextPageToken=data.nextPageToken;
    }catch(e){break;}
  }
  return issues;
}
async function fetchCoeIssues(period,levelFilter,fields){
  const statusEl=document.getElementById('lastUpdated');
  const chunks=buildDayChunks(period);
  const seen=new Set(), all=[];
  for(let i=0;i<chunks.length;i++){
    const{gte,lt}=chunks[i];
    if(statusEl) statusEl.textContent=`Loading\u2026 ${all.length} tickets (day ${i+1}/${chunks.length})`;
    let jql=`project = PHC AND issuetype != "WFM Request" AND created >= "${gte}" AND created < "${lt}"`;
    if(levelFilter) jql+=` AND ${levelFilter}`;
    const batch=await fetchWithCursor(jql,fields);
    for(const t of batch){if(!seen.has(t.key)){seen.add(t.key);all.push(t);}}
  }
  return all;
}
async function fetchPeriodIssues(period,extraFilter,fields){
  const statusEl=document.getElementById('lastUpdated');
  const chunks=buildDayChunks(period);
  const seen=new Set(), all=[];
  for(let i=0;i<chunks.length;i++){
    const{gte,lt}=chunks[i];
    if(statusEl) statusEl.textContent=`Loading PHC\u2026 ${all.length} tickets (day ${i+1}/${chunks.length})`;
    let jql=`project = PHC AND issuetype not in ("People Data & Analytics","WFM Request") AND created >= "${gte}" AND created < "${lt}" AND ("PHC Categories" not in cascadeOption(Other, Redirect) OR "PHC Categories" is EMPTY)`;
    if(extraFilter) jql+=` AND ${extraFilter}`;
    const batch=await fetchWithCursor(jql,fields);
    for(const t of batch){if(!seen.has(t.key)){seen.add(t.key);all.push(t);}}
  }
  return all;
}
async function fetchPeriodWeekly(period,extraFilter,fields){
  const chunks=buildWeekChunks(period); const all=[];
  for(const{gte,lt} of chunks){
    let jql=`project = PHC AND issuetype != "WFM Request" AND created >= "${gte}" AND created < "${lt}"`;
    if(extraFilter) jql+=` AND ${extraFilter}`;
    all.push(...await fetchWithCursor(jql,fields));
  }
  return all;
}
function classifyOwnership(issue,prog){
  const labels=(issue.fields?.labels||[]).map(l=>l.toLowerCase());
  const assignee=issue.fields?.assignee;
  const isRisotto=assignee?.accountId===RISOTTO_ID||(assignee?.displayName||'').toLowerCase().includes('risotto')||(assignee?.name||'').toLowerCase().includes('phc.risotto')||labels.includes('phc.risotto');
  for(const rule of (prog.ownershipRules||[])){
    if(rule.isRisotto&&isRisotto) return rule.team;
    if(rule.labels&&rule.labels.some(l=>labels.includes(l.toLowerCase()))) return rule.team;
    if(rule.isDefault) return rule.team;
  }
  return 'Other';
}
function processIssues(issues,progCfg,ttfrMap){
  const coe=state.activeCoe;
  const d={volume:0,ttfr:{met:0,total:0,sumH:0,countH:0},ttr:{met:0,total:0,sumH:0},byCategory:{},byTier:{'Tier 0':0,'Tier 1':0,'Tier 2':0,'Tier 3':0,'Unknown':0},byOwnership:{},rawIssues:issues,ttfrMap:ttfrMap||{}};
  for(const issue of issues){
    const cat=issue.fields?.customfield_10490?.value||'Uncategorized';
    const sub=issue.fields?.customfield_10490?.child?.value||null;
    if(cat.toLowerCase()==='other'&&sub&&sub.toLowerCase()==='redirect') continue;
    d.volume++;
    if(!d.byCategory[cat]) d.byCategory[cat]={volume:0,ttfr:{met:0,total:0},ttr:{met:0,total:0},subcategories:{}};
    d.byCategory[cat].volume++;
    if(sub){if(!d.byCategory[cat].subcategories[sub])d.byCategory[cat].subcategories[sub]={volume:0,ttfr:{met:0,total:0},ttr:{met:0,total:0}};d.byCategory[cat].subcategories[sub].volume++;}
    const tierRaw=issue.fields?.customfield_10438;
    const tier=tierRaw?(tierRaw.value||String(tierRaw)):'Unknown';
    d.byTier[tier]=(d.byTier[tier]||0)+1;
    const owner=classifyOwnership(issue,progCfg);
    d.byOwnership[owner]=(d.byOwnership[owner]||0)+1;
    const ttfrH=(ttfrMap&&issue.key in ttfrMap)?ttfrMap[issue.key]:null;
    d.ttfr.total++;d.byCategory[cat].ttfr.total++;if(sub)d.byCategory[cat].subcategories[sub].ttfr.total++;
    if(ttfrH!==null){d.ttfr.sumH+=ttfrH;d.ttfr.countH++;if(ttfrH<=coe.ttfrGoal){d.ttfr.met++;d.byCategory[cat].ttfr.met++;if(sub)d.byCategory[cat].subcategories[sub].ttfr.met++;}}
    const ttrH=getTTRHours(issue);
    if(ttrH!==null){d.ttr.total++;d.ttr.sumH+=ttrH;d.byCategory[cat].ttr.total++;if(sub)d.byCategory[cat].subcategories[sub].ttr.total++;if(ttrH<=coe.ttrGoal){d.ttr.met++;d.byCategory[cat].ttr.met++;if(sub)d.byCategory[cat].subcategories[sub].ttr.met++;}}
  }
  return d;
}
async function doRefresh(){
  const coe=state.activeCoe;
  if(state.loading) return;
  state.loading=true;
  document.getElementById('refreshBtn').disabled=true;
  const _sel=document.getElementById('monthSel');
  if(!_sel||!_sel.value){document.getElementById('lastUpdated').textContent='Please select a month first.';state.loading=false;document.getElementById('refreshBtn').disabled=false;return;}
  const _v=JSON.parse(_sel.value); state.period=getMonthRange(_v.y,_v.m);
  const period=state.period;
  const frozen=getFrozen(coe.id,period.key);
  if(frozen){
    state.programs=frozen.programs; state.phcTotal=frozen.phcTotal;
    renderOverview(); for(const prog of coe.programs) renderProgram(prog);
    document.getElementById('lastUpdated').textContent=`\u2744\uFE0F ${period.label} \u00B7 ${coe.displayName} (frozen ${new Date(frozen.frozenAt).toLocaleDateString()})`;
    updateFreezeUI(); state.loading=false; document.getElementById('refreshBtn').disabled=false; return;
  }
  const allLevels=[...new Set(coe.programs.flatMap(p=>p.levels||[p.level]))];
  const levelFilter=allLevels.length===1?`level = "${allLevels[0]}"`:`level in (${allLevels.map(l=>`"${l}"`).join(',')})`;
  try{
    const allIssues=await fetchCoeIssues(period,levelFilter,ALL_FIELDS);
    document.getElementById('lastUpdated').textContent=`Fetching TTFR data for ${allIssues.length} tickets\u2026`;
    const ttfrMap=await fetchTTFRData(allIssues.map(i=>i.key));
    state.programs={};
    for(const prog of coe.programs){
      const progLevels=prog.levels||[prog.level];
      const progIssues=allIssues.filter(i=>{
        const secOk=progLevels.includes(i.fields?.security?.name||'');
        const catOk=!prog.categoryFilter||prog.categoryFilter.includes(i.fields?.customfield_10490?.value||'');
        return secOk&&catOk;
      });
      state.programs[prog.name]=processIssues(progIssues,prog,ttfrMap);
    }
    renderOverview();
    for(const prog of coe.programs) renderProgram(prog);
    const cachedPHC=getCachedPHC(period.key);
    if(cachedPHC){
      state.phcTotal=cachedPHC;
    } else {
      document.getElementById('lastUpdated').textContent='Loading PHC context (volume + TTR)\u2026';
      const phcIssues=await fetchPeriodIssues(period,null,PHC_FIELDS);
      const phcTTR={met:0,total:0};
      for(const t of phcIssues){const h=getTTRHours(t);if(h!==null){phcTTR.total++;if(h<=24)phcTTR.met++;}}
      document.getElementById('lastUpdated').textContent=`Fetching PHC TTFR for ${phcIssues.length} tickets\u2026`;
      const phcTtfrMap=await fetchTTFRData(phcIssues.map(i=>i.key));
      const phcTTFR={met:0,total:phcIssues.length};
      for(const t of phcIssues){const h=phcTtfrMap[t.key]??null;if(h!==null&&h<=8)phcTTFR.met++;}
      state.phcTotal={total:phcIssues.length,ttfr:phcTTFR,ttr:phcTTR};
      cachePHC(period.key,state.phcTotal);
    }
    renderOverview();
    document.getElementById('lastUpdated').textContent=`Updated ${new Date().toLocaleTimeString()} \u00B7 ${period.label} \u00B7 ${allIssues.length} ${coe.displayName} tickets \u00B7 ${state.phcTotal.total.toLocaleString()} PHC total${cachedPHC?' (cached)':''}`;
    updateFreezeUI();
  }catch(e){document.getElementById('lastUpdated').textContent=`Error: ${e.message||e}`;console.error(e);}
  state.loading=false;
  document.getElementById('refreshBtn').disabled=false;
}
function pct(m,t){return t>0?Math.round(m/t*100):null;}
function pctClass(p){if(p===null)return'na';return p>=90?'good':p>=70?'warn':'bad';}
function pctColor(p){if(p===null)return'var(--gray-400)';return p>=90?'var(--teal)':p>=70?'var(--orange)':'var(--guava)';}
function killChart(id){if(state.charts[id]){state.charts[id].destroy();delete state.charts[id];}}
function slaBadge(met,total){
  if(!total) return'<span style="font-size:10px;color:var(--gray-400);">\u2014</span>';
  const p=Math.round(met/total*100);
  const bg=p>=90?'#d1fae5':p>=70?'#fef3c7':'#fee2e2';
  const col=p>=90?'#065f46':p>=70?'#92400e':'#991b1b';
  return`<span style="background:${bg};color:${col};border-radius:4px;padding:1px 6px;font-size:10px;font-weight:700;white-space:nowrap;">${p}%</span>`;
}
function periodBar(){return`<div class="period-bar"><span>Period: <strong>${state.period?.label||'\u2014'}</strong> &nbsp;\u00B7&nbsp; ${state.period?.start||''} \u2192 ${state.period?.end||''}</span><span style="color:var(--gray-400);font-size:11px">Live from PHC JIRA</span></div>`;}
function slaGaugeHTML(title,met,total,goalH,avgH,risk){
  const p=pct(met,total),cls=pctClass(p),w=p!==null?Math.min(p,100):0,barColor=pctColor(p);
  const avgStr=avgH!=null?`<div style="font-size:11px;color:var(--gray-400);margin-top:2px;">Avg: <strong style="color:var(--gray-600)">${avgH<1?(avgH*60).toFixed(0)+'m':avgH.toFixed(1)+'h'}</strong></div>`:'';
  const riskStr=(risk&&(risk.overdue>0||risk.warn>0))?`<div style="display:flex;gap:5px;justify-content:center;flex-wrap:wrap;margin-top:8px;">${risk.overdue>0?`<span class="risk-chip chip-over">\uD83D\uDD34 ${risk.overdue} overdue</span>`:''}${risk.warn>0?`<span class="risk-chip chip-warn">\uD83D\uDFE1 ${risk.warn} at risk</span>`:''}</div>`:'';
  return`<div class="sla-card"><div class="sla-title">${title}</div><div class="sla-pct ${cls}">${p!==null?p+'%':'N/A'}</div>${avgStr}<div class="sla-sub">${p!==null?`${met} of ${total} tickets met goal`:'No eligible tickets'}</div><div class="sla-bar-wrap"><div class="sla-bar" style="width:${w}%;background:${barColor}"></div><div class="goal-line"></div></div><div class="goal-chip">\u2264 ${goalH} business hours \u2022 90% target</div>${riskStr}</div>`;
}
function toggleCatRow(safeId,evt){evt.stopPropagation();const children=document.querySelectorAll(`[data-parent="${safeId}"]`);const isOpen=children[0]?.classList.contains('open');children.forEach(c=>c.classList.toggle('open',!isOpen));const tog=document.getElementById('tog-'+safeId);if(tog)tog.textContent=isOpen?'\u25B6':'\u25BC';}
function catTableHTML(byCategory,color,totalVol){
  if(!byCategory||!Object.keys(byCategory).length) return'<div style="padding:16px;color:var(--gray-600);font-size:12px;">No category data for this period.</div>';
  const sorted=Object.entries(byCategory).sort((a,b)=>b[1].volume-a[1].volume);
  let html=`<div class="cat-table-wrap">
    <div class="cat-header-row">
      <div style="width:14px;margin-right:6px;"></div>
      <div style="flex:1;">Category / Subcategory</div>
      <div style="width:45px;text-align:right;">Count</div>
      <div style="width:80px;margin-left:8px;"></div>
      <div style="width:32px;text-align:right;">%</div>
      <div style="width:52px;text-align:center;margin-left:8px;">TTFR</div>
      <div style="width:52px;text-align:center;margin-left:4px;">TTR</div>
    </div>`;
  sorted.forEach(([cat,data])=>{
    const hasSubs=Object.keys(data.subcategories||{}).length>0;
    const safeId=`c_${cat.replace(/[^a-z0-9]/gi,'_')}`;
    const barW=totalVol>0?Math.min(Math.round(data.volume/totalVol*100),100):0;
    const pctStr=totalVol>0?`${Math.round(data.volume/totalVol*100)}%`:'\u2014';
    const ttfrB=data.ttfr?slaBadge(data.ttfr.met,data.ttfr.total):'<span style="font-size:10px;color:var(--gray-400);">\u2014</span>';
    const ttrB=data.ttr?slaBadge(data.ttr.met,data.ttr.total):'<span style="font-size:10px;color:var(--gray-400);">\u2014</span>';
    html+=`<div class="cat-row parent-row" onclick="toggleCatRow('${safeId}',event)">
      <div class="cat-toggle" id="tog_${safeId}">${hasSubs?'\u25B6':''}</div>
      <div class="cat-name">${cat}</div>
      <div class="cat-vol-col">${data.volume}</div>
      <div class="cat-bar-col"><div class="cat-bar-bg"><div class="cat-bar-fill" style="width:${barW}%;background:${color};"></div></div></div>
      <div class="cat-pct-col">${pctStr}</div>
      <div style="width:52px;text-align:center;margin-left:8px;">${ttfrB}</div>
      <div style="width:52px;text-align:center;margin-left:4px;">${ttrB}</div>
    </div>`;
    if(hasSubs){
      Object.entries(data.subcategories).sort((a,b)=>b[1].volume-a[1].volume).forEach(([sub,sd])=>{
        const vol=typeof sd==='object'?sd.volume:sd;
        const subBar=data.volume>0?Math.min(Math.round(vol/data.volume*100),100):0;
        const subPct=data.volume>0?`${Math.round(vol/data.volume*100)}%`:'\u2014';
        const subTtfr=(typeof sd==='object'&&sd.ttfr)?slaBadge(sd.ttfr.met,sd.ttfr.total):'<span style="font-size:10px;color:var(--gray-400);">\u2014</span>';
        const subTtr=(typeof sd==='object'&&sd.ttr)?slaBadge(sd.ttr.met,sd.ttr.total):'<span style="font-size:10px;color:var(--gray-400);">\u2014</span>';
        html+=`<div class="cat-row child-row" data-parent="${safeId}">
          <div class="cat-toggle"></div><div class="cat-name">\u21B3 ${sub}</div>
          <div class="cat-vol-col">${vol}</div>
          <div class="cat-bar-col"><div class="cat-bar-bg"><div class="cat-bar-fill" style="width:${subBar}%;background:${color}99;"></div></div></div>
          <div class="cat-pct-col">${subPct}</div>
          <div style="width:52px;text-align:center;margin-left:8px;">${subTtfr}</div>
          <div style="width:52px;text-align:center;margin-left:4px;">${subTtr}</div>
        </div>`;
      });
    }
  });
  return html+'</div>';
}
function slaRiskHTML(rawIssues,progCfg){
  const coe=state.activeCoe;
  const coeLabel=progCfg&&(progCfg.ownershipRules||[]).find(r=>r.labels&&!r.isRisotto&&r.team!=='PSE'&&!r.isDefault)?.labels[0];
  const filtered=(rawIssues||[]).filter(t=>{if(!coeLabel)return true;const labels=(t.fields?.labels||[]).map(l=>l.toLowerCase());return labels.includes(coeLabel.toLowerCase());});
  const overdueTTFR=[],atRiskTTFR=[],overdueTTR=[],atRiskTTR=[];
  filtered.forEach(t=>{
    const status=(t.fields?.status?.name||'').toLowerCase();
    if(['done','closed','resolved','cancelled','canceled'].includes(status)) return;
    const ttfrO=getTTFROngoing(t),ttrO=getTTROngoing(t);
    if(ttfrO!==null){const p=ttfrO/coe.ttfrGoal*100;if(p>=100)overdueTTFR.push({t,p});else if(p>=75)atRiskTTFR.push({t,p});}
    if(ttrO!==null){const p=ttrO/coe.ttrGoal*100;if(p>=100)overdueTTR.push({t,p});else if(p>=75)atRiskTTR.push({t,p});}
  });
  if(!overdueTTFR.length&&!atRiskTTFR.length&&!overdueTTR.length&&!atRiskTTR.length) return'<div class="risk-empty">\u2705 No open tickets currently at risk or overdue</div>';
  const chips=`<div class="risk-summary-bar">${overdueTTR.length?`<span class="risk-chip chip-over">\uD83D\uDD34 ${overdueTTR.length} TTR overdue</span>`:''}${overdueTTFR.length?`<span class="risk-chip chip-over">\uD83D\uDD34 ${overdueTTFR.length} TTFR overdue</span>`:''}${atRiskTTR.length?`<span class="risk-chip chip-warn">\uD83D\uDFE1 ${atRiskTTR.length} TTR at risk</span>`:''}${atRiskTTFR.length?`<span class="risk-chip chip-warn">\uD83D\uDFE1 ${atRiskTTFR.length} TTFR at risk</span>`:''}`;
  const ticketRow=(item,type)=>{
    const key=item.t.key||'\u2014',assignee=(item.t.fields?.assignee?.displayName||'\u2014'),cat=item.t.fields?.customfield_10490?.value||'\u2014',status=item.t.fields?.status?.name||'\u2014';
    const over=item.p>=100;
    return`<tr><td><a href="https://gusto.atlassian.net/browse/${key}" target="_blank" style="color:var(--teal);font-weight:700;font-family:monospace;text-decoration:none">${key}</a></td><td style="font-size:12px">${assignee}</td><td style="font-size:11px;color:var(--gray-600)">${cat}</td><td style="font-size:11px;color:var(--gray-600)">${status}</td><td><span class="risk-badge ${over?'risk-over':'risk-warn'}">${type} ${over?'OVER':'\u226575%'}</span></td></tr>`;
  };
  const rows=[...overdueTTR.sort((a,b)=>b.p-a.p).map(x=>ticketRow(x,'TTR')),...overdueTTFR.sort((a,b)=>b.p-a.p).map(x=>ticketRow(x,'TTFR')),...atRiskTTR.sort((a,b)=>b.p-a.p).map(x=>ticketRow(x,'TTR')),...atRiskTTFR.sort((a,b)=>b.p-a.p).map(x=>ticketRow(x,'TTFR'))].slice(0,30);
  return`${chips}</div><table class="data-table risk-table" style="margin-top:8px"><thead><tr><th>Ticket</th><th>Assignee</th><th>Category</th><th>Status</th><th>Risk</th></tr></thead><tbody>${rows.join('')}</tbody></table>`;
}
function makeOwnershipChart(canvasId,byOwnership,accentColor){
  killChart(canvasId); const ctx=document.getElementById(canvasId)?.getContext('2d'); if(!ctx) return;
  const entries=Object.entries(byOwnership).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]);
  if(!entries.length) return;
  const getColor=k=>TEAM_COLORS[k]?TEAM_COLORS[k]:accentColor||'#ADB5BD';
  const total=entries.reduce((s,[,v])=>s+v,0);
  const legendRows=entries.map(([k,v])=>`<tr><td style="padding:2px 6px"><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${getColor(k)};margin-right:4px;"></span>${k}</td><td style="padding:2px 6px;text-align:right;font-weight:600">${v}</td><td style="padding:2px 6px;text-align:right;color:var(--gray-400)">${total?Math.round(v/total*100)+'%':''}</td></tr>`).join('');
  ctx.canvas.insertAdjacentHTML('afterend',`<table style="font-size:11px;margin-top:8px;width:100%">${legendRows}</table>`);
  state.charts[canvasId]=new Chart(ctx,{type:'doughnut',data:{labels:entries.map(([k])=>k),datasets:[{data:entries.map(([,v])=>v),backgroundColor:entries.map(([k])=>getColor(k)),borderWidth:2,borderColor:'#fff'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{size:11},padding:10,boxWidth:12}},tooltip:{callbacks:{label:ctx=>{const t=ctx.dataset.data.reduce((a,b)=>a+b,0);return` ${ctx.label}: ${ctx.parsed} (${t>0?Math.round(ctx.parsed/t*100):0}%)`;}}}}}});
}
function makeTierChart(canvasId,byTier){
  killChart(canvasId); const ctx=document.getElementById(canvasId)?.getContext('2d'); if(!ctx) return;
  const entries=['Tier 0','Tier 1','Tier 2','Tier 3','Unknown'].map(t=>[t,byTier[t]||0]).filter(([,v])=>v>0);
  if(!entries.length) return;
  state.charts[canvasId]=new Chart(ctx,{type:'doughnut',data:{labels:entries.map(([k])=>k),datasets:[{data:entries.map(([,v])=>v),backgroundColor:entries.map(([k])=>TIER_COLORS[k]||'#ADB5BD'),borderWidth:2,borderColor:'#fff'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{size:11},padding:10,boxWidth:12}},tooltip:{callbacks:{label:ctx=>{const total=ctx.dataset.data.reduce((a,b)=>a+b,0);return` ${ctx.label}: ${ctx.parsed} (${total>0?Math.round(ctx.parsed/total*100):0}%)`;}}}}}});
}
function makeCategoryChart(canvasId,byCategory,color){
  killChart(canvasId); const ctx=document.getElementById(canvasId)?.getContext('2d'); if(!ctx) return;
  const entries=Object.entries(byCategory).sort((a,b)=>b[1].volume-a[1].volume).slice(0,10);
  if(!entries.length) return;
  state.charts[canvasId]=new Chart(ctx,{type:'bar',data:{labels:entries.map(([k])=>k),datasets:[{label:'Tickets',data:entries.map(([,v])=>v.volume),backgroundColor:color+'BB',borderColor:color,borderWidth:1,borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{stepSize:1},grid:{color:'#E9ECEF'}},x:{grid:{display:false},ticks:{font:{size:10},maxRotation:30}}}}});
}
function renderOverview(){
  const coe=state.activeCoe;
  const el=document.getElementById('tab-overview');
  if(!state.period||!Object.keys(state.programs).length){el.innerHTML=`<div class="loading-overlay"><p>Select a month and click <strong>\u21BA Refresh</strong> to load data.</p></div>`;return;}
  const metricBlock=(label,p,met,total)=>`<div class="kpi-metric"><div class="kpi-metric-val" style="color:${pctColor(p)}">${p!==null?p+'%':'\u2014'}</div><div class="kpi-metric-lbl">${label}</div><div class="kpi-metric-sub">${met}/${total} met</div></div>`;
  const progCards=coe.programs.map(prog=>{
    const d=state.programs[prog.name]; if(!d) return'';
    const tp=pct(d.ttfr.met,d.ttfr.total),rp=pct(d.ttr.met,d.ttr.total);
    return`<div class="kpi-card"><div class="program-badge" style="background:${prog.bgColor};color:${prog.color};">${prog.name}</div><div class="kpi-vol">${d.volume.toLocaleString()}</div><div class="kpi-vol-label">tickets this period</div><div class="kpi-metrics">${metricBlock('TTFR',tp,d.ttfr.met,d.ttfr.total)}${metricBlock('TTR',rp,d.ttr.met,d.ttr.total)}</div></div>`;
  }).join('');
  const phc=state.phcTotal;
  let totalVol=0; for(const prog of coe.programs){const d=state.programs[prog.name];if(d)totalVol+=d.volume;}
  const phcHTML=phc?`
    <div class="section-header">PHC Context <span style="font-size:10px;font-weight:400;color:var(--gray-400);margin-left:6px;">vs. total PHC \u00B7 excludes WFM</span></div>
    <div class="chart-grid-2">
      <div class="card">
        <div class="card-title">Volume Share \u2014 ${coe.displayName} vs. All PHC</div>
        <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:4px;">
          <div><div style="font-size:11px;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px;">${coe.displayName}</div><div style="font-size:28px;font-weight:800;color:var(--accent)">${totalVol.toLocaleString()}</div></div>
          <div style="font-size:18px;color:var(--gray-400)">of</div>
          <div><div style="font-size:11px;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px;">PHC Total</div><div style="font-size:28px;font-weight:800;color:var(--navy)">${phc.total.toLocaleString()}</div></div>
          <div style="font-size:13px;font-weight:700;color:var(--gray-600)">(${Math.round(totalVol/phc.total*100)}%)</div>
        </div>
        <div style="font-size:11px;color:var(--gray-600);margin-bottom:12px;">${coe.displayName} tickets as share of all PHC this period</div>
        <div style="height:10px;border-radius:5px;background:var(--gray-100);overflow:hidden;">
          <div style="height:100%;width:${Math.min(Math.round(totalVol/phc.total*100),100)}%;background:var(--accent);border-radius:5px;"></div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">SLA vs. PHC Overall</div>
        <table class="data-table"><thead><tr><th>Program</th><th style="text-align:center">TTFR</th><th style="text-align:center">TTR</th></tr></thead>
        <tbody>
          ${coe.programs.map(prog=>{const d=state.programs[prog.name];if(!d)return'';return`<tr><td><div style="display:flex;align-items:center;gap:7px;"><div style="width:9px;height:9px;border-radius:50%;background:${prog.color};flex-shrink:0;"></div><span style="font-size:12px;font-weight:600;color:var(--navy);">${prog.name}</span></div></td><td style="text-align:center">${slaBadge(d.ttfr.met,d.ttfr.total)}</td><td style="text-align:center">${slaBadge(d.ttr.met,d.ttr.total)}</td></tr>`;}).join('')}
          ${phc.ttfr?`<tr style="border-top:2px solid var(--gray-200);background:var(--gray-50)"><td><span style="font-size:12px;font-weight:800;color:var(--navy);">PHC Overall</span></td><td style="text-align:center">${slaBadge(phc.ttfr.met,phc.ttfr.total)}</td><td style="text-align:center">${slaBadge(phc.ttr.met,phc.ttr.total)}</td></tr>`:''}
        </tbody></table>
      </div>
    </div>`:''
  el.innerHTML=`${periodBar()}<div class="section-header">Program Summary</div><div class="kpi-grid">${progCards}</div>${phcHTML}`;
}
function renderProgram(progCfg){
  const coe=state.activeCoe;
  const tabId='tab-prog-'+progCfg.name.toLowerCase().replace(/\W+/g,'-');
  const el=document.getElementById(tabId); if(!el) return;
  const d=state.programs[progCfg.name];
  if(!d){el.innerHTML='<div class="loading-overlay"><p>Click \u21BA Refresh to load data.</p></div>';return;}
  el.innerHTML=`
    ${periodBar()}
    <div class="section-header">SLA Performance</div>
    <div class="sla-grid">
      ${(()=>{
        const ttfrRisk={overdue:0,warn:0},ttrRisk={overdue:0,warn:0};
        (d.rawIssues||[]).forEach(t=>{
          const ttfrO=getTTFROngoing(t,d.ttfrMap),ttrO=getTTROngoing(t);
          if(ttfrO!==null){const p=ttfrO/coe.ttfrGoal;if(p>=1)ttfrRisk.overdue++;else if(p>=0.75)ttfrRisk.warn++;}
          if(ttrO!==null){const p=ttrO/coe.ttrGoal;if(p>=1)ttrRisk.overdue++;else if(p>=0.75)ttrRisk.warn++;}
        });
        return slaGaugeHTML('Time to First Response',d.ttfr.met,d.ttfr.total,coe.ttfrGoal,d.ttfr.countH>0?d.ttfr.sumH/d.ttfr.countH:null,ttfrRisk)
          +slaGaugeHTML('Time to Resolution',d.ttr.met,d.ttr.total,coe.ttrGoal,d.ttr.total>0?d.ttr.sumH/d.ttr.total:null,ttrRisk);
      })()}
    </div>
    <div class="section-header">Volume, Ownership & Tier</div>
    <div class="chart-grid-3">
      <div class="card"><div class="card-title">Volume by Category</div><div class="chart-wrap"><canvas id="c-${tabId}-cat"></canvas></div></div>
      <div class="card"><div class="card-title">Ticket Ownership</div><div class="chart-wrap"><canvas id="c-${tabId}-own"></canvas></div></div>
      <div class="card"><div class="card-title">Tier Distribution</div><div class="chart-wrap"><canvas id="c-${tabId}-tier"></canvas></div></div>
    </div>
    <div class="section-header">CSAT</div>
    <div id="csat-${tabId}" class="card" style="margin-bottom:18px;">${csatSectionHTML(progCfg)}</div>
    <div class="section-header">\u26A0\uFE0F SLA Risk Radar <span style="font-size:10px;font-weight:400;color:var(--gray-400)">Open tickets at \u226575% of SLA goal or already breached</span></div>
    <div class="card" style="margin-bottom:18px;">${slaRiskHTML(d.rawIssues,progCfg)}</div>
    <div class="section-header">Category & Subcategory Breakdown <span style="font-weight:400;font-size:10px;color:var(--gray-400)">Click row to expand</span></div>
    <div class="card">${catTableHTML(d.byCategory,progCfg.color,d.volume)}</div>`;
  makeCategoryChart(`c-${tabId}-cat`,d.byCategory,progCfg.color);
  makeOwnershipChart(`c-${tabId}-own`,d.byOwnership,progCfg.color);
  makeTierChart(`c-${tabId}-tier`,d.byTier);
}
async function loadTrends(){
  const coe=state.activeCoe;
  const el=document.getElementById('tab-trends');
  el.innerHTML=`<div class="loading-overlay"><div class="spinner"></div><p>Loading 6-month trend\u2026</p></div>`;
  const _now=new Date(),months=[];
  for(let i=5;i>=0;i--){const d=new Date(Date.UTC(_now.getUTCFullYear(),_now.getUTCMonth()-i,1));months.push(getMonthRange(d.getUTCFullYear(),d.getUTCMonth()+1));}
  const allLevels=[...new Set(coe.programs.flatMap(p=>p.levels||[p.level]))];
  const levelFilter=allLevels.length===1?`level = "${allLevels[0]}"`:`level in (${allLevels.map(l=>`"${l}"`).join(',')})`;
  const byMonth=months.map(()=>({volume:0,ttfr:{met:0,total:0},ttr:{met:0,total:0},ownership:{},tier:{}}));
  try{
    for(let mi=0;mi<months.length;mi++){
      const m=months[mi];
      el.innerHTML=`<div class="loading-overlay"><div class="spinner"></div><p>Loading trends\u2026 ${m.label}</p></div>`;
      const issues=await fetchPeriodWeekly(m,levelFilter,['security','customfield_10490','customfield_10438','created','resolutiondate','labels','assignee']);
      const relevant=issues.filter(i=>coe.programs.some(p=>{
        const secOk=(p.levels||[p.level]).includes(i.fields?.security?.name||'');
        const catOk=!p.categoryFilter||p.categoryFilter.includes(i.fields?.customfield_10490?.value||'');
        return secOk&&catOk;
      }));
      byMonth[mi].volume=relevant.length;
      for(const t of relevant){
        const r=getTTRHours(t); byMonth[mi].ttr.total++;
        if(r!==null&&r<=coe.ttrGoal) byMonth[mi].ttr.met++;
        const matchProg=coe.programs.find(p=>(p.levels||[p.level]).includes(t.fields?.security?.name||''))||coe.programs[0];
        const owner=classifyOwnership(t,matchProg);
        byMonth[mi].ownership[owner]=(byMonth[mi].ownership[owner]||0)+1;
        const trRaw=t.fields?.customfield_10438;
        const tier=trRaw?(trRaw.value||String(trRaw)):'Unknown';
        byMonth[mi].tier[tier]=(byMonth[mi].tier[tier]||0)+1;
      }
      if(relevant.length>0){
        const ttfrMap=await fetchTTFRData(relevant.map(i=>i.key));
        byMonth[mi].ttfr.total=relevant.length;
        for(const t of relevant){const h=ttfrMap[t.key]??null;if(h!==null&&h<=coe.ttfrGoal)byMonth[mi].ttfr.met++;}
      }
    }
  }catch(e){console.error('Trends error:',e);}
  state.trendsData={months,byMonth};
  const lbls=months.map(m=>m.label);
  const volData=byMonth.map(m=>m.volume);
  const ttfrData=byMonth.map(m=>pct(m.ttfr.met,m.ttfr.total));
  const ttrData=byMonth.map(m=>pct(m.ttr.met,m.ttr.total));
  const allOwnKeys=[...new Set(byMonth.flatMap(m=>Object.keys(m.ownership)))].sort();
  const allTierKeys=['Tier 0','Tier 1','Tier 2','Tier 3','Unknown'].filter(k=>byMonth.some(m=>m.tier[k]));
  const goalLine={label:'90% Goal',data:lbls.map(()=>90),borderColor:'#ADB5BD',borderDash:[5,4],pointRadius:0,borderWidth:1.5};
  el.innerHTML=`${periodBar()}<div class="trends-grid">
    <div class="card full-row"><div class="card-title">Monthly Volume \u2014 ${coe.displayName}</div><div class="chart-wrap-tall"><canvas id="t-vol"></canvas></div></div>
    <div class="card"><div class="card-title">TTFR % (\u2264${coe.ttfrGoal}h)</div><div class="chart-wrap"><canvas id="t-ttfr"></canvas></div></div>
    <div class="card"><div class="card-title">TTR % (\u2264${coe.ttrGoal}h)</div><div class="chart-wrap"><canvas id="t-ttr"></canvas></div></div>
    <div class="card full-row"><div class="card-title">Ticket Ownership Over Time</div><div class="chart-wrap-tall"><canvas id="t-own"></canvas></div></div>
    <div class="card full-row"><div class="card-title">Tier Distribution Over Time</div><div class="chart-wrap-tall"><canvas id="t-tier"></canvas></div></div>
  </div>`;
  const co={responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,grid:{color:'#E9ECEF'}},x:{grid:{display:false}}}};
  state.charts['t-vol']=new Chart(document.getElementById('t-vol').getContext('2d'),{type:'bar',data:{labels:lbls,datasets:[{label:'Tickets',data:volData,backgroundColor:coe.accentColor+'BB',borderColor:coe.accentColor,borderWidth:1,borderRadius:4}]},options:co});
  const lo={responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{min:0,max:100,grid:{color:'#E9ECEF'},ticks:{callback:v=>v+'%'}},x:{grid:{display:false}}}};
  state.charts['t-ttfr']=new Chart(document.getElementById('t-ttfr').getContext('2d'),{type:'line',data:{labels:lbls,datasets:[{label:'TTFR%',data:ttfrData,borderColor:coe.accentColor,backgroundColor:coe.accentColor+'22',fill:true,tension:0.3,pointRadius:4},goalLine]},options:lo});
  state.charts['t-ttr']=new Chart(document.getElementById('t-ttr').getContext('2d'),{type:'line',data:{labels:lbls,datasets:[{label:'TTR%',data:ttrData,borderColor:coe.accentColor,backgroundColor:coe.accentColor+'22',fill:true,tension:0.3,pointRadius:4},goalLine]},options:lo});
  const stackOpts={responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{size:11},padding:10,boxWidth:12}}},scales:{x:{stacked:true,grid:{display:false}},y:{stacked:true,beginAtZero:true,grid:{color:'#E9ECEF'}}}};
  state.charts['t-own']=new Chart(document.getElementById('t-own').getContext('2d'),{type:'line',data:{labels:lbls,datasets:allOwnKeys.map(k=>({label:k,data:byMonth.map(m=>m.ownership[k]||0),borderColor:TEAM_COLORS[k]||'#ADB5BD',backgroundColor:(TEAM_COLORS[k]||'#ADB5BD')+'33',fill:false,tension:0.3,borderWidth:2,pointRadius:4}))},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{size:11},padding:10,boxWidth:12}}},scales:{y:{beginAtZero:true,grid:{color:'#E9ECEF'}},x:{grid:{display:false}}}}});
  state.charts['t-tier']=new Chart(document.getElementById('t-tier').getContext('2d'),{type:'line',data:{labels:lbls,datasets:allTierKeys.map(k=>({label:k,data:byMonth.map(m=>m.tier[k]||0),borderColor:TIER_COLORS[k]||'#ADB5BD',backgroundColor:(TIER_COLORS[k]||'#ADB5BD')+'33',fill:false,tension:0.3,borderWidth:2,pointRadius:4}))},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{size:11},padding:10,boxWidth:12}}},scales:{y:{beginAtZero:true,grid:{color:'#E9ECEF'}},x:{grid:{display:false}}}}});
}
function renderRCA(){
  const coe=state.activeCoe;
  const el=document.getElementById('tab-rca');
  if(!state.period||!Object.keys(state.programs).length){el.innerHTML=`<div class="loading-overlay"><p>Please click \u21BA Refresh first, then return to this tab.</p></div>`;return;}
  const GOAL=90;
  const INTERVENTION_META={RUNBOOK:{icon:'\uD83D\uDCCB',label:'Write Risotto Runbook',color:'#7c3aed',bg:'#ede9fe'},SYSTEM_FIX:{icon:'\uD83D\uDD27',label:'Workday / System Fix',color:'#b45309',bg:'#fef3c7'},PROACTIVE_COMM:{icon:'\uD83D\uDCE3',label:'Proactive Communication',color:'#0369a1',bg:'#e0f2fe'},PROCESS_CHANGE:{icon:'\uD83D\uDD04',label:'Process Change',color:'#065f46',bg:'#d1fae5'}};
  const STOP_WORDS=new Set(['a','an','the','is','are','was','were','be','been','being','have','has','had','do','does','did','will','would','could','should','may','might','can','i','my','your','our','their','this','that','these','those','for','to','of','in','on','at','by','with','from','about','and','or','but','not','no','it','its','we','they','you','what','when','where','how','who','which','as','if','so','than','then','there','here','into','out','up','down','off','over','under','again','once','all','both','each','more','most','other','some','such','after','request','please','need','question','help','regarding','related','re','hi','hello','issue','using','want','also','just','still']);
  function classifyIntervention(text){const t=text.toLowerCase();if(/open enrollment|enrollment event|qualifying event|new hire|onboarding|day.?1|starting work|return(ing)? from leave|leave start|benefit start|anniversary|life event/.test(t))return'PROACTIVE_COMM';if(/error|not work|unable|can't|cannot|broken|fail|crash|won't load|page not|button|navigate|portal|workday|login|access|platform|system issue|glitch/.test(t))return'SYSTEM_FIX';if(/how (do|can|to)|what (is|are|happens)|when (do|can|will|is)|am i eligible|do i qualify|is there|can i|policy|procedure|step|guide|who (do|should)|where (do|can)|which/.test(t))return'RUNBOOK';if(/change|update|process|form|submit|approval|workflow|request to|need to update|incorrect|wrong|fix/.test(t))return'PROCESS_CHANGE';return'RUNBOOK';}
  function actionText(type,topicWord,catName,progName){const cap=w=>w.charAt(0).toUpperCase()+w.slice(1);switch(type){case'PROACTIVE_COMM':return`Send a targeted message to employees at the relevant trigger point proactively answering common ${cap(topicWord)} questions in ${catName}.`;case'SYSTEM_FIX':return`File a Workday/portal UX improvement: employees are confused navigating ${cap(topicWord)} in the ${catName} flow.`;case'RUNBOOK':return`Build a Risotto runbook for "${catName} \u2014 ${cap(topicWord)}" covering top policy scenarios.`;case'PROCESS_CHANGE':return`Review the ${catName} ${cap(topicWord)} workflow with the ${progName} team \u2014 simplify or automate where possible.`;}}
  function analyzeCategoryTickets(summaries,catName,progName){
  if(!summaries.length)return[];
  const allTokens=[];summaries.forEach(s=>{const words=s.toLowerCase().replace(/[^a-z\s'-]/g,'').split(/\s+/).filter(w=>w.length>3&&!STOP_WORDS.has(w));allTokens.push(...words);for(let i=0;i<words.length-1;i++){if(!STOP_WORDS.has(words[i])&&!STOP_WORDS.has(words[i+1]))allTokens.push(words[i]+' '+words[i+1]);}});
  const freq={};allTokens.forEach(t=>{freq[t]=(freq[t]||0)+1;});
  const topTerms=Object.entries(freq).filter(([,v])=>v>=Math.min(2,Math.ceil(summaries.length*0.15))).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([w])=>w);
  if(!topTerms.length)topTerms.push(catName.toLowerCase().split(' ')[0]);
  const groups=[],used=new Set();for(const term of topTerms){const matching=summaries.filter((s,i)=>!used.has(i)&&s.toLowerCase().includes(term));
  if(!matching.length)continue;matching.forEach(s=>{const idx=summaries.findIndex((x,i)=>x===s&&!used.has(i));
  if(idx>=0)used.add(idx);});
  const type=classifyIntervention(term+' '+matching.join(' '));groups.push({label:(({PROACTIVE_COMM:'Lifecycle-triggered: ',SYSTEM_FIX:'Platform confusion: ',RUNBOOK:'Policy question: ',PROCESS_CHANGE:'Process gap: '})[type])+term.charAt(0).toUpperCase()+term.slice(1)+' questions',term,count:matching.length,type,evidence:matching.slice(0,3),action:actionText(type,term,catName,progName)});}
  const excluded=coe.rcaExcludeInterventions||[];
  return groups.filter(g=>!excluded.includes(g.type)).sort((a,b)=>b.count-a.count);}
  function renderGroupCard(g){const meta=INTERVENTION_META[g.type]||INTERVENTION_META.RUNBOOK;const tickets=g.evidence.map(s=>`<span class="dive-ticket-sample">"${s}"</span>`).join('');return`<div class="dive-group"><div class="dive-group-header"><span class="dive-intervention-badge" style="background:${meta.bg};color:${meta.color};">${meta.icon} ${meta.label}</span><span class="dive-count">${g.count} ticket${g.count>1?'s':''}</span></div><div class="dive-group-name">${g.label}</div><div class="dive-evidence">\uD83D\uDCCC Examples: ${tickets}</div><div class="dive-action">\u2192 ${g.action}</div></div>`;}
  function finding(sev,title,pts,rc,rec){const labels={critical:'\uD83D\uDD34 Critical',watch:'\uD83D\uDFE1 Watch',positive:'\uD83D\uDFE2 Positive'};return`<div class="finding-card finding-${sev}"><span class="finding-badge finding-badge-${sev}">${labels[sev]}</span><div class="finding-title">${title}</div><div class="finding-label">\uD83D\uDCCA What the data shows</div><ul class="finding-list">${pts.map(p=>`<li>${p}</li>`).join('')}</ul><div class="finding-label">\uD83D\uDD0D Root cause hypothesis</div><p class="finding-text">${rc}</p><div class="finding-rec"><div class="finding-label">\u2705 Recommendation</div><p class="finding-text">${rec}</p></div></div>`;}
  const findings=[],actions=[];
  let totalVol=0;
  for(const prog of coe.programs){
    const d=state.programs[prog.name]; if(!d) continue;
    totalVol+=d.volume;
    const ttfrP=pct(d.ttfr.met,d.ttfr.total),ttrP=pct(d.ttr.met,d.ttr.total);
    const sorted=Object.entries(d.byCategory).sort((a,b)=>b[1].volume-a[1].volume);
    const top=sorted[0];
    const risotto=d.byOwnership['Risotto']||0,risPct=d.volume?Math.round(risotto/d.volume*100):0;
    const pse=d.byOwnership['PSE']||0,psePct=d.volume?Math.round(pse/d.volume*100):0;
    if(ttfrP!==null&&ttfrP<GOAL){const miss=d.ttfr.total-d.ttfr.met;
    findings.push(finding(ttfrP<70?'critical':'watch',`${prog.name} First Response Below Target \u2014 ${ttfrP}% (goal 90%)`,[`${d.ttfr.met} of ${d.ttfr.total} eligible tickets met the \u2264${coe.ttfrGoal}h goal`,`${miss} ticket${miss>1?'s':''} missed`,top?`Top category: ${top[0]} (${top[1].volume} tickets)`:'',...Object.entries(d.byOwnership).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([t,v])=>`${t} handled ${v} tickets (${Math.round(v/d.volume*100)}%)`)].filter(Boolean),`TTFR misses mean tickets sit unassigned or Risotto routes incorrectly. ${risPct}% Risotto coverage.`,`<strong>Review triage cadence.</strong> Check whether missed-TTFR tickets share a category or owner. Set a JIRA filter for tickets with no comment after ${coe.ttfrGoal}h.`));
    actions.push({p:'P1',color:'#856404',bg:'#fff3cd',action:`Fix ${prog.name} TTFR \u2014 ${GOAL-ttfrP}pts below target`,detail:`${miss} tickets missed \u2264${coe.ttfrGoal}h.`,owner:`${prog.name} team lead`});}
    if(ttrP!==null&&ttrP<GOAL){const miss=d.ttr.total-d.ttr.met;findings.push(finding(ttrP<70?'critical':'watch',`${prog.name} Resolution Time Below Target \u2014 ${ttrP}% (goal 90%)`,[`${d.ttr.met} of ${d.ttr.total} eligible tickets resolved within \u2264${coe.ttrGoal}h`,`${miss} ticket${miss>1?'s':''} exceeded the goal`,sorted.slice(0,4).map(([c,v])=>`${c}: ${v.volume} tickets`).join(' \u00B7 ')].filter(Boolean),`Resolution delays typically come from external dependencies, policy review, or missing runbooks.`,`<strong>Identify top 2\u20133 categories with worst TTR</strong> and build runbooks for each.`));actions.push({p:ttrP<70?'P0':'P1',color:ttrP<70?'#721c24':'#856404',bg:ttrP<70?'#f8d7da':'#fff3cd',action:`Reduce ${prog.name} TTR \u2014 ${miss} tickets over goal`,detail:`Build runbooks for top categories.`,owner:`${prog.name} team + Risotto`});}
    const topIsProgName=top&&(top[0].toLowerCase().replace(/\s+/g,'')===(prog.name.toLowerCase().replace(/\s+/g,''))||top[0].toLowerCase().replace(/\s+/g,'')===(coe.displayName.toLowerCase().replace(/\s+/g,'')));
    if(top&&!topIsProgName&&top[1].volume/d.volume>0.35){const share=Math.round(top[1].volume/d.volume*100);findings.push(finding('watch',`${prog.name}: ${top[0]} Drives ${share}% of Volume`,[`${top[1].volume} of ${d.volume} tickets in ${top[0]}`,`Single-category concentration suggests a systemic gap`,sorted.slice(1,4).map(([c,v])=>`${c}: ${v.volume} (${Math.round(v.volume/d.volume*100)}%)`).join(' \u00B7 ')],`High concentration points to a missing self-service option or recurring lifecycle trigger.`,`<strong>Run a root cause sprint on ${top[0]}.</strong> The deep-dive below groups ticket subjects by question type.`));actions.push({p:'P1',color:'#856404',bg:'#fff3cd',action:`Root cause sprint: ${prog.name} / ${top[0]} (${share}% of volume)`,detail:`Group ticket subjects \u2192 Workday fix, runbook, or proactive comms.`,owner:`${prog.name} team + HR Ops`});}
    if(risPct===0&&d.volume>=5){
    findings.push(finding('watch',`${prog.name} Has No Risotto Coverage \u2014 ${d.volume} Tickets Fully Manual`,[
        `0 of ${d.volume} tickets resolved by Risotto`,
        `Every ticket requires advocate time`
        ,`Top: ${sorted.slice(0,4).map(([c,v])=>c+' ('+v.volume+')').join(', ')}`]
        ,`Risotto doesn't have ${prog.name} runbooks yet, or ticket types require human judgment.`,`<strong>Pilot at least one Risotto runbook.</strong> Start with the most common question.`));}
  else if(risPct>0&&risPct<20&&d.volume>=10){findings.push(finding('watch',`${prog.name} Risotto Coverage Low at ${risPct}% \u2014 Growth Opportunity`,[`Risotto resolving ${risotto} of ${d.volume} tickets`,`${d.volume-risotto} tickets still requiring advocates`,`Top unautomated: ${sorted.filter(([c])=>c!=='Other').slice(0,3).map(([c,v])=>c+' ('+v.volume+')').join(', ')}`],`Risotto is active but has limited runbook coverage.`,`<strong>Expand Risotto to the next 2 highest-volume categories.</strong>`));}else if(risPct>=50){findings.push(finding('positive',`${prog.name} Risotto Coverage Strong at ${risPct}%`,[`Risotto resolving ${risotto} of ${d.volume} tickets`,ttfrP>=GOAL?`TTFR ${ttfrP}% \u2014 on target`:'',ttrP>=GOAL?`TTR ${ttrP}% \u2014 on target`:''].filter(Boolean),`High automation means routine questions are deflected before reaching advocates.`
  ,`<strong>Audit Risotto resolution quality.</strong> Check for tickets that reopened after Risotto close.`));}

    if(ttfrP!==null&&ttfrP>=GOAL&&ttrP!==null&&ttrP>=GOAL){findings.push(finding('positive',`${prog.name} Meeting All SLA Targets \u2014 TTFR ${ttfrP}%, TTR ${ttrP}%`,[`TTFR: ${d.ttfr.met}/${d.ttfr.total} met \u2264${coe.ttfrGoal}h`,`TTR: ${d.ttr.met}/${d.ttr.total} met \u2264${coe.ttrGoal}h`,`${d.volume} tickets \u00B7 Risotto ${risPct}% \u00B7 PSE ${psePct}%`],`Operating within targets.`,`<strong>Document what's working</strong> and use this period as a trend baseline.`));}
  }
  const diveItems=[];
  for(const prog of coe.programs){
    const d=state.programs[prog.name]; if(!d) continue;
    const sortedCats=Object.entries(d.byCategory).sort((a,b)=>b[1].volume-a[1].volume);
    for(const [catName,catData] of sortedCats){
      if(catData.volume<2) continue;
      const tickets=(d.rawIssues||[]).filter(t=>(t.fields?.customfield_10490?.value||'Uncategorized')===catName);
      diveItems.push({prog,catName,volume:catData.volume,tickets});
    }
  }
  const actionRows=actions.map(r=>`<tr><td><span style="background:${r.bg};color:${r.color};padding:3px 8px;border-radius:4px;font-weight:700;font-size:11px">${r.p}</span></td><td><strong style="font-size:12px">${r.action}</strong></td><td style="font-size:12px;color:#555">${r.detail}</td><td style="font-size:12px;color:#666">${r.owner}</td></tr>`).join('');
  const divePlaceholders=diveItems.map((item,i)=>`<div class="dive-card" id="dive-${i}"><div class="dive-card-header"><span class="dive-program-badge" style="background:${item.prog.bgColor};color:${item.prog.color};">${item.prog.name}</span><span class="dive-cat-name">${item.catName}</span><span class="dive-vol">${item.volume} ticket${item.volume>1?'s':''}</span></div><div class="dive-body" id="dive-body-${i}"><div class="dive-loading"><div class="spinner" style="width:18px;height:18px;border-width:2px;"></div><span>Analyzing ${item.tickets.length} ticket subjects\u2026</span></div></div></div>`).join('');
  el.innerHTML=
    `${periodBar()}<div style="margin-bottom:16px;">
      <div style="font-size:18px;font-weight:800;color:var(--navy);
margin-bottom:4px;">\uD83D\uDD0D Root Cause Analysis \u2014 ${state.period?.label||''}</div>
      <div style="font-size:12px;color:var(--gray-600);">${totalVol} total tickets \u00B7 analyzing all categories with \u22652 tickets using full dataset</div></div>
      <div class="rca-section-header">Category Deep Dive <span style="font-size:10px;font-weight:400;color:var(--gray-400);margin-left:8px;">Reading all ticket subjects \u2014 grouping by question type and recommending interventions</span></div>${divePlaceholders||'<div class="card" style="padding:16px;color:var(--gray-400);">No category data available.</div>'}<div class="rca-section-header">SLA & Volume Findings</div><div class="finding-grid">${findings.join('')||'<p style="color:var(--gray-400);font-size:12px;padding:12px">No findings \u2014 data looks healthy.</p>'}</div>${actions.length?`<div class="rca-section-header">Action Plan</div><table class="action-table"><thead><tr><th>Priority</th><th>Action</th><th>Detail</th><th>Owner</th></tr></thead><tbody>${actionRows}</tbody></table>`:''}`;
  for(let i=0;i<diveItems.length;i++){const item=diveItems[i];const bodyEl=document.getElementById(`dive-body-${i}`);if(!bodyEl)continue;const summaries=item.tickets.map(t=>(t.fields?.summary||'').trim()).filter(Boolean);if(!summaries.length){bodyEl.innerHTML=`<div style="font-size:12px;color:var(--gray-400);padding:8px;">No ticket summaries available.</div>`;continue;}const groups=analyzeCategoryTickets(summaries,item.catName,item.prog.name);bodyEl.innerHTML=groups.length?groups.map(renderGroupCard).join(''):`<div style="font-size:12px;color:var(--gray-400);padding:8px;">No patterns detected.</div>`;}
}
function csatKey(){return`phc_coe_csat_${state.activeCoe.id}_v1_`;}
async function loadCSAT(){
  state.csatData={};
  if(window.cowork){
    try{const key=csatKey();for(const k of Object.keys(localStorage)){if(k.startsWith(key)){const pk=k.slice(key.length);state.csatData[pk]=JSON.parse(localStorage.getItem(k)||'[]');}}}catch(e){}
    updateCsatChip();
  } else if(BACKEND_URL&&BACKEND_URL!=='__BACKEND_URL__'&&state.period){
    try{
      const pk=state.period.key;
      const resp=await fetch(BACKEND_URL+'?key=10GyLkckn0E6fcEZYeQm1GPa8-PX8d09&action=getCsat&coe='+encodeURIComponent(state.activeCoe.id)+'&pk='+encodeURIComponent(pk));
      const data=await resp.json();
      if(data.rows&&data.rows.length){state.csatData[pk]=data.rows;updateCsatChip();refreshCsatSections();}
    }catch(e){}
  }
}
function saveCSAT(pk,rows){
  state.csatData[pk]=rows;
  if(window.cowork){
    try{localStorage.setItem(csatKey()+pk,JSON.stringify(rows));}catch(e){}
  } else if(BACKEND_URL&&BACKEND_URL!=='__BACKEND_URL__'){
    fetch(BACKEND_URL+'?key=10GyLkckn0E6fcEZYeQm1GPa8-PX8d09&action=setCsat&coe='+encodeURIComponent(state.activeCoe.id)+'&pk='+encodeURIComponent(pk),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({rows})}).catch(()=>{});
  }
}
function refreshCsatSections(){
  for(const prog of state.activeCoe.programs){const tabId='tab-prog-'+prog.name.toLowerCase().replace(/\W+/g,'-');const el=document.getElementById('csat-'+tabId);if(el)el.innerHTML=csatSectionHTML(prog);}
  const feedEl=document.getElementById('tab-feedback');
  if(feedEl&&feedEl.classList.contains('active')) renderFeedback();
}
function updateCsatChip(){
  const chip=document.getElementById('csatStatus'); if(!chip) return;
  const MONTHS=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const periods=Object.keys(state.csatData||{}).filter(k=>(state.csatData[k]||[]).length>0);
  if(!periods.length){chip.style.display='none';return;}
  const labels=periods.map(p=>{const[y,m]=p.split('_');return`${MONTHS[parseInt(m)]||m} '${y.slice(2)}`;}).join(', ');
  chip.textContent=`\u2713 CSAT: ${labels}`; chip.style.display='inline-block';
}
function csatScore(r){
  return parseFloat(r['Satisfaction Score']||r['satisfaction score']||r['satisfaction rating']||r['Satisfaction Rating']||r['rating']||r['csat']||r['score']||0);
}
function csatCardHTML(title,stats,color){
  if(!stats||stats.responded===0){return`<div class="csat-card"><div class="csat-card-title">${title}</div><div class="csat-empty">No scores yet</div><div class="csat-resp" style="margin-top:8px;">${stats?stats.total+' tickets':''}</div></div>`;}
  const avg=stats.avg.toFixed(1),scoreColor=stats.avg>=4.5?'#27ae60':stats.avg>=3.5?'#e67e22':'#c0392b';
  const maxCount=Math.max(...Object.values(stats.dist),1);
  const bars=[1,2,3,4,5].map(n=>{const h=Math.max(4,Math.round(stats.dist[n]/maxCount*28));return`<div class="csat-bar-wrap"><div class="csat-bar" style="height:${h}px;background:${SCORE_COLORS[n]};"></div><div class="csat-bar-lbl">${n}</div></div>`;}).join('');
  const respRate=stats.total>0?Math.round(stats.responded/stats.total*100):0;
  return`<div class="csat-card"><div class="csat-card-title">${title}</div><div class="csat-score" style="color:${scoreColor}">${avg}<span style="font-size:16px;color:var(--gray-400);">/5</span></div><div class="csat-label">avg satisfaction score</div><div class="csat-resp">${stats.responded} responses \u00B7 ${respRate}% response rate</div><div class="csat-dist">${bars}</div></div>`;
}
function csatRowTeam(r){
  const vals=Object.values(r).map(v=>String(v||'').toLowerCase()).join('|');
  if(vals.includes('risotto')) return 'Risotto';
  if(vals.includes('people_services')) return 'PSE';
  return 'Team';
}
function csatFilterStats(rows,filterType){
  let f=rows;
  if(filterType==='risotto') f=rows.filter(r=>csatRowTeam(r)==='Risotto');
  else if(filterType==='pse') f=rows.filter(r=>csatRowTeam(r)==='PSE');
  else if(filterType==='team') f=rows.filter(r=>csatRowTeam(r)==='Team');
  const scores=f.map(r=>csatScore(r)).filter(v=>v>0&&v<=5);
  const dist={1:0,2:0,3:0,4:0,5:0};
  scores.forEach(s=>{const k=Math.round(s);if(k>=1&&k<=5)dist[k]++;});
  return{total:f.length,responded:scores.length,avg:scores.length?scores.reduce((a,b)=>a+b,0)/scores.length:null,dist};
}
function handleCSATUpload(e){
  const file=e.target.files[0]; if(!file) return;
  if(!state.period){alert('Please select a period first.');return;}
  const reader=new FileReader();
  reader.onload=ev=>{
    const text=ev.target.result;
    function parseFullCSV(src){
      const rows=[];let fields=[],cur='',inQ=false;
      for(let i=0;i<src.length;i++){
        const c=src[i],next=src[i+1];
        if(c==='"'){
          if(inQ&&next==='"'){cur+='"';i++;}
          else inQ=!inQ;
        } else if(!inQ&&(c===','||c==='\t')){
          fields.push(cur);cur='';
        } else if(!inQ&&(c==='\n'||c==='\r')){
          if(c==='\r'&&next==='\n') i++;
          fields.push(cur);cur='';
          if(fields.some(f=>f.trim())) rows.push(fields);
          fields=[];
        } else {
          cur+=c;
        }
      }
      if(cur||fields.length){fields.push(cur);if(fields.some(f=>f.trim()))rows.push(fields);}
      return rows;
    }
    const parsed=parseFullCSV(text);
    if(parsed.length<2){alert('CSV appears empty.');return;}
    const hdrs=parsed[0].map(h=>h.trim().replace(/^"|"$/g,'').toLowerCase());
    const allRows=parsed.slice(1).map(cols=>{const row={};hdrs.forEach((h,i)=>row[h]=(cols[i]||'').trim().replace(/^"|"$/g,''));return row;});
    const keyCol=hdrs.find(h=>h==='issue key'||h==='key'||h==='ticket'||h==='issue id'||h==='ticket id');
    const rows=keyCol?allRows.filter(r=>r[keyCol]):allRows.filter(r=>Object.values(r).some(v=>v));
    if(!rows.length){alert(`No data rows found in CSV.\nColumns detected: ${hdrs.join(', ')}`);return;}
    saveCSAT(state.period.key,rows);
    updateCsatChip();
    for(const prog of state.activeCoe.programs){
      const tabId='tab-prog-'+prog.name.toLowerCase().replace(/\W+/g,'-');
      let el=document.getElementById('csat-'+tabId);
      if(!el){renderProgram(prog);el=document.getElementById('csat-'+tabId);}
      if(el) el.innerHTML=csatSectionHTML(prog);
    }
    const MONTHS=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const[y,m]=state.period.key.split('_');
    document.getElementById('lastUpdated').textContent=`\u2713 CSAT saved \u2014 ${rows.length} rows for ${MONTHS[parseInt(m)]} '${y.slice(2)} \u00B7 ${state.activeCoe.displayName}`;
  };
  reader.readAsText(file); e.target.value='';
}
function csatSectionHTML(prog){
  const pk=state.period?.key;
  if(!pk||!state.csatData[pk]||!state.csatData[pk].length) return`<p style="color:var(--gray-400);font-size:12px">No CSAT data for ${state.period?.label||'this period'}. Upload a CSV via <strong>\uD83D\uDCCA CSAT</strong> in the header.</p>`;
  const allRows=state.csatData[pk];
  if(!allRows.length) return`<p style="color:var(--gray-400);font-size:12px">No CSAT data for ${state.period?.label||'this period'}. Upload a CSV via <strong>\uD83D\uDCCA CSAT</strong> in the header.</p>`;
  const hasSec=allRows.some(r=>r['Security Level']||r['security level']||r['security']||r['level']);
  const coeRows=hasSec?allRows.filter(r=>{const sec=(r['Security Level']||r['security level']||r['security']||r['level']||'').toLowerCase();return!sec||state.activeCoe.programs.some(p=>sec.includes(p.level.toLowerCase()));}):allRows;
  if(!coeRows.length) return`<p style="color:var(--gray-400);font-size:12px">No CSAT rows matched for ${state.activeCoe.displayName} \u2014 check the Security Level column in your CSV (${allRows.length} total rows uploaded).</p>`;
  const hasProgCol=state.activeCoe.programs.length>1&&coeRows.some(r=>r['Program']||r['program']);
  const rows=hasProgCol?coeRows.filter(r=>{const p=(r['Program']||r['program']||'').trim().toLowerCase();return!p||p===prog.name.toLowerCase();}):coeRows;
  if(!rows.length) return`<p style="color:var(--gray-400);font-size:12px">No CSAT rows for ${prog.name} this period (${coeRows.length} rows for ${state.activeCoe.displayName} total).</p>`;
  const overall=csatFilterStats(rows,null);
  if(overall.responded===0) return`<p style="color:var(--gray-400);font-size:12px">CSAT scores not found for ${prog.name} (${rows.length} rows matched \u2014 columns: ${Object.keys(rows[0]).slice(0,8).join(', ')}).</p>`;
  return`<div class="csat-grid">
    ${csatCardHTML('Overall',overall,prog.color)}
    ${csatCardHTML(`${prog.name}-Handled`,csatFilterStats(rows,'team'),prog.color)}
    ${csatCardHTML('Risotto-Handled',csatFilterStats(rows,'risotto'),prog.color)}
    ${csatCardHTML('PSE-Handled',csatFilterStats(rows,'pse'),prog.color)}
  </div>`;
}
function hasFeedback(t){
  const f=t.fields?.customfield_10454;
  if(!f) return false;
  if(Array.isArray(f)) return f.some(v=>(v.value||v).toString().toLowerCase()==='yes');
  return String(f).toLowerCase()==='yes';
}
function getFeedbackText(t){
  const f=t.fields?.customfield_10540;
  if(!f) return '';
  if(typeof f==='string') return f;
  if(f.content) return f.content.flatMap(b=>b.content||[]).map(n=>n.text||'').join(' ').trim();
  return String(f);
}
async function renderFeedback(){
  const el=document.getElementById('tab-feedback');
  const coe=state.activeCoe;
  if(!state.period){el.innerHTML=`${periodBar()}<div class="loading-overlay"><p>Click \u21BA Refresh first.</p></div>`;return;}
  el.innerHTML=`${periodBar()}<div class="loading-overlay"><div class="spinner"></div><p>Loading feedback tickets\u2026</p></div>`;
  const allLevels=[...new Set(coe.programs.flatMap(p=>p.levels||[p.level]))];
  const levelFilter=allLevels.length===1?`level = "${allLevels[0]}"`:`level in (${allLevels.map(l=>`"${l}"`).join(',')})`;
  const allTickets=await fetchPeriodIssues(state.period,levelFilter,FEEDBACK_FIELDS);
  const feedbackTickets=allTickets.filter(hasFeedback);
  if(!feedbackTickets.length){
    el.innerHTML=`${periodBar()}<div class="loading-overlay"><p style="color:var(--gray-600);">No tickets with customer feedback found for ${coe.displayName} in ${state.period?.label||'this period'}.</p></div>`;
    return;
  }
  const cards=feedbackTickets.map(t=>{
    const key=t.key||'\u2014';
    const summary=(t.fields?.summary||'').slice(0,80);
    const assignee=t.fields?.assignee?.displayName||'\u2014';
    const cat=t.fields?.customfield_10490?.value||'\u2014';
    const text=getFeedbackText(t);
    const safeText=text?String(text).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'):'';
    return`<div class="feedback-card">
      <div class="feedback-card-header">
        <span class="feedback-ticket-key"><a href="https://gusto.atlassian.net/browse/${key}" target="_blank" style="color:var(--teal);text-decoration:none;font-family:monospace">${key}</a></span>
        <span class="feedback-date">${assignee} \u00B7 ${cat}</span>
      </div>
      <div style="font-size:12px;color:var(--gray-600);margin-bottom:6px;">${summary}</div>
      ${safeText?`<div class="feedback-text">${safeText}</div>`:''}
    </div>`;
  }).join('');
  el.innerHTML=`${periodBar()}
    <div class="section-header">Customer Feedback \u2014 ${coe.displayName} \u00B7 ${state.period?.label} <span style="font-size:10px;font-weight:400;color:var(--gray-400);margin-left:6px;">${feedbackTickets.length} tickets with feedback</span></div>
    <div class="feedback-list">${cards}</div>`;
}
function isOERelated(t){
  const f=t.fields?.customfield_10540;
  if(!f) return false;
  if(Array.isArray(f)) return f.some(v=>{const s=String(v.value||v).toLowerCase().trim();return s&&s!=='no';});
  const val=String(f).toLowerCase().trim();
  return val&&val!=='no';
}
function renderOE(){
  const el=document.getElementById('tab-oe'); if(!el) return;
  const coe=state.activeCoe;
  if(!Object.keys(state.programs).length){el.innerHTML=`${periodBar()}<div class="loading-overlay"><p>Click \u21BA Refresh to load data, then return to this tab.</p></div>`;return;}
  const oeTickets=coe.programs.flatMap(prog=>{
    const d=state.programs[prog.name]; if(!d) return[];
    return(d.rawIssues||[]).filter(isOERelated).map(t=>({t,prog}));
  }).sort((a,b)=>new Date(b.t.fields.created)-new Date(a.t.fields.created));
  if(!oeTickets.length){el.innerHTML=`${periodBar()}<div class="loading-overlay"><p style="color:var(--gray-600);">No Open Enrollment tickets found for ${state.period?.label||'this period'}.</p></div>`;return;}
  const byProg={},byCat={},byStatus={};
  oeTickets.forEach(({t,prog})=>{
    byProg[prog.name]=(byProg[prog.name]||0)+1;
    const cat=t.fields?.customfield_10490?.value||'Uncategorized';byCat[cat]=(byCat[cat]||0)+1;
    const s=t.fields?.status?.name||'Unknown';byStatus[s]=(byStatus[s]||0)+1;
  });
  const progChips=Object.entries(byProg).map(([n,c])=>{const p=coe.programs.find(x=>x.name===n);return`<span style="background:${p?.bgColor||'#EEE'};color:${p?.color||'#333'};border:1px solid ${p?.color||'#CCC'}44;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700;">${n}: ${c}</span>`;}).join(' ');
  const catRows=Object.entries(byCat).sort((a,b)=>b[1]-a[1]).map(([c,n])=>`<tr><td>${c}</td><td style="text-align:right;font-weight:600">${n}</td></tr>`).join('');
  const rows=oeTickets.slice(0,100).map(({t,prog})=>{
    const key=t.key,cat=t.fields?.customfield_10490?.value||'\u2014',status=t.fields?.status?.name||'\u2014',assignee=t.fields?.assignee?.displayName||'\u2014';
    const p=coe.programs.find(x=>x.name===prog.name);
    return`<tr><td><a href="https://gusto.atlassian.net/browse/${key}" target="_blank" style="color:var(--teal);font-family:monospace;font-weight:700;text-decoration:none">${key}</a></td><td><span style="background:${p?.bgColor||'#EEE'};color:${p?.color||'#333'};padding:2px 8px;border-radius:10px;font-size:10px;font-weight:700;">${prog.name}</span></td><td style="font-size:11px;color:var(--gray-600)">${cat}</td><td style="font-size:11px;color:var(--gray-600)">${assignee}</td><td style="font-size:11px;color:var(--gray-600)">${status}</td></tr>`;
  }).join('');
  el.innerHTML=`${periodBar()}
    <div class="section-header">Open Enrollment Tickets \u2014 ${state.period?.label} <span style="font-size:10px;font-weight:400;color:var(--gray-400);margin-left:6px;">${oeTickets.length} total</span></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">${progChips}</div>
    <div class="chart-grid-2" style="margin-bottom:20px;">
      <div class="card"><div class="card-title">By Category</div><table class="data-table"><tbody>${catRows}</tbody></table></div>
      <div class="card"><div class="card-title">By Status</div><table class="data-table"><tbody>${Object.entries(byStatus).sort((a,b)=>b[1]-a[1]).map(([s,n])=>`<tr><td>${s}</td><td style="text-align:right;font-weight:600">${n}</td></tr>`).join('')}</tbody></table></div>
    </div>
    <div class="section-header">Ticket List</div>
    <div class="card" style="padding:0;overflow:hidden"><table class="data-table"><thead><tr><th>Ticket</th><th>Program</th><th>Category</th><th>Assignee</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
function switchTab(tab,btn){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  document.getElementById('tab-'+tab).classList.add('active');
  if(tab==='trends'&&!state.trendsData) loadTrends();
  if(tab==='rca') renderRCA();
  if(tab==='feedback') renderFeedback();
  if(tab==='oe') renderOE();
}
buildDropdowns();
buildTabs();
loadCSAT();
