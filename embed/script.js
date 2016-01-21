function getShortenedBrowserVersion(e){return e&&e.indexOf("-")>-1&&(e=e.split("-")[1]),e}function loadJSON(e,t,n){var s=new XMLHttpRequest;s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?t&&t(JSON.parse(s.responseText)):n&&n(s))},s.open("GET",e,!0),s.send()}var caniuseDataUrl="https://raw.githubusercontent.com/Fyrd/caniuse/master/fulldata-json/data-2.0.json",featureID=location.href.split("?feat=")[1],browsers=["ie","edge","firefox","chrome","safari","opera","ios_saf","op_mini","android","and_chr"],periods=["future_1","current","past_1","past_2"];document.getElementById("defaultMessage").innerHTML='<a href="http://caniuse.com/#feat='+featureID+'">Can I Use '+featureID+"?</a> Data on support for the "+featureID+" feature across the major browsers from caniuse.com. (Embed Loading)",loadJSON(caniuseDataUrl,function(e){var t=e.data[featureID];if(t){var n=t.usage_perc_y,s=t.usage_perc_a,a=n+s,a=a.toFixed(2),r=t.description;r.length>190&&(r=r.slice(0,180)+"...."),document.getElementById("featureTitle").innerHTML=t.title,document.getElementById("featureDescription").innerHTML=r,document.getElementById("featureLink").href="http://caniuse.com/#feat="+featureID,document.getElementById("note").innerHTML='Global: <span class="y">'+n+'%</span> + <span class="a">'+s+"%</span> = "+a+"%";for(var o={},i=0;i<browsers.length;i++){for(var l,u=browsers[i],d=e.agents[u].current_version,g=0;g<e.agents[u].version_list.length;g++)0===e.agents[u].version_list[g].era&&(l=g);l=parseInt(l),o[u]={future_1:e.agents[u].version_list[l+1]?e.agents[u].version_list[l+1].version:null,current:d,past_1:e.agents[u].version_list[l-1]?e.agents[u].version_list[l-1].version:null,past_2:e.agents[u].version_list[l-2]?e.agents[u].version_list[l-2].version:null}}for(var c={},i=0;i<browsers.length;i++){var u=browsers[i],f=o[u].future_1,p=e.agents[u].usage_global[f],p=p?p.toFixed(2):0,m=o[u].current,_=e.agents[u].usage_global[m],_=_?_.toFixed(2):0,y=o[u].past_1,v=e.agents[u].usage_global[y],v=v?v.toFixed(2):0,h=o[u].past_2,I=e.agents[u].usage_global[h],I=I?I.toFixed(2):0;c[u]={future_1:p,current:_,past_1:v,past_2:I}}for(var b={},i=0;i<browsers.length;i++){var u=browsers[i];b[u]={future_1:t.stats[u][o[u].future_1],current:t.stats[u][o[u].current],past_1:t.stats[u][o[u].past_1],past_2:t.stats[u][o[u].past_2]}}for(var E=!1,B=!1,i=0;i<browsers.length;i++)for(var u=browsers[i],g=0;g<periods.length;g++){for(var M,w=periods[g],T=document.getElementsByClassName(w)[0],L=T.childNodes,D=0;D<L.length;D++)L[D].className.indexOf(u)>-1&&(M=L[D]);void 0!=b[u][w]?M.className+=" "+b[u][w]:!1;var x=getShortenedBrowserVersion(o[u][w]),H="<span>"+x+'</span><span class="usage">'+c[u][w]+"%</span>";void 0!=o[u][w]?M.innerHTML=H:M.innerHTML="<span></span>",void 0!=b[u][w]&&b[u][w].indexOf("x")>-1&&(E=!0),void 0!=b[u][w]&&b[u][w].indexOf("u")>-1&&(B=!0)}E?document.getElementById("legendX").style.display="inline-block":document.getElementById("legendX").style.display="none",B?document.getElementById("legendU").style.display="inline-block":document.getElementById("legendU").style.display="none"}else document.getElementById("featureTitle").innerHTML="Uh Oh!",document.getElementById("featureDescription").innerHTML="The feature <strong>'"+featureID+"'</strong> was not recognized. ",document.getElementById("featureMain").innerHTML="";document.getElementById("defaultMessage").style.display="none",document.getElementsByClassName("feature")[0].style.display="block"},function(e){document.getElementById("defaultMessage").innerHTML="Error Getting JSON File: "+e.response,console.error(e)});