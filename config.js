// 配置管理
const CONFIG_KEY = 'questionnaire_links';

// 默认配置
const DEFAULT_CONFIG = {
    executiveLink: 'https://v.wjx.cn/vm/tTSo4zA.aspx#',
    employeeLink: 'https://v.wjx.cn/vm/QZCzMPc.aspx#'
};

// 获取配置
function getConfig() {
    try {
        const saved = localStorage.getItem(CONFIG_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error('读取配置失败:', e);
    }
    return DEFAULT_CONFIG;
}

// 保存配置
function saveConfig(executiveLink, employeeLink) {
    const config = {
        executiveLink: executiveLink,
        employeeLink: employeeLink
    };
    try {
        localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
        return true;
    } catch (e) {
        console.error('保存配置失败:', e);
        return false;
    }
}
