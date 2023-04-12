const timeagoMap = {
  year: "year",
  month: "month",
  day: "day",
  hour: "hour",
  minute: "minute",
  second: "second",
};

export default function timeAgo(date: string) {
  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneMonth = oneDay * 30;
  const oneYear = oneDay * 365;

  let isNeedCheck = true;
  let timeago = { key: "year", value: 0 };
  let leftTime = new Date().getTime() - new Date(date).getTime();

  const year = Math.floor(leftTime / oneYear);
  leftTime = leftTime % oneYear;
  if (year !== 0 && isNeedCheck) {
    timeago.key = timeagoMap.year;
    timeago.value = year;
    isNeedCheck = false;
  }

  const month = Math.floor(leftTime / oneMonth);
  leftTime = leftTime % oneMonth;
  if (month !== 0 && isNeedCheck) {
    timeago.key = timeagoMap.month;
    timeago.value = month;
    isNeedCheck = false;
  }

  const day = Math.floor(leftTime / oneDay);
  leftTime = leftTime % oneDay;
  if (day !== 0 && isNeedCheck) {
    timeago.key = timeagoMap.day;
    timeago.value = day;
    isNeedCheck = false;
  }

  const hour = Math.floor(leftTime / oneHour);
  leftTime = leftTime % oneHour;
  if (hour !== 0 && isNeedCheck) {
    timeago.key = timeagoMap.hour;
    timeago.value = hour;
    isNeedCheck = false;
  }

  const minute = Math.floor(leftTime / oneMinute);
  leftTime = leftTime % oneMinute;
  if (minute !== 0 && isNeedCheck) {
    timeago.key = timeagoMap.minute;
    timeago.value = minute;
    isNeedCheck = false;
  }

  const second = Math.floor(leftTime / oneSecond);
  if (second !== 0 && isNeedCheck) {
    timeago.key = timeagoMap.second;
    timeago.value = second;
    isNeedCheck = false;
  }

  return `${timeago.value} ${timeago.key}${timeago.value > 1 ? "s" : ""} ago`;
}
