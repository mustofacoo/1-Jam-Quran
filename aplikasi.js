function tilawahApp() {
    return {
        currentUser: null,
        currentUserFullName: '',
        isAdmin: false,
        loginUsername: '',
        adminPassword: '',
        loginError: '',
        showAdminLogin: false,
        participants: [],
        newParticipant: '',
        newFullName: '',
        adminMessage: '',
        participantsData: [], 
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
            '"Al-Qur’an itu harus dijaga dan dibaca. Rumahmu harus menjadi sejuk karena Al-Qur’an. Jangan sampai kamu mengajarkan Al-Qur’an ke sana kemari, tetapi rumahmu sendiri kosong dari Al-Qur’an." {KH. M. Anwar Manshur}',

'"Ketika seorang merasa rindu untuk membaca Al-Qur’an, itu pertanda bahwa Al-Qur’an sudah menjadi bagian dari hidupnya." {KH. Ahsin Sakho Muhammad}',

'"l-Qur\'an adalah Kalamullah yang dimuliakan oleh Allah sendiri. Sesuatu yang Allah muliakan jangan sampai disepelekan. Maka anak-anak, ketika sudah pulang ke rumah, berumah tangga, dan bekerja, jangan sampai melupakan hafalan dan bacaan l-Qur\'annya." {KH. R. Najib AQ Munawwir}',

'"Tidak ada kefakiran bagi orang yang hidupnya bersama Al-Qur’an. Karena siapa pun yang dekat dengan kalam Allah, hidupnya akan selalu dicukupkan dengan ketenangan, keberkahan, dan kasih sayang-Nya." {KH. Yusuf Mahsyar}',

'"l-Qur\'an bisa menjauhkan kita dari maksiat, dan maksiat bisa menjauhkan kita dari l-Qur\'an." {Ibu Nyai Hj. Nur Hannah Zamzami}',

'"Siapa yang ingin berbicara dengan Tuhan, berdoalah. Siapa yang ingin Tuhan berbicara kepadanya, bacalah l-Qur\'an." {Prof. Dr. M. Quraish Shihab}',

'"Ayo nak, targetkan hafalanmu mutqin. Jangan jadikan pekerjaan rumah tangga, kesibukan, atau mengurus anak kecil sebagai alasan tidak muroja\'ah. Bisa, asal mampu mengalahkan kebiasaan terlalu sering menamatkan story di HP dibandingkan menamatkan bacaan l-Qur\'an." {Ibu Nyai Hj. Nur Hannah Zamzami}',

'"Kamu tidak perlu bingung dengan kondisi Al-Qur’anmu, ayat atau juz yang belum lancar. Tidak perlu pusing menghafal seperti saat setoran. Cukup istiqomah mengkhatamkan Al-Qur’an, insya Allah hafalanmu akan lancar dan kembali dengan sendirinya." {KH. Nawawi Abdul Aziz}',

'"Wahai para penghafal Al-Qur\'an, jagalah l-Qur\'an dengan baik. Karena l-Qur\'an memiliki dua kemungkinan: menjadi syafaat atau menjadi laknat." {KH. Saiful Abidin}',

'"Jangan pernah menyepelekan nderes l-Qur\'an. Keberhasilan pasti akan turun kepada siapa pun yang dekat dengan l-Qur\'an." {Dr. KH. Ahsin Sakho Muhammad, Lc., MA}',

'"Kelancaran bacaan adalah anugerah dari Allah. Kewajiban kita adalah muroja\'ah. Jika kita sudah nderes, maka lancar atau tidaknya adalah urusan Allah." {Ibu Nyai Hj. Nur Hannah Zamzami}',

'"Membaca Al-Qur’an itu memberkahi waktu. Jangan karena kesibukan lain kita mengabaikan membaca Al-Qur’an. Akibatnya, kesibukan tidak selesai dan bacaan Al-Qur’an pun tidak didapat." {Dr. KH. Muhammad Afifudin Dimyathi}',

'"Usaha menghafal l-Qur\'an itu tidak cukup hanya man jadda wajada. Di atas itu ada bil istimatah, yaitu bersungguh-sungguh secara mati-matian." {KH. Muhammad Fathoni Dimyathi, Lc.}',

'"Nderes l-Qur\'an ketika belum lancar ibarat minum jamu, rasanya pahit namun menyehatkan. Jika sudah lancar ibarat minum madu, rasanya manis dan menyehatkan." {Ibu Nyai Hj. Luluk Illiyah}',

'"Ketika l-Qur\'an dijadikan agenda utama, maka waktu terasa seakan lebih dari dua puluh empat jam sehari." {Ibu Nyai Hj. Luluk Illiyah}',

'"Orang yang ahli l-Qur\'an dan terus membaca l-Qur\'an dapat menjadi wali Allah. Jika ingin menjadi wali Allah, maka sibukkan diri dengan menghafal dan membaca l-Qur\'an." {KH. Muhammad Najih MZ}',

'"Membaca l-Qur\'an adalah zikir yang paling utama. Lebih afdal daripada istighfar, tasbih, tahlil, dan zikir-zikir lainnya." {Syekh Said Ramadhan Al-Buthi}',

'"Sebagian penghafal Al-Qur’an, jika ia mengulang hafalannya sebelum tidur lalu tertidur, maka hafalannya akan menguat. Karena selama tidur, ruhnya terus mengulang apa yang ia sibukkan sebelum tidur." {Habib Umar bin Hafidz}',

'"Shohibul Qur\'an adalah orang yang mulazamah muroja\'ah setiap hari, mau mengamalkan perintah-perintah l-Qur\'an, dan berakhlak dengan akhlak l-Qur\'an." {KH. Muhammad Ulin Nuha Arwani}',
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
        // 🔒 FIX 1: Tambah locking mechanism
        _pendingToggles: new Set(),

        async init() {
            await this.loadData();
            this.setupYearFilter();
            this.updateSelectedMonth();
            this.setRandomMotivation();
            await this.loadHijriDate();
        },

        async loadHijriDate() {
            try {
                const today = new Date();
                const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
                
                const response = await fetch(`https://api.aladhan.com/v1/gToH/${dateStr}`);
                const data = await response.json();
                
                if (data.code === 200 && data.data && data.data.hijri) {
                    const hijri = data.data.hijri;
                    const monthName = this.convertHijriMonthName(hijri.month.en);
                    
                    this.currentHijriDate = `${hijri.day} ${monthName} ${hijri.year} H`;
                    
                    const monthsIndo = this.monthNames;
                    this.currentGregorianDate = `${today.getDate()} ${monthsIndo[today.getMonth()]} ${today.getFullYear()}`;
                } else {
                    throw new Error('Invalid API response');
                }
            } catch (error) {
                console.error('❌ Error loading Hijri date:', error);
                const today = new Date();
                this.currentHijriDate = 'Tanggal Hijriah';
                this.currentGregorianDate = `${today.getDate()} ${this.monthNames[today.getMonth()]} ${today.getFullYear()}`;
            }
        },

        convertHijriMonthName(englishName) {
            const mapping = {
                'Muḥarram': 'Muharram',
                'Ṣafar': 'Safar',
                'Rabīʿ al-awwal': 'Rabiul Awal',
                'Rabīʿ al-thānī': 'Rabiul Akhir',
                'Jumādá al-ūlá': 'Jumadil Awal',
                'Jumādá al-Ākhirah': 'Jumadil Akhir',
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
            this.participantsData = [];
            this.tracking = {};
            
            try {
                const { data: participantsData, error: participantsError } = await supabaseClient
                    .from('participants')
                    .select('username, full_name');
                    
                if (participantsError) throw participantsError;
                
                // 🔒 Normalisasi data dari database
                this.participantsData = participantsData.map(p => ({
                    username: p.username.trim(),
                    full_name: p.full_name.trim()
                }));
                this.participants = this.participantsData.map(p => p.username);

                const { data: trackingData, error: trackingError } = await supabaseClient
                    .from('tracking_log')
                    .select('*');
                    
                if (trackingError) throw trackingError;

                trackingData.forEach(log => {
                    const [year, month, day] = log.date_log.split('-');
                    // 🔒 Trim username dari tracking log
                    const username = log.participant_username.trim();
                    const key = `${username}_${year}-${month}_${parseInt(day)}`;
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
            
            // 🔒 Simpan versi yang sudah di-trim
            const normalizedUsername = this.loginUsername.trim();
            
            if (this.participants.includes(normalizedUsername)) {
                const participant = this.participantsData.find(p => p.username === normalizedUsername);
                
                this.currentUser = normalizedUsername;
                this.currentUserFullName = participant ? participant.full_name : normalizedUsername;
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
                this.currentUserFullName = 'Administrator';
                this.isAdmin = true;
                this.showAdminLogin = false;
                this.setRandomMotivation();
            } else {
                this.loginError = 'Password salah';
            }
        },

        logout() {
            this.currentUser = null;
            this.currentUserFullName = '';
            this.isAdmin = false;
            this.loginUsername = '';
            this.adminPassword = '';
            this.showAdminLogin = false;
        },

        async addParticipant() {
            this.adminMessage = '';
            const newUsername = this.newParticipant.trim();
            const newName = this.newFullName.trim();
            
            if (!newUsername) {
                this.adminMessage = 'Username tidak boleh kosong';
                return;
            }
            
            // 🔒 Cegah spasi di dalam username
            if (newUsername.includes(' ')) {
                this.adminMessage = 'Username tidak boleh mengandung spasi';
                return;
            }
            
            // 🔒 Cegah karakter khusus
            if (!/^[a-zA-Z0-9_-]+$/.test(newUsername)) {
                this.adminMessage = 'Username hanya boleh huruf, angka, - dan _';
                return;
            }
            
            if (!newName) {
                this.adminMessage = 'Nama lengkap tidak boleh kosong';
                return;
            }
            
            if (this.participants.includes(newUsername)) {
                this.adminMessage = 'Username sudah ada';
                return;
            }
            
            try {
                const { error } = await supabaseClient
                    .from('participants')
                    .insert({ 
                        username: newUsername,
                        full_name: newName
                    });

                if (error) throw error;
                
                this.participants.push(newUsername);
                this.participantsData.push({ username: newUsername, full_name: newName });
                
                this.adminMessage = `Peserta ${newName} (${newUsername}) berhasil ditambahkan`;
                this.newParticipant = '';
                this.newFullName = '';
                
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
                this.participantsData = this.participantsData.filter(p => p.username !== participant);
                this.adminMessage = `Peserta ${participant} berhasil dihapus`;
                
            } catch (error) {
                console.error('Error deleting participant:', error);
                this.adminMessage = 'Gagal menghapus: ' + error.message;
            }
        },

        getFullName(username) {
            const participant = this.participantsData.find(p => p.username === username);
            return participant ? participant.full_name : username;
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

        // 🔒 FIX 2: Perbaikan LENGKAP toggleDay dengan locking + upsert
        async toggleDay(day) {
            if (day > this.getCurrentDay()) return;
            
            const key = `${this.currentUser}_${this.selectedMonth}_${day}`;
            const date_log = `${this.selectedMonth}-${String(day).padStart(2, '0')}`;

            // 🔒 FIX: Cegah multiple clicks dengan Set
            if (this._pendingToggles.has(key)) {
                console.log('⏳ Request sudah dalam proses, harap tunggu...');
                return;
            }

            // Lock request ini
            this._pendingToggles.add(key);

            // Simpan state sebelumnya untuk rollback
            const isCurrentlyChecked = this.tracking[key] === true;
            const previousState = isCurrentlyChecked;

            // Optimistic update (update UI dulu)
            this.tracking[key] = !isCurrentlyChecked;

            try {
                if (isCurrentlyChecked) {
                    // DELETE
                    const { error } = await supabaseClient
                        .from('tracking_log')
                        .delete()
                        .match({ 
                            participant_username: this.currentUser, 
                            date_log: date_log 
                        });
                    
                    if (error) throw error;
                    
                } else {
                    // 🔒 FIX: Gunakan UPSERT untuk mencegah duplicate
                    // Format yang BENAR untuk Supabase JS Client v2
                    const { error } = await supabaseClient
                        .from('tracking_log')
                        .upsert({
                            participant_username: this.currentUser,
                            date_log: date_log
                        }, {
                            // Hanya butuh onConflict, tidak perlu ignoreDuplicates
                            // Supabase akan auto-detect primary key/unique constraint
                        });
                    
                    if (error) throw error;
                }

                console.log('✅ Data berhasil disimpan');

            } catch (error) {
                console.error('❌ Error toggling day:', error);
                
                // Rollback jika gagal
                this.tracking[key] = previousState;
                
                // Tampilkan error yang lebih user-friendly
                if (error.message && error.message.toLowerCase().includes('duplicate')) {
                    alert('Data sudah tersimpan. Silakan refresh halaman.');
                } else {
                    alert('Gagal menyimpan progres: ' + (error.message || 'Unknown error'));
                }
            } finally {
                // Unlock setelah selesai
                this._pendingToggles.delete(key);
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
            const participantsWithStats = this.participants.map(participant => ({
                name: participant,
                stats: this.getParticipantStats(participant)
            }));
            
            participantsWithStats.sort((a, b) => {
                if (b.stats.percentage !== a.stats.percentage) {
                    return b.stats.percentage - a.stats.percentage;
                }
                return b.stats.completed - a.stats.completed;
            });
            
            return participantsWithStats.map(p => p.name);
        },

        copyMonthlyReport() {
            const [year, month] = this.selectedMonth.split('-');
            const monthName = this.monthNames[parseInt(month) - 1]; 
            let report = `*LAPORAN TILAWAH ${monthName.toUpperCase()} ${year}*\n\n`;
            
            this.getSortedParticipants().forEach((participant, index) => {
                const stats = this.getParticipantStats(participant);
                const fullName = this.getFullName(participant);
                
                let medal = '';
                if (index === 0) medal = ' ';
                else if (index === 1) medal = ' ';
                else if (index === 2) medal = ' ';
                
                report += `${medal}${index + 1}. *${fullName}*\n`;
                report += `   ${stats.completed}/${stats.total} hari (${stats.percentage}%)\n\n`;
            });
            
            report += `─────────────────────\n`;
            report += `Semoga istiqomah 🤲\n`;
            report += `Update: ${new Date().toLocaleDateString('id-ID')}`;
            
            navigator.clipboard.writeText(report).then(() => {
                this.adminMessage = '✅ Laporan berhasil disalin! Silakan paste ke WhatsApp';
                setTimeout(() => this.adminMessage = '', 3000);
            });
        }
    }
}
