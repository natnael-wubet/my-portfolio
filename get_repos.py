import json
# Read the full repos data
with open('/home/naty/.local/share/opencode/tool-output/tool_196c531fb0016Ea9dAbtIq707W') as f:
    data = json.load(f)
# Get all repos
for i, r in enumerate(data):
    if not r.get('fork'):
        print(f"{i}: {r['name']} - {r.get('description','')} - {r.get('language','')} - {r.get('html_url','')}")
