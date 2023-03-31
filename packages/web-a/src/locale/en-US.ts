import localeLogin from '@/features/login/locale/en-US';
import localeSuccess from '@/features/result/success/locale/en-US';
import localeError from '@/features/result/error/locale/en-US';
import localeUserInfo from '@/features/user/info/locale/en-US';
import localeUserSetting from '@/features/user/setting/locale/en-US';
import locale403 from '@/features/exception/403/locale/en-US';
import locale404 from '@/features/exception/404/locale/en-US';
import locale500 from '@/features/exception/500/locale/en-US';

/** simple end */
import localeSettings from './en-US/settings';

export default {
    'menu.result': 'Result',
    'menu.exception': 'Exception',
    'menu.user': 'User Center',
    'menu.arcoWebsite': 'Arco Design',
    'navbar.action.locale': 'Switch to English',
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
