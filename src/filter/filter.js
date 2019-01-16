import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
import { websiteStatus } from './status';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

/* 据当前时间多久之前 */
function timeAgo(time) {
  const fromNow = dayjs().to(dayjs(time)).replace(' ', '');

  return fromNow;
}

/* 格式化时间取出对应的格式 */
function timeFormat(time, label = 'YYYY-MM-DD HH:MM:SS') {
  return dayjs(time).format(label);
}

/* 显示 */
function chooseWebSite(status) {
  return websiteStatus[status];
}

export {
  timeAgo,
  timeFormat,
  chooseWebSite
};
