/* ============================================================
   WILDMAN ROBERTSON — FIREARMS IN STOCK
   Generated from Stock/FIREARMS/Firearm Verification.xlsx
   Showcase set: only models with a product photo are listed
   (50 models). Entries without a photo were removed 7 Oct 2026;
   the full stock sheet is still the source of truth.
   NOTE: serial and registration numbers are never published.
   lic: licence-section hint key → hunt | sd | sport (see firearm.html)
   ============================================================ */

/* Shared family content — keeps variants consistent */
var FAM = {
  howaM1500: {
    features: ['Forged one-piece bolt with two-stage HACT trigger', 'Cold hammer-forged Japanese barrel', 'Hogue-style pillar-bedded synthetic stock', 'Threaded muzzle (capped) for brake or suppressor', 'Lifetime action accuracy reputation at a working-rifle price'],
    market: 'The Howa M1500 has quietly become one of South Africa\'s favourite value hunting actions — Japanese build quality, a genuinely good factory trigger, and accuracy that embarrasses rifles at twice the price. A very easy rifle to recommend to first-time hunters.'
  },
  howaM1500HB: {
    features: ['Heavy/varmint contour cold hammer-forged barrel', 'Two-stage HACT match-style trigger', 'Threaded muzzle for brake or suppressor', 'Pillar-bedded synthetic stock', 'Ideal platform for long-range and varmint work'],
    market: 'The heavy-barrel M1500s are the budget precision secret of SA shooting clubs — stiff barrels, honest sub-MOA potential with good ammo, and a bombproof action that gunsmiths love working with.'
  },
  ataTurqua: {
    features: ['Turkish walnut stock with adjustable options', 'Cold hammer-forged 61cm barrel, threaded muzzle', 'Sliding three-position safety', 'Adjustable single-stage trigger', 'Detachable magazine'],
    market: 'The Turqua has won a strong following in SA as the walnut-stocked hunting rifle that undercuts the European names without feeling cheap — reviewers consistently note the smooth action and better-than-expected accuracy.'
  },
  rugerAmGen2: {
    features: ['Gen 2 adjustable stock — comb height & length of pull', 'Spiral-fluted, cold hammer-forged barrel with muzzle brake', 'Ruger Marksman adjustable trigger (3–5 lb)', 'Splatter-finish Cerakote metalwork', 'Three-lug 70° bolt with oversized handle'],
    market: 'The American Gen 2 took the best-selling budget rifle in the US and fixed everything hunters asked for — the adjustable stock and factory brake make it a superbly practical Karoo rifle out of the box. Reviewers rate it the value benchmark in its class.'
  },
  rugerAmRimfire: {
    features: ['Ruger Marksman adjustable trigger', 'Interchangeable comb modules (low for irons, high for scope)', 'Detachable 10/22-pattern rotary magazine', 'Cold hammer-forged barrel', 'Ideal trainer that mirrors the centrefire American'],
    market: 'A favourite first rifle in SA — cheap to feed, accurate, and it shares magazines with the 10/22. The adjustable comb means it grows with the shooter from irons to optics.'
  },
  glock19: {
    features: ['Compact 15+1 9mmP — the global benchmark carry size', 'Legendary reliability with minimal maintenance', 'Safe Action striker system, consistent trigger', 'Massive local parts, holster and gunsmith support', 'Ideal balance of shootability and concealability'],
    market: 'The Glock 19 is the most recommended defensive pistol in South Africa, full stop. Instructors default to it, parts and magazines are everywhere, and resale stays strong. If you ask ten professionals what to buy first, eight say G19.'
  },
  czP09: {
    features: ['DA/SA hammer-fired with decocker (convertible to safety)', 'High capacity 9mmP', 'Renowned CZ ergonomics and pointability', 'Nocturne edition styling and sights', 'Popular IDPA/IPSC production-class choice'],
    market: 'CZ\'s P-09 is the sport shooter\'s favourite duty-size pistol in SA — soft-shooting, accurate, and the DA/SA action gives new shooters a wonderfully forgiving platform. The Nocturne editions have been selling out nationally.'
  },
  pcCarbine: {
    features: ['Takedown design — splits in seconds for transport', 'Interchangeable magazine wells: Ruger AND Glock mags', 'Dead-blow bolt reduces felt recoil', 'Threaded barrel, ghost-ring sights', 'Pairs perfectly with a 9mm pistol'],
    market: 'The PC Carbine is the pistol-calibre carbine most SA dealers recommend — the Glock magazine compatibility is the killer feature, making it the natural range partner for the country\'s most common pistol.'
  }
};

var FIREARMS_STOCK = [
  /* ---- RIFLES — centrefire hunting & precision ---- */
  { id: 'win-m70-supergrade', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Winchester Model 70 Super Grade', calibre: '.308 Win', detail: 'Classic walnut sporter', price: 46499, qty: 1, img: 'images/firearms/winchester-m70.jpg', lic: 'hunt',
    features: ['"The Rifleman\'s Rifle" — pre-64 style controlled round feed', 'Massive claw extractor for guaranteed feeding', 'Grade IV/V fancy walnut with ebony forend tip', 'Three-position safety', 'M.O.A. adjustable trigger'],
    market: 'The Model 70 Super Grade is pure classic Americana — collectors and hunters alike praise the controlled-round-feed action and showpiece walnut. A rifle bought as much with the heart as the head, and it never disappoints either.' },
  { id: 'win-m70-safari', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Winchester Model 70 Safari Express', calibre: '.375 H&H Mag', detail: 'Dangerous-game classic', price: 51999, qty: 1, img: 'images/firearms/winchester-m70.jpg', lic: 'hunt',
    features: ['.375 H&H — the legal minimum and classic choice for African dangerous game', 'Controlled round feed with claw extractor — feeds upside down if it must', 'Express open sights + drilled/tapped for optics', 'Dual steel crossbolts in reinforced walnut stock', 'Three-position safety'],
    market: 'For a buffalo rifle, professional hunters keep coming back to two names — and this is one of them. The Safari Express in .375 H&H is the standard by which working dangerous-game rifles are judged.' },
  { id: 'savage-impulse-300wm', cat: 'rifles', type: 'Straight-Pull Rifle', name: 'Savage Impulse', calibre: '.300 Win Mag', detail: 'Fluted 24" barrel, 5/8x24 thread', price: 47699, qty: 1, img: 'images/firearms/savage-impulse.jpg', lic: 'hunt',
    features: ['American straight-pull action — fastest follow-up shots in bolt guns', 'Hexlock ball-bearing locking system', 'AccuTrigger and AccuFit adjustable stock', 'Fluted, threaded 24" barrel', 'Ambidextrous, reversible bolt handle'],
    market: 'Straight-pulls have taken European hunting by storm and the Impulse brought the concept to a working price. Owners rave about the speed on driven and follow-up shots — a genuinely different experience from a turn-bolt.' },
  { id: 'ruger-am-gen2-243', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Ruger American Gen 2', calibre: '.243 Win', detail: 'Model 46904', price: 20499.99, qty: 1, img: 'images/firearms/ruger-american-gen2.jpg', lic: 'hunt', features: FAM.rugerAmGen2.features, market: FAM.rugerAmGen2.market },
  { id: 'ruger-am-gen2-308', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Ruger American Gen 2', calibre: '.308 Win', detail: 'Model 46902', price: 22399, qty: 1, img: 'images/firearms/ruger-american-gen2.jpg', lic: 'hunt', features: FAM.rugerAmGen2.features, market: FAM.rugerAmGen2.market },
  { id: 'ruger-am-gen2-223', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Ruger American Gen 2', calibre: '.223 Rem', detail: 'Model 46909', price: 20999.99, qty: 1, img: 'images/firearms/ruger-american-gen2.jpg', lic: 'hunt', features: FAM.rugerAmGen2.features, market: FAM.rugerAmGen2.market },
  { id: 'ruger-am-predator-gowild', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Ruger American Predator Go Wild', calibre: '.243 Win', detail: 'Go Wild camo', price: 24959, qty: 1, img: 'images/firearms/ruger-american-predator.jpg', lic: 'hunt',
    features: ['Go Wild I-M Brush camo stock', 'Heavier tapered threaded barrel', 'Ruger Marksman adjustable trigger', 'Factory-installed one-piece scope rail', 'Purpose-built for varmint and predator work'],
    market: 'The Predator variant is the American that target shooters buy — the heavier barrel steadies it on the sticks, and .243 makes it a superb jackal, rooikat and springbok rifle.' },
  { id: 'ruger-am-3006', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Ruger American', calibre: '.30-06 Springfield', detail: '', price: 16995, qty: 1, img: 'images/firearms/ruger-american-3006.jpg', lic: 'hunt',
    features: ['Ruger Marksman adjustable trigger', 'Power Bedding integral bedding blocks', 'Cold hammer-forged barrel', 'Lightweight synthetic stock', '.30-06 — the classic do-anything calibre'],
    market: 'The original American remains the definitive budget hunting rifle — millions sold on a simple recipe of real accuracy at an honest price. In .30-06 it will take anything in the Cape.' },
  { id: 'ruger-am-ranch-762', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Ruger American Ranch', calibre: '7.62x39', detail: 'Compact ranch rifle', price: 20995, qty: 1, img: 'images/firearms/ruger-ranch.jpg', lic: 'hunt',
    features: ['Compact 16" barrel format', 'Threaded muzzle', 'Accepts Mini-30 style magazines', '7.62x39 — cheap, effective bushveld cartridge', 'Ideal farm and truck rifle'],
    market: 'The Ranch in 7.62x39 is the practical farmer\'s rifle — short, handy, cheap to feed, and plenty of punch for pigs and plains game at bush distances.' },
  { id: 'ruger-hawkeye-ftw-hunter', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Ruger Hawkeye FTW Hunter', calibre: '6.5mm Creedmoor', detail: '', price: 24999, qty: 1, img: 'images/firearms/ruger-hawkeye-ftw.jpg', lic: 'hunt',
    features: ['Developed with the FTW Ranch shooting school', 'Adjustable laminate stock', 'Threaded, hammer-forged barrel with brake', 'Controlled round feed Hawkeye action', 'LC6 trigger'],
    market: 'The FTW Hunter was built to a shooting school\'s spec rather than a marketing brief, and it shows — a serious practical hunting rifle praised for balance and real-world accuracy.' },
  { id: 'ruger-hawkeye-ftw-predator', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Ruger Hawkeye FTW Predator', calibre: '6.5mm Creedmoor', detail: '', price: 24550, qty: 1, img: 'images/firearms/ruger-hawkeye-ftw.jpg', lic: 'hunt',
    features: ['FTW Ranch collaboration — predator/target configuration', 'Adjustable laminate stock', 'Threaded heavy-contour barrel', 'Controlled round feed action', '6.5 Creedmoor — flat, efficient, easy on the shoulder'],
    market: 'Same FTW pedigree in a configuration aimed at longer sits and smaller targets. The controlled-feed Hawkeye action gives it an old-school reliability the spec sheet doesn\'t capture.' },
  { id: 'ruger-hawkeye-african-375', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Ruger Hawkeye African', calibre: '.375 Ruger', detail: 'Model 37186', price: 50700, qty: 1, img: 'images/firearms/ruger-hawkeye-african.jpg', lic: 'hunt',
    features: ['.375 Ruger — H&H power from a standard-length action', 'Windage-adjustable express sights', 'Controlled round feed with fixed blade ejector', 'Ebony forend tip walnut stock', 'Muzzle brake included'],
    market: 'The .375 Ruger delivers full H&H ballistics in a handier rifle, and African PH circles have quietly adopted it. A legitimate dangerous-game rifle at a fraction of the safari-grade price tags.' },
  { id: 'ruger-precision-338', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Ruger Precision Rifle', calibre: '.338 Lapua Mag', detail: 'Long-range precision', price: 64995, qty: 1, img: 'images/firearms/ruger-precision-338.jpg', lic: 'sport',
    features: ['.338 Lapua Magnum — serious 1,500m+ capability', 'Magnum-length precision action', 'Folding adjustable chassis stock', 'Heavy contour barrel with muzzle brake', 'Free-floated handguard'],
    market: 'For extreme long range on a factory-rifle budget, the RPR in .338 Lapua stands almost alone. Owners report ringing steel at distances that used to require custom builds costing three times as much.' },
  { id: 'ata-turqua-308', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'ATA Arms Turqua', calibre: '.308 Win', detail: 'Monte Carlo walnut stock', price: 22399.99, qty: 1, img: 'images/firearms/ata-turqua.png', lic: 'hunt', features: FAM.ataTurqua.features, market: FAM.ataTurqua.market },
  { id: 'ata-turqua-65cm', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'ATA Arms Turqua', calibre: '6.5mm Creedmoor', detail: 'Adjustable walnut stock', price: 22399.99, qty: 1, img: 'images/firearms/ata-turqua.png', lic: 'hunt', features: FAM.ataTurqua.features, market: FAM.ataTurqua.market },
  { id: 'ata-turqua-3006', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'ATA Arms Turqua', calibre: '.30-06 Springfield', detail: 'Adjustable walnut stock', price: 22499.99, qty: 1, img: 'images/firearms/ata-turqua.png', lic: 'hunt', features: FAM.ataTurqua.features, market: FAM.ataTurqua.market },
  { id: 'howa-m1500-270', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500', calibre: '.270 Win', detail: 'Blued, 22" barrel, synthetic', price: 14799, qty: 1, img: 'images/firearms/howa-m1500.png', lic: 'hunt', features: FAM.howaM1500.features, market: FAM.howaM1500.market },
  { id: 'howa-m1500-3006', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500', calibre: '.30-06 Springfield', detail: 'Blued, 22" threaded/capped', price: 14899.99, qty: 1, img: 'images/firearms/howa-m1500.png', lic: 'hunt', features: FAM.howaM1500.features, market: FAM.howaM1500.market },
  { id: 'howa-m1500-243-22', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500', calibre: '.243 Win', detail: 'Blued, 22" threaded/capped', price: 14850, qty: 1, img: 'images/firearms/howa-m1500.png', lic: 'hunt', features: FAM.howaM1500.features, market: FAM.howaM1500.market },
  { id: 'howa-m1500-243-24', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500', calibre: '.243 Win', detail: 'Blued, 24" threaded, synthetic', price: 15199, qty: 1, img: 'images/firearms/howa-m1500.png', lic: 'hunt', features: FAM.howaM1500.features, market: FAM.howaM1500.market },
  { id: 'howa-m1500-65cm', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500', calibre: '6.5mm Creedmoor', detail: 'Blued, threaded barrel', price: 15199, qty: 1, img: 'images/firearms/howa-m1500.png', lic: 'hunt', features: FAM.howaM1500.features, market: FAM.howaM1500.market },
  { id: 'howa-m1500-308-24', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500', calibre: '.308 Win', detail: '24" threaded barrel', price: 15899.99, qty: 1, img: 'images/firearms/howa-m1500.png', lic: 'hunt', features: FAM.howaM1500.features, market: FAM.howaM1500.market },
  { id: 'howa-m1500-308-26', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500', calibre: '.308 Win', detail: '26" threaded barrel', price: 16599, qty: 1, img: 'images/firearms/howa-m1500.png', lic: 'hunt', features: FAM.howaM1500.features, market: FAM.howaM1500.market },
  { id: 'howa-m1500-hb-223', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500 Heavy Barrel', calibre: '.223 Rem', detail: '24" heavy barrel, threaded/capped', price: 15899.99, qty: 1, img: 'images/firearms/howa-m1500-hb.png', lic: 'hunt', features: FAM.howaM1500HB.features, market: FAM.howaM1500HB.market },
  { id: 'howa-m1500-hb-22250', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500 Heavy Barrel', calibre: '.22-250 Rem', detail: '24" threaded barrel', price: 15799, qty: 1, img: 'images/firearms/howa-m1500-hb.png', lic: 'hunt', features: FAM.howaM1500HB.features, market: FAM.howaM1500HB.market },
  { id: 'howa-m1500-hb-300wm', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500 Heavy Barrel', calibre: '.300 Win Mag', detail: '26" heavy barrel, threaded/capped', price: 17499.99, qty: 2, img: 'images/firearms/howa-m1500-hb.png', lic: 'hunt', features: FAM.howaM1500HB.features, market: FAM.howaM1500HB.market },
  { id: 'howa-m1500-sb-300wm', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500 Semi-Bull', calibre: '.300 Win Mag', detail: '26" threaded, synthetic', price: 11999.99, qty: 1, img: 'images/firearms/howa-m1500-hb.png', lic: 'hunt', features: FAM.howaM1500HB.features, market: FAM.howaM1500HB.market },
  { id: 'howa-m1500-hb-300prc', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500 Heavy Barrel', calibre: '.300 PRC', detail: '26" heavy barrel, threaded', price: 17149.99, qty: 1, img: 'images/firearms/howa-m1500-hb.png', lic: 'hunt', features: FAM.howaM1500HB.features, market: FAM.howaM1500HB.market },
  { id: 'howa-m1500-hb-65prc', cat: 'rifles', type: 'Bolt-Action Rifle', name: 'Howa M1500 Heavy Barrel', calibre: '6.5 PRC', detail: '24" heavy barrel, threaded/capped', price: 17149.99, qty: 2, img: 'images/firearms/howa-m1500-hb.png', lic: 'hunt', features: FAM.howaM1500HB.features, market: FAM.howaM1500HB.market },

  /* ---- RIFLES — semi-auto / carbine ---- */
  { id: 'ruger-ar556', cat: 'rifles', type: 'Semi-Auto Rifle', name: 'Ruger AR-556', calibre: '5.56x45mm', detail: '16.1" barrel, model 8500', price: 31600, qty: 1, img: 'images/firearms/ruger-ar556.jpg', lic: 'sport',
    features: ['Ruger-built AR-15 with forged upper/lower', 'Cold hammer-forged 16.1" barrel', 'Adjustable stock, A2-style grip', 'Milspec-pattern parts compatibility', 'The value benchmark in factory ARs'],
    market: 'Ruger\'s AR-556 earned its reputation as the sensible entry into the AR platform — boringly reliable, correctly built, and backed by Ruger service. Sport shooters rate it the best value factory AR available locally.' },
  { id: 'ruger-sfar', cat: 'rifles', type: 'Semi-Auto Rifle', name: 'Ruger SFAR', calibre: '7.62x51 / .308', detail: '20" barrel, model 5611', price: 40995, qty: 1, img: 'images/firearms/ruger-sfar.jpg', lic: 'sport',
    features: ['.308 power in an AR-15 sized rifle — the SFAR\'s party trick', '20" barrel for full 7.62 ballistics', 'Two-port muzzle brake', 'Free-float M-LOK handguard', 'Significantly lighter than AR-10 class rifles'],
    market: 'The Small-Frame Autoloading Rifle genuinely surprised reviewers — .308 authority at AR-15 weight. For gong shooters wanting reach with semi-auto speed, it\'s one of the most interesting rifles of recent years.' },
  { id: 'ruger-pc-carbine', cat: 'rifles', type: 'Pistol-Calibre Carbine', name: 'Ruger PC Carbine', calibre: '9mm P', detail: 'Model 19100', price: 24100, qty: 1, img: 'images/firearms/ruger-pc-carbine.jpg', lic: 'sport', features: FAM.pcCarbine.features, market: FAM.pcCarbine.market },
  { id: 'ruger-pc-carbine-tact', cat: 'rifles', type: 'Pistol-Calibre Carbine', name: 'Ruger PC Carbine Tactical', calibre: '9mm P', detail: 'Model 19115', price: 26900, qty: 1, img: 'images/firearms/ruger-pc-carbine-tactical.jpg', lic: 'sport', features: FAM.pcCarbine.features, market: FAM.pcCarbine.market },

  /* ---- RIFLES — rimfire ---- */
  { id: 'ruger-1022', cat: 'rifles', type: 'Rimfire Rifle', name: 'Ruger 10/22 Carbine', calibre: '.22 LR', detail: 'The classic semi-auto rimfire', price: 11999.99, qty: 2, img: 'images/firearms/ruger-1022.jpg', lic: 'hunt',
    features: ['The world\'s most popular .22 semi-auto — 50+ years in production', 'Legendary 10-round rotary magazine', 'Hardwood stock, 18.5" barrel', 'Unmatched aftermarket upgrade ecosystem', 'The definitive plinker and first rifle'],
    market: 'Seven million sold and counting — the 10/22 is the rifle most shooters learned on. Cheap to run, endlessly customisable, and utterly proven. There is no safer firearm purchase.' },
  { id: 'ruger-precision-rimfire', cat: 'rifles', type: 'Rimfire Rifle', name: 'Ruger Precision Rimfire', calibre: '.22 LR', detail: '18" barrel', price: 17499.99, qty: 1, img: 'images/firearms/ruger-precision-rimfire.jpg', lic: 'sport',
    features: ['Scaled-down Ruger Precision Rifle in .22 LR', 'Adjustable precision chassis stock', 'Bolt throw mimics centrefire RPR for training', 'Takes 10/22 magazines', 'Ideal rimfire PRS/club competition rifle'],
    market: 'Rimfire precision competition has exploded in SA clubs, and this is one of its standard rifles — centrefire training for cents per round, praised as ludicrous fun for the money.' },
  { id: 'ruger-am-rimfire-17hmr', cat: 'rifles', type: 'Rimfire Rifle', name: 'Ruger American Rimfire', calibre: '.17 HMR', detail: '', price: 14499, qty: 1, img: 'images/firearms/ruger-american-rimfire.jpg', lic: 'hunt', features: FAM.rugerAmRimfire.features, market: FAM.rugerAmRimfire.market },
  { id: 'ruger-am-rimfire-22', cat: 'rifles', type: 'Rimfire Rifle', name: 'Ruger American Rimfire', calibre: '.22 LR', detail: '', price: 14550, qty: 1, img: 'images/firearms/ruger-american-rimfire.jpg', lic: 'hunt', features: FAM.rugerAmRimfire.features, market: FAM.rugerAmRimfire.market },
  { id: 'ruger-am-rimfire-thread', cat: 'rifles', type: 'Rimfire Rifle', name: 'Ruger American Rimfire Threaded', calibre: '.22 LR', detail: 'Threaded muzzle', price: 15415, qty: 1, img: 'images/firearms/ruger-american-rimfire.jpg', lic: 'hunt', features: FAM.rugerAmRimfire.features, market: FAM.rugerAmRimfire.market },
  { id: 'cz-457-lux', cat: 'rifles', type: 'Rimfire Rifle', name: 'CZ 457 Lux', calibre: '.22 LR', detail: 'Walnut, iron sights', price: 20999, qty: 2, img: 'images/firearms/cz-457-lux.jpg', lic: 'hunt',
    features: ['Turkish walnut stock with European-style comb', 'Tangent-adjustable iron sights', 'Fully adjustable trigger', 'Interchangeable barrel system', 'CZ rimfire accuracy pedigree'],
    market: 'CZ rimfires are the connoisseur\'s .22 — the 457 Lux pairs proper walnut and irons with a trigger and barrel that outshoot rifles costing far more. The .22 you keep for life.' },

  /* ---- HANDGUNS — pistols ---- */
  { id: 'glock-19-gen3', cat: 'handguns', type: 'Semi-Auto Pistol', name: 'Glock 19 Gen 3', calibre: '9mm P', detail: 'The proven compact 9mm', price: 9999.99, qty: 4, img: 'images/firearms/glock19.jpg', lic: 'sd', features: FAM.glock19.features,
    market: FAM.glock19.market + ' The Gen 3 is the classic recipe at the sharpest price — the most gun-per-rand in the cabinet.' },
  { id: 'glock-19-gen5', cat: 'handguns', type: 'Semi-Auto Pistol', name: 'Glock 19 Gen 5', calibre: '9mm P', detail: 'Fixed sights, front serrations', price: 15299.99, qty: 1, img: 'images/firearms/glock19.jpg', lic: 'sd', features: FAM.glock19.features,
    market: FAM.glock19.market + ' Gen 5 adds the improved Marksman barrel, ambidextrous slide stop and a grip without finger grooves.' },
  { id: 'glock-19-gen6', cat: 'handguns', type: 'Semi-Auto Pistol', name: 'Glock 19 Gen 6', calibre: '9mm P', detail: 'The newest generation G19', price: 18699.99, qty: 4, img: 'images/firearms/glock19.jpg', lic: 'sd', features: FAM.glock19.features,
    market: FAM.glock19.market + ' The newest generation brings Glock\'s latest refinements to the proven G19 formula — ask us in-store for the full rundown.' },
  { id: 'cz-p09-nocturne', cat: 'handguns', type: 'Semi-Auto Pistol', name: 'CZ P-09 Compact Nocturne', calibre: '9mm P', detail: '', price: 14499, qty: 3, img: 'images/firearms/cz-p09-nocturne.jpg', lic: 'sd', features: FAM.czP09.features, market: FAM.czP09.market },
  { id: 'cz-p10f', cat: 'handguns', type: 'Semi-Auto Pistol', name: 'CZ P-10 F', calibre: '9mm P', detail: 'Full-size striker-fired', price: 13999, qty: 1, img: 'images/firearms/cz-p10.jpg', lic: 'sd',
    features: ['Full-size striker-fired 19+1', 'Excellent factory trigger for a striker gun', 'CZ grip angle and ergonomics', 'Aggressive slide serrations', 'Cold hammer-forged barrel'],
    market: 'The P-10 F is widely regarded as one of the best-value full-size 9mms on the market — reviewers routinely call its trigger the best in the striker class at this price.' },
  { id: 'ruger-max9', cat: 'handguns', type: 'Semi-Auto Pistol', name: 'Ruger Max-9 Long', calibre: '9mm P', detail: '4" barrel, model 3507', price: 13995, qty: 2, img: 'images/firearms/ruger-max9.jpg', lic: 'sd',
    features: ['Micro-compact with 12+1 capacity', '4" barrel — extra velocity and sight radius', 'Optic-ready slide', 'Tritium fibre-optic front sight', 'Thin, carry-friendly profile'],
    market: 'The Max-9 is Ruger\'s entry in the micro-nine wars and a strong one — reviewers highlight the usable sights and optic cut at a price the big names struggle to match.' },
  { id: 'ruger-ec9s', cat: 'handguns', type: 'Semi-Auto Pistol', name: 'Ruger EC9s', calibre: '9mm P', detail: 'FDE frame, model 3297', price: 11349, qty: 1, img: 'images/firearms/ruger-ec9s.jpg', lic: 'sd',
    features: ['Ultra-slim single-stack 9mmP', 'Integral machined sights — nothing to snag or shift', 'Featherweight for all-day carry', 'Simple, proven blowback-free design', 'Budget carry classic'],
    market: 'The EC9s is the honest budget carry gun — small, light, reliable and cheap enough that there\'s no excuse to leave it at home. A massive seller for exactly those reasons.' },
  { id: 'ruger-security9', cat: 'handguns', type: 'Semi-Auto Pistol', name: 'Ruger Security-9', calibre: '9mm P', detail: 'Model 3810', price: 11995, qty: 2, img: 'images/firearms/ruger-security9.jpg', lic: 'sd',
    features: ['Mid-size 15+1 9mmP', 'Secure Action hammer-fired mechanism', 'Simple takedown and maintenance', 'Rail for light/laser', 'Outstanding price-to-capability ratio'],
    market: 'Named after Ruger\'s classic Security Six ethos: honest protection at an honest price. The Security-9 routinely tops "best budget 9mm" lists and makes an excellent first home-defence pistol.' },

  /* ---- HANDGUNS — revolvers ---- */
  { id: 'ruger-super-blackhawk', cat: 'handguns', type: 'Revolver', name: 'Ruger Super Blackhawk', calibre: '.44 Mag', detail: '7.5" blued, model 0802', price: 32999, qty: 1, img: 'images/firearms/ruger-super-blackhawk.jpg', lic: 'hunt',
    features: ['The classic single-action .44 Magnum hunting revolver', '7.5" barrel for full magnum ballistics', 'Massive Ruger cylinder frame — built for heavy loads', 'Adjustable target sights', 'Handgun hunting icon'],
    market: 'Fifty years of handgun hunters have trusted the Super Blackhawk to digest full-house .44 loads forever. It\'s the revolver equivalent of a farm bakkie — it simply cannot be worn out.' },

  /* ---- SHOTGUNS ---- */
  { id: 'beretta-1301-tactical', cat: 'shotguns', type: 'Semi-Auto Shotgun', name: 'Beretta 1301 Tactical', calibre: '12 GA', detail: '', price: 25999, qty: 1, img: 'images/firearms/beretta-1301.jpg', lic: 'sd',
    features: ['BLINK gas system — cycles 36% faster than rivals', 'The professional\'s choice in defensive semi-autos', 'Oversized tactical controls', 'Ghost ring sights, rail for optics', 'Light, fast-pointing build'],
    market: 'The 1301 is the darling of the defensive shotgun world — instructors and competitors treat it as the benchmark semi-auto. Its speed of cycling has to be felt to be believed.' },
  { id: 'benelli-m2-sp', cat: 'shotguns', type: 'Semi-Auto Shotgun', name: 'Benelli M2 SP', calibre: '12 GA', detail: '26" semi-auto', price: 42499, qty: 1, img: 'images/firearms/benelli-m2.jpg', lic: 'hunt',
    features: ['Benelli\'s famous Inertia-Driven system — no gas fouling', 'Runs clean for thousands of rounds', 'Lightning-fast cycling', '26" barrel sporting configuration', 'Comfortech-era recoil management'],
    market: 'The M2 is the wingshooter\'s workhorse — the inertia action shrugs off dirt, weather and neglect that would stop gas guns. Waterfowlers and sport shooters treat them as unkillable.' }
];
