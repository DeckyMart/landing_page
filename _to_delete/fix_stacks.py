import os

BASE = os.path.join("src", "components", "landing")

replacements = {
    "AudienceSplit.tsx": [
        ('<Stack component="div" spacing={1.5} sx={{ mb: 4, flex: 1 }}>',
         '<Stack spacing={1.5} sx={{ mb: 4, flex: 1 }}>'),
        ('<Stack component="div" key={point} direction="row" spacing={1.25} alignItems="flex-start">',
         '<Stack key={point} direction="row" spacing={1.25} sx={{ alignItems: \'flex-start\' }}>'),
        ('<Stack component="div" spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>',
         '<Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>'),
    ],
    "CtaBanner.tsx": [
        ('<Stack component="div" spacing={1}>',
         '<Stack spacing={1}>'),
    ],
    "Faq.tsx": [
        ('<Stack component="div" spacing={1.5} sx={{ mb: 5 }}>',
         '<Stack spacing={1.5} sx={{ mb: 5 }}>'),
        ('<Stack component="div" spacing={1.5}>',
         '<Stack spacing={1.5}>'),
    ],
    "Footer.tsx": [
        ('<Stack component="div" direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>',
         '<Stack direction="row" spacing={1} sx={{ mb: 2, alignItems: \'center\' }}>'),
        ('<Stack component="div" spacing={1.25}>',
         '<Stack spacing={1.25}>'),
        ('<Stack component="div" direction={{ xs: \'column\', sm: \'row\' }} justifyContent="space-between" alignItems={{ sm: \'center\' }} spacing={2}>',
         '<Stack direction={{ xs: \'column\', sm: \'row\' }} spacing={2} sx={{ justifyContent: \'space-between\', alignItems: { sm: \'center\' } }}>'),
    ],
    "Header.tsx": [
        ('<Stack component="div" direction="row" alignItems="center" spacing={1}>',
         '<Stack direction="row" spacing={1} sx={{ alignItems: \'center\' }}>'),
        ('<Stack component="div" direction="row" spacing={4} alignItems="center" sx={{ display: { xs: \'none\', md: \'flex\' } }}>',
         '<Stack direction="row" spacing={4} sx={{ display: { xs: \'none\', md: \'flex\' }, alignItems: \'center\' }}>'),
        ('<Stack component="div" direction="row" spacing={1.5} alignItems="center" sx={{ display: { xs: \'none\', md: \'flex\' } }}>',
         '<Stack direction="row" spacing={1.5} sx={{ display: { xs: \'none\', md: \'flex\' }, alignItems: \'center\' }}>'),
        ('<Stack component="div" direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>',
         '<Stack direction="row" sx={{ mb: 3, justifyContent: \'space-between\', alignItems: \'center\' }}>'),
        ('<Stack component="div" spacing={2.5}>',
         '<Stack spacing={2.5}>'),
    ],
    "Hero.tsx": [
        ('<Stack component="div"\n      direction="row"\n      spacing={0.5}\n      alignItems="center"\n      sx={{\n        bgcolor: \'error.main\',',
         '<Stack\n      direction="row"\n      spacing={0.5}\n      sx={{\n        alignItems: \'center\',\n        bgcolor: \'error.main\','),
        ('<Stack component="div" direction="row" flexWrap="wrap" gap={1} alignItems="center" sx={{ mt: 1 }}>',
         '<Stack direction="row" sx={{ mt: 1, flexWrap: \'wrap\', gap: 1, alignItems: \'center\' }}>'),
        ('<Stack component="div" direction="row" spacing={1.5} alignItems="center" sx={{ mt: 1, p: 1.5, borderRadius: 2.5, bgcolor: \'#e8f8f0\' }}>',
         '<Stack direction="row" spacing={1.5} sx={{ mt: 1, p: 1.5, borderRadius: 2.5, bgcolor: \'#e8f8f0\', alignItems: \'center\' }}>'),
        ('<Stack component="div" direction="row" spacing={0.5} alignItems="center">',
         '<Stack direction="row" spacing={0.5} sx={{ alignItems: \'center\' }}>'),
        ('<Stack component="div" direction="row" spacing={0.25} alignItems="center">',
         '<Stack direction="row" spacing={0.25} sx={{ alignItems: \'center\' }}>'),
        ('<Stack component="div" direction={{ xs: \'column\', sm: \'row\' }} spacing={2}>',
         '<Stack direction={{ xs: \'column\', sm: \'row\' }} spacing={2}>'),
        ('<Stack component="div" direction="row" spacing={3} sx={{ mt: 5 }} flexWrap="wrap">',
         '<Stack direction="row" spacing={3} sx={{ mt: 5, flexWrap: \'wrap\' }}>'),
        ('<Stack component="div" key={point} direction="row" spacing={1} alignItems="center" sx={{ maxWidth: 220 }}>',
         '<Stack key={point} direction="row" spacing={1} sx={{ maxWidth: 220, alignItems: \'center\' }}>'),
    ],
    "HowItWorks.tsx": [
        ('<Stack component="div" spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>',
         '<Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>'),
        ('<Stack component="div" direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>',
         '<Stack direction="row" sx={{ mb: 2, alignItems: \'center\', justifyContent: \'space-between\' }}>'),
    ],
    "ServiceCategories.tsx": [
        ('<Stack component="div" spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>',
         '<Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>'),
    ],
    "TrustSafety.tsx": [
        ('<Stack component="div" spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>',
         '<Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>'),
    ],
}

for fname, pairs in replacements.items():
    path = os.path.join(BASE, fname)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    for old, new in pairs:
        count = content.count(old)
        if count != 1:
            print(f"WARN {fname}: pattern found {count} times (expected 1): {old[:60]!r}")
        content = content.replace(old, new)
    remaining = content.count('<Stack component="div"')
    if remaining:
        print(f"NOTE {fname}: {remaining} <Stack component=\"div\" still present after targeted replace")
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"OK {fname}")
