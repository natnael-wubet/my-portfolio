const repos = [
    {name: "ticketye_app", desc: "Ethiopian nationwide bus e-ticket system", lang: "JavaScript", url: "https://github.com/natnael-wubet/ticketye_app", cat: "tool"},
    {name: "ConAnim", desc: "Console graphics engine - Processing/p5 inspired", lang: "Python", url: "https://github.com/natnael-wubet/ConAnim", cat: "tool"},
    {name: "myProcessingArchive", desc: "Processing sketches and experiments", lang: "Processing", url: "https://github.com/natnael-wubet/myProcessingArchive", cat: "game"},
    {name: "dessert_jumper", desc: "Chrome dinosaur game inspired", lang: "Processing", url: "https://github.com/natnael-wubet/dessert_jumper", cat: "game"},
    {name: "pong", desc: "Classic pong implementation", lang: "Processing", url: "https://github.com/natnael-wubet/pong", cat: "game"},
    {name: "royal_balz_3D", desc: "3D brick breaker game (Android)", lang: "Processing", url: "https://github.com/natnael-wubet/royal_balz_3D", cat: "game"},
    {name: "Ddos", desc: "PowerShell DDoS utility", lang: "PowerShell", url: "https://github.com/natnael-wubet/Ddos", cat: "security"},
    {name: "exploit_over_http", desc: "Script delivery over HTTP", lang: "PowerShell", url: "https://github.com/natnael-wubet/exploit_over_http", cat: "security"},
    {name: "exploit_over_tcp", desc: "Script delivery over TCP", lang: "PowerShell", url: "https://github.com/natnael-wubet/exploit_over_tcp", cat: "security"},
    {name: "file-locker", desc: "File locker with AES encryption", lang: "PowerShell", url: "https://github.com/natnael-wubet/file-locker", cat: "security"},
    {name: "ftp-password-attack", desc: "FTP password cracker", lang: "N/A", url: "https://github.com/natnael-wubet/ftp-password-attack", cat: "security"},
    {name: "hash_cracker", desc: "Hash cracking utility", lang: "PowerShell", url: "https://github.com/natnael-wubet/hash_cracker", cat: "security"},
    {name: "PAYLOADer", desc: "Customize and deliver payload scripts", lang: "PowerShell", url: "https://github.com/natnael-wubet/PAYLOADer", cat: "security"},
    {name: "payloads", desc: "Payload scripts collection", lang: "PowerShell", url: "https://github.com/natnael-wubet/payloads", cat: "security"},
    {name: "Powershell_compiler", desc: "PowerShell script compiler", lang: "PowerShell", url: "https://github.com/natnael-wubet/Powershell_compiler", cat: "security"},
    {name: "ssh-password-attack", desc: "SSH password attack tool", lang: "PowerShell", url: "https://github.com/natnael-wubet/ssh-password-attack", cat: "security"},
    {name: "web-credential-password-attack", desc: "Web auth credential attacks", lang: "PowerShell", url: "https://github.com/natnael-wubet/web-credential-password-attack", cat: "security"},
    {name: "windows--password-cracker", desc: "Windows password cracker", lang: "PowerShell", url: "https://github.com/natnael-wubet/windows--password-cracker", cat: "security"},
    {name: "windows-password-cracker", desc: "Windows password cracker", lang: "N/A", url: "https://github.com/natnael-wubet/windows-password-cracker", cat: "security"},
    {name: "natis_neovim_config", desc: "Personal Neovim configuration", lang: "Lua", url: "https://github.com/natnael-wubet/natis_neovim_config", cat: "config"},
    {name: "my-dooit-config", desc: "Dooit configuration", lang: "N/A", url: "https://github.com/natnael-wubet/my-dooit-config", cat: "config"},
    {name: "myAwesomewm", desc: "AwesomeWM configuration", lang: "Lua", url: "https://github.com/natnael-wubet/myAwesomewm", cat: "config"},
    {name: "myneovim", desc: "Neovim configuration", lang: "Lua", url: "https://github.com/natnael-wubet/myneovim", cat: "config"},
    {name: "myomarchylocal", desc: "Omarchy local config", lang: "N/A", url: "https://github.com/natnael-wubet/myomarchylocal", cat: "config"},
    {name: "zenbrowserconfig", desc: "Zen Browser configuration", lang: "CSS", url: "https://github.com/natnael-wubet/zenbrowserconfig", cat: "config"},
    {name: "Abyss-koffee", desc: "General studio for creators", lang: "JavaScript", url: "https://github.com/natnael-wubet/Abyss-koffee", cat: "tool"},
    {name: "abyss-studio", desc: "Web-based game/animation world studio", lang: "N/A", url: "https://github.com/natnael-wubet/abyss-studio", cat: "tool"},
    {name: "academia-iq-web", desc: "Academic intelligence platform", lang: "Python", url: "https://github.com/natnael-wubet/academia-iq-web", cat: "tool"},
    {name: "amecoassets", desc: "Asset management platform", lang: "N/A", url: "https://github.com/natnael-wubet/amecoassets", cat: "tool"},
    {name: "BookReader", desc: "Digital book reader", lang: "TypeScript", url: "https://github.com/natnael-wubet/BookReader", cat: "tool"},
    {name: "cpu-scheduling-assignment", desc: "CPU scheduling simulator", lang: "Python", url: "https://github.com/natnael-wubet/cpu-scheduling-assignment", cat: "tool"},
    {name: "creative_manim", desc: "Manim video creation", lang: "HTML", url: "https://github.com/natnael-wubet/creative_manim", cat: "tool"},
    {name: "css_basic", desc: "CSS fundamentals", lang: "HTML", url: "https://github.com/natnael-wubet/css_basic", cat: "tool"},
    {name: "hallo_reminder", desc: "Reminder app - SolveIT winner", lang: "N/A", url: "https://github.com/natnael-wubet/hallo_reminder", cat: "tool"},
    {name: "image_processing_demos", desc: "Image processing algorithms", lang: "Processing", url: "https://github.com/natnael-wubet/image_processing_demos", cat: "tool"},
    {name: "imaging-processing", desc: "Image processing experiments", lang: "N/A", url: "https://github.com/natnael-wubet/imaging-processing", cat: "tool"},
    {name: "manimexperiment", desc: "Manim experiments", lang: "Python", url: "https://github.com/natnael-wubet/manimexperiment", cat: "tool"},
    {name: "naty-wubet", desc: "Portfolio site", lang: "JavaScript", url: "https://github.com/natnael-wubet/naty-wubet", cat: "tool"},
    {name: "pubbet", desc: "Betting platform", lang: "N/A", url: "https://github.com/natnael-wubet/pubbet", cat: "tool"},
    {name: "public_p", desc: "Public projects", lang: "N/A", url: "https://github.com/natnael-wubet/public_p", cat: "tool"},
    {name: "shama", desc: "Web application", lang: "JavaScript", url: "https://github.com/natnael-wubet/shama", cat: "tool"},
    {name: "tauriApp", desc: "Tauri Android experiment", lang: "TypeScript", url: "https://github.com/natnael-wubet/tauriApp", cat: "tool"},
    {name: "ubaj", desc: "Web project", lang: "N/A", url: "https://github.com/natnael-wubet/ubaj", cat: "tool"},
    {name: "videsk", desc: "Video for desktop", lang: "TypeScript", url: "https://github.com/natnael-wubet/videsk", cat: "tool"}
];

function renderRepos(filter='all') {
    const list = document.getElementById('reposList');
    list.innerHTML = '';
    const filtered = filter === 'all' ? repos : repos.filter(r => r.cat === filter);
    filtered.forEach(repo => {
        const item = document.createElement('a');
        item.href = repo.url;
        item.target = '_blank';
        item.className = 'repo-item';
        item.innerHTML = `
            <div class="repo-main">
                <span class="repo-name">${repo.name}</span>
                <span class="repo-desc">${repo.desc}</span>
            </div>
            <div class="repo-meta">
                <span>${repo.lang}</span>
                <span class="repo-arrow"><i class="fas fa-arrow-right"></i></span>
            </div>
        `;
        list.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderRepos();
    document.querySelectorAll('.repo-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.repo-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderRepos(btn.dataset.filter);
        });
    });
});
