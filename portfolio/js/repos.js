const repos = [
    {name: "Abyss-koffee", desc: "Opensource general studio for video editors, coders, artists", lang: "JavaScript", url: "https://github.com/natnael-wubet/Abyss-koffee", cat: "tools"},
    {name: "abyss-studio", desc: "Web-based studio for making and simulating game/animation worlds", lang: "N/A", url: "https://github.com/natnael-wubet/abyss-studio", cat: "tools"},
    {name: "academia-iq-web", desc: "Academic intelligence web platform", lang: "Python", url: "https://github.com/natnael-wubet/academia-iq-web", cat: "web"},
    {name: "amecoassets", desc: "Asset management platform", lang: "N/A", url: "https://github.com/natnael-wubet/amecoassets", cat: "web"},
    {name: "BookReader", desc: "Digital book reading application", lang: "TypeScript", url: "https://github.com/natnael-wubet/BookReader", cat: "web"},
    {name: "ConAnim", desc: "Console graphics engine - Processing/p5 inspired", lang: "Python", url: "https://github.com/natnael-wubet/ConAnim", cat: "tools"},
    {name: "cpu-scheduling-assignment", desc: "CPU scheduling algorithm simulator", lang: "Python", url: "https://github.com/natnael-wubet/cpu-scheduling-assignment", cat: "tools"},
    {name: "creative_manim", desc: "Opinionated video making with Manim", lang: "HTML", url: "https://github.com/natnael-wubet/creative_manim", cat: "tools"},
    {name: "css_basic", desc: "CSS fundamentals", lang: "HTML", url: "https://github.com/natnael-wubet/css_basic", cat: "web"},
    {name: "Ddos", desc: "PowerShell DDoS attack script", lang: "PowerShell", url: "https://github.com/natnael-wubet/Ddos", cat: "security"},
    {name: "dessert_jumper", desc: "Chrome dinosaur game inspired", lang: "Processing", url: "https://github.com/natnael-wubet/dessert_jumper", cat: "game"},
    {name: "exploit_over_http", desc: "Deliver scripts over HTTP", lang: "PowerShell", url: "https://github.com/natnael-wubet/exploit_over_http", cat: "security"},
    {name: "exploit_over_tcp", desc: "Deliver scripts over TCP", lang: "PowerShell", url: "https://github.com/natnael-wubet/exploit_over_tcp", cat: "security"},
    {name: "file-locker", desc: "File locker with AES encryption", lang: "PowerShell", url: "https://github.com/natnael-wubet/file-locker", cat: "security"},
    {name: "ftp-password-attack", desc: "FTP password cracker", lang: "N/A", url: "https://github.com/natnael-wubet/ftp-password-attack", cat: "security"},
    {name: "hallo_reminder", desc: "Reminder application - SolveIT winner", lang: "N/A", url: "https://github.com/natnael-wubet/hallo_reminder", cat: "web"},
    {name: "hash_cracker", desc: "Hash cracking tool", lang: "PowerShell", url: "https://github.com/natnael-wubet/hash_cracker", cat: "security"},
    {name: "image_processing_demos", desc: "Image processing algorithms", lang: "Processing", url: "https://github.com/natnael-wubet/image_processing_demos", cat: "tools"},
    {name: "imaging-processing", desc: "Image processing experiments", lang: "N/A", url: "https://github.com/natnael-wubet/imaging-processing", cat: "tools"},
    {name: "manimexperiment", desc: "Manim animation experiments", lang: "Python", url: "https://github.com/natnael-wubet/manimexperiment", cat: "tools"},
    {name: "my-dooit-config", desc: "Dooit configuration", lang: "N/A", url: "https://github.com/natnael-wubet/my-dooit-config", cat: "tools"},
    {name: "myAwesomewm", desc: "AwesomeWM configuration", lang: "Lua", url: "https://github.com/natnael-wubet/myAwesomewm", cat: "tools"},
    {name: "myneovim", desc: "Neovim configuration", lang: "Lua", url: "https://github.com/natnael-wubet/myneovim", cat: "tools"},
    {name: "myomarchylocal", desc: "Omarchy local config", lang: "N/A", url: "https://github.com/natnael-wubet/myomarchylocal", cat: "tools"},
    {name: "myProcessingArchive", desc: "Processing sketches archive", lang: "Processing", url: "https://github.com/natnael-wubet/myProcessingArchive", cat: "game"},
    {name: "natis_neovim_config", desc: "Personal Neovim config", lang: "Lua", url: "https://github.com/natnael-wubet/natis_neovim_config", cat: "tools"},
    {name: "naty-wubet", desc: "Portfolio repository", lang: "JavaScript", url: "https://github.com/natnael-wubet/naty-wubet", cat: "web"},
    {name: "PAYLOADer", desc: "Customize and deliver payload scripts", lang: "PowerShell", url: "https://github.com/natnael-wubet/PAYLOADer", cat: "security"},
    {name: "payloads", desc: "Payload scripts collection", lang: "PowerShell", url: "https://github.com/natnael-wubet/payloads", cat: "security"},
    {name: "pong", desc: "Pong game in Processing", lang: "Processing", url: "https://github.com/natnael-wubet/pong", cat: "game"},
    {name: "Powershell_compiler", desc: "PowerShell script compiler", lang: "PowerShell", url: "https://github.com/natnael-wubet/Powershell_compiler", cat: "security"},
    {name: "pubbet", desc: "Pubbet betting platform", lang: "N/A", url: "https://github.com/natnael-wubet/pubbet", cat: "web"},
    {name: "public_p", desc: "Public projects", lang: "N/A", url: "https://github.com/natnael-wubet/public_p", cat: "tools"},
    {name: "royal_balz_3D", desc: "3D brick breaker game (Android)", lang: "Processing", url: "https://github.com/natnael-wubet/royal_balz_3D", cat: "game"},
    {name: "shama", desc: "Web application", lang: "JavaScript", url: "https://github.com/natnael-wubet/shama", cat: "web"},
    {name: "ssh-password-attack", desc: "SSH password attack tool", lang: "PowerShell", url: "https://github.com/natnael-wubet/ssh-password-attack", cat: "security"},
    {name: "tauriApp", desc: "Tauri Android development experiment", lang: "TypeScript", url: "https://github.com/natnael-wubet/tauriApp", cat: "tools"},
    {name: "ticketye_app", desc: "Ethiopian nationwide bus e-ticket system", lang: "JavaScript", url: "https://github.com/natnael-wubet/ticketye_app", cat: "web"},
    {name: "ubaj", desc: "Web project", lang: "N/A", url: "https://github.com/natnael-wubet/ubaj", cat: "web"},
    {name: "videsk", desc: "Video for desktop", lang: "TypeScript", url: "https://github.com/natnael-wubet/videsk", cat: "tools"},
    {name: "web-credential-password-attack", desc: "Web auth credential attacks", lang: "PowerShell", url: "https://github.com/natnael-wubet/web-credential-password-attack", cat: "security"},
    {name: "windows--password-cracker", desc: "Windows password cracker", lang: "PowerShell", url: "https://github.com/natnael-wubet/windows--password-cracker", cat: "security"},
    {name: "windows-password-cracker", desc: "Windows password cracker", lang: "N/A", url: "https://github.com/natnael-wubet/windows-password-cracker", cat: "security"},
    {name: "zenbrowserconfig", desc: "Zen Browser configuration", lang: "CSS", url: "https://github.com/natnael-wubet/zenbrowserconfig", cat: "tools"}
];

function renderRepos(filter = 'all') {
    const grid = document.getElementById('reposGrid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? repos : repos.filter(r => r.cat === filter);
    
    filtered.forEach(repo => {
        const card = document.createElement('a');
        card.href = repo.url;
        card.target = '_blank';
        card.className = 'repo-card';
        card.innerHTML = `
            <div class="repo-header">
                <span class="repo-name">${repo.name}</span>
                <span class="repo-lang">${repo.lang}</span>
            </div>
            <p class="repo-desc">${repo.desc}</p>
            <div class="repo-footer">
                <span class="repo-cat">[${repo.cat.toUpperCase()}]</span>
                <span class="repo-link">[VIEW]</span>
            </div>
        `;
        grid.appendChild(card);
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
