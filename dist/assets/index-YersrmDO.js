(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();function j(n){return`/hall-of-fame/${n}`}function f(n,e=""){const i=[e,n.title,"Legends of the Grid"].filter(Boolean);document.title=i.join(" | ")}function C(n){return n==="/"?"/hall-of-fame":n.replace(/\/$/,"")||"/hall-of-fame"}const V="/assets/champions-BazmgP2G.json",R="data:application/json;base64,WwogIHsKICAgICJ5ZWFyIjogMjAyNSwKICAgICJuYW1lIjogIjIwMjUgRklBIEZvcm11bGEgT25lIFdvcmxkIENoYW1waW9uc2hpcCIsCiAgICAiY2hhbXBpb24iOiAiTGFuZG8gTm9ycmlzIiwKICAgICJjb25zdHJ1Y3RvckNoYW1waW9uIjogIk1jTGFyZW4tTWVyY2VkZXMiLAogICAgInJvdW5kcyI6IDI0LAogICAgImRhdGFQYXRoIjogIi9zZWFzb25zLzIwMjUiCiAgfQpdCg==",B="data:application/json;base64,ewogICJ5ZWFyIjogMjAyNSwKICAibmFtZSI6ICIyMDI1IEZJQSBGb3JtdWxhIE9uZSBXb3JsZCBDaGFtcGlvbnNoaXAiLAogICJyb3VuZHMiOiAyNCwKICAiZHJpdmVyc0NoYW1waW9uIjogIkxhbmRvIE5vcnJpcyIsCiAgImNvbnN0cnVjdG9yc0NoYW1waW9uIjogIk1jTGFyZW4tTWVyY2VkZXMiLAogICJzdW1tYXJ5IjogIkEgc3RhdGljIHNlYXNvbiBkYXRhc2V0IGZvciBicm93c2luZyB0ZWFtcywgZHJpdmVycywgc3RhbmRpbmdzLCBhbmQgcmFjZSBjbGFzc2lmaWNhdGlvbnMuIgp9Cg==",N="data:application/json;base64,WwogIHsKICAgICJpZCI6ICJtY2xhcmVuIiwKICAgICJuYW1lIjogIk1jTGFyZW4gRm9ybXVsYSAxIFRlYW0iLAogICAgImNvbnN0cnVjdG9yIjogIk1jTGFyZW4tTWVyY2VkZXMiLAogICAgInBvd2VyVW5pdCI6ICJNZXJjZWRlcyIsCiAgICAiZHJpdmVycyI6IFsibGFuZG8tbm9ycmlzIiwgIm9zY2FyLXBpYXN0cmkiXQogIH0sCiAgewogICAgImlkIjogIm1lcmNlZGVzIiwKICAgICJuYW1lIjogIk1lcmNlZGVzLUFNRyBQZXRyb25hcyBGMSBUZWFtIiwKICAgICJjb25zdHJ1Y3RvciI6ICJNZXJjZWRlcyIsCiAgICAicG93ZXJVbml0IjogIk1lcmNlZGVzIiwKICAgICJkcml2ZXJzIjogWyJnZW9yZ2UtcnVzc2VsbCIsICJraW1pLWFudG9uZWxsaSJdCiAgfSwKICB7CiAgICAiaWQiOiAiZmVycmFyaSIsCiAgICAibmFtZSI6ICJTY3VkZXJpYSBGZXJyYXJpIEhQIiwKICAgICJjb25zdHJ1Y3RvciI6ICJGZXJyYXJpIiwKICAgICJwb3dlclVuaXQiOiAiRmVycmFyaSIsCiAgICAiZHJpdmVycyI6IFsiY2hhcmxlcy1sZWNsZXJjIiwgImxld2lzLWhhbWlsdG9uIl0KICB9LAogIHsKICAgICJpZCI6ICJyZWQtYnVsbCIsCiAgICAibmFtZSI6ICJPcmFjbGUgUmVkIEJ1bGwgUmFjaW5nIiwKICAgICJjb25zdHJ1Y3RvciI6ICJSZWQgQnVsbCBSYWNpbmctSG9uZGEgUkJQVCIsCiAgICAicG93ZXJVbml0IjogIkhvbmRhIFJCUFQiLAogICAgImRyaXZlcnMiOiBbIm1heC12ZXJzdGFwcGVuIiwgImxpYW0tbGF3c29uIiwgInl1a2ktdHN1bm9kYSJdCiAgfSwKICB7CiAgICAiaWQiOiAid2lsbGlhbXMiLAogICAgIm5hbWUiOiAiQXRsYXNzaWFuIFdpbGxpYW1zIFJhY2luZyIsCiAgICAiY29uc3RydWN0b3IiOiAiV2lsbGlhbXMtTWVyY2VkZXMiLAogICAgInBvd2VyVW5pdCI6ICJNZXJjZWRlcyIsCiAgICAiZHJpdmVycyI6IFsiYWxleGFuZGVyLWFsYm9uIiwgImNhcmxvcy1zYWlueiJdCiAgfSwKICB7CiAgICAiaWQiOiAicmFjaW5nLWJ1bGxzIiwKICAgICJuYW1lIjogIlZpc2EgQ2FzaCBBcHAgUmFjaW5nIEJ1bGxzIEYxIFRlYW0iLAogICAgImNvbnN0cnVjdG9yIjogIlJhY2luZyBCdWxscy1Ib25kYSBSQlBUIiwKICAgICJwb3dlclVuaXQiOiAiSG9uZGEgUkJQVCIsCiAgICAiZHJpdmVycyI6IFsiaXNhY2staGFkamFyIiwgInl1a2ktdHN1bm9kYSIsICJsaWFtLWxhd3NvbiJdCiAgfSwKICB7CiAgICAiaWQiOiAiYXN0b24tbWFydGluIiwKICAgICJuYW1lIjogIkFzdG9uIE1hcnRpbiBBcmFtY28gRjEgVGVhbSIsCiAgICAiY29uc3RydWN0b3IiOiAiQXN0b24gTWFydGluIEFyYW1jby1NZXJjZWRlcyIsCiAgICAicG93ZXJVbml0IjogIk1lcmNlZGVzIiwKICAgICJkcml2ZXJzIjogWyJmZXJuYW5kby1hbG9uc28iLCAibGFuY2Utc3Ryb2xsIl0KICB9LAogIHsKICAgICJpZCI6ICJraWNrLXNhdWJlciIsCiAgICAibmFtZSI6ICJTdGFrZSBGMSBUZWFtIEtpY2sgU2F1YmVyIiwKICAgICJjb25zdHJ1Y3RvciI6ICJLaWNrIFNhdWJlci1GZXJyYXJpIiwKICAgICJwb3dlclVuaXQiOiAiRmVycmFyaSIsCiAgICAiZHJpdmVycyI6IFsiZ2FicmllbC1ib3J0b2xldG8iLCAibmljby1odWxrZW5iZXJnIl0KICB9LAogIHsKICAgICJpZCI6ICJoYWFzIiwKICAgICJuYW1lIjogIk1vbmV5R3JhbSBIYWFzIEYxIFRlYW0iLAogICAgImNvbnN0cnVjdG9yIjogIkhhYXMtRmVycmFyaSIsCiAgICAicG93ZXJVbml0IjogIkZlcnJhcmkiLAogICAgImRyaXZlcnMiOiBbImVzdGViYW4tb2NvbiIsICJvbGl2ZXItYmVhcm1hbiJdCiAgfSwKICB7CiAgICAiaWQiOiAiYWxwaW5lIiwKICAgICJuYW1lIjogIkJXVCBBbHBpbmUgRjEgVGVhbSIsCiAgICAiY29uc3RydWN0b3IiOiAiQWxwaW5lLVJlbmF1bHQiLAogICAgInBvd2VyVW5pdCI6ICJSZW5hdWx0IiwKICAgICJkcml2ZXJzIjogWyJqYWNrLWRvb2hhbiIsICJmcmFuY28tY29sYXBpbnRvIiwgInBpZXJyZS1nYXNseSJdCiAgfQpdCg==",X="data:application/json;base64,WwogIHsgImlkIjogImxhbmRvLW5vcnJpcyIsICJuYW1lIjogIkxhbmRvIE5vcnJpcyIsICJudW1iZXIiOiA0LCAiY291bnRyeSI6ICJVbml0ZWQgS2luZ2RvbSIsICJ0ZWFtSWQiOiAibWNsYXJlbiIsICJyb3VuZHMiOiAiQWxsIiB9LAogIHsgImlkIjogIm9zY2FyLXBpYXN0cmkiLCAibmFtZSI6ICJPc2NhciBQaWFzdHJpIiwgIm51bWJlciI6IDgxLCAiY291bnRyeSI6ICJBdXN0cmFsaWEiLCAidGVhbUlkIjogIm1jbGFyZW4iLCAicm91bmRzIjogIkFsbCIgfSwKICB7ICJpZCI6ICJnZW9yZ2UtcnVzc2VsbCIsICJuYW1lIjogIkdlb3JnZSBSdXNzZWxsIiwgIm51bWJlciI6IDYzLCAiY291bnRyeSI6ICJVbml0ZWQgS2luZ2RvbSIsICJ0ZWFtSWQiOiAibWVyY2VkZXMiLCAicm91bmRzIjogIkFsbCIgfSwKICB7ICJpZCI6ICJraW1pLWFudG9uZWxsaSIsICJuYW1lIjogIktpbWkgQW50b25lbGxpIiwgIm51bWJlciI6IDEyLCAiY291bnRyeSI6ICJJdGFseSIsICJ0ZWFtSWQiOiAibWVyY2VkZXMiLCAicm91bmRzIjogIkFsbCIgfSwKICB7ICJpZCI6ICJjaGFybGVzLWxlY2xlcmMiLCAibmFtZSI6ICJDaGFybGVzIExlY2xlcmMiLCAibnVtYmVyIjogMTYsICJjb3VudHJ5IjogIk1vbmFjbyIsICJ0ZWFtSWQiOiAiZmVycmFyaSIsICJyb3VuZHMiOiAiQWxsIiB9LAogIHsgImlkIjogImxld2lzLWhhbWlsdG9uIiwgIm5hbWUiOiAiTGV3aXMgSGFtaWx0b24iLCAibnVtYmVyIjogNDQsICJjb3VudHJ5IjogIlVuaXRlZCBLaW5nZG9tIiwgInRlYW1JZCI6ICJmZXJyYXJpIiwgInJvdW5kcyI6ICJBbGwiIH0sCiAgeyAiaWQiOiAibWF4LXZlcnN0YXBwZW4iLCAibmFtZSI6ICJNYXggVmVyc3RhcHBlbiIsICJudW1iZXIiOiAxLCAiY291bnRyeSI6ICJOZXRoZXJsYW5kcyIsICJ0ZWFtSWQiOiAicmVkLWJ1bGwiLCAicm91bmRzIjogIkFsbCIgfSwKICB7ICJpZCI6ICJsaWFtLWxhd3NvbiIsICJuYW1lIjogIkxpYW0gTGF3c29uIiwgIm51bWJlciI6IDMwLCAiY291bnRyeSI6ICJOZXcgWmVhbGFuZCIsICJ0ZWFtSWQiOiAicmVkLWJ1bGwiLCAicm91bmRzIjogIjEtMiIgfSwKICB7ICJpZCI6ICJ5dWtpLXRzdW5vZGEiLCAibmFtZSI6ICJZdWtpIFRzdW5vZGEiLCAibnVtYmVyIjogMjIsICJjb3VudHJ5IjogIkphcGFuIiwgInRlYW1JZCI6ICJyZWQtYnVsbCIsICJyb3VuZHMiOiAiMy0yNCIgfSwKICB7ICJpZCI6ICJhbGV4YW5kZXItYWxib24iLCAibmFtZSI6ICJBbGV4YW5kZXIgQWxib24iLCAibnVtYmVyIjogMjMsICJjb3VudHJ5IjogIlRoYWlsYW5kIiwgInRlYW1JZCI6ICJ3aWxsaWFtcyIsICJyb3VuZHMiOiAiQWxsIiB9LAogIHsgImlkIjogImNhcmxvcy1zYWlueiIsICJuYW1lIjogIkNhcmxvcyBTYWlueiBKci4iLCAibnVtYmVyIjogNTUsICJjb3VudHJ5IjogIlNwYWluIiwgInRlYW1JZCI6ICJ3aWxsaWFtcyIsICJyb3VuZHMiOiAiQWxsIiB9LAogIHsgImlkIjogImlzYWNrLWhhZGphciIsICJuYW1lIjogIklzYWNrIEhhZGphciIsICJudW1iZXIiOiA2LCAiY291bnRyeSI6ICJGcmFuY2UiLCAidGVhbUlkIjogInJhY2luZy1idWxscyIsICJyb3VuZHMiOiAiQWxsIiB9LAogIHsgImlkIjogImZlcm5hbmRvLWFsb25zbyIsICJuYW1lIjogIkZlcm5hbmRvIEFsb25zbyIsICJudW1iZXIiOiAxNCwgImNvdW50cnkiOiAiU3BhaW4iLCAidGVhbUlkIjogImFzdG9uLW1hcnRpbiIsICJyb3VuZHMiOiAiQWxsIiB9LAogIHsgImlkIjogImxhbmNlLXN0cm9sbCIsICJuYW1lIjogIkxhbmNlIFN0cm9sbCIsICJudW1iZXIiOiAxOCwgImNvdW50cnkiOiAiQ2FuYWRhIiwgInRlYW1JZCI6ICJhc3Rvbi1tYXJ0aW4iLCAicm91bmRzIjogIkFsbCIgfSwKICB7ICJpZCI6ICJnYWJyaWVsLWJvcnRvbGV0byIsICJuYW1lIjogIkdhYnJpZWwgQm9ydG9sZXRvIiwgIm51bWJlciI6IDUsICJjb3VudHJ5IjogIkJyYXppbCIsICJ0ZWFtSWQiOiAia2ljay1zYXViZXIiLCAicm91bmRzIjogIkFsbCIgfSwKICB7ICJpZCI6ICJuaWNvLWh1bGtlbmJlcmciLCAibmFtZSI6ICJOaWNvIEh1bGtlbmJlcmciLCAibnVtYmVyIjogMjcsICJjb3VudHJ5IjogIkdlcm1hbnkiLCAidGVhbUlkIjogImtpY2stc2F1YmVyIiwgInJvdW5kcyI6ICJBbGwiIH0sCiAgeyAiaWQiOiAiZXN0ZWJhbi1vY29uIiwgIm5hbWUiOiAiRXN0ZWJhbiBPY29uIiwgIm51bWJlciI6IDMxLCAiY291bnRyeSI6ICJGcmFuY2UiLCAidGVhbUlkIjogImhhYXMiLCAicm91bmRzIjogIkFsbCIgfSwKICB7ICJpZCI6ICJvbGl2ZXItYmVhcm1hbiIsICJuYW1lIjogIk9saXZlciBCZWFybWFuIiwgIm51bWJlciI6IDg3LCAiY291bnRyeSI6ICJVbml0ZWQgS2luZ2RvbSIsICJ0ZWFtSWQiOiAiaGFhcyIsICJyb3VuZHMiOiAiQWxsIiB9LAogIHsgImlkIjogImphY2stZG9vaGFuIiwgIm5hbWUiOiAiSmFjayBEb29oYW4iLCAibnVtYmVyIjogNywgImNvdW50cnkiOiAiQXVzdHJhbGlhIiwgInRlYW1JZCI6ICJhbHBpbmUiLCAicm91bmRzIjogIjEtNiIgfSwKICB7ICJpZCI6ICJmcmFuY28tY29sYXBpbnRvIiwgIm5hbWUiOiAiRnJhbmNvIENvbGFwaW50byIsICJudW1iZXIiOiA0MywgImNvdW50cnkiOiAiQXJnZW50aW5hIiwgInRlYW1JZCI6ICJhbHBpbmUiLCAicm91bmRzIjogIjctMjQiIH0sCiAgeyAiaWQiOiAicGllcnJlLWdhc2x5IiwgIm5hbWUiOiAiUGllcnJlIEdhc2x5IiwgIm51bWJlciI6IDEwLCAiY291bnRyeSI6ICJGcmFuY2UiLCAidGVhbUlkIjogImFscGluZSIsICJyb3VuZHMiOiAiQWxsIiB9Cl0K",H="data:application/json;base64,ewogICJkcml2ZXJzIjogWwogICAgeyAicG9zaXRpb24iOiAxLCAiZHJpdmVySWQiOiAibGFuZG8tbm9ycmlzIiwgInBvaW50cyI6IDQyMyB9LAogICAgeyAicG9zaXRpb24iOiAyLCAiZHJpdmVySWQiOiAibWF4LXZlcnN0YXBwZW4iLCAicG9pbnRzIjogNDIxIH0sCiAgICB7ICJwb3NpdGlvbiI6IDMsICJkcml2ZXJJZCI6ICJvc2Nhci1waWFzdHJpIiwgInBvaW50cyI6IDQxMCB9LAogICAgeyAicG9zaXRpb24iOiA0LCAiZHJpdmVySWQiOiAiZ2VvcmdlLXJ1c3NlbGwiLCAicG9pbnRzIjogMzE5IH0sCiAgICB7ICJwb3NpdGlvbiI6IDUsICJkcml2ZXJJZCI6ICJjaGFybGVzLWxlY2xlcmMiLCAicG9pbnRzIjogMjQyIH0sCiAgICB7ICJwb3NpdGlvbiI6IDYsICJkcml2ZXJJZCI6ICJsZXdpcy1oYW1pbHRvbiIsICJwb2ludHMiOiAxNTYgfSwKICAgIHsgInBvc2l0aW9uIjogNywgImRyaXZlcklkIjogImtpbWktYW50b25lbGxpIiwgInBvaW50cyI6IDEyMiB9LAogICAgeyAicG9zaXRpb24iOiA4LCAiZHJpdmVySWQiOiAiYWxleGFuZGVyLWFsYm9uIiwgInBvaW50cyI6IDczIH0sCiAgICB7ICJwb3NpdGlvbiI6IDksICJkcml2ZXJJZCI6ICJjYXJsb3Mtc2FpbnoiLCAicG9pbnRzIjogMzggfSwKICAgIHsgInBvc2l0aW9uIjogMTAsICJkcml2ZXJJZCI6ICJuaWNvLWh1bGtlbmJlcmciLCAicG9pbnRzIjogMzcgfQogIF0sCiAgImNvbnN0cnVjdG9ycyI6IFsKICAgIHsgInBvc2l0aW9uIjogMSwgInRlYW1JZCI6ICJtY2xhcmVuIiwgInBvaW50cyI6IDcxMyB9LAogICAgeyAicG9zaXRpb24iOiAyLCAidGVhbUlkIjogIm1lcmNlZGVzIiwgInBvaW50cyI6IDM0MSB9LAogICAgeyAicG9zaXRpb24iOiAzLCAidGVhbUlkIjogImZlcnJhcmkiLCAicG9pbnRzIjogMzM0IH0sCiAgICB7ICJwb3NpdGlvbiI6IDQsICJ0ZWFtSWQiOiAicmVkLWJ1bGwiLCAicG9pbnRzIjogMzMxIH0sCiAgICB7ICJwb3NpdGlvbiI6IDUsICJ0ZWFtSWQiOiAid2lsbGlhbXMiLCAicG9pbnRzIjogMTExIH0sCiAgICB7ICJwb3NpdGlvbiI6IDYsICJ0ZWFtSWQiOiAiYXN0b24tbWFydGluIiwgInBvaW50cyI6IDc3IH0sCiAgICB7ICJwb3NpdGlvbiI6IDcsICJ0ZWFtSWQiOiAicmFjaW5nLWJ1bGxzIiwgInBvaW50cyI6IDcyIH0sCiAgICB7ICJwb3NpdGlvbiI6IDgsICJ0ZWFtSWQiOiAia2ljay1zYXViZXIiLCAicG9pbnRzIjogNTkgfSwKICAgIHsgInBvc2l0aW9uIjogOSwgInRlYW1JZCI6ICJoYWFzIiwgInBvaW50cyI6IDQ4IH0sCiAgICB7ICJwb3NpdGlvbiI6IDEwLCAidGVhbUlkIjogImFscGluZSIsICJwb2ludHMiOiAyMCB9CiAgXQp9Cg==",M="/assets/races-zBz5XpXd.json",x="/assets/race-results-DQMQPV-t.json";async function z(){return p(V,"Unable to load champion data.")}async function _(){return p(R,"Unable to load season index.")}async function O(n){const i={2025:{meta:B,teams:N,drivers:X,standings:H,races:M,raceResults:x}}[n];if(!i)throw new Error("Unable to load season data.");const[s,a,o,c,l,d]=await Promise.all([p(i.meta,"Unable to load season metadata."),p(i.teams,"Unable to load season teams."),p(i.drivers,"Unable to load season drivers."),p(i.standings,"Unable to load season standings."),p(i.races,"Unable to load season races."),p(i.raceResults,"Unable to load season race results.")]);return{meta:s,teams:a,drivers:o,standings:c,races:l,raceResults:d}}async function p(n,e){const i=await fetch(n);if(!i.ok)throw new Error(e);return i.json()}function w(n,e){return n.find(i=>i.id===e)}function T(n){var e,i,s;return{firstId:((e=n[0])==null?void 0:e.id)??"",secondId:((i=n[1])==null?void 0:i.id)??((s=n[0])==null?void 0:s.id)??""}}function Q(n,e){return!n||!e?[]:[["Championships",n.championships,e.championships],["Wins",n.wins,e.wins],["Podiums",n.podiums,e.podiums],["Poles",n.poles,e.poles],["First title",n.firstTitle,e.firstTitle],["Last title",n.lastTitle,e.lastTitle],["Champion years",n.championYears.join(", "),e.championYears.join(", ")],["Teams won with",n.teamsWonWith.join(", "),e.teamsWonWith.join(", ")]]}function E(n){return[...new Set(n.map(e=>e.era))].sort()}function $(n,{searchTerm:e,era:i}){const s=e.trim().toLowerCase();return n.filter(a=>{const o=a.name.toLowerCase().includes(s),c=i==="all"||a.era===i;return o&&c})}function D(n,e){const i=[...n];return e==="titles-asc"?i.sort((s,a)=>s.championships-a.championships||s.name.localeCompare(a.name)):i.sort((s,a)=>a.championships-s.championships||s.name.localeCompare(a.name))}/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=([n,e,i])=>{const s=document.createElementNS("http://www.w3.org/2000/svg",n);return Object.keys(e).forEach(a=>{s.setAttribute(a,String(e[a]))}),i!=null&&i.length&&i.forEach(a=>{const o=F(a);s.appendChild(o)}),s},K=(n,e={})=>{const i="svg",s={...U,...e};return F([i,s,n])};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"m6 9 6 6 6-6"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]],oe={arrowLeft:P,compare:q,calendar:ee,chevronDown:ne,flag:ie,search:se,trophy:ae,users:te};function I(n,e="icon"){const i=oe[n];return i?K(i,{class:e,"aria-hidden":"true",focusable:"false"}).outerHTML:""}function ce(n,e="icon"){const i=document.createElement("span");return i.innerHTML=I(n,e),i.firstElementChild}function t(n){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function re(n,e){n.innerHTML=A(e.html,{compareIcon:I("compare","icon icon--heading"),navLinks:W(e.links),searchIcon:I("search","icon")})}function le(n,e,i){n.innerHTML=A(i.html,{navLinks:W(i.links),country:t(e.country),name:t(e.name),bio:t(e.bio),image:t(e.image),era:t(e.era),championships:e.championships,championYears:e.championYears.join(", "),teamsWonWith:e.teamsWonWith.map(t).join(", "),wins:e.wins,podiums:e.podiums,poles:e.poles,firstTitle:e.firstTitle,lastTitle:e.lastTitle,backIcon:I("arrowLeft","icon"),calendarIcon:I("calendar","icon"),flagIcon:I("flag","icon"),trophyIcon:I("trophy","icon icon--heading"),usersIcon:I("users","icon")})}function Ie(n){n.innerHTML=`
    <main class="app-error">
      <h1>Champion not found</h1>
      <p>The requested driver profile does not exist.</p>
      <a class="back-link" href="/hall-of-fame">Back to hall</a>
    </main>
  `}function de(n,e,i){n.innerHTML=A(e.html,{navLinks:W(e.links)}),document.querySelector("#seasonGrid").innerHTML=i.map(s=>`
      <article class="season-card">
        <p class="eyebrow">${s.year}</p>
        <h3><a href="${t(s.dataPath)}">${t(s.name)}</a></h3>
        <dl>
          <div>
            <dt>Champion</dt>
            <dd>${t(s.champion)}</dd>
          </div>
          <div>
            <dt>Constructor</dt>
            <dd>${t(s.constructorChampion)}</dd>
          </div>
          <div>
            <dt>Rounds</dt>
            <dd>${s.rounds}</dd>
          </div>
        </dl>
      </article>
    `).join("")}function pe(n,e,i){const{meta:s}=i;n.innerHTML=A(e.html,{navLinks:W(e.links),backIcon:I("arrowLeft","icon"),calendarIcon:I("calendar","icon icon--heading"),trophyIcon:I("trophy","icon icon--heading"),year:s.year,name:t(s.name),summary:t(s.summary),driversChampion:t(s.driversChampion),constructorsChampion:t(s.constructorsChampion),rounds:s.rounds}),ye(document.querySelector("#seasonTeams"),i),S(document.querySelector("#driverStandings"),i.standings.drivers,i,"driver"),S(document.querySelector("#constructorStandings"),i.standings.constructors,i,"team"),Ae(document.querySelector("#raceTable"),i)}function me(n,e,i,s={}){const a=i.races.find(c=>c.id===e),o=i.raceResults[e]??[];if(!a){n.innerHTML='<p class="empty-state">Select a race to view its result.</p>';return}n.innerHTML=`
    <div class="race-result-panel__header">
      <p class="eyebrow">Round ${a.round}</p>
      <h3>${s.trophy??""} ${t(a.grandPrix)}</h3>
      <p>${t(a.circuit)}, ${t(a.country)}</p>
    </div>
    <div class="season-table season-table--race-result">
      <div class="season-table__row season-table__row--head">
        <span>Pos</span>
        <span>Driver</span>
        <span>Team</span>
        <span>Status</span>
        <span>Pts</span>
      </div>
      ${o.map(c=>`
        <div class="season-table__row">
          <span>${t(c.positionText??c.position)}</span>
          <span>${t(y(i,c.driverId))}</span>
          <span>${t(k(i,c.teamId))}</span>
          <span>${We(c)}</span>
          <span>${c.points}</span>
        </div>
      `).join("")}
    </div>
  `}function Ce(n,e){n.innerHTML=`
    <option value="all">All eras</option>
    ${e.map(i=>`<option value="${t(i)}">${t(i)}</option>`).join("")}
  `}function L(n,e,i){n.innerHTML=e.map(s=>{const a=s.id===i?"selected":"";return`<option value="${t(s.id)}" ${a}>${t(s.name)}</option>`}).join("")}function ge(n){const e=n.nextElementSibling;e!=null&&e.classList.contains("custom-select")&&e.remove(),n.classList.add("native-select");const i=document.createElement("div"),s=document.createElement("button"),a=document.createElement("span"),o=document.createElement("div");i.className="custom-select",s.className="custom-select__button",s.type="button",s.setAttribute("aria-haspopup","listbox"),s.setAttribute("aria-expanded","false"),a.className="custom-select__value",o.className="custom-select__list",o.setAttribute("role","listbox"),s.append(a,ce("chevronDown","custom-select__icon")),i.append(s,o),n.insertAdjacentElement("afterend",i);const c=()=>{var l;a.textContent=((l=n.selectedOptions[0])==null?void 0:l.textContent)??"Select"};Array.from(n.options).forEach(l=>{const d=document.createElement("button");d.className="custom-select__option",d.type="button",d.textContent=l.textContent,d.dataset.value=l.value,d.setAttribute("role","option"),d.setAttribute("aria-selected",String(l.selected)),d.addEventListener("click",()=>{n.value=l.value,Y(o,l.value),c(),J(i,s),n.dispatchEvent(new Event("change",{bubbles:!0}))}),o.append(d)}),s.addEventListener("click",()=>{const l=i.classList.toggle("is-open");s.setAttribute("aria-expanded",String(l))}),s.addEventListener("keydown",l=>{l.key==="Escape"&&J(i,s)}),document.addEventListener("click",l=>{i.contains(l.target)||J(i,s)}),Y(o,n.value),c()}function he(n,e,i){if(e.textContent=`${i.length} champion${i.length===1?"":"s"} displayed`,i.length===0){n.innerHTML=`
      <div class="empty-state">
        <h3>No champions found</h3>
        <p>Try a different search term or era filter.</p>
      </div>
    `;return}n.innerHTML=i.map(be).join("")}function ue(n,e,i,s){if(!i||!s){n.innerHTML='<p class="empty-state">Select two champions to compare their records.</p>';return}n.innerHTML=`
    <div class="comparison__drivers">
      <article>
        <img src="${t(i.image)}" alt="${t(i.name)} portrait placeholder" />
        <div>
          <p>${t(i.country)}</p>
          <h3>${t(i.name)}</h3>
        </div>
      </article>
      <article>
        <img src="${t(s.image)}" alt="${t(s.name)} portrait placeholder" />
        <div>
          <p>${t(s.country)}</p>
          <h3>${t(s.name)}</h3>
        </div>
      </article>
    </div>
    <div class="comparison__table" role="table" aria-label="Champion comparison table">
      ${e.map(ve).join("")}
    </div>
  `}function be(n){return`
    <article class="champion-card">
      <a href="${t(j(n.id))}" aria-label="Open ${t(n.name)} profile">
        <img class="champion-card__image" src="${t(n.image)}" alt="${t(n.name)} portrait placeholder" />
      </a>
      <div class="champion-card__body">
        <div class="champion-card__header">
          <div>
            <p>${t(n.country)}</p>
            <h3><a href="${t(j(n.id))}">${t(n.name)}</a></h3>
          </div>
          <span class="title-badge">${I("trophy","icon")} ${n.championships}x</span>
        </div>
        <p class="champion-card__bio">${t(n.bio)}</p>
        <dl class="stat-list">
          <div>
            <dt>${I("calendar","icon")} Years</dt>
            <dd>${n.championYears.join(", ")}</dd>
          </div>
          <div>
            <dt>${I("users","icon")} Teams</dt>
            <dd>${n.teamsWonWith.map(t).join(", ")}</dd>
          </div>
        </dl>
      </div>
    </article>
  `}function ve([n,e,i]){return`
    <div class="comparison__row" role="row">
      <span role="cell">${t(e)}</span>
      <strong role="columnheader">${t(n)}</strong>
      <span role="cell">${t(i)}</span>
    </div>
  `}function ye(n,e){n.innerHTML=e.teams.map(i=>{const s=i.drivers.map(a=>y(e,a)).join(", ");return`
      <article class="season-card">
        <p class="eyebrow">${t(i.powerUnit)}</p>
        <h3>${t(i.name)}</h3>
        <dl>
          <div>
            <dt>Constructor</dt>
            <dd>${t(i.constructor)}</dd>
          </div>
          <div>
            <dt>Drivers</dt>
            <dd>${t(s)}</dd>
          </div>
        </dl>
      </article>
    `}).join("")}function S(n,e,i,s){const a=s==="driver"?y:k,o=s==="driver"?"Driver":"Constructor";n.classList.toggle("season-table--standings",!0),n.innerHTML=`
    <div class="season-table__row season-table__row--head">
      <span>Pos</span>
      <span>${o}</span>
      <span>Pts</span>
    </div>
    ${e.map(c=>`
      <div class="season-table__row">
        <span>${c.position}</span>
        <span>${t(a(i,c.driverId??c.teamId))}</span>
        <span>${c.points}</span>
      </div>
    `).join("")}
  `}function Ae(n,e){n.classList.toggle("season-table--races",!0),n.innerHTML=`
    <div class="season-table__row season-table__row--head">
      <span>Round</span>
      <span>Grand Prix</span>
      <span>Winner</span>
    </div>
    ${e.races.map(i=>`
      <button class="season-table__row season-table__row--button" type="button" data-race-id="${t(i.id)}">
        <span>${i.round}</span>
        <span>${t(i.grandPrix)}</span>
        <span>${t(y(e,i.winnerId))}</span>
      </button>
    `).join("")}
  `}function We(n){var i,s;const e=[];return(i=n.flags)!=null&&i.pole&&e.push("Pole"),(s=n.flags)!=null&&s.fastestLap&&e.push("Fastest lap"),n.status!=="Classified"&&e.unshift(n.status),e.length>0?t(e.join(" / ")):"Finished"}function y(n,e){var i;return((i=n.drivers.find(s=>s.id===e))==null?void 0:i.name)??e}function k(n,e){var i;return((i=n.teams.find(s=>s.id===e))==null?void 0:i.constructor)??e}function J(n,e){n.classList.remove("is-open"),e.setAttribute("aria-expanded","false")}function Y(n,e){n.querySelectorAll(".custom-select__option").forEach(i=>{i.setAttribute("aria-selected",String(i.dataset.value===e))})}function A(n,e){return Object.entries(e).reduce((i,[s,a])=>i.replaceAll(`{{${s}}}`,String(a)),n)}function W(n){return n.map(e=>`<a class="topbar__link" href="${t(e.href)}">${t(e.label)}</a>`).join("")}const r={champions:[],searchTerm:"",era:"all",sortMode:"titles-desc",firstChampionId:"",secondChampionId:""};function Je(n,e,i){r.champions=i,re(n,e.template);const s=T(r.champions);r.firstChampionId=s.firstId,r.secondChampionId=s.secondId,fe(),b()}function fe(){const n=document.querySelector("#searchInput"),e=document.querySelector("#eraFilter"),i=document.querySelector("#sortSelect"),s=document.querySelector("#firstChampionSelect"),a=document.querySelector("#secondChampionSelect");Ce(e,E(r.champions)),L(s,r.champions,r.firstChampionId),L(a,r.champions,r.secondChampionId),[e,i,s,a].forEach(ge),n.addEventListener("input",o=>{r.searchTerm=o.target.value,b()}),e.addEventListener("change",o=>{r.era=o.target.value,b()}),i.addEventListener("change",o=>{r.sortMode=o.target.value,b()}),s.addEventListener("change",o=>{r.firstChampionId=o.target.value,Z()}),a.addEventListener("change",o=>{r.secondChampionId=o.target.value,Z()})}function b(){const n=$(r.champions,r),e=D(n,r.sortMode);he(document.querySelector("#championGrid"),document.querySelector("#resultsCount"),e),Z()}function Z(){const n=w(r.champions,r.firstChampionId),e=w(r.champions,r.secondChampionId),i=Q(n,e);ue(document.querySelector("#comparisonTable"),i,n,e)}function we(n,e,i){const s=w(i,e.params.id);if(!s){f(e.template,"Champion not found"),Ie(n);return}f(e.template,s.name),le(n,s,e.template)}function Ze(n,e,i){de(n,e.template,i)}function je(n,e,i){pe(n,e.template,i);const s=i.races[0];s&&G(s.id,i),document.querySelectorAll("[data-race-id]").forEach(a=>{a.addEventListener("click",()=>{G(a.dataset.raceId,i)})})}function G(n,e){document.querySelectorAll("[data-race-id]").forEach(i=>{i.classList.toggle("is-active",i.dataset.raceId===n)}),me(document.querySelector("#raceResultPanel"),n,e,{trophy:I("trophy","icon icon--heading")})}const Le=`<template
  id="common-template"
  data-scripts='["src/js/common.js"]'
  data-styles='["src/less/site.less", "src/less/variables.less"]'
  data-links='[
    {"label": "Hall of Fame", "href": "/hall-of-fame"},
    {"label": "Seasons", "href": "/seasons"},
    {"label": "Compare", "href": "/hall-of-fame#compare"}
  ]'
></template>
`,Se=`<template
  id="driver-index"
  data-path="/hall-of-fame"
  data-title="Champion Drivers"
  data-description="Browse, filter, sort, and compare Formula 1 World Drivers Champions."
>
  <header class="hero">
    <nav class="topbar" aria-label="Primary navigation">
      <a class="brand" href="/hall-of-fame" aria-label="Legends of the Grid home">
        <span class="brand__mark">F1</span>
        <span>Legends of the Grid</span>
      </a>
      <div class="topbar__links">
        {{navLinks}}
      </div>
    </nav>
    <section class="hero__content" id="top">
      <p class="eyebrow">World Drivers' Champions</p>
      <h1>Formula 1's title winners, framed for comparison.</h1>
      <p class="hero__copy">
        Browse a curated hall of champion drivers, filter by era, and compare the records that shaped racing history.
      </p>
    </section>
  </header>

  <main>
    <section class="controls" aria-label="Champion controls">
      <label class="control">
        <span>Search champion</span>
        <div class="control__field">
          <span class="control__icon">{{searchIcon}}</span>
          <input id="searchInput" type="search" placeholder="Search by name" autocomplete="off" />
        </div>
      </label>

      <label class="control">
        <span>Era</span>
        <select id="eraFilter"></select>
      </label>

      <label class="control">
        <span>Sort</span>
        <select id="sortSelect">
          <option value="titles-desc">Most championships</option>
          <option value="titles-asc">Fewest championships</option>
        </select>
      </label>
    </section>

    <section class="section-heading" aria-live="polite">
      <div>
        <p class="eyebrow">Hall of fame</p>
        <h2>Champion Gallery</h2>
      </div>
      <p id="resultsCount"></p>
    </section>

    <section id="championGrid" class="champion-grid" aria-label="Champion cards"></section>

    <section id="compare" class="compare" aria-labelledby="compareTitle">
      <div class="section-heading section-heading--compare">
        <div>
          <p class="eyebrow">Record room</p>
          <h2 id="compareTitle">{{compareIcon}} Compare Champions</h2>
        </div>
      </div>
      <div class="compare__controls">
        <label class="control">
          <span>First champion</span>
          <select id="firstChampionSelect"></select>
        </label>
        <label class="control">
          <span>Second champion</span>
          <select id="secondChampionSelect"></select>
        </label>
      </div>
      <div id="comparisonTable" class="comparison"></div>
    </section>
  </main>
</template>
`,Ye=`<template
  id="driver-detail"
  data-path="/hall-of-fame/{id}"
  data-title="Champion Profile"
  data-description="View a Formula 1 World Drivers Champion profile and title record."
>
  <header class="hero hero--detail">
    <nav class="topbar" aria-label="Primary navigation">
      <a class="brand" href="/hall-of-fame" aria-label="Legends of the Grid home">
        <span class="brand__mark">F1</span>
        <span>Legends of the Grid</span>
      </a>
      <div class="topbar__links">
        {{navLinks}}
      </div>
    </nav>
    <section class="hero__content hero__content--detail" id="top">
      <a class="back-link" href="/hall-of-fame">{{backIcon}} Back to hall</a>
      <p class="eyebrow">{{flagIcon}} {{country}}</p>
      <h1>{{name}}</h1>
      <p class="hero__copy">{{bio}}</p>
    </section>
  </header>

  <main>
    <section class="driver-profile">
      <img src="{{image}}" alt="{{name}} portrait placeholder" />
      <div class="driver-profile__content">
        <p class="eyebrow">{{era}}</p>
        <h2>{{trophyIcon}} {{championships}} World Drivers' Championships</h2>
        <dl class="driver-profile__stats">
          <div>
            <dt>{{calendarIcon}} Champion years</dt>
            <dd>{{championYears}}</dd>
          </div>
          <div>
            <dt>{{usersIcon}} Teams won with</dt>
            <dd>{{teamsWonWith}}</dd>
          </div>
          <div>
            <dt>Wins</dt>
            <dd>{{wins}}</dd>
          </div>
          <div>
            <dt>Podiums</dt>
            <dd>{{podiums}}</dd>
          </div>
          <div>
            <dt>Poles</dt>
            <dd>{{poles}}</dd>
          </div>
          <div>
            <dt>Title span</dt>
            <dd>{{firstTitle}} - {{lastTitle}}</dd>
          </div>
        </dl>
      </div>
    </section>
  </main>
</template>
`,Ge=`<template
  id="season-index"
  data-path="/seasons"
  data-title="F1 Seasons"
  data-description="Browse Formula 1 season datasets."
>
  <header class="hero hero--detail">
    <nav class="topbar" aria-label="Primary navigation">
      <a class="brand" href="/hall-of-fame" aria-label="Legends of the Grid home">
        <span class="brand__mark">F1</span>
        <span>Legends of the Grid</span>
      </a>
      <div class="topbar__links">{{navLinks}}</div>
    </nav>
    <section class="hero__content hero__content--detail" id="top">
      <p class="eyebrow">Season archive</p>
      <h1>Formula 1 seasons by year.</h1>
      <p class="hero__copy">Explore static season data split into JSON files for teams, drivers, standings, races, and race results.</p>
    </section>
  </header>

  <main class="season-page">
    <section class="section-heading">
      <div>
        <p class="eyebrow">Available datasets</p>
        <h2>Season Library</h2>
      </div>
    </section>
    <section id="seasonGrid" class="season-grid" aria-label="Season cards"></section>
  </main>
</template>
`,Fe=`<template
  id="season-detail"
  data-path="/seasons/{year}"
  data-title="Season Detail"
  data-description="View Formula 1 season teams, drivers, standings, and race classifications."
>
  <header class="hero hero--detail">
    <nav class="topbar" aria-label="Primary navigation">
      <a class="brand" href="/hall-of-fame" aria-label="Legends of the Grid home">
        <span class="brand__mark">F1</span>
        <span>Legends of the Grid</span>
      </a>
      <div class="topbar__links">{{navLinks}}</div>
    </nav>
    <section class="hero__content hero__content--detail" id="top">
      <a class="back-link" href="/seasons">{{backIcon}} Back to seasons</a>
      <p class="eyebrow">Season {{year}}</p>
      <h1>{{name}}</h1>
      <p class="hero__copy">{{summary}}</p>
    </section>
  </header>

  <main class="season-page">
    <section class="season-summary">
      <article>
        <span>{{trophyIcon}}</span>
        <p>Drivers' Champion</p>
        <strong>{{driversChampion}}</strong>
      </article>
      <article>
        <span>{{trophyIcon}}</span>
        <p>Constructors' Champion</p>
        <strong>{{constructorsChampion}}</strong>
      </article>
      <article>
        <span>{{calendarIcon}}</span>
        <p>Rounds</p>
        <strong>{{rounds}}</strong>
      </article>
    </section>

    <section class="section-heading">
      <div>
        <p class="eyebrow">Entries</p>
        <h2>Teams and Drivers</h2>
      </div>
    </section>
    <section id="seasonTeams" class="season-grid" aria-label="Season teams"></section>

    <section class="season-columns">
      <section>
        <div class="section-heading section-heading--compact">
          <div>
            <p class="eyebrow">Standings</p>
            <h2>Drivers</h2>
          </div>
        </div>
        <div id="driverStandings" class="season-table"></div>
      </section>

      <section>
        <div class="section-heading section-heading--compact">
          <div>
            <p class="eyebrow">Standings</p>
            <h2>Constructors</h2>
          </div>
        </div>
        <div id="constructorStandings" class="season-table"></div>
      </section>
    </section>

    <section class="section-heading">
      <div>
        <p class="eyebrow">Race results</p>
        <h2>Grand Prix Classifications</h2>
      </div>
      <p>Click a race to view finishing order</p>
    </section>
    <section class="season-race-layout">
      <div id="raceTable" class="season-table"></div>
      <div id="raceResultPanel" class="race-result-panel"></div>
    </section>
  </main>
</template>
`,g=m(Le,"common.html"),h=[{type:"css",name:"common.css",files:["variables.less","site.less"]},{type:"js",name:"common.js",files:["common.js","data.js","icons.js","render.js"]}],v=[{path:"/hall-of-fame",template:u(g,m(Se,"driver.html")),bundles:[...h,{type:"css",name:"page-drivers.css",files:["driver.less","compare.less"]},{type:"js",name:"page-drivers.js",files:["driver.js","filters.js","compare.js"]}],match(n){const e=C(n);return e==="/hall-of-fame"||e==="/drivers"||e==="/driver"?{}:null}},{path:"/hall-of-fame/{id}",template:u(g,m(Ye,"driver-detail.html")),bundles:[...h,{type:"css",name:"page-driver-detail.css",files:["driver.less"]},{type:"js",name:"page-driver-detail.js",files:["driver-detail.js","compare.js"]}],match(n){const i=C(n).match(/^\/(?:hall-of-fame|drivers?)\/([^/]+)$/);return i?{id:i[1]}:null}},{path:"/seasons",template:u(g,m(Ge,"seasons.html")),bundles:[...h,{type:"css",name:"page-seasons.css",files:["seasons.less"]},{type:"js",name:"page-seasons.js",files:["season.js"]}],match(n){return C(n)==="/seasons"?{}:null}},{path:"/seasons/{year}",template:u(g,m(Fe,"season-detail.html")),bundles:[...h,{type:"css",name:"page-season-detail.css",files:["seasons.less"]},{type:"js",name:"page-season-detail.js",files:["season.js"]}],match(n){const i=C(n).match(/^\/seasons\/(\d{4})$/);return i?{year:Number(i[1])}:null}}];v.map(({path:n,template:e,bundles:i})=>({path:n,template:e.file,title:e.title,bundles:i}));function ke(n){for(const e of v){const i=e.match(n);if(i)return{template:e.template,params:i,bundles:e.bundles}}return{template:v[0].template,params:{},bundles:v[0].bundles}}function u(n,e){return{...e,links:e.links.length>0?e.links:n.links}}function m(n,e){const s=new DOMParser().parseFromString(n,"text/html").querySelector("template");return{id:s.id,file:e,path:s.dataset.path??"",title:s.dataset.title??"",description:s.dataset.description??"",links:Ve(s,"links",[]),html:s.innerHTML.trim()}}function Ve(n,e,i){const s=n.dataset[e];if(!s)return i;try{return JSON.parse(s)}catch{return i}}async function Re(){const n=document.querySelector("#app"),e=ke(window.location.pathname);try{if(f(e.template),e.template.id==="season-index"){Ze(n,e,await _());return}if(e.template.id==="season-detail"){je(n,e,await O(e.params.year));return}const i=await z();if(e.template.id==="driver-detail"){we(n,e,i);return}Je(n,e,i)}catch(i){n.innerHTML=`
      <main class="app-error">
        <h1>Legends of the Grid</h1>
        <p>${i.message}</p>
      </main>
    `}}Re();
