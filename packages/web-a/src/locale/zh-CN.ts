import localeLogin from '@/features/login/locale/zh-CN';
import localeSuccess from '@/features/result/success/locale/zh-CN';
import localeError from '@/features/result/error/locale/zh-CN';
import localeUserInfo from '@/features/user/info/locale/zh-CN';
import localeUserSetting from '@/features/user/setting/locale/zh-CN';
import locale403 from '@/features/exception/403/locale/zh-CN';
import locale404 from '@/features/exception/404/locale/zh-CN';
import locale500 from '@/features/exception/500/locale/zh-CN';

/** simple end */
import localeSettings from './zh-CN/settings';

export default {
    'menu.result': '结果页',
    'menu.exception': '异常页',
    'menu.user': '个人中心',
    'menu.arcoWebsite': 'Arco Design',
    'navbar.action.locale': '切换为中文',
    ...localeSettings,
    ...localeLogin,
    /** simple */
    ...localeSuccess,
    ...localeError,
    ...locale403,
    ...locale404,
    ...locale500,
    ...localeUserInfo,
    ...localeUserSetting,
    /** simple end */
};
