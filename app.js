/* --- Global Styles (diambil dari Fitur 3) --- */
body {
    background: linear-gradient(135deg, #000000, #1a1a2e, #16213e);
    margin: 0;
    padding: 20px;
    font-family: 'Inter', sans-serif; /* Font default dari Fitur 3 */
    min-height: 100vh;
    display: flex; /* Menggunakan flex untuk memusatkan konten */
    justify-content: center;
    align-items: center;
    background-size: 400% 400%;
    animation: gradientShift 30s ease infinite alternate-reverse;
    box-sizing: border-box;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* --- Kontainer Halaman (untuk navigasi) --- */
.page {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* --- Style Tombol Kembali (Global) --- */
.back-button {
    width: 100%;
    padding: 12px;
    background-color: #6c757d; /* Abu-abu */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.2s ease;
    margin-top: 15px; /* Memberi jarak */
    box-sizing: border-box;
}
.back-button:hover {
    background-color: #5a6268;
}

/* --- Style Credit Footer --- */
.credit-footer {
    text-align: center;
    margin-top: 20px;
    font-size: 0.875rem;
    width: 100%;
    color: #888; /* Default (untuk container putih) */
}
/* Warna kredit untuk tema gelap (Menu) */
#pageMainMenu .credit-footer {
    color: #a0aec0;
}

/* --- Style Menu Utama --- */
#pageMainMenu .menu-card {
    background: #2d3748;
    border-radius: 1rem;
    padding: 2rem;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 0 20px rgba(0, 123, 255, 0.5), 0 0 40px rgba(0, 123, 255, 0.3);
    border: 1px solid rgba(0, 123, 255, 0.2);
    color: #ffffff;
}
#pageMainMenu h2 {
    text-align: center;
    margin-top: 0;
}
#pageMainMenu .menu-button {
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-sizing: border-box;
}
#pageMainMenu .menu-button:last-child {
    margin-bottom: 0;
}
#pageMainMenu .btn-discord-send {
    background-color: #5865F2; /* Discord Blurple */
    color: white;
}
#pageMainMenu .btn-discord-send:hover { background-color: #4752c4; }

#pageMainMenu .btn-telegram {
    background-color: #0088cc; /* Telegram Blue */
    color: white;
}
#pageMainMenu .btn-telegram:hover { background-color: #0077b3; }

#pageMainMenu .btn-discord-delete {
    background-color: #e53e3e; /* Deleter Red */
    color: white;
}
#pageMainMenu .btn-discord-delete:hover { background-color: #c53030; }


/* --- 
 * STYLES UNTUK FITUR 1: Discord Sender 
 * (Diberi prefix #pageDiscordSender)
--- */
#pageDiscordSender .container {
    width: 100%;
    max-width: 500px;
    background-color: #ffffff;
    padding: 25px 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    /* Ganti font agar konsisten dengan style aslinya */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
#pageDiscordSender h2 {
    text-align: center;
    margin-top: 0;
    color: #333;
}
#pageDiscordSender .form-group { margin-bottom: 20px; }
#pageDiscordSender .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #555;
}
#pageDiscordSender .form-group input[type="url"],
#pageDiscordSender .form-group input[type="number"],
#pageDiscordSender .form-group textarea,
#pageDiscordSender .form-group input[type="file"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1rem;
}
#pageDiscordSender .form-group textarea { min-height: 100px; resize: vertical; }
#pageDiscordSender .form-group input[type="file"] { padding: 5px; }
#pageDiscordSender button[type="submit"] { /* Selector dibuat lebih spesifik */
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    transition: background-color 0.2s ease;
}
#pageDiscordSender button[type="submit"]:hover { background-color: #0056b3; }
#pageDiscordSender button[type="submit"]:disabled { background-color: #a0a0a0; cursor: not-allowed; }
#pageDiscordSender #status {
    margin-top: 20px;
    text-align: center;
    font-size: 0.95rem;
    color: #555;
}
#pageDiscordSender #status.success { color: green; }
#pageDiscordSender #status.error { color: red; }


/* --- 
 * STYLES UNTUK FITUR 2: Telegram Spammer 
 * (Diberi prefix #pageTelegramSpammer)
--- */
#pageTelegramSpammer .container {
    width: 100%;
    max-width: 500px;
    padding: 25px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    /* Ganti font agar konsisten dengan style aslinya */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
#pageTelegramSpammer h2 {
    text-align: center;
    color: #333;
    margin-top: 0;
}
#pageTelegramSpammer .form-group { margin-bottom: 20px; }
#pageTelegramSpammer .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #555;
}
#pageTelegramSpammer .form-group input[type="text"],
#pageTelegramSpammer .form-group input[type="file"],
#pageTelegramSpammer .form-group input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box; 
}
#pageTelegramSpammer .form-group input[type="file"] { padding: 5px; }
#pageTelegramSpammer button[type="submit"] {
    width: 100%;
    padding: 12px;
    background-color: #0088cc;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
#pageTelegramSpammer button[type="submit"]:hover { background-color: #0077b3; }
#pageTelegramSpammer button[type="submit"]:disabled { background-color: #ccc; cursor: not-allowed; }
#pageTelegramSpammer #status {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    /* Pastikan warna teks terlihat di container putih */
    color: #333;
}
#pageTelegramSpammer .warning {
    background-color: #fffbe6;
    border: 1px solid #ffe58f;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
    color: #8a6d3b;
    font-size: 14px;
}

/* --- 
 * STYLES UNTUK FITUR 3: Discord Deleter 
 * (Diberi prefix #pageDiscordDeleter)
--- */
#pageDiscordDeleter .webhook-deleter {
    /* Style ini awalnya ada di body, sekarang jadi pembungkus */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
}
#pageDiscordDeleter .card {
    background: #2d3748;
    border-radius: 1rem;
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 0 20px rgba(0, 123, 255, 0.5), 0 0 40px rgba(0, 123, 255, 0.3), 0 0 60px rgba(0, 123, 255, 0.1);
    border: 1px solid rgba(0, 123, 255, 0.2);
}
#pageDiscordDeleter .title {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
    color: #ffffff;
}
#pageDiscordDeleter .input-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
}
#pageDiscordDeleter label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #e2e8f0;
}
#pageDiscordDeleter input {
    width: 100%;
    padding: 0.75rem;
    box-sizing: border-box;
    background: #4a5568;
    border: 1px solid #718096;
    border-radius: 0.5rem;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
}
#pageDiscordDeleter input:focus {
    outline: none;
    border-color: #63b3ed;
    box-shadow: 0 0 0 3px rgba(99, 179, 237, 0.2), 0 0 10px rgba(99, 179, 237, 0.5);
}
#pageDiscordDeleter .delete-btn {
    background-color: #e53e3e;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 10px rgba(229, 62, 62, 0.5);
    /* Modifikasi agar konsisten */
    width: 100%;
    padding: 0.75rem;
    box-sizing: border-box;
}
#pageDiscordDeleter .delete-btn:hover:not(:disabled) {
    background-color: #c53030;
    box-shadow: 0 0 15px rgba(229, 62, 62, 0.7);
}
#pageDiscordDeleter .delete-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    box-shadow: none;
}
#pageDiscordDeleter .alert {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: flex-start;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}
#pageDiscordDeleter .success {
    background-color: #2d5a2d;
    color: #c6f6d5;
    border: 1px solid #68d391;
}
#pageDiscordDeleter .error {
    background-color: #5a2d2d;
    color: #feb2b2;
    border: 1px solid #fc8181;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
}
#pageDiscordDeleter .close-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: currentColor;
    margin-left: auto;
}
#pageDiscordDeleter .footer {
    margin-top: 2rem;
    text-align: center;
    font-size: 0.875rem;
    color: #a0aec0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#pageDiscordDeleter .footer a {
    color: #a0aec0;
    margin-left: 0.5rem;
}
#pageDiscordDeleter .icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
}
@media (max-width: 640px) {
    #pageDiscordDeleter .card { padding: 1.5rem; }
    #pageDiscordSender .container { padding: 1.5rem; }
    #pageTelegramSpammer .container { padding: 1.5rem; }
}
@keyframes spin {
    to { transform: rotate(360deg); }
}
#pageDiscordDeleter .animate-spin { animation: spin 1s linear infinite; }
#pageDiscordDeleter #webhook-url { font-family: 'Inter', sans-serif; }
/* Transisi Vue */
#pageDiscordDeleter .fade-enter-active,
#pageDiscordDeleter .fade-leave-active {
  transition: opacity 0.5s ease;
}
#pageDiscordDeleter .fade-enter-from,
#pageDiscordDeleter .fade-leave-to {
  opacity: 0;
}
