var microwaveRatio = 1 + (224000 / // 4 minutes slow, less 17 seconds
  // date compared (actually local time, without considering DST)
  +(new Date('02:47 2016-03-14 UTC'))
  // date set
  - +(new Date('17:36 2015-11-22 UTC')));

// pocket watch synced to PC on the second at 2016-03-14T11:16:00Z
