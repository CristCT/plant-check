import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

const LOCALES = {
  'en-US': enUS,
  'es-CL': es,
};

const formatTime = (dateString, locale = 'en-US') => {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }

    return format(date, 'MM/dd/yyyy hh:mm:ss a', {
      locale: LOCALES[locale] || enUS,
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
};

export { formatTime };
