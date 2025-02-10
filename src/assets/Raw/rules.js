const data = [
  {
    title: "Football Fancy",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Big Bash League",
    rows: [
      { flag: false, data: "Total match 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Highest innings run - Only first innings is valid" },
      { flag: false, data: "Lowest innings run - Only first innings is valid" },
      { flag: false, data: "Total 1st 6 over run:- Average 46 runs will be given if total 20 overs is not played, This event is valid only for the 1st innings" },
      { flag: false, data: "Total Fours - Average 25 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 10 sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wickets - Average will 12 Wickets be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wides - Average 8 wides will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 14 extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Fifties - Average 2 fifties will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Caught out - Average 8 catch out will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Bowled out - Average 2 bowled out will be given in case match abandoned or over reduced" },
      { flag: false, data: "Highest 6 over run: Both innings are valid" },
      { flag: false, data: "Highest run in individual match: Both innings are valid" },
      { flag: false, data: "Highest Fours in individual match: Both innings are valid" },
      { flag: false, data: "Highest Sixes in individual match: Both innings are valid" },
      { flag: false, data: "Total LBW:- Average 1 LBW will be given in case match abandoned or over reduced" },
      { flag: false, data: "Highest Wickets in individual match: Both innings are valid" },
      { flag: false, data: "Highest extras in individual match: Both innings are valid" },
      { flag: false, data: "Highest match 1st over run in individual match: Only 1st inning will be considered as valid valid" },
      { flag: true, data: "All events related to bowler are valid only for the league stages, both the innings will be considered as valid. A minimum of 32 overs has to be bowled else the same will be voided. If the mentioned bowler has bowled one legal delivery then it will be considered as 1 over even if the over is not completed" },
      { flag: true, data: "All events based on ground are decided based on the initial fixture, in case of any changes in the venue between the series. Then average will be given based on the initial fixture for the number of games reduced, Similarly if any match is added newly to the venue will not be considered" },
      { flag: true, data: "Average for wickets taken will be given in case match abandoned or over reduced or the player has not bowled single legal delivery before the over got reduced" },
      { flag: true, data: "Fancy based on all individual teams/players/ground are valid only for league stage" },
      { flag: true, data: "Management decision will be final" },
      { flag: true, data: "Bellerive Oval:- Hobart" },
      { flag: false, data: "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total 6 over run:- Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total Fours - Average 28 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 11 Sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wide – Average 8 Wide will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Run- Average 330 runs will be given in case match abandoned or over reduced" },
      { flag: true, data: "Manuka Oval:- Canberra" },
      { flag: false, data: "Total 1st over run:- Average 5 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total 6 over run:- Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total Fours - Average 24 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 10 Sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wide – Average 8 Wide will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 13 Extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Run- Average 318 runs will be given in case match abandoned or over reduced" },
      { flag: true, data: "Bellerive Oval:- Hobart" },
      { flag: false, data: "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced" },
      { flag: true, data: "Aurora stadium:- Launceston" },
      { flag: false, data: "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total 6 over run:- Average 45 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total Fours - Average 25 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 10 Sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wide – Average 8 Wide will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Run- Average 320 runs will be given in case match abandoned or over reduced" },
      { flag: true, data: "The Gabba:- Brisbane" },
      { flag: false, data: "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total 6 over run:- Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total Fours - Average 24 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 9 Sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wide – Average 8 Wide will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 13 Extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Run- Average 310 runs will be given in case match abandoned or over reduced" },
      { flag: true, data: "QUEENSLAND" },
      { flag: false, data: "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total 6 over run:- Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total Fours - Average 24 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 10 Sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wide – Average 8 Wide will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Run- Average 315 runs will be given in case match abandoned or over reduced" },
      { flag: true, data: "Adelaide Oval" },
      { flag: false, data: "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total 6 over run:- Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total Fours - Average 27 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 10 Sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wide – Average 8 Wide will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Run- Average 320 runs will be given in case match abandoned or over reduced" },
      { flag: true, data: "Perth Stadium" },
      { flag: false, data: "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total 6 over run:- Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total Fours - Average 26 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 12 Sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wide – Average 9 Wide will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 16 Extras will be given in case match abandoned or over reducedTotal Extras - Average 16 Extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Run- Average 340 runs will be given in case match abandoned or over reduced" },
      { flag: true, data: "Showground Stadium" },
      { flag: false, data: "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total 6 over run:- Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total Fours - Average 25 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 9 Sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wide – Average 8 Wide will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Run- Average 315 runs will be given in case match abandoned or over reduced" },
      { flag: true, data: "Docklands Stadium" },
      { flag: false, data: "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total 6 over run:- Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total Fours - Average 25 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 11 Sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wide – Average 8 Wide will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 14 Extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Run- Average 320 runs will be given in case match abandoned or over reduced" },
      { flag: true, data: "Melbourne Ground" },
      { flag: false, data: "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total 6 over run:- Average 45 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total Fours - Average 26 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 10 Sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wide – Average 8 Wide will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 15 Extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Run- Average 330 runs will be given in case match abandoned or over reduced" },
      { flag: true, data: "Sydney Ground" },
      { flag: false, data: "Total 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total 6 over run:- Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid" },
      { flag: false, data: "Total Fours - Average 26 fours will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Sixes - Average 12 Sixes will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Wide – Average 8 Wide will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Extras - Average 15 Extras will be given in case match abandoned or over reduced" },
      { flag: false, data: "Total Run- Average 335 runs will be given in case match abandoned or over reduced" },
      { flag: true, data: "Average will be given for player if the mentioned player is not included in the playing 11" },
      { flag: true, data: "If the mentioned player is not included in playing 11 for 3 consecutive matches and the mentioned player will be deleted" },
      { flag: true, data: "Super over will not be included" },
    ]
  },
  {
    title: "Lunch Favorite",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Bookmarker",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Politics",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Fancy Market",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "IPL",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Women's Premier League (WPL)",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Pakistan Super League (PSL)",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Kabaddi",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Horse Racing",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "World Cup",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Binary",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Match",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Khado",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Election",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
  {
    title: "Virtual Tennis",
    rows: [
      { flag: true, data: "Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided..." },
      { flag: true, data: "Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count." },
      { flag: true, data: "Tournament Corners - Only corners taken in 90 minutes count." },
      { flag: true, data: "Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count." },
    ]
  },
];

export default data;