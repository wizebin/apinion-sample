import { makeEndpoint } from 'apinion';
import moment from 'moment';

export default makeEndpoint({ name: 'getAvailability' }, () => {
  const today = moment();
  const result = [];

  for (let dex = 0; dex < 10; dex += 1) {
    result.push({ date: today.clone().add(dex, 'days').format('YYYY-MM-DD'), slots: [12, 18, 21] });
  }
  return result;
});
