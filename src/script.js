(() => {
    'use strict';

    // ===== 完整国际化字典 =====
    const I18N = {
        zh: {
            appTitle: '照片集', navAlbums: '相册集', navLibrary: '照片库', navSettings: '设置', navAbout: '关于',
            albumsTitle: '相册集', libraryTitle: '照片库', librarySubtitle: '所有相册中的照片',
            backToAlbums: '← 返回相册集', searchAlbums: '🔍 搜索相册...', searchPhotos: '🔍 搜索照片...',
            searchAlbum: '🔍 搜索此相册...', importPhotos: '📁 导入照片 (Ctrl+I)',
            accountSection: '账户', accountHint: '注册或登录以解锁全部功能',
            registerBtn: '📝 注册', loginBtn: '🔑 登录', quickLogin: '快速登录：',
            changePassword: '🔑 修改密码', logout: '退出', deleteAccount: '🗑️ 注销账户',
            languageSection: '语言', chinese: '中文', english: 'English',
            storageInfo: '存储信息', storageUsed: '已用空间', storageTotal: '总空间',
            themeSection: '背景设置', presetThemes: '预设颜色主题：', customGradient: '自定义渐变色', apply: '应用',
            sortSection: '照片排序', sortDefault: '默认顺序', sortDate: '按日期', sortTitle: '按标题',
            sortLocation: '按地点', sortRandom: '随机排序', sortCustom: '自定义排序',
            displaySection: '显示设置', showAnim: '启用动画', showLoc: '显示地点', showDate: '显示日期',
            backupSection: '备份', exportData: '📦 导出备份', importData: '📥 导入备份',
            resetSection: '重置', resetAppearance: '恢复外观默认', clearAllData: '清空所有数据',
            aboutTitle: '关于', aboutText: '📸 本地照片管理应用', developer: '开发者：Timespace233', version: '版本：beta 0.6.0', link: 'GitHub: https://github.com/Timespace233/Local-Photo-Manager',
            registerTab: '注册', loginTab: '登录', username: '用户名 *', email: '邮箱 *',
            password: '密码 *', confirmPassword: '确认密码 *', cancel: '取消',
            registerSubmit: '注册', loginSubmit: '登录', rememberMe: '保存登录状态',
            changePasswordTitle: '🔑 修改密码', currentPassword: '当前密码 *',
            newPassword: '新密码 *', confirmNewPassword: '确认新密码 *', confirmChange: '确认修改',
            editPhoto: '✏️ 编辑', editPhotoTitle: '编辑照片', photoTitle: '标题', photoDesc: '描述',
            photoLoc: '地点', photoDate: '日期', photoCam: '相机', photoAlbum: '相册', photoTags: '标签',
            save: '保存', albumEditTitle: '相册', albumName: '名称', albumDesc: '描述',
            selectCover: '选择封面', confirm: '确认', loading: '加载中...',
            noAlbums: '暂无相册', noPhotos: '暂无照片', photos: '张照片',
            proOnly: '注册用户专用功能', maxAlbums: '未注册用户最多创建3个相册',
            unlimitedAlbums: '已注册 - 可创建无限相册', freeLimit: '未注册最多',
            registeredAt: '注册时间', quickLoginAs: '以',
            sortUpdated: '排序已更新', saved: '已保存', deleted: '已删除', updated: '已更新',
            coverUpdated: '封面已更新', photosImported: '张照片导入成功',
            selectAlbumFirst: '请先选择相册', noValidImages: '没有有效的图片文件',
            exportSuccess: '导出成功', importSuccess: '导入成功', invalidFile: '无效的备份文件',
            confirmImport: '导入将合并到当前数据，继续？', parseError: '解析失败',
            confirmResetAppearance: '恢复外观默认设置？此操作不影响照片和账户数据。',
            resetSuccess: '已恢复默认', confirmClearAll: '⚠️ 确定要清空所有数据吗？\n\n这将删除：\n• 所有相册和照片\n• 所有注册账户\n• 所有设置\n\n此操作不可恢复！',
            cleared: '所有数据已清空，应用已完全重置',
            confirmDeleteAlbum: '删除相册及所有照片？', confirmDeletePhoto: '删除这张照片？',
            exportOptionsHint: '选择导出范围：', exportCurrentUser: '仅导出当前账户数据',
            exportAllUsers: '导出所有用户数据', confirmExportAll: '导出所有用户数据？',
            passwordWeak: '弱', passwordMedium: '中', passwordStrong: '强',
            passwordHint: '至少8位，包含大小写字母和数字',
            quickLoginNoSave: '快速登录不会保存状态，刷新后将退出',
            usernameErr2: '用户名需2-30字符', emailErr2: '无效邮箱格式',
            passwordErr2: '密码至少8位，需包含大小写字母和数字',
            confirmPasswordErr2: '两次密码不一致', usernameExists: '用户名已存在',
            userNotFound: '用户不存在', wrongPassword: '密码错误',
            currentPasswordErr2: '当前密码错误', newPasswordErr2: '新密码不符合要求',
            confirmNewPasswordErr2: '两次密码不一致', emailMismatch: '邮箱不匹配',
            enterUsername: '请输入用户名', enterPassword: '请输入密码',
            customColorApplied: '自定义颜色已应用',

            // 新增：title / 动态文案
            titleCreateAlbum: '创建新相册 (Ctrl+N)',
            titleAlbumSearch: '搜索相册',
            titlePhotoSearch: '搜索照片',
            titleAlbumDetailSearch: '搜索此相册',
            titleFileInput: '选择图片文件',
            setCover: '设置封面',
            edit: '编辑',
            delete: '删除',
            themePurple: '紫色', themePink: '粉色', themeBlue: '蓝色', themeGreen: '绿色',
            themeOrange: '橙色', themeLavender: '薰衣草', themeDark: '深色', themeLight: '浅色',
            colorStart: '选择起始颜色', colorStartHex: '输入十六进制颜色代码',
            colorEnd: '选择结束颜色', colorEndHex: '输入十六进制颜色代码',
            applyCustomTitle: '应用自定义渐变色（需注册）',
            titleExport: '导出备份（需注册）', titleImport: '导入备份（需注册）',
            titleResetAppearance: '恢复外观默认（不影响数据）', titleClearAll: '删除所有数据（不可恢复）',
            languageSwitched: '语言已切换为中文'
        },
        en: {
            appTitle: 'Photo Gallery', navAlbums: 'Albums', navLibrary: 'Library', navSettings: 'Settings', navAbout: 'About',
            albumsTitle: 'Albums', libraryTitle: 'Photo Library', librarySubtitle: 'All photos in your albums',
            backToAlbums: '← Back to Albums', searchAlbums: '🔍 Search albums...', searchPhotos: '🔍 Search photos...',
            searchAlbum: '🔍 Search this album...', importPhotos: '📁 Import Photos (Ctrl+I)',
            accountSection: 'Account', accountHint: 'Register or login to unlock all features',
            registerBtn: '📝 Register', loginBtn: '🔑 Login', quickLogin: 'Quick Login:',
            changePassword: '🔑 Change Password', logout: 'Logout', deleteAccount: '🗑️ Delete Account',
            languageSection: 'Language', chinese: '中文', english: 'English',
            storageInfo: 'Storage Info', storageUsed: 'Used', storageTotal: 'Total',
            themeSection: 'Theme', presetThemes: 'Preset Themes:', customGradient: 'Custom Gradient', apply: 'Apply',
            sortSection: 'Photo Sorting', sortDefault: 'Default', sortDate: 'By Date', sortTitle: 'By Title',
            sortLocation: 'By Location', sortRandom: 'Random', sortCustom: 'Custom Sort',
            displaySection: 'Display', showAnim: 'Enable Animations', showLoc: 'Show Location', showDate: 'Show Date',
            backupSection: 'Backup', exportData: '📦 Export', importData: '📥 Import',
            resetSection: 'Reset', resetAppearance: 'Reset Appearance', clearAllData: 'Clear All Data',
            aboutTitle: 'About', aboutText: '📸 Local Photo Manager', developer: 'Developer: Timespace233', version: 'Version: beta 0.6.0', link: 'GitHub: https://github.com/Timespace233/Local-Photo-Manager',
            registerTab: 'Register', loginTab: 'Login', username: 'Username *', email: 'Email *',
            password: 'Password *', confirmPassword: 'Confirm Password *', cancel: 'Cancel',
            registerSubmit: 'Register', loginSubmit: 'Login', rememberMe: 'Remember Me',
            changePasswordTitle: '🔑 Change Password', currentPassword: 'Current Password *',
            newPassword: 'New Password *', confirmNewPassword: 'Confirm New Password *', confirmChange: 'Confirm',
            editPhoto: '✏️ Edit', editPhotoTitle: 'Edit Photo', photoTitle: 'Title', photoDesc: 'Description',
            photoLoc: 'Location', photoDate: 'Date', photoCam: 'Camera', photoAlbum: 'Album', photoTags: 'Tags',
            save: 'Save', albumEditTitle: 'Album', albumName: 'Name', albumDesc: 'Description',
            selectCover: 'Select Cover', confirm: 'Confirm', loading: 'Loading...',
            noAlbums: 'No albums yet', noPhotos: 'No photos yet', photos: 'photos',
            proOnly: 'Registered users only', maxAlbums: 'Free users can create up to 3 albums',
            unlimitedAlbums: 'Registered - Unlimited albums', freeLimit: 'Free limit',
            registeredAt: 'Registered', quickLoginAs: 'Login as',
            sortUpdated: 'Sort updated', saved: 'Saved', deleted: 'Deleted', updated: 'Updated',
            coverUpdated: 'Cover updated', photosImported: 'photos imported',
            selectAlbumFirst: 'Please select an album first', noValidImages: 'No valid image files',
            exportSuccess: 'Export successful', importSuccess: 'Import successful', invalidFile: 'Invalid backup file',
            confirmImport: 'Import will merge with current data. Continue?', parseError: 'Parse error',
            confirmResetAppearance: 'Reset appearance to defaults? This does not affect photos or accounts.',
            resetSuccess: 'Reset complete', confirmClearAll: '⚠️ Are you sure you want to clear ALL data?\n\nThis will delete:\n• All albums and photos\n• All registered accounts\n• All settings\n\nThis cannot be undone!',
            cleared: 'All data cleared, app has been fully reset',
            confirmDeleteAlbum: 'Delete album and all its photos?', confirmDeletePhoto: 'Delete this photo?',
            exportOptionsHint: 'Select export scope:', exportCurrentUser: 'Export current user data only',
            exportAllUsers: 'Export all users data', confirmExportAll: 'Export all users data?',
            passwordWeak: 'Weak', passwordMedium: 'Medium', passwordStrong: 'Strong',
            passwordHint: 'At least 8 chars with uppercase, lowercase and numbers',
            quickLoginNoSave: 'Quick login does not save session, will logout on refresh',
            usernameErr2: 'Username must be 2-30 chars', emailErr2: 'Invalid email format',
            passwordErr2: 'Password must be 8+ chars with upper/lowercase and numbers',
            confirmPasswordErr2: 'Passwords do not match', usernameExists: 'Username already exists',
            userNotFound: 'User not found', wrongPassword: 'Wrong password',
            currentPasswordErr2: 'Wrong current password', newPasswordErr2: 'New password does not meet requirements',
            confirmNewPasswordErr2: 'Passwords do not match', emailMismatch: 'Email mismatch',
            enterUsername: 'Please enter username', enterPassword: 'Please enter password',
            customColorApplied: 'Custom color applied',

            // 新增：title / 动态文案
            titleCreateAlbum: 'Create new album (Ctrl+N)',
            titleAlbumSearch: 'Search albums',
            titlePhotoSearch: 'Search photos',
            titleAlbumDetailSearch: 'Search this album',
            titleFileInput: 'Choose image files',
            setCover: 'Set cover',
            edit: 'Edit',
            delete: 'Delete',
            themePurple: 'Purple', themePink: 'Pink', themeBlue: 'Blue', themeGreen: 'Green',
            themeOrange: 'Orange', themeLavender: 'Lavender', themeDark: 'Dark', themeLight: 'Light',
            colorStart: 'Choose start color', colorStartHex: 'Enter hex color code',
            colorEnd: 'Choose end color', colorEndHex: 'Enter hex color code',
            applyCustomTitle: 'Apply custom gradient (registration required)',
            titleExport: 'Export backup (registration required)', titleImport: 'Import backup (registration required)',
            titleResetAppearance: 'Reset appearance (data unaffected)', titleClearAll: 'Delete all data (irreversible)',
            languageSwitched: 'Language switched to English'
        }
    };

    // ===== 常量 =====
    const DB_NAME = 'PhotoGalleryDB';
    const DB_VERSION = 4;
    const STORES = { ALBUMS: 'albums', PHOTOS: 'photos', SETTINGS: 'settings', USERS: 'users', SESSION: 'session' };
    const MAX_ALBUMS_FREE = 3;
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const THEMES = {
        purple: { c1: '#667eea', c2: '#764ba2', dark: false }, pink: { c1: '#f093fb', c2: '#f5576c', dark: false },
        blue: { c1: '#4facfe', c2: '#00f2fe', dark: false }, green: { c1: '#43e97b', c2: '#38f9d7', dark: false },
        orange: { c1: '#fa709a', c2: '#fee140', dark: false }, lavender: { c1: '#a18cd1', c2: '#fbc2eb', dark: false },
        dark: { c1: '#2c3e50', c2: '#34495e', dark: true }, light: { c1: '#ecf0f1', c2: '#bdc3c7', dark: false }
    };
    const DEFAULTS = { colorTheme: 'purple', c1: '#667eea', c2: '#764ba2', sort: 'default', anim: true, loc: true, date: true, order: {}, lang: 'zh' };

    let db = null;
    const S = {
        albums: [], photos: [], settings: { ...DEFAULTS },
        currentAlbum: null, currentPhoto: null, dragged: null,
        pendingCoverAlbumId: null, selectedCoverPhotoId: null,
        user: null, recentUsers: []
    };

    const $ = id => document.getElementById(id);
    const el = (tag, cls) => { const e = document.createElement(tag); if (cls) e.className = cls; return e; };
    const t = key => I18N[S.settings.lang]?.[key] || I18N.zh[key] || key;

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // 支持 textContent / placeholder / title 三种
    function applyI18N() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = t(el.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = t(el.dataset.i18nPlaceholder);
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            // 若元素因未注册被锁定，title 保持 proOnly，不被覆盖
            if (el.classList.contains('locked')) return;
            el.title = t(el.dataset.i18nTitle);
        });
        document.title = t('appTitle');
    }

    const toast = (msg, type = 'info') => {
        const tEl = el('div', `toast ${type}`); tEl.textContent = msg;
        $('toastWrap').appendChild(tEl);
        setTimeout(() => { tEl.style.opacity = '0'; tEl.style.transition = 'opacity .3s'; setTimeout(() => tEl.remove(), 300); }, 2500);
    };

    const svgPh = (text, c1, c2) => {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect width="600" height="400" fill="url(#g)"/><text x="300" y="200" text-anchor="middle" fill="#fff" font-size="28" font-family="Arial">${escapeHtml(text)}</text></svg>`;
        return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
    };

    const isPro = () => S.user !== null;
    const currentUserId = () => S.user ? S.user.username : 'guest';
    const showProLocked = () => toast('🔒 ' + t('proOnly'), 'error');
    const showLoading = () => { $('loadingOverlay').style.display = 'flex'; };
    const hideLoading = () => { $('loadingOverlay').style.display = 'none'; };

    // ===== 密码 =====
    function generateSalt() {
        const arr = new Uint8Array(16);
        crypto.getRandomValues(arr);
        return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
    }
    async function hashPassword(password, salt) {
        const data = new TextEncoder().encode(password + salt);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(hashBuffer), b => b.toString(16).padStart(2, '0')).join('');
    }
    function getPasswordStrength(password) {
        let score = 0;
        if (password.length >= 8) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/\d/.test(password)) score++;
        if (/[^a-zA-Z0-9]/.test(password)) score++;
        return score;
    }
    function getPasswordError(pwd) {
        if (pwd.length < 8) return S.settings.lang === 'zh' ? '密码至少8个字符' : 'At least 8 characters';
        if (!/[a-z]/.test(pwd)) return S.settings.lang === 'zh' ? '需包含小写字母' : 'Need lowercase';
        if (!/[A-Z]/.test(pwd)) return S.settings.lang === 'zh' ? '需包含大写字母' : 'Need uppercase';
        if (!/\d/.test(pwd)) return S.settings.lang === 'zh' ? '需包含数字' : 'Need number';
        return '';
    }

    // ===== IndexedDB =====
    function openDB() {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(DB_NAME, DB_VERSION);
            req.onupgradeneeded = (e) => {
                const d = e.target.result;
                if (!d.objectStoreNames.contains(STORES.ALBUMS)) d.createObjectStore(STORES.ALBUMS, { keyPath: 'id' });
                if (!d.objectStoreNames.contains(STORES.PHOTOS)) d.createObjectStore(STORES.PHOTOS, { keyPath: 'id' });
                if (!d.objectStoreNames.contains(STORES.SETTINGS)) d.createObjectStore(STORES.SETTINGS, { keyPath: 'key' });
                if (!d.objectStoreNames.contains(STORES.USERS)) d.createObjectStore(STORES.USERS, { keyPath: 'username' });
                if (!d.objectStoreNames.contains(STORES.SESSION)) d.createObjectStore(STORES.SESSION, { keyPath: 'key' });
            };
            req.onsuccess = (e) => { db = e.target.result; resolve(db); };
            req.onerror = (e) => reject(e.target.error);
        });
    }

    function idbBulkPut(storeName, items) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            store.clear();
            items.forEach(item => store.put(item));
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
        });
    }

    function idbAdd(storeName, data) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            const req = store.put(data);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    function idbGetAll(storeName) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(storeName, 'readonly');
            const req = tx.objectStore(storeName).getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    function idbGet(storeName, key) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(storeName, 'readonly');
            const req = tx.objectStore(storeName).get(key);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    function idbClear(storeName) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(storeName, 'readwrite');
            const req = tx.objectStore(storeName).clear();
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    function idbDelete(storeName, key) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(storeName, 'readwrite');
            const req = tx.objectStore(storeName).delete(key);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    // ===== 存储 =====
    async function saveSettings() { await idbAdd(STORES.SETTINGS, { key: 'appSettings', value: S.settings }); }
    async function saveAlbums() { await idbBulkPut(STORES.ALBUMS, S.albums); }
    async function savePhotos() { await idbBulkPut(STORES.PHOTOS, S.photos); }
    async function saveSession() {
        await idbClear(STORES.SESSION);
        if (S.user) await idbAdd(STORES.SESSION, { key: 'currentUser', username: S.user.username, remember: true });
    }
    async function saveAll() { await saveSettings(); await saveAlbums(); await savePhotos(); }

    async function loadAll() {
        const sd = await idbGet(STORES.SETTINGS, 'appSettings');
        if (sd) S.settings = { ...DEFAULTS, ...sd.value };
        S.albums = await idbGetAll(STORES.ALBUMS);
        S.photos = await idbGetAll(STORES.PHOTOS);
        const session = await idbGet(STORES.SESSION, 'currentUser');
        S.user = null;
        if (session && session.remember && session.username) {
            const user = await idbGet(STORES.USERS, session.username);
            if (user) S.user = user;
        }
        S.recentUsers = await idbGetAll(STORES.USERS);
    }

    // ===== 存储信息 =====
    async function updateStorageInfo() {
        try {
            if (navigator.storage?.estimate) {
                const est = await navigator.storage.estimate();
                const usedStr = est.usage > 1073741824 ? (est.usage / 1073741824).toFixed(2) + ' GB' : (est.usage / 1048576).toFixed(2) + ' MB';
                const totalStr = est.quota > 1073741824 ? (est.quota / 1073741824).toFixed(2) + ' GB' : (est.quota / 1048576).toFixed(2) + ' MB';
                const percent = ((est.usage / est.quota) * 100).toFixed(1);
                $('storageUsageText').textContent = `${t('storageUsed')}: ${usedStr} | ${t('storageTotal')}: ${totalStr}`;
                $('storageBarFill').style.width = percent + '%';
                $('storagePercentText').textContent = `${percent}%`;
            }
        } catch { }
    }

    // ===== 用户数据 =====
    function getUserAlbums() { const uid = currentUserId(); return S.albums.filter(a => a.userId === uid); }
    function getUserPhotos() { const uid = currentUserId(); return S.photos.filter(p => p.userId === uid); }

    function defaultData() {
        const uid = currentUserId();
        const album = { id: Date.now(), userId: uid, name: '默认相册', description: '', coverId: null, createdAt: new Date().toISOString() };
        const baseId = Date.now() + 1000;
        const photos = [
            { id: baseId + 1, userId: uid, albumId: album.id, title: '默认照片 (可删除)', description: 'This is a default photo, you can delete it.', location: '*', date: 'xxxx-xx-xx', camera: '*', imageUrl: svgPh('default photo', '#667eea', '#764ba2'), tags: ['*'] }
        ];
        return { albums: [album], photos };
    }

    function getAlbumCover(album) {
        if (album.coverId) { const p = S.photos.find(x => x.id === album.coverId); if (p) return p.imageUrl; }
        return S.photos.find(p => p.albumId === album.id)?.imageUrl || svgPh(album.name, '#ccc', '#999');
    }

    // ===== 主题 =====
    function applyTheme(theme) {
        const root = document.documentElement;
        const td = THEMES[theme] || THEMES.purple;
        root.style.setProperty('--bg1', td.c1);
        root.style.setProperty('--bg2', td.c2);
        root.style.setProperty('--primary', td.c1);
        root.style.setProperty('--header', td.dark ? '#e0e0e0' : '#fff');
        td.dark ? root.setAttribute('data-theme', 'dark') : root.removeAttribute('data-theme');
    }

    function applyCustomGradient(c1, c2) {
        const root = document.documentElement;
        root.style.setProperty('--bg1', c1);
        root.style.setProperty('--bg2', c2);
        root.style.setProperty('--primary', c1);
        root.style.setProperty('--header', '#fff');
        root.removeAttribute('data-theme');
    }

    // ===== UI更新 =====
    function updateAccountUI() {
        const pro = isPro();
        $('accountNotLoggedIn').style.display = pro ? 'none' : 'block';
        $('accountLoggedIn').style.display = pro ? 'block' : 'none';

        if (pro && S.user) {
            $('accountAvatar').textContent = S.user.username.charAt(0).toUpperCase();
            $('accountName').textContent = S.user.username;
            $('accountEmail').textContent = S.user.email;
            $('accountMeta').textContent = `${t('registeredAt')}: ${new Date(S.user.registeredAt).toLocaleDateString(S.settings.lang === 'zh' ? 'zh-CN' : 'en-US')}`;
        }

        const recentSection = $('recentUsersSection');
        const recentList = $('recentUsersList');
        if (!pro && S.recentUsers.length > 0) {
            recentSection.style.display = 'block';
            recentList.innerHTML = '';
            S.recentUsers.forEach(u => {
                const item = el('div', 'user-list-item');
                item.innerHTML = `<div class="mini-avatar">${escapeHtml(u.username.charAt(0).toUpperCase())}</div>
                <div class="info"><p class="uname">${escapeHtml(u.username)}</p><p class="uemail">${escapeHtml(u.email)}</p></div>`;
                item.title = `${t('quickLoginAs')} ${escapeHtml(u.username)}`;
                item.onclick = () => quickLogin(u);
                recentList.appendChild(item);
            });
        } else {
            recentSection.style.display = 'none';
        }

        // 锁定状态：优先覆盖为 proOnly；解锁时恢复 i18n title
        document.querySelectorAll('[data-locked="true"]').forEach(el => {
            if (pro) {
                el.classList.remove('locked');
                if (el.dataset.i18nTitle) el.title = t(el.dataset.i18nTitle);
                else el.title = '';
            } else {
                el.classList.add('locked');
                el.title = t('proOnly');
            }
        });

        const userAlbums = getUserAlbums();
        $('albumLimitHint').textContent = pro ? t('unlimitedAlbums') : `${t('freeLimit')} ${MAX_ALBUMS_FREE} (${userAlbums.length})`;
    }

    // ===== 认证 =====
    function switchAuthTab(tab) {
        $('tabRegister').classList.toggle('active', tab === 'register');
        $('tabLogin').classList.toggle('active', tab === 'login');
        $('registerForm').style.display = tab === 'register' ? 'block' : 'none';
        $('loginForm').style.display = tab === 'login' ? 'block' : 'none';
        $('authTitle').textContent = tab === 'register' ? '📝 ' + t('registerTab') : '🔑 ' + t('loginTab');
    }

    function openAuth(tab = 'register') {
        $('authOverlay').style.display = 'block';
        switchAuthTab(tab);
        $('registerForm').reset(); $('loginForm').reset();
        $('rememberMe').checked = false;
        updatePasswordStrength('');
        document.querySelectorAll('#authOverlay .err-msg').forEach(e => e.classList.remove('show'));
        document.querySelectorAll('#authOverlay input').forEach(e => e.classList.remove('error'));
    }

    function updatePasswordStrength(password) {
        const score = getPasswordStrength(password);
        const bars = document.querySelectorAll('#passwordStrength .strength-bar');
        const label = $('passwordStrengthLabel');
        bars.forEach((bar, i) => {
            bar.classList.remove('active', 'weak', 'medium', 'strong');
            if (i < score) {
                bar.classList.add('active');
                if (score <= 2) bar.classList.add('weak');
                else if (score <= 3) bar.classList.add('medium');
                else bar.classList.add('strong');
            }
        });
        if (password.length === 0) label.textContent = '';
        else if (score <= 2) label.textContent = t('passwordWeak');
        else if (score <= 3) label.textContent = t('passwordMedium');
        else label.textContent = t('passwordStrong');
    }

    const registerUser = async (e) => {
        e.preventDefault();
        const username = $('regUsername').value.trim();
        const email = $('regEmail').value.trim();
        const password = $('regPassword').value;
        const confirmPassword = $('regConfirmPassword').value;
        let valid = true;

        if (username.length < 2 || username.length > 30) {
            $('regUsername').classList.add('error');
            $('usernameErr').textContent = t('usernameErr2');
            $('usernameErr').classList.add('show'); valid = false;
        } else { $('regUsername').classList.remove('error'); $('usernameErr').classList.remove('show'); }

        if (!EMAIL_REGEX.test(email)) {
            $('regEmail').classList.add('error');
            $('emailErr').textContent = t('emailErr2');
            $('emailErr').classList.add('show'); valid = false;
        } else { $('regEmail').classList.remove('error'); $('emailErr').classList.remove('show'); }

        const pwdError = getPasswordError(password);
        if (pwdError) {
            $('regPassword').classList.add('error');
            $('passwordErr').textContent = pwdError;
            $('passwordErr').classList.add('show'); valid = false;
        } else { $('regPassword').classList.remove('error'); $('passwordErr').classList.remove('show'); }

        if (password !== confirmPassword) {
            $('regConfirmPassword').classList.add('error');
            $('confirmPasswordErr').textContent = t('confirmPasswordErr2');
            $('confirmPasswordErr').classList.add('show'); valid = false;
        } else { $('regConfirmPassword').classList.remove('error'); $('confirmPasswordErr').classList.remove('show'); }

        if (!valid) return;

        const existing = await idbGet(STORES.USERS, username);
        if (existing) {
            $('regUsername').classList.add('error');
            $('usernameErr').textContent = t('usernameExists');
            $('usernameErr').classList.add('show');
            return;
        }

        showLoading();
        const salt = generateSalt();
        const passwordHash = await hashPassword(password, salt);
        S.user = { username, email, salt, passwordHash, registeredAt: new Date().toISOString() };
        await idbAdd(STORES.USERS, S.user);

        S.albums.forEach(a => { if (a.userId === 'guest') a.userId = username; });
        S.photos.forEach(p => { if (p.userId === 'guest') p.userId = username; });
        await saveAlbums();
        await savePhotos();
        await saveSession();
        S.recentUsers = await idbGetAll(STORES.USERS);
        hideLoading();
        $('authOverlay').style.display = 'none';
        updateAccountUI(); applySettings(); renderAlbums();
        toast(`🎉 ${escapeHtml(username)}!`, 'success');
    };

    const loginUser = async (e) => {
        e.preventDefault();
        const username = $('loginUsername').value.trim();
        const password = $('loginPassword').value;
        const remember = $('rememberMe').checked;
        let valid = true;

        if (!username) {
            $('loginUsername').classList.add('error');
            $('loginUsernameErr').textContent = t('enterUsername');
            $('loginUsernameErr').classList.add('show'); valid = false;
        } else { $('loginUsername').classList.remove('error'); $('loginUsernameErr').classList.remove('show'); }

        if (!password) {
            $('loginPassword').classList.add('error');
            $('loginPasswordErr').textContent = t('enterPassword');
            $('loginPasswordErr').classList.add('show'); valid = false;
        } else { $('loginPassword').classList.remove('error'); $('loginPasswordErr').classList.remove('show'); }

        if (!valid) return;

        const user = await idbGet(STORES.USERS, username);
        if (!user) {
            $('loginUsername').classList.add('error');
            $('loginUsernameErr').textContent = t('userNotFound');
            $('loginUsernameErr').classList.add('show');
            return;
        }

        showLoading();
        const inputHash = await hashPassword(password, user.salt);
        hideLoading();

        if (inputHash !== user.passwordHash) {
            $('loginPassword').classList.add('error');
            $('loginPasswordErr').textContent = t('wrongPassword');
            $('loginPasswordErr').classList.add('show');
            return;
        }

        S.user = user;
        if (remember) { await saveSession(); }
        else { await idbClear(STORES.SESSION); }
        $('authOverlay').style.display = 'none';
        updateAccountUI(); applySettings(); renderAlbums();
        toast(`👋 ${escapeHtml(username)}!`, 'success');
    };

    const quickLogin = async (user) => {
        S.user = user;
        await idbClear(STORES.SESSION);
        updateAccountUI(); applySettings(); renderAlbums();
        toast(`👋 ${escapeHtml(user.username)}! ${t('quickLoginNoSave')}`, 'success');
    };

    const logoutUser = async () => {
        S.user = null;
        if (S.settings.sort === 'custom') S.settings.sort = 'default';
        await saveSettings();
        await idbClear(STORES.SESSION);
        updateAccountUI(); applySettings(); renderAlbums(); renderLibrary(); renderAlbumDetail();
        toast(t('logout'), 'info');
    };

    // ===== 修改密码 =====
    function openChangePassword() {
        $('changePasswordOverlay').style.display = 'block';
        $('changePasswordForm').reset();
        document.querySelectorAll('#changePasswordOverlay .err-msg').forEach(e => e.classList.remove('show'));
    }

    const changePassword = async (e) => {
        e.preventDefault();
        if (!S.user) return;
        const currentPassword = $('currentPassword').value;
        const newPassword = $('newPassword').value;
        const confirmNewPassword = $('confirmNewPassword').value;
        let valid = true;

        showLoading();
        const currentHash = await hashPassword(currentPassword, S.user.salt);
        hideLoading();

        if (currentHash !== S.user.passwordHash) {
            $('currentPassword').classList.add('error');
            $('currentPasswordErr').textContent = t('currentPasswordErr2');
            $('currentPasswordErr').classList.add('show'); valid = false;
        } else { $('currentPassword').classList.remove('error'); $('currentPasswordErr').classList.remove('show'); }

        const pwdError = getPasswordError(newPassword);
        if (pwdError) {
            $('newPassword').classList.add('error');
            $('newPasswordErr').textContent = pwdError;
            $('newPasswordErr').classList.add('show'); valid = false;
        } else { $('newPassword').classList.remove('error'); $('newPasswordErr').classList.remove('show'); }

        if (newPassword !== confirmNewPassword) {
            $('confirmNewPassword').classList.add('error');
            $('confirmNewPasswordErr').textContent = t('confirmNewPasswordErr2');
            $('confirmNewPasswordErr').classList.add('show'); valid = false;
        } else { $('confirmNewPassword').classList.remove('error'); $('confirmNewPasswordErr').classList.remove('show'); }

        if (!valid) return;

        showLoading();
        const newSalt = generateSalt();
        const newHash = await hashPassword(newPassword, newSalt);
        S.user.salt = newSalt;
        S.user.passwordHash = newHash;
        await idbAdd(STORES.USERS, S.user);
        hideLoading();
        $('changePasswordOverlay').style.display = 'none';
        toast(t('saved'), 'success');
    };

    // ===== 注销账户 =====
    function showDeleteAccountConfirm() {
        const overlay = el('div', 'form-overlay');
        overlay.style.display = 'block';
        overlay.style.zIndex = '2000';
        const box = el('div', 'form-box');
        box.innerHTML = `
        <h2 style="margin-bottom:15px;color:#f44336;">⚠️ ${t('deleteAccount')}</h2>
        <p style="margin-bottom:15px;color:var(--muted);">${escapeHtml(S.user.username)}</p>
        <div class="form-group"><label>${t('email')}</label>
            <input type="email" id="deleteConfirmEmail" placeholder="xxx@xx.com">
            <div class="err-msg" id="deleteEmailErr"></div>
        </div>
        <div class="form-group"><label>${t('password')}</label>
            <input type="password" id="deleteConfirmPassword">
            <div class="err-msg" id="deletePasswordErr"></div>
        </div>
        <div class="form-actions">
            <button class="btn btn-secondary" id="cancelDeleteBtn">${t('cancel')}</button>
            <button class="btn btn-danger" id="confirmDeleteBtn">${t('confirm')}</button>
        </div>`;
        overlay.appendChild(box);
        document.body.appendChild(overlay);
        const closeModal = () => overlay.remove();
        overlay.onclick = e => { if (e.target === overlay) closeModal(); };
        $('cancelDeleteBtn').onclick = closeModal;
        $('confirmDeleteBtn').onclick = async () => {
            const emailInput = $('deleteConfirmEmail').value.trim();
            const passwordInput = $('deleteConfirmPassword').value;
            let valid = true;

            if (emailInput !== S.user.email) {
                $('deleteConfirmEmail').classList.add('error');
                $('deleteEmailErr').textContent = t('emailMismatch');
                $('deleteEmailErr').classList.add('show'); valid = false;
            }

            showLoading();
            const inputHash = await hashPassword(passwordInput, S.user.salt);
            hideLoading();

            if (inputHash !== S.user.passwordHash) {
                $('deleteConfirmPassword').classList.add('error');
                $('deletePasswordErr').textContent = t('wrongPassword');
                $('deletePasswordErr').classList.add('show'); valid = false;
            }
            if (!valid) return;

            const username = S.user.username;
            S.albums = S.albums.filter(a => a.userId !== username);
            S.photos = S.photos.filter(p => p.userId !== username);

            const albumIds = S.albums.filter(a => a.userId === username).map(a => a.id);
            Object.keys(S.settings.order).forEach(key => {
                if (albumIds.includes(Number(key))) delete S.settings.order[key];
            });

            await saveAlbums(); await savePhotos(); await saveSettings();
            await idbDelete(STORES.USERS, username);
            S.user = null;
            await idbClear(STORES.SESSION);
            if (S.settings.sort === 'custom') S.settings.sort = 'default';

            closeModal();
            updateAccountUI(); applySettings(); renderAlbums(); renderLibrary();
            toast(t('deleted'), 'info');
        };
    }

    // ===== 排序 =====
    const sortPhotos = (arr, albumId = null) => {
        const a = [...arr]; const m = S.settings.sort;
        if (m === 'custom' && albumId && isPro()) {
            const o = S.settings.order[albumId] || [];
            if (o.length) a.sort((x, y) => { const ix = o.indexOf(x.id), iy = o.indexOf(y.id); return ix === -1 ? 1 : iy === -1 ? -1 : ix - iy; });
        }
        else if (m === 'date') a.sort((x, y) => new Date(y.date) - new Date(x.date));
        else if (m === 'title') a.sort((x, y) => x.title.localeCompare(y.title));
        else if (m === 'location') a.sort((x, y) => (x.location || '').localeCompare(y.location || ''));
        else if (m === 'random') a.sort(() => Math.random() - .5);
        else a.sort((x, y) => x.id - y.id);
        return a;
    };

    // ===== 渲染 =====
    function renderAlbums() {
        const userAlbums = getUserAlbums();
        const q = $('albumSearch').value.toLowerCase();
        const list = userAlbums.filter(a => a.name.toLowerCase().includes(q));
        const grid = $('albumsGrid'); grid.innerHTML = '';
        if (!list.length) { grid.innerHTML = `<p style="text-align:center;color:#fff;grid-column:1/-1;padding:40px;">📁 ${t('noAlbums')}</p>`; return; }
        list.forEach(album => {
            const card = el('div', 'card');
            const photoCount = S.photos.filter(p => p.albumId === album.id && p.userId === album.userId).length;
            card.innerHTML = `
            <div class="card-actions">
                <button class="icon-btn cover" title="${t('setCover')}">🖼️</button>
                <button class="icon-btn edit" title="${t('edit')}">✏️</button>
                <button class="icon-btn del" title="${t('delete')}">🗑️</button>
            </div>
            <img src="${getAlbumCover(album)}" alt="${escapeHtml(album.name)}">
            <div class="card-info"><h3>${escapeHtml(album.name)}</h3><p>${photoCount} ${t('photos')}</p></div>`;
            card.querySelector('.cover').onclick = e => { e.stopPropagation(); openCoverSelect(album.id); };
            card.querySelector('.edit').onclick = e => { e.stopPropagation(); openAlbumForm(album.id); };
            card.querySelector('.del').onclick = e => { e.stopPropagation(); deleteAlbum(album.id); };
            card.querySelector('img').onclick = () => openAlbumDetail(album.id);
            card.querySelector('.card-info').onclick = () => openAlbumDetail(album.id);
            grid.appendChild(card);
        });
        updateAccountUI();
    }

    function renderLibrary() {
        const userPhotos = getUserPhotos();
        const q = $('librarySearch').value.toLowerCase();
        let list = [...userPhotos];
        if (q) list = list.filter(p => p.title.toLowerCase().includes(q) || (p.location || '').toLowerCase().includes(q) || (p.tags || []).some(tag => tag.toLowerCase().includes(q)));
        list = sortPhotos(list);
        const grid = $('libraryGrid'); grid.innerHTML = '';
        if (!list.length) { grid.innerHTML = `<p style="text-align:center;color:#fff;grid-column:1/-1;padding:40px;">📷 ${t('noPhotos')}</p>`; return; }
        renderPhotoCards(grid, list, false);
    }

    function renderAlbumDetail() {
        if (!S.currentAlbum) return;
        const uid = currentUserId();
        const q = $('albumDetailSearch').value.toLowerCase();
        let list = S.photos.filter(p => p.albumId === S.currentAlbum && p.userId === uid);
        if (q) list = list.filter(p => p.title.toLowerCase().includes(q) || (p.location || '').toLowerCase().includes(q));
        list = sortPhotos(list, S.currentAlbum);
        const grid = $('albumDetailGrid'); grid.innerHTML = '';
        if (!list.length) { grid.innerHTML = `<p style="text-align:center;color:#fff;grid-column:1/-1;padding:40px;">📷 ${t('noPhotos')}</p>`; return; }
        renderPhotoCards(grid, list, true);
    }

    function renderPhotoCards(grid, list, showDrag) {
        const canDrag = isPro() && S.settings.sort === 'custom';
        list.forEach(photo => {
            const card = el('div', 'card');
            card.draggable = showDrag && canDrag;
            card.dataset.id = photo.id;
            let info = `<h3>${escapeHtml(photo.title)}</h3>`; const det = [];
            if (S.settings.loc && photo.location) det.push(escapeHtml(photo.location));
            if (S.settings.date && photo.date) det.push(escapeHtml(photo.date));
            if (det.length) info += `<p>${det.join(' · ')}</p>`;
            card.innerHTML = `${showDrag && canDrag ? '<div class="drag-handle" title="' + t('sortCustom') + '">☰</div>' : ''}
            <div class="card-actions"><button class="icon-btn edit" title="${t('edit')}">✏️</button><button class="icon-btn del" title="${t('delete')}">🗑️</button></div>
            <img src="${photo.imageUrl}" alt="${escapeHtml(photo.title)}" loading="lazy">
            <div class="card-info">${info}</div>`;
            card.querySelector('.edit').onclick = e => { e.stopPropagation(); openPhotoForm(photo.id); };
            card.querySelector('.del').onclick = e => { e.stopPropagation(); deletePhoto(photo.id); };
            card.querySelector('img').onclick = () => openPhotoModal(photo.id);
            card.querySelector('.card-info').onclick = () => openPhotoModal(photo.id);
            if (showDrag && canDrag) {
                const h = card.querySelector('.drag-handle');
                h.addEventListener('mousedown', () => { card.draggable = true; });
                h.addEventListener('mouseup', () => { card.draggable = false; });
                card.addEventListener('dragstart', (e) => { S.dragged = +card.dataset.id; card.classList.add('dragging'); });
                card.addEventListener('dragover', (e) => { e.preventDefault(); card.classList.add('drag-over'); });
                card.addEventListener('drop', async (e) => {
                    e.preventDefault();
                    card.classList.remove('drag-over');
                    const targetId = +card.dataset.id;
                    if (S.dragged === targetId) return;
                    const uid = currentUserId();
                    const ids = S.photos.filter(p => p.albumId === S.currentAlbum && p.userId === uid).map(p => p.id);
                    const from = ids.indexOf(S.dragged), to = ids.indexOf(targetId);
                    if (from > -1 && to > -1) { ids.splice(from, 1); ids.splice(to, 0, S.dragged); S.settings.order[S.currentAlbum] = ids; await saveSettings(); renderAlbumDetail(); toast(t('sortUpdated'), 'success'); }
                });
                card.addEventListener('dragend', () => { S.dragged = null; card.classList.remove('dragging'); document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over')); });
            }
            grid.appendChild(card);
        });
    }

    // ===== 页面切换 =====
    const switchPage = name => {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        $('page-' + name).classList.add('active');
        const nb = document.querySelector(`.nav-btn[data-page="${name}"]`);
        if (nb) nb.classList.add('active');
        if (name === 'albums') renderAlbums();
        if (name === 'library') renderLibrary();
        if (name === 'albumDetail') renderAlbumDetail();
        if (name === 'settings') { updateAccountUI(); updateStorageInfo(); }
    };

    // ===== 相册操作 =====
    const openAlbumDetail = id => {
        S.currentAlbum = id;
        const a = S.albums.find(x => x.id === id);
        $('albumDetailTitle').textContent = a?.name || '';
        switchPage('albumDetail');
    };
    const openAlbumForm = (id = null) => {
        const userAlbums = getUserAlbums();
        if (!id && !isPro() && userAlbums.length >= MAX_ALBUMS_FREE) { showProLocked(); return; }
        $('editAlbumId').value = id || '';
        $('editAlbumName').value = id ? S.albums.find(a => a.id === id)?.name || '' : '';
        $('editAlbumDesc').value = id ? S.albums.find(a => a.id === id)?.description || '' : '';
        $('albumEditOverlay').style.display = 'block';
    };
    const saveAlbum = async e => {
        e.preventDefault();
        const name = $('editAlbumName').value.trim();
        if (!name) return;
        const id = $('editAlbumId').value;
        const uid = currentUserId();
        if (id) { const a = S.albums.find(x => x.id === +id); if (a) { a.name = name; a.description = $('editAlbumDesc').value.trim(); } }
        else { S.albums.push({ id: Date.now(), userId: uid, name, description: $('editAlbumDesc').value.trim(), coverId: null, createdAt: new Date().toISOString() }); }
        await saveAlbums(); renderAlbums();
        $('albumEditOverlay').style.display = 'none';
        toast(t('saved'), 'success');
    };
    const deleteAlbum = async id => {
        if (!confirm(t('confirmDeleteAlbum'))) return;
        S.albums = S.albums.filter(a => a.id !== id);
        S.photos = S.photos.filter(p => p.albumId !== id);
        delete S.settings.order[id];
        if (S.currentAlbum === id) S.currentAlbum = null;
        await saveAlbums(); await savePhotos(); await saveSettings();
        renderAlbums(); renderLibrary(); toast(t('deleted'), 'success');
    };

    // ===== 封面 =====
    function openCoverSelect(albumId) {
        S.pendingCoverAlbumId = albumId; S.selectedCoverPhotoId = null;
        const album = S.albums.find(a => a.id === albumId);
        const photos = S.photos.filter(p => p.albumId === albumId);
        const grid = $('coverSelectGrid'); grid.innerHTML = '';
        if (!photos.length) { grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:20px;">${t('noPhotos')}</p>`; }
        else photos.forEach(p => {
            const opt = el('div', 'cover-option');
            const cur = album.coverId === p.id; if (cur) S.selectedCoverPhotoId = p.id;
            opt.classList.toggle('selected', cur);
            opt.innerHTML = `<img src="${p.imageUrl}" title="${escapeHtml(p.title)}"><div class="checkmark">✓</div>`;
            opt.onclick = () => { document.querySelectorAll('.cover-option').forEach(o => o.classList.remove('selected')); opt.classList.add('selected'); S.selectedCoverPhotoId = p.id; };
            grid.appendChild(opt);
        });
        $('coverSelectOverlay').style.display = 'block';
    }
    const confirmCover = async () => {
        if (!S.pendingCoverAlbumId || !S.selectedCoverPhotoId) return;
        const album = S.albums.find(a => a.id === S.pendingCoverAlbumId);
        if (album) { album.coverId = S.selectedCoverPhotoId; await saveAlbums(); renderAlbums(); toast(t('coverUpdated'), 'success'); }
        $('coverSelectOverlay').style.display = 'none';
        S.pendingCoverAlbumId = null; S.selectedCoverPhotoId = null;
    };

    // ===== 照片操作 =====
    const openPhotoModal = id => {
        const p = S.photos.find(x => x.id === id); if (!p) return;
        S.currentPhoto = id;
        $('modalImg').src = p.imageUrl; $('modalTitle').textContent = p.title;
        $('modalDesc').textContent = p.description || '-';
        $('modalLoc').textContent = p.location || '-';
        $('modalDate').textContent = p.date || '-';
        $('modalCam').textContent = p.camera || '-';
        $('modalAlbum').textContent = S.albums.find(a => a.id === p.albumId)?.name || '-';
        $('modalTags').innerHTML = (p.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
        $('photoModal').style.display = 'block';
    };
    const openPhotoForm = id => {
        const p = S.photos.find(x => x.id === id); if (!p) return;
        $('editPhotoId').value = id; $('editTitle').value = p.title; $('editDesc').value = p.description;
        $('editLoc').value = p.location; $('editDate').value = p.date; $('editCam').value = p.camera;
        $('editTags').value = (p.tags || []).join(', ');
        const sel = $('editAlbumSelect'); sel.innerHTML = '';
        const uid = currentUserId();
        S.albums.filter(a => a.userId === uid).forEach(a => { const o = el('option'); o.value = a.id; o.textContent = a.name; if (a.id === p.albumId) o.selected = true; sel.appendChild(o); });
        $('photoEditOverlay').style.display = 'block'; $('photoModal').style.display = 'none';
    };
    const savePhoto = async e => {
        e.preventDefault();
        const p = S.photos.find(x => x.id === +$('editPhotoId').value); if (!p) return;
        p.title = $('editTitle').value.trim(); p.description = $('editDesc').value.trim();
        p.location = $('editLoc').value.trim(); p.date = $('editDate').value;
        p.camera = $('editCam').value.trim(); p.albumId = +$('editAlbumSelect').value;
        p.tags = $('editTags').value.split(',').map(tag => tag.trim()).filter(Boolean);
        await savePhotos(); renderLibrary(); renderAlbumDetail(); renderAlbums();
        $('photoEditOverlay').style.display = 'none'; toast(t('updated'), 'success');
    };
    const deletePhoto = async id => {
        if (!confirm(t('confirmDeletePhoto'))) return;
        S.photos = S.photos.filter(p => p.id !== id);
        S.albums.forEach(a => { if (a.coverId === id) a.coverId = null; });
        await savePhotos(); await saveAlbums();
        renderLibrary(); renderAlbumDetail(); renderAlbums(); toast(t('deleted'), 'success');
    };

    // ===== 导入 =====
    const importFiles = async (files) => {
        if (!S.currentAlbum) { toast(t('selectAlbumFirst'), 'error'); return; }
        const imgs = [...files].filter(f => f.type.startsWith('image/'));
        if (!imgs.length) { toast(t('noValidImages'), 'error'); return; }
        showLoading();
        try {
            const uid = currentUserId();
            const readPromises = imgs.map(f => new Promise((res, rej) => {
                const r = new FileReader();
                r.onload = ev => res({ id: Date.now() + Math.random(), userId: uid, albumId: S.currentAlbum, title: f.name.replace(/\.[^.]+$/, ''), description: '', location: '', date: new Date().toISOString().split('T')[0], camera: '', imageUrl: ev.target.result, tags: ['import'] });
                r.onerror = () => rej(new Error(`Failed: ${f.name}`));
                r.readAsDataURL(f);
            }));
            const newPhotos = await Promise.all(readPromises);
            S.photos.push(...newPhotos);
            await savePhotos();
            hideLoading();
            renderAlbumDetail(); renderLibrary(); renderAlbums();
            toast(`${newPhotos.length} ${t('photosImported')}`, 'success');
        } catch (err) { hideLoading(); toast(err.message, 'error'); }
    };

    // ===== 备份 =====
    const exportData = () => {
        if (!isPro()) { showProLocked(); return; }
        showExportOptions();
    };

    function showExportOptions() {
        const overlay = el('div', 'form-overlay');
        overlay.style.display = 'block';
        overlay.style.zIndex = '2000';
        const box = el('div', 'form-box');
        box.innerHTML = `
        <h2 style="margin-bottom:15px;">📦 ${t('exportData')}</h2>
        <p style="margin-bottom:15px;color:var(--muted);">${t('exportOptionsHint')}</p>
        <div class="form-actions" style="flex-direction:column;gap:10px;">
            <button class="btn btn-success" id="exportCurrentUser" style="width:100%;">${t('exportCurrentUser')}</button>
            <button class="btn btn-secondary" id="exportAllUsers" style="width:100%;">${t('exportAllUsers')}</button>
            <button class="btn btn-danger" id="cancelExport" style="width:100%;">${t('cancel')}</button>
        </div>`;
        overlay.appendChild(box);
        document.body.appendChild(overlay);
        const close = () => overlay.remove();
        overlay.onclick = e => { if (e.target === overlay) close(); };
        $('cancelExport').onclick = close;
        $('exportCurrentUser').onclick = () => {
            const uid = currentUserId();
            const data = {
                version: '10.1.0', scope: 'user', userId: uid,
                albums: S.albums.filter(a => a.userId === uid),
                photos: S.photos.filter(p => p.userId === uid),
                settings: S.settings
            };
            downloadJSON(data, `backup-${uid}-${new Date().toISOString().split('T')[0]}.json`);
            close();
        };
        $('exportAllUsers').onclick = () => {
            if (!confirm(t('confirmExportAll'))) return;
            const data = {
                version: '10.1.0', scope: 'all',
                albums: S.albums, photos: S.photos,
                settings: S.settings, users: S.recentUsers
            };
            downloadJSON(data, `backup-all-${new Date().toISOString().split('T')[0]}.json`);
            close();
        };
    }

    function downloadJSON(data, filename) {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const a = el('a'); a.href = URL.createObjectURL(blob); a.download = filename; a.click();
        URL.revokeObjectURL(a.href); toast(t('exportSuccess'), 'success');
    }

    const importData = (file) => {
        if (!isPro()) { showProLocked(); return; }
        const r = new FileReader();
        r.onload = async ev => {
            try {
                const d = JSON.parse(ev.target.result);
                if (!d.albums || !d.photos) { toast(t('invalidFile'), 'error'); return; }
                if (!confirm(t('confirmImport'))) return;
                showLoading();
                if (d.scope === 'user') {
                    const uid = d.userId;
                    const newAlbums = d.albums.map(a => ({ ...a, id: Date.now() + Math.random() }));
                    const albumIdMap = {};
                    d.albums.forEach((a, i) => { albumIdMap[a.id] = newAlbums[i].id; });
                    const newPhotos = d.photos.map(p => ({
                        ...p, id: Date.now() + Math.random(),
                        albumId: albumIdMap[p.albumId] || p.albumId, userId: uid
                    }));
                    S.albums.push(...newAlbums);
                    S.photos.push(...newPhotos);
                } else {
                    S.albums = d.albums; S.photos = d.photos;
                    if (d.users) { for (const u of d.users) await idbAdd(STORES.USERS, u); }
                }
                S.settings = { ...DEFAULTS, ...d.settings };
                S.currentAlbum = null;
                await saveAll();
                hideLoading();
                applySettings(); applyI18N(); renderAlbums(); renderLibrary();
                toast(t('importSuccess'), 'success');
            } catch { hideLoading(); toast(t('parseError'), 'error'); }
        };
        r.readAsText(file);
    };

    // ===== 重置 =====
    const resetAppearance = async () => {
        if (!confirm(t('confirmResetAppearance'))) return;
        const order = S.settings.order;
        const lang = S.settings.lang;
        S.settings = { ...DEFAULTS, order, lang };
        await saveSettings();
        applySettings(); renderLibrary(); renderAlbumDetail();
        toast(t('resetSuccess'), 'success');
    };

    const clearAll = async () => {
        if (!confirm(t('confirmClearAll'))) return;
        try {
            showLoading();
            await idbClear(STORES.ALBUMS);
            await idbClear(STORES.PHOTOS);
            await idbClear(STORES.SETTINGS);
            await idbClear(STORES.USERS);
            await idbClear(STORES.SESSION);
            S.albums = []; S.photos = []; S.settings = { ...DEFAULTS, order: {} };
            S.currentAlbum = null; S.currentPhoto = null; S.dragged = null;
            S.pendingCoverAlbumId = null; S.selectedCoverPhotoId = null;
            S.user = null; S.recentUsers = [];
            const d = defaultData();
            S.albums = d.albums; S.photos = d.photos;
            await saveAlbums(); await savePhotos();
            hideLoading();
            applySettings(); applyI18N(); renderAlbums(); renderLibrary(); renderAlbumDetail(); updateAccountUI();
            toast(t('cleared'), 'success');
        } catch (e) { hideLoading(); toast('Error: ' + e.message, 'error'); }
    };

    // ===== 设置 =====
    function applySettings() {
        const pro = isPro();
        if (pro && S.settings.colorTheme === 'custom') {
            applyCustomGradient(S.settings.c1 || '#667eea', S.settings.c2 || '#764ba2');
        }
        else if (!pro && S.settings.colorTheme === 'custom') {
            S.settings.colorTheme = 'purple';
            applyTheme('purple');
        }
        else applyTheme(S.settings.colorTheme);
        $('showAnimations').checked = S.settings.anim;
        $('showLocation').checked = S.settings.loc;
        $('showDate').checked = S.settings.date;
        document.querySelectorAll('.color-dot').forEach(d => d.classList.toggle('selected', d.dataset.theme === S.settings.colorTheme));
        document.querySelectorAll('.sort-btn').forEach(b => b.classList.toggle('active', b.dataset.sort === S.settings.sort));
        updateAccountUI();
        applyI18N();
    }

    // ===== 语言 =====
    function setLanguage(lang) {
        S.settings.lang = lang;
        saveSettings();
        applyI18N();
        renderAlbums();
        renderLibrary();
        renderAlbumDetail();
        updateAccountUI();
        updateStorageInfo();
        toast(t('languageSwitched'), 'success');
    }

    // ===== 初始化 =====
    async function init() {
        try {
            await openDB();
            await loadAll();
            if (!S.albums.length) { const d = defaultData(); S.albums = d.albums; S.photos = d.photos; await saveAll(); }
            applySettings();
            applyI18N();
            renderAlbums();
            updateStorageInfo();
            bindEvents();
        } catch (e) { toast('Init error: ' + e.message, 'error'); }
    }

    function bindEvents() {
        document.querySelectorAll('.nav-btn').forEach(b => b.onclick = () => switchPage(b.dataset.page));
        $('backToAlbums').onclick = () => switchPage('albums');

        // 认证
        $('settingsRegisterBtn').onclick = () => openAuth('register');
        $('settingsLoginBtn').onclick = () => openAuth('login');
        $('tabRegister').onclick = () => switchAuthTab('register');
        $('tabLogin').onclick = () => switchAuthTab('login');
        $('registerForm').onsubmit = registerUser;
        $('loginForm').onsubmit = loginUser;
        $('logoutBtn').onclick = logoutUser;
        $('deleteAccountBtn').onclick = () => { if (S.user) showDeleteAccountConfirm(); };
        $('changePasswordBtn').onclick = openChangePassword;
        $('changePasswordForm').onsubmit = changePassword;

        // 密码强度
        $('regPassword').oninput = () => updatePasswordStrength($('regPassword').value);

        // 语言
        $('langZh').onclick = () => setLanguage('zh');
        $('langEn').onclick = () => setLanguage('en');

        // 相册
        $('fabCreateAlbum').onclick = () => openAlbumForm();
        $('albumEditForm').onsubmit = saveAlbum;
        $('albumSearch').oninput = renderAlbums;

        // 照片
        $('librarySearch').oninput = renderLibrary;
        $('albumDetailSearch').oninput = renderAlbumDetail;
        $('importToAlbumBtn').onclick = () => $('fileInput').click();
        $('fileInput').onchange = e => { importFiles(e.target.files); e.target.value = ''; };
        $('photoEditForm').onsubmit = savePhoto;
        $('modalEditBtn').onclick = () => openPhotoForm(S.currentPhoto);
        $('confirmCoverBtn').onclick = confirmCover;

        // 主题
        document.querySelectorAll('.color-dot').forEach(d => d.onclick = async () => {
            S.settings.colorTheme = d.dataset.theme;
            await saveSettings();
            applySettings();
        });

        // 自定义颜色（仅PRO）
        $('applyCustomColor').onclick = async () => {
            if (!isPro()) { showProLocked(); return; }
            const c1 = $('customColor1').value;
            const c2 = $('customColor2').value;
            S.settings.colorTheme = 'custom';
            S.settings.c1 = c1;
            S.settings.c2 = c2;
            await saveSettings();
            applySettings();
            toast(t('customColorApplied'), 'success');
        };
        $('customColor1').oninput = () => { if (isPro()) $('customColorText1').value = $('customColor1').value; };
        $('customColorText1').oninput = () => { if (isPro()) { const v = $('customColorText1').value.trim(); if (/^#[0-9A-Fa-f]{6}$/.test(v)) $('customColor1').value = v; } };
        $('customColor2').oninput = () => { if (isPro()) $('customColorText2').value = $('customColor2').value; };
        $('customColorText2').oninput = () => { if (isPro()) { const v = $('customColorText2').value.trim(); if (/^#[0-9A-Fa-f]{6}$/.test(v)) $('customColor2').value = v; } };

        // 自定义颜色控件：未注册就弹提示（只弹一次）
        ['customColor1', 'customColorText1', 'customColor2', 'customColorText2'].forEach(id => {
            const inp = $(id);
            if (!inp) return;
            let notified = false;
            inp.addEventListener('mousedown', e => {
                if (!isPro()) {
                    e.preventDefault();
                    if (!notified) { notified = true; showProLocked(); setTimeout(() => notified = false, 400); }
                }
            });
            inp.addEventListener('focus', () => { if (!isPro()) inp.blur(); });
        });

        // 排序
        document.querySelectorAll('.sort-btn').forEach(b => b.onclick = async () => {
            const m = b.dataset.sort;
            if (m === 'custom' && !isPro()) { showProLocked(); return; }
            S.settings.sort = m; await saveSettings(); applySettings(); renderLibrary(); renderAlbumDetail();
        });

        // 显示
        $('showAnimations').onchange = async e => { S.settings.anim = e.target.checked; await saveSettings(); renderLibrary(); renderAlbumDetail(); };
        $('showLocation').onchange = async e => { S.settings.loc = e.target.checked; await saveSettings(); renderLibrary(); renderAlbumDetail(); };
        $('showDate').onchange = async e => { S.settings.date = e.target.checked; await saveSettings(); renderLibrary(); renderAlbumDetail(); };

        // 备份
        $('exportData').onclick = exportData;
        $('importData').onclick = () => { if (!isPro()) { showProLocked(); return; } $('importDataInput').click(); };
        $('importDataInput').onchange = e => { importData(e.target.files[0]); e.target.value = ''; };

        // 重置
        $('resetAppearance').onclick = resetAppearance;
        $('clearAllData').onclick = clearAll;

        // 关闭弹窗
        document.querySelectorAll('[data-close]').forEach(b => b.onclick = () => { $(b.dataset.close).style.display = 'none'; });
        document.querySelectorAll('.modal-overlay,.form-overlay').forEach(o => o.onclick = e => { if (e.target === o) o.style.display = 'none'; });
        document.onkeydown = e => {
            if (e.key === 'Escape') document.querySelectorAll('.modal-overlay,.form-overlay').forEach(o => o.style.display = 'none');
            if (e.ctrlKey && e.key === 'n') { e.preventDefault(); openAlbumForm(); }
            if (e.ctrlKey && e.key === 'i') { e.preventDefault(); if (S.currentAlbum) { $('fileInput').click(); } }
        };

        // 拖拽上传
        document.ondragover = e => e.preventDefault();
        document.ondrop = e => { e.preventDefault(); if (!e.target.closest('.card') && S.currentAlbum) importFiles(e.dataTransfer.files); };

        // 实时验证
        ['regUsername', 'regEmail', 'regPassword', 'regConfirmPassword', 'loginUsername', 'loginPassword'].forEach(id => {
            $(id).oninput = () => { $(id).classList.remove('error'); document.querySelector(`#${id}Err`)?.classList.remove('show'); };
        });
    }

    document.addEventListener('DOMContentLoaded', init);
})();