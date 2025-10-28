/* --- SCRIPT UNTUK FITUR 1: DISCORD SENDER --- */
// Pastikan elemen ada sebelum menambahkan listener
const webhookForm = document.getElementById('webhookForm');
if (webhookForm) {
    webhookForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const url = document.getElementById('webhookUrl').value;
        const text = document.getElementById('messageText').value;
        const fileInput = document.getElementById('fileUpload');
        const file = fileInput.files[0];
        const count = parseInt(document.getElementById('messageCount').value, 10);
        
        const statusEl = document.querySelector('#pageDiscordSender #status');
        const submitButton = document.getElementById('submitButton');

        if (!text && !file) {
            statusEl.textContent = 'Error: Masukkan teks atau upload file untuk dikirim.';
            statusEl.className = 'error';
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = 'Mengirim...';
        statusEl.textContent = 'Memulai proses pengiriman...';
        statusEl.className = '';

        let successCount = 0;
        let hasError = false;

        for (let i = 0; i < count; i++) {
            statusEl.textContent = `Mengirim pesan ke-${i + 1} dari ${count}...`;

            try {
                let body;
                let headers = {};

                if (file) {
                    body = new FormData();
                    body.append('file', file);
                    if (text) {
                        body.append('payload_json', JSON.stringify({ content: text }));
                    }
                } else {
                    headers['Content-Type'] = 'application/json';
                    body = JSON.stringify({ content: text });
                }

                const response = await fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: body
                });

                if (response.ok) {
                    successCount++;
                } else {
                    hasError = true;
                    console.error(`Gagal kirim ke-${i + 1}: ${response.status} ${response.statusText}`);
                    const errorData = await response.json().catch(() => null);
                    if (errorData) console.error('Detail Error:', errorData);
                }

            } catch (error) {
                hasError = true;
                console.error(`Error pada kiriman ke-${i + 1}:`, error);
                statusEl.textContent = `Error: ${error.message}. Pengiriman dihentikan.`;
                statusEl.className = 'error';
                break;
            }

            if (count > 1 && i < count - 1) {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }

        if (hasError) {
            statusEl.textContent = `Selesai. Berhasil terkirim ${successCount} dari ${count}. Cek console (F12) untuk detail error.`;
            statusEl.className = 'error';
        } else {
            statusEl.textContent = `Selesai! Berhasil mengirim ${successCount} pesan.`;
            statusEl.className = 'success';
        }

        submitButton.disabled = false;
        submitButton.textContent = 'Kirim';
        fileInput.value = '';
    });
}


https://discord.com/api/webhooks/1431653044801634447/S2n1a1D7N-YSlCNcG0UwKplp1Et4cRyPwaEQyhp-o77M0ZgR-Twfw3Q_4_rR94NYE5ZK
/* --- SCRIPT UNTUK FITUR 3: DISCORD DELETER (VUE) --- */
if (typeof Vue !== 'undefined' && typeof LucideVueNext !== 'undefined') {
    const { createApp, ref } = Vue;
    const { Trash2Icon, LoaderIcon, CheckCircleIcon, AlertCircleIcon, XIcon, HeartIcon, GithubIcon } = LucideVueNext;

    // Definisi komponen App
    const App = Vue.defineComponent({
        components: {
            Trash2Icon,
            LoaderIcon,
            CheckCircleIcon,
            AlertCircleIcon,
            XIcon,
            HeartIcon,
            GithubIcon
        },
        // Template dimodifikasi untuk menyertakan tombol kembali
        template: `
            <div class="webhook-deleter">
                <div class="card">
                    <h1 class="title">Discord Webhook Deleter</h1>
                    <div class="input-group">
                        <label for="webhook-url">Enter Webhook URL:</label>
                        <input
                            id="webhook-url"
                            v-model="webhookUrl"
                            type="text"
                            placeholder="discord.com/api/webhooks/..."
                        >
                    </div>
                    <button @click="deleteWebhook" class="delete-btn" :disabled="isDeleting">
                        <Trash2Icon v-if="!isDeleting" class="icon" />
                        <LoaderIcon v-else class="icon animate-spin" />
                        {{ isDeleting ? 'Deleting...' : 'Delete Webhook' }}
                    </button>
                    <TransitionGroup name="fade">
                        <div v-if="status === 'success'" key="success" class="alert success" role="alert">
                            <CheckCircleIcon class="icon" />
                            <div>
                                <strong>Success!</strong> The webhook has been successfully deleted.
                            </div>
                            <button @click="resetStatus" class="close-btn" aria-label="Close">
                                <XIcon class="icon" />
                            </button>
                        </div>
                        <div v-if="status === 'error'" key="error" class="alert error" role="alert">
                            <AlertCircleIcon class="icon" />
                            <div>
                                <strong>Error:</strong> {{ errorMessage }}
                            </div>
                            <button @click="resetStatus" class="close-btn" aria-label="Close">
                                <XIcon class="icon" />
                            </button>
                        </div>
                    </TransitionGroup>

                    <button @click="goHome" class="back-button" style="margin-top: 1rem;">
                        Kembali ke Menu
                    </button>
                    
                    <footer class="footer">
                        <p>CREATED BY ALIEN SAMP</p>
                        <a href="https://github.com/spreeehertz/webhook-deleter" target="_blank" rel="noopener noreferrer">
                            <GithubIcon class="icon" />
                        </a>
                    </footer>
                </div>
            </div>
        `,
        setup() {
            const webhookUrl = ref('');
            const status = ref('idle');
            const errorMessage = ref('');
            const isDeleting = ref(false);

            const deleteWebhook = async () => {
                if (!webhookUrl.value) {
                    status.value = 'error';
                    errorMessage.value = 'Please enter a webhook URL.';
                    return;
                }
                const expression = "^https://([a-z0-9-]+\\.)?discord\\.com/api/.*";
                const regex = new RegExp(expression);
                if (!webhookUrl.value.match(regex)) {
                    status.value = 'error';
                    errorMessage.value = 'Not a valid Discord webhook URL. Note: The webhook token is required.';
                    return;
                }
                isDeleting.value = true;
                try {
                    const response = await fetch(webhookUrl.value, { method: 'DELETE' });
                    console.log(response);
                    if (response.status === 404) throw new Error("This webhook does not exist (maybe you've already deleted it).");
                    if (!response.ok) throw new Error(`Failed to delete webhook.`);
                    status.value = 'success';
                    webhookUrl.value = '';
                } catch (error) {
                    status.value = 'error';
                    errorMessage.value = error instanceof Error ? error.message : 'An unknown error occurred';
                } finally {
                    isDeleting.value = false;
                }
            };

            const resetStatus = () => {
                status.value = 'idle';
                errorMessage.value = '';
            };

            // FUNGSI UNTUK KEMBALI KE MENU
            const goHome = () => {
                // Memanggil fungsi global showPage()
                // Kita tidak perlu "window.showPage" di sini karena keduanya ada di scope yang sama
                showPage('pageMainMenu');
            };

            return {
                webhookUrl,
                status,
                errorMessage,
                isDeleting,
                deleteWebhook,
                resetStatus,
                goHome // Mengekspos fungsi goHome ke template
            };
        }
    });

    // Mount aplikasi Vue ke div #app
    createApp(App).mount('#app');
}


/* --- SCRIPT GLOBAL UNTUK NAVIGASI --- */
// Kita harus mendaftarkannya ke 'window' agar bisa diakses oleh onclick="" di HTML
window.showPage = function(pageId) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Tampilkan halaman yang dipilih
    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        // Gunakan 'flex' karena style global body menggunakannya untuk centering
        pageToShow.style.display = 'flex';
    }
}
