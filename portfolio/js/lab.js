const repos = [
    {name: "ticketye_app", desc: "Ethiopian nationwide bus e-ticket system", lang: "JavaScript", url: "https://github.com/natnael-wubet/ticketye_app", cat: "tool"},
    {name: "ConAnim", desc: "Console graphics engine - Processing/p5 inspired", lang: "Python", url: "https://github.com/natnael-wubet/ConAnim", cat: "tool"},
    {name: "dessert_jumper", desc: "Chrome dinosaur game inspired", lang: "Processing", url: "https://github.com/natnael-wubet/dessert_jumper", cat: "game"},
    {name: "myProcessingArchive", desc: "Processing sketches archive", lang: "Processing", url: "https://github.com/natnael-wubet/myProcessingArchive", cat: "game"},
    {name: "pong", desc: "Classic pong", lang: "Processing", url: "https://github.com/natnael-wubet/pong", cat: "game"},
    {name: "royal_balz_3D", desc: "3D brick breaker (Android)", lang: "Processing", url: "https://github.com/natnael-wubet/royal_balz_3D", cat: "game"},
    {name: "Ddos", desc: "DDoS utility", lang: "PowerShell", url: "https://github.com/natnael-wubet/Ddos", cat: "security"},
    {name: "exploit_over_http", desc: "HTTP script delivery", lang: "PowerShell", url: "https://github.com/natnael-wubet/exploit_over_http", cat: "security"},
    {name: "exploit_over_tcp", desc: "TCP script delivery", lang: "PowerShell", url: "https://github.com/natnael-wubet/exploit_over_tcp", cat: "security"},
    {name: "file-locker", desc: "AES encrypted file locker", lang: "PowerShell", url: "https://github.com/natnael-wubet/file-locker", cat: "security"},
    {name: "ftp-password-attack", desc: "FTP password cracker", lang: "N/A", url: "https://github.com/natnael-wubet/ftp-password-attack", cat: "security"},
    {name: "hash_cracker", desc: "Hash cracker", lang: "PowerShell", url: "https://github.com/natnael-wubet/hash_cracker", cat: "security"},
    {name: "PAYLOADer", desc: "Payload customization & delivery", lang: "PowerShell", url: "https://github.com/natnael-wubet/PAYLOADer", cat: "security"},
    {name: "payloads", desc: "Payload collection", lang: "PowerShell", url: "https://github.com/natnael-wubet/payloads", cat: "security"},
    {name: "Powershell_compiler", desc: "PowerShell compiler", lang: "PowerShell", url: "https://github.com/natnael-wubet/Powershell_compiler", cat: "security"},
    {name: "ssh-password-attack", desc: "SSH password attack", lang: "PowerShell", url: "https://github.com/natnael-wubet/ssh-password-attack", cat: "security"},
    {name: "web-credential-password-attack", desc: "Web auth attacks", lang: "PowerShell", url: "https://github.com/natnael-wubet/web-credential-password-attack", cat: "security"},
    {name: "windows--password-cracker", desc: "Windows password cracker", lang: "PowerShell", url: "https://github.com/natnael-wubet/windows--password-cracker", cat: "security"},
    {name: "windows-password-cracker", desc: "Windows password cracker", lang: "N/A", url: "https://github.com/natnael-wubet/windows-password-cracker", cat: "security"},
    {name: "natis_neovim_config", desc: "Neovim config", lang: "Lua", url: "https://github.com/natnael-wubet/natis_neovim_config", cat: "config"},
    {name: "my-dooit-config", desc: "Dooit config", lang: "N/A", url: "https://github.com/natnael-wubet/my-dooit-config", cat: "config"},
    {name: "myAwesomewm", desc: "AwesomeWM config", lang: "Lua", url: "https://github.com/natnael-wubet/myAwesomewm", cat: "config"},
    {name: "myneovim", desc: "Neovim config", lang: "Lua", url: "https://github.com/natnael-wubet/myneovim", cat: "config"},
    {name: "myomarchylocal", desc: "Omarchy config", lang: "N/A", url: "https://github.com/natnael-wubet/myomarchylocal", cat: "config"},
    {name: "zenbrowserconfig", desc: "Zen Browser config", lang: "CSS", url: "https://github.com/natnael-wubet/zenbrowserconfig", cat: "config"},
    {name: "Abyss-koffee", desc: "Creator studio", lang: "JavaScript", url: "https://github.com/natnael-wubet/Abyss-koffee", cat: "tool"},
    {name: "abyss-studio", desc: "Game/animation world studio", lang: "N/A", url: "https://github.com/natnael-wubet/abyss-studio", cat: "tool"},
    {name: "academia-iq-web", desc: "Academic platform", lang: "Python", url: "https://github.com/natnael-wubet/academia-iq-web", cat: "tool"},
    {name: "amecoassets", desc: "Asset management", lang: "N/A", url: "https://github.com/natnael-wubet/amecoassets", cat: "tool"},
    {name: "BookReader", desc: "Digital reader", lang: "TypeScript", url: "https://github.com/natnael-wubet/BookReader", cat: "tool"},
    {name: "cpu-scheduling-assignment", desc: "CPU scheduler simulator", lang: "Python", url: "https://github.com/natnael-wubet/cpu-scheduling-assignment", cat: "tool"},
    {name: "creative_manim", desc: "Manim video creation", lang: "HTML", url: "https://github.com/natnael-wubet/creative_manim", cat: "tool"},
    {name: "css_basic", desc: "CSS exercises", lang: "HTML", url: "https://github.com/natnael-wubet/css_basic", cat: "tool"},
    {name: "hallo_reminder", desc: "Reminder app", lang: "N/A", url: "https://github.com/natnael-wubet/hallo_reminder", cat: "tool"},
    {name: "image_processing_demos", desc: "Image processing", lang: "Processing", url: "https://github.com/natnael-wubet/image_processing_demos", cat: "tool"},
    {name: "imaging-processing", desc: "Image processing", lang: "N/A", url: "https://github.com/natnael-wubet/imaging-processing", cat: "tool"},
    {name: "manimexperiment", desc: "Manim experiments", lang: "Python", url: "https://github.com/natnael-wubet/manimexperiment", cat: "tool"},
    {name: "naty-wubet", desc: "Portfolio", lang: "JavaScript", url: "https://github.com/natnael-wubet/naty-wubet", cat: "tool"},
    {name: "pubbet", desc: "Betting platform", lang: "N/A", url: "https://github.com/natnael-wubet/pubbet", cat: "tool"},
    {name: "public_p", desc: "Public projects", lang: "N/A", url: "https://github.com/natnael-wubet/public_p", cat: "tool"},
    {name: "shama", desc: "Web app", lang: "JavaScript", url: "https://github.com/natnael-wubet/shama", cat: "tool"},
    {name: "tauriApp", desc: "Tauri Android", lang: "TypeScript", url: "https://github.com/natnael-wubet/tauriApp", cat: "tool"},
    {name: "ubaj", desc: "Web project", lang: "N/A", url: "https://github.com/natnael-wubet/ubaj", cat: "tool"},
    {name: "videsk", desc: "Desktop video", lang: "TypeScript", url: "https://github.com/natnael-wubet/videsk", cat: "tool"}
];

function renderLab(filter = 'all') {
    const grid = document.getElementById('labGrid');
    grid.innerHTML = '';
    const filtered = filter === 'all' ? repos : repos.filter(r => r.cat === filter);
    filtered.forEach((repo, idx) => {
        const card = document.createElement('a');
        card.href = repo.url;
        card.target = '_blank';
        card.className = 'lab-card magnetic';
        card.style.setProperty('--delay', idx * 0.05 + 's');
        card.innerHTML = `
            <div class="lab-card-header">
                <span class="lab-card-name">${repo.name}</span>
                <span class="lab-card-lang">${repo.lang}</span>
            </div>
            <p class="lab-card-desc">${repo.desc}</p>
            <div class="lab-card-footer">
                <span class="lab-card-arrow"><i class="fas fa-arrow-right"></i></span>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderLab();
    document.querySelectorAll('.lab-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lab-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderLab(btn.dataset.filter);
        });
    });
});
