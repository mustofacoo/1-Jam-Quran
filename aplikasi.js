function tilawahApp() {
    return {
        currentUser: null,
        isAdmin: false,
        loginUsername: '',
        adminPassword: '',
        loginError: '',
        showAdminLogin: false,
        participants: [],
        newParticipant: '',
        adminMessage: '',
        selectedMonth: '',
        tracking: {},
        currentMotivation: '',
        months: [],
        motivations: [
            '"Sebaik-baik kalian adalah yang mempelajari Al-Quran dan mengajarkannya." (HR. Bukhari)',
            '"Bacalah Al-Quran, karena ia akan datang pada hari kiamat sebagai pemberi syafaat." (HR. Muslim)',
            '"Sebaik-baik kalian adalah orang yang belajar dan mengajarkan al-Quran" (HR. Bayhaqi),',
            'Al-Qur\'an itu lebih agung dari segala sesuatu selain Allah. Barang siapa yang menghormati al-Qur\'an berarti sungguh dia mengagungkan Allah. Barang siapa meremehkan hak al-Qur\`an, sungguh ia telah meremehkan hak Allah. Para penghafal al-Qur\'an adalah orang-orang diistimewakan dengan rahmat Allah, diajarkan kalam Allah, dan dikenakan kepadanya Cahaya Allah. Barang siapa yang memusuhi mereka berarti ia memusuhi Allah dan barang siapa yang mencintai mereka berarti ia mencintai Allah.", (HR. Ar Razi)',
            '"Murojaah itu harus Allahumma Maksa. Malas-malas harus dipaksa. Karena kalau tidak dipaksa, gak akan bisa-bisa."[KH. Izzuddin Masruri]',
            '"Tidak ada kefakiran, orang-orang yang hidupnya selalu bersama Al Quran." [KH. M. Yusuf Mahsyar]',
            '"Dua aib penghafal Quran yaitu melupakan murajaah dan murajaah Quran bukan karena Allah." [Dr. KH. Deden Makhyaruddin, M. A]',
            '"Salah satu teman terbaik yang akan mendampingimu hingga kematian hanyalah bacaan Al Quran, bukan pasangan bukan keluarga. Jadi jangan lupa sempatkan baca Al Quran meskipun hanya 1-2 ayat atau 1 surat perhari."',
            '"Metode yang paling baik dalam menghafal Al Quran adalah bersungguh-sungguh." [KH. M. Fathoni Dimyati Lc.]"',
            '"Jagalah shalatmu, maka Allah akan menjaga kehidupanmu. Jagalah Qur\'anmu, maka Allah akan mencukupi kebutuhanmu." [KH. M. Adlan Aly]',
            '"Al Quran itu obatnya segala penyakit. Tapi ya, jangan menyambangi Al Quran pas waktu sakit saja. Al Quran juga punya perasaan." [KH. Maimun Zubair"',
            '"Sesibuk apapun kamu bekerja, sempatkanlah disela-sela waktumu untuk menyapa Al Quran dengan membacanya walau beberapa ayat. Bisa jadi amalmu itu akan membuat urusanmu menjadi mudah, rezekimu menjadi berkah, dan jiwamu tak lagi susah. Itulah bukti kecintaanmu kepada Al Quran." [Dr. Ahsin Sakho Muhammad, M.A]',
            '"Allah berfirman: Barang siapa yang disibukkan dengan al-Qur\'an daripada dzikir dan berdoa kepadaKu maka Aku akan memberikan hal terbaik yang Aku berikan kepada orang-orang yang berdoa kepadaKu."[HR. Tirmidzi]',
            '"Sesungguhnya rumah yang didalamnya dibacakan al-Qur\'an maka akan banyak keberkahannya, sedangkan rumah yang didalamnya tidak dibacakan al-Qur\'an maka sedikit kebaikannya." [HR. AL Bazzar]',
            '"Barang siapa yang membaca sepuluh ayat dalam satu malam maka ia tidak tercatat sebagai orang yang lalai (di hari tersebut). Barang siapa yang membaca serratus ayat dalam satu malam maka ia tercatat sebagai orang yang taat. Barang siapa yang membaca dua ratus ayat dalam satu malam maka ia tercatat sebagai orang yang beruntung" [HR. Ad Darimi]',
            '"Sesungguhnya hati ini bisa berkarat sebagaimana besi berkarat. Ditanyakan (kepada Rasulullah): Lalu apa pembersih karatnya wahai Rasulullah? Beliau menjawab: Memperbanyak mengingat kematian dan membaca al-Qur\'an"[HR. Al Bayhaqi]',
            '"Para penghafal al-Qur\'an adalah para kekasih Allah. Barang siapa yang memusuhi mereka, maka Allah akan memusuhinya dan barang siapa mengasihi mereka Allah pun akan mengasihinya" [HR. Ibn An Najjar]',
            '"Al-Qur\'an bisa menjadi pembela sekaligus bisa menjadi penuntut bagimu (di hari kiamat)"". [HR. Muslim]',
            '"Sesungguhnya tidak ada hal yang lebih baik saat kamu kembali (sowan/menghadap) kepada tuhanmu selain sesuatu yang memang berasal dariNya (al-Qur\'an)." [HR. Al Hakim]',
            '"Semakin banyak hafalan kita, semakin keras pula usaha syaitan untuk menggelincirkan kita, maka luruskan niat setiap saat hanya untuk mencari ridha Allah."[Nyai Hj. Masyhudah Karim]',
            '"Salah satu bentuk maksiat lisan yakni jika sudah diberi anugerah berupa Al Qur\'an tetapi tidak digunakan untuk Muroja\'ah." [KHR. Muhammad Najib AQM]',
            '"Kalau ada orang yang hafal Al-Qur\'an, tapi hidupnya sumpek (tidak tenteram), biasanya tidak pernah Muroja\'ah."[KH. Abdul Munim Syadzili]',
            '"Jika membaca dan mentadabburi Al Quran itu tanda cinta, maka istiqomah adlah tanda setia"',
            '"Al Qur\'an; ia dihafal jadi kemuliaan bagi akal; ia diamal jadi kebaikan nan dikenal, ia direnungi jadi keteguhan bagi hati."{Salim A. Fillah}',
            '"Menghafal itu menggunakan seluruh organ wudhu, yaitu wajah meliputi mata untuk melihat ayat, dan telinga untuk mendengarkan ayat, lalu tangan untuk memegang mushaf, membuka lembaran-lembaran mushaf, dan menunjuk ayat, lalu kepala meliputi memori untuk mengingat ayat dan menyimpannya, dan kaki untuk berdiri lama Muroja\'ah ayat dalam shalat." {Dr. KH. Deden M. Makyaruddin. M.A}',
            '"Bagi santri penghafal Al Qur\'an setiap bulan adalah Ramadhan dan setiap malam adalah Lailatul Qadar, karena setiap hari Al Qur\'an turun ke dalam hatinya." {Dr. KH. Deden M. Makyaruddin. MA}',
            ''
        ],
        monthNames: [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ],
        hijriMonthsIndo: [
            'Muharram', 'Safar', 'Rabiul Awal', 'Rabiul Akhir', 
            'Jumadil Awal', 'Jumadil Akhir', 'Rajab', "Sya'ban",
            'Ramadan', 'Syawal', 'Dzulqaidah', 'Dzulhijjah'
        ],
        availableYears: [],
        selectedYear: new Date().getFullYear(),
        selectedMonthNumber: new Date().getMonth() + 1,
        currentHijriDate: 'Bismillaah...',
        currentGregorianDate: '',

        async init() {
            await this.loadData();
            this.setupYearFilter();
            this.updateSelectedMonth();
            this.setRandomMotivation();
            
            // Load tanggal Hijriah dari API
            await this.loadHijriDate();
        },

        async loadHijriDate() {
            try {
                // Dapatkan tanggal hari ini
                const today = new Date();
                const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
                
                console.log('📅 Fetching Hijri date for:', dateStr);
                
                // Panggil API Aladhan
                const response = await fetch(`https://api.aladhan.com/v1/gToH/${dateStr}`);
                const data = await response.json();
                
                if (data.code === 200 && data.data && data.data.hijri) {
                    const hijri = data.data.hijri;
                    
                    // Konversi nama bulan ke Indonesia jika perlu
                    const monthName = this.convertHijriMonthName(hijri.month.en);
                    
                    this.currentHijriDate = `${hijri.day} ${monthName} ${hijri.year} H`;
                    
                    // Format tanggal Masehi dalam bahasa Indonesia
                    const monthsIndo = this.monthNames;
                    this.currentGregorianDate = `${today.getDate()} ${monthsIndo[today.getMonth()]} ${today.getFullYear()}`;
                    
                    console.log('✅ Hijri date loaded:', this.currentHijriDate);
                } else {
                    throw new Error('Invalid API response');
                }
            } catch (error) {
                console.error('❌ Error loading Hijri date:', error);
                // Fallback: tampilkan tanggal Masehi saja
                const today = new Date();
                this.currentHijriDate = 'Tanggal Hijriah';
                this.currentGregorianDate = `${today.getDate()} ${this.monthNames[today.getMonth()]} ${today.getFullYear()}`;
            }
        },

        convertHijriMonthName(englishName) {
            // Mapping nama bulan dari API ke Indonesia
            const mapping = {
                'Muḥarram': 'Muharram',
                'Ṣafar': 'Safar',
                'Rabīʿ al-awwal': 'Rabiul Awal',
                'Rabīʿ al-thānī': 'Rabiul Akhir',
                'Jumādá al-ūlá': 'Jumadil Awal',
                'Jumādá al-ākhirah': 'Jumadil Akhir',
                'Rajab': 'Rajab',
                'Shaʿbān': "Sya'ban",
                'Ramaḍān': 'Ramadan',
                'Shawwāl': 'Syawal',
                'Dhū al-Qaʿdah': 'Dzulqaidah',
                'Dhū al-Ḥijjah': 'Dzulhijjah'
            };
            
            return mapping[englishName] || englishName;
        },

        async loadData() {
            this.participants = [];
            this.tracking = {};
            
            try {
                const { data: participantsData, error: participantsError } = await supabaseClient
                    .from('participants')
                    .select('username');
                    
                if (participantsError) throw participantsError;
                
                this.participants = participantsData.map(p => p.username);

                const { data: trackingData, error: trackingError } = await supabaseClient
                    .from('tracking_log')
                    .select('*');
                    
                if (trackingError) throw trackingError;

                trackingData.forEach(log => {
                    const [year, month, day] = log.date_log.split('-');
                    const key = `${log.participant_username}_${year}-${month}_${parseInt(day)}`;
                    this.tracking[key] = true;
                });
                
            } catch (error) {
                console.error('Error loading data from Supabase:', error);
                alert('Gagal memuat data: ' + error.message);
            }
        },

        setupYearFilter() {
            const currentYear = new Date().getFullYear();
            const startYear = currentYear - 2;
            const endYear = currentYear + 2;
            
            this.availableYears = [];
            for (let year = startYear; year <= endYear; year++) {
                this.availableYears.push(year);
            }
        },

        updateSelectedMonth() {
            this.selectedMonth = `${this.selectedYear}-${String(this.selectedMonthNumber).padStart(2, '0')}`;
        },

        setRandomMotivation() {
            this.currentMotivation = this.motivations[Math.floor(Math.random() * this.motivations.length)];
        },

        login() {
            this.loginError = '';
            if (!this.loginUsername.trim()) {
                this.loginError = 'Username tidak boleh kosong';
                return;
            }
            
            if (this.participants.includes(this.loginUsername.trim())) {
                this.currentUser = this.loginUsername.trim();
                this.isAdmin = false;
                this.setRandomMotivation();
            } else {
                this.loginError = 'Username tidak terdaftar';
            }
        },

        adminLogin() {
            this.loginError = '';
            if (this.adminPassword === 'ngajiqu') {
                this.currentUser = 'Administrator';
                this.isAdmin = true;
                this.showAdminLogin = false;
                this.setRandomMotivation();
            } else {
                this.loginError = 'Password salah';
            }
        },

        logout() {
            this.currentUser = null;
            this.isAdmin = false;
            this.loginUsername = '';
            this.adminPassword = '';
            this.showAdminLogin = false;
        },

        async addParticipant() {
            this.adminMessage = '';
            const newUsername = this.newParticipant.trim();
            
            if (!newUsername) {
                this.adminMessage = 'Username tidak boleh kosong';
                return;
            }
            
            if (this.participants.includes(newUsername)) {
                this.adminMessage = 'Username sudah ada';
                return;
            }
            
            try {
                const { error } = await supabaseClient
                    .from('participants')
                    .insert({ username: newUsername });

                if (error) throw error;
                
                this.participants.push(newUsername);
                this.adminMessage = `Peserta ${newUsername} berhasil ditambahkan`;
                this.newParticipant = '';
                
            } catch (error) {
                console.error('Error adding participant:', error);
                this.adminMessage = 'Gagal menambah: ' + error.message;
            }
        },

        async deleteParticipant(participant) {
            if (!confirm(`Hapus peserta ${participant}? Ini akan menghapus SEMUA data progresnya.`)) {
                return;
            }
            
            try {
                const { error } = await supabaseClient
                    .from('participants')
                    .delete()
                    .eq('username', participant);

                if (error) throw error;

                this.participants = this.participants.filter(p => p !== participant);
                this.adminMessage = `Peserta ${participant} berhasil dihapus`;
                
            } catch (error) {
                console.error('Error deleting participant:', error);
                this.adminMessage = 'Gagal menghapus: ' + error.message;
            }
        },

        getDaysInMonth() {
            const [year, month] = this.selectedMonth.split('-');
            const daysInMonth = new Date(year, month, 0).getDate();
            return Array.from({ length: daysInMonth }, (_, i) => i + 1);
        },

        getCurrentDay() {
            const now = new Date();
            const [year, month] = this.selectedMonth.split('-');
            if (now.getFullYear() === parseInt(year) && (now.getMonth() + 1) === parseInt(month)) {
                return now.getDate();
            }
            return this.getDaysInMonth().length;
        },

        isChecked(day) {
            const key = `${this.currentUser}_${this.selectedMonth}_${day}`;
            return this.tracking[key] === true;
        },

        async toggleDay(day) {
            if (day > this.getCurrentDay()) return;
            
            const key = `${this.currentUser}_${this.selectedMonth}_${day}`;
            const isCurrentlyChecked = this.tracking[key] === true;
            const date_log = `${this.selectedMonth}-${String(day).padStart(2, '0')}`;

            try {
                if (isCurrentlyChecked) {
                    const { error } = await supabaseClient
                        .from('tracking_log')
                        .delete()
                        .match({ 
                            participant_username: this.currentUser, 
                            date_log: date_log 
                        });
                    
                    if (error) throw error;
                    delete this.tracking[key];
                    
                } else {
                    const { error } = await supabaseClient
                        .from('tracking_log')
                        .insert({
                            participant_username: this.currentUser,
                            date_log: date_log
                        });
                    
                    if (error) throw error;
                    this.tracking[key] = true;
                }
            } catch (error) {
                console.error('Error toggling day:', error);
                alert('Gagal menyimpan progres: ' + error.message);
            }
        },

        getStatsFor(participant) {
            const days = this.getDaysInMonth();
            const currentDay = this.getCurrentDay();
            const total = Math.min(currentDay, days.length);
            let completed = 0;
            
            for (let day = 1; day <= total; day++) {
                const key = `${participant}_${this.selectedMonth}_${day}`;
                if (this.tracking[key]) completed++;
            }
            
            const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
            return { completed, total, percentage };
        },

        calculateStats() {
            return this.getStatsFor(this.currentUser);
        },

        getParticipantStats(participant) {
            return this.getStatsFor(participant);
        },

        getSortedParticipants() {
    // Buat array dengan data peserta dan statistiknya
            const participantsWithStats = this.participants.map(participant => ({
                name: participant,
                stats: this.getParticipantStats(participant)
            }));
            
            // Urutkan berdasarkan percentage (tertinggi ke terendah)
            // Jika percentage sama, urutkan berdasarkan completed
            participantsWithStats.sort((a, b) => {
                if (b.stats.percentage !== a.stats.percentage) {
                    return b.stats.percentage - a.stats.percentage;
                }
                return b.stats.completed - a.stats.completed;
            });
            
            // Return hanya nama peserta yang sudah terurut
            return participantsWithStats.map(p => p.name);
        },

        copyMonthlyReport() {
            const [year, month] = this.selectedMonth.split('-');
            const monthName = this.monthNames[parseInt(month) - 1]; 
            let report = `📊 *LAPORAN TILAWAH ${monthName.toUpperCase()} ${year}*\n\n`;
            
            // GANTI DENGAN getSortedParticipants() 👇
            this.getSortedParticipants().forEach((participant, index) => {
                const stats = this.getParticipantStats(participant);
                
                // Tambahkan emoji medal untuk top 3
                let medal = '';
                if (index === 0) medal = ' ';
                else if (index === 1) medal = ' ';
                else if (index === 2) medal = ' ';
                
                report += `${medal}${index + 1}. *${participant}*\n`;
                report += `${stats.completed}/${stats.total} hari (${stats.percentage}%)\n\n`;
            });
            
            report += `━━━━━━━━━━━━━━━━━━━━━\n`;
            report += `Semoga istiqomah\n`;
            report += `Update: ${new Date().toLocaleDateString('id-ID')}`;
            
            navigator.clipboard.writeText(report).then(() => {
                this.adminMessage = 'Laporan berhasil disalin! Silakan paste ke WhatsApp';
                setTimeout(() => this.adminMessage = '', 3000);
            });
        }
    }
}
